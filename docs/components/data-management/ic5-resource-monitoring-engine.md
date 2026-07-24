---
title: IC5 - Resource Monitoring Engine
sidebar_position: 5
---

**Component metadata:** **ID:** IC5 | **Name:** Resource Monitoring Engine | **Area:** Data Management | **Partner:** NTUA | **Task:** T4.2 | **TRL:** TBD


## Description of Component

The Cloud-based Resource Monitoring Engine collects real-time Industrial Internet of Things (IIoT) and time-series data from manufacturing assets and resources to enable continuous status monitoring and analysis. It is responsible for enabling the monitoring of manufacturing resources belonging to the Physical Smart Manufacturing layer. Besides monitoring, it provides an interface between the IIoT layer and the UniMaaS platform, supporting core functionalities not only of the Data Management Suite but also of components in the Modelling and the Decision-Making Suite. Such real-time properties may concern the utilization status of assets under operational use, metrics such as temperature and humidity of devices central to the manufacturing process, or GPS location and lifecycle properties of logistic and transportational assets.

## Integration Context

Describe how the component connects with the rest of the platform.

- **IC5 → IC1 ( Resource Monitoring Engine → UniMaaS EDC Connector )**: The Resource Monitoring Engine is handled as another dataspace participant connected in the dataspace via the EDC Connector. **Interface**: Translation mechanism from AAS to MSC-Ontology RDF dataset. **Data Format**: RDF serialization formats (TTL, NT or JSON-LD). **Status**: Under developement.

- **IC5 → IC6 ( Resource Monitoring Engine → IAM \& Data Governanace )**: Provision of a security mechanism between the physical smart manufacturing layer and the Virtual Object (VO) layer. **Interface**: REST API. **Data Format**: SIOP Requests, Verifiable Presentations. **Status**: Under review.

- **IC5 → IC7 ( Resource Monitoring Engine → DPP Infrastructure )**: The Resource Monitoring Engine propagates monitoring information (e.g., lifecycle property updates) towards the DPP. **Interface**: Apache Kafka. **Data Format**: NGSI-LD. **Status**: Under review.

- **IC5 → IC8 ( Resource Monitoring Engine → Formal Modelling Engine )**: The Formal Modelling Engine requests the monitored real-time information or status of physical manufacturing layer assets  to accordingly create or parameterize the model. **Interface**: REST-API of AAS BaSyx. **Data Format**: JSON. **Status**: Planned.

- **IC5 → IC14 ( Resource Monitoring Engine → AI-Assisted DT )**: The AI-Assisted Digital Twin requests the monitored real-time information or status of physical manufacturing layer assets to accordingly update the current state of the Digital Twin in real time. **Interface**: Apache Kafka. **Data Format**: JSON. **Status**: Planned.

- **IC5 → IC17 ( Resource Monitoring Engine → Core Integration Platform )**: The Resource Monitoring Engine exposes information towards the dashboard to visualize monitoring or current status of assets residing in the physical manufacturing layer. **Interface**: REST API. **Data Format**: JSON. **Status**: Planned.


## OpenAPI Specs / API Documentation

The Cloud-based Resource Monitoring Engine does not expose a dedicated OpenAPI specification at the component level. Instead, it exposes functionality through:

- Eclipse BaSyx AAS Repository REST API: The BaSyx AAS environment exposes REST APIs for querying and updating Asset Administration Shells and submodels. Full API documentation is available at the BaSyx repository endpoint (port 8081). The API supports standard HTTP GET, POST, PUT, PATCH operations for AAS shell descriptors and submodel elements.
- Apache Kafka Topic-based Interface: Property updates are published to per-VO Kafka topics in NGSI-LD or JSON format. 

For future development:

- Keep `docs/openapi.yaml` in the component repository.
- Copy `docs/index.html` from `UniMaaS-project-eu/openapi-swagger-pages-template`.
- Enable GitHub Pages from `main` branch, `/docs` folder.


## Architecture of the Component

The Cloud-based Resource Monitoring Engine is designed and implemented as a modular and extensible monitoring layer that can support both single-participant and multi-participant MaaS scenarios:
- Single-participant case: Multiple physical assets are virtualized, monitored and represented within the UniMaaS Cloud Platform, all belonging to a single manufacturing stakeholder. All assets are represented and hosted in a single BaSyx instance.
- Multi-participant case: Multiple assets belonging to different stakeholders are monitored independently, each with a separate BaSyx instance representing only their own assets. All assets from heterogeneous participants are exposed simultaneously to the UniMaaS DMS through common interfaces, semantic structures, and dataspace-compliant mechanisms.


### Layered Architecture


![drawing](T4.2Architecture.png) 

The lowest layer consists of heterogeneous devices, systems, and assets central to MaaS operations (e.g. IIoT sensors, actuators, manufacturing equipment, logistic and transportation assets exposing location or lifecycle information, Manufacturing Execution Systems (MES), Enterprise Resource Planning Systems (ERPs)) This layer produces data using heterogeneous communication protocols (MQTT, HTTP, CoAP, OPC UA) and proprietary interfaces, which the VO Layer abstracts into unified representations.

**2. Virtual Object (VO) Layer**

The Virtual Object is the entry point of the Cloud-based Resource Monitoring Engine. The VO software stack instantiates the digital counterpart that virtually represents a physical asset and directly communicates necessary information towards the UniMaaS Cloud Platform. Based on the W3C Web of Things (WoT) standards and deployed as a lightweight software stack on edge or cloud infrastructures, each VO provides three main types of interactions:

- **Properties:** Correspond to the observable state of the represented physical counterpart (e.g., sensor measurements, production metrics, lifecycle attributes). VOs may subscribe to property updates and define handlers to trigger workflows in near real time.
- **Events:** Emitted when changes or updates occur (e.g., property changes, threshold exceedances, availability status changes, new lifecycle observations). VOs may define event handlers to trigger workflows in response.
- **Actions:** Operations that can be invoked on the asset or its virtual counterpart by other components.

VOs address three main challenges:
- Protocol interoperability for IIoT devices (MQTT, HTTP, CoAP, OPC UA)
- Trusted communication through security mechanisms for authorization/authentication
- Extending functionalities of resource-constrained IIoT devices with data manipulation, storage, self-management, and semantic descriptions

A Composite Virtual Object (cVO) is a software entity that manages information from multiple VOs. The cVO interacts with each VO through interoperable APIs, processes and stores collected information (e.g., InfluxDB for time-series data), and declares properties, events, and actions aggregating lower-level VO information.

**3. Asset Administration Shell (AAS) Layer**

The AAS layer provides a standardized Industry 4.0 representation of monitored manufacturing resources. Each relevant VO or cVO is represented as an AAS instance and registered in the Eclipse BaSyx platform. AAS representations are aligned with the defined UniMaaS MSC Ontology. An AAS template is specified for each ontology entity:
- A manufacturing resource is represented as an AAS
- A monitored property of this resource is represented as a submodel element within the AAS
- Relationships between resources are represented through AAS references, preserving relationships between ontology entities

**4. Apache Kafka Event Streaming Layer**

Kafka serves as the event streaming middleware, providing graceful separation between the VO/cVO abstraction layer and platform services that consume the data:

- **Producers:** VOs and cVOs publish property-update events to relevant Kafka topics
- **Consumers:** Platform services (e.g., AAS synchronization, DPP subscribers, AI modules) subscribe to Kafka topics
- **Topic Structure:** Per-VO topic structure dedicates one Kafka topic to each individual VO/cVO, enabling clear separation of data streams and simplified subscription management

Kafka decouples data-producing components from data-consuming services, ensuring that consumer services are synchronized in real time with physical layer property updates. The AAS consumer service, triggered by a VO property update, performs PUT/POST requests to the BaSyx AAS endpoint, ensuring that AAS assets always capture up-to-date values for monitored properties.

**5. Time-Series Data Persistence Layer (InfluxDB)**

InfluxDB is a time-series database integrated with the VO software stack for storing historical monitoring data. Once enabled, VOs and cVOs write selected measurements to this database, facilitating subsequent processing and manipulation to assist AI-based Predictors and AI-assisted Digital-Twins.

### Typical Operation Flow

A typical flow of operations in the Cloud-based Resource Monitoring Engine consists of the following steps:

1. An entity at the Physical Smart Manufacturing Layer sends a new measurement to the corresponding VO
2. The VO updates its internal property value according to the new measurement
3. The VO publishes a property-update event to the relevant Kafka topic
4. The AAS consumer, subscribed to this Kafka topic:
   - Receives and reads this event
   - Identifies the AAS instance and submodel element corresponding to the updated VO property
   - Performs a REST API request to the BaSyx exposed endpoint
5. The AAS repository updates the property value accordingly
6. A translation mechanism maps AAS-conformant structures to RDF-compatible data representations aligned with the MSC Ontology
7. The produced RDF dataset is propagated towards the Knowledge Graph via the EDC connector and Digital Thread
8. (Optionally) InfluxDB persists time-series measurements for historical analysis and AI model training

## Data Models

HTTP requests between VO and DPP and between the kafka-basyx bridge and the BaSyx AAS

### Virtual Object Representation (W3C WoT)

VOs expose their capabilities through W3C Web of Things Thing Descriptions (TD), declaring:
- **Properties:** Observable state with human-readable names, semantic types, and data schemas
- **Events:** Property change notifications with payloads
- **Actions:** Operations with input/output schemas
- **Security Schemes:** Authentication and authorization mechanisms

### Asset Administration Shell (AAS) Structure

AAS entities follow the standardized Industry 4.0 model, structured as:
- **AAS Shell:** Represents a manufacturing resource (e.g., a returnable transport container)
- **Submodels:** Organized collections of properties and relationships within the AAS (e.g., `DigitalNameplate`, `ProductLifecycle`)
- **Submodel Elements:** Individual properties, collections, or references within a submodel
- **Semantics Alignment:** Each AAS element includes `semanticId` references aligning with MSC Ontology IRIs

### Kafka Event Payloads

Property update events published to Kafka topics include:
- **property:** Updated property identifier
- **value:** New property value
- **publisher:** VO/cVO identifier
- **timestamp:** Event timestamp (ISO 8601)
- **additionalFields:** Pilot-specific data

### RDF/MSC Ontology Representation

The AAS-to-RDF translation component produces RDF triples aligned with the UniMaaS MSC Ontology. The core mappings are:
- **Resources:** Represented as `mso:Resource` individuals with type-specific subclasses
- **Relationships:** Represented as RDF object properties (e.g., `mso:siteHasResource`, `mso:locatedAt`)

### Time-Series Data (InfluxDB)

Time-series measurements are persisted in InfluxDB with:
- **Measurement:** VO identifier and property name (e.g., `vo-magnum:temperature`)
- **Tags:** Metadata (e.g., `vo_id=vo-magnum`, `property=temperature`, `unit=celsius`)
- **Fields:** Numeric or string values
- **Timestamp:** UNIX nanosecond precision

## Deployment Notes

### [Repository link for the Cloud-based Resource Monitoring Engine](https://github.com/UniMaaS-project-eu/T4.2/tree/201abadeba0f531649bb80f6466d835685f7478f)

### Programming Languages and Frameworks

- **Virtual Objects VO-WoT:** Python (wotpy2 runtime), YAML configuration
- **Kafka-BaSyx Bridge:** Python 3.11+
- **Apache Kafka:** Kafka-Python 4.2.0
- **Eclipse BaSyx Components:** 2.0.0-SNAPSHOT
- **Time-Series Processing:** InfluxDB 2.6.0

### Docker Deployment

The system is fully containerized and currently it includes the following Docker Compose stacks:

- Virtual Objects Stack: Deploys three device simulations and their corresponding VOs, plus a Composite VO.
- Apache Kafka Stack: Deploys the following Kafka services: `kafka`, `kafka-ui`, `kafka-acl-init`
- BaSyx Stack: Deploys the following services:
`aas-env`, `aas-registry`, `sm-registry`, `aas-discovery`, `mongo`, `influxdb`, `telegraf`, `aas-web-ui`, `dashboard-api`, `kafka-aas-bridge`

### Launching the System

```bash
docker-compose up -d
```
Run the above command is each of the following directories:
- Step 1: Start Kafka Stack
- Step 2: Start BaSyx Stack
- Step 3: Start Virtual Objects Stack
(Ensure both `basyx-net` and `kafka-net` external networks exist) 

**External Dependencies:**
- Docker and Docker Compose
- Pre-created Docker networks: `basyx-net`, `kafka-net`
