---
title: IC14 - AI-Assisted Digital Twin
sidebar_position: 2
---

**Component metadata:** **ID:** IC14 | **Name:** AI-Assisted Digital Twin | **Area:** Decision-Making | **Partner:** NTUA | **Task:** T6.2 | **TRL:** TBD

{/*
<!--
The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.
--> 
*/}

## Description of Component

The AI-Assisted Digital Twin validates decisions by simulating manufacturing processes and supply chains using real-time data and AI. It assesses the feasibility, risks and performance of candidate decisions before they are executed, supporting the short, operational decision loop of the platform.

## Integration Context
- **IC5 → IC14 ( Resource Monitoring Engine → AI-Assisted DT )**: The AI-Assisted Digital Twin requests the monitored real-time information or status of physical manufacturing layer assets to accordingly update the current state of the Digital Twin in real time.
**Interface:** Apache Kafka, JSON. **Status:** Planned.
  
- **IC10 → IC14 ( AI Demand & Asset Predictor → AI-Assisted DT )**: The AI Demand & Asset Predictor continuously feeds predictive operational intelligence into the AI-Assisted Digital Twin to maintain an accurate and adaptive virtual representation of the UniMaaS manufacturing ecosystem. This enables the Digital Twin to simulate future system states, evaluate resource utilization scenarios, anticipate anomalies, and support predictive what-if analyses for manufacturing optimization and resilience assessment.
**Interface:** REST API, JSON. **Status:** In Progress.

- **IC14 → IC12 ( AI-Assisted DT → Zero-X Evaluation Engine )**: The simulation results of the AI-Assisted Digital Twin are propagated to the Zero-X Evaluation Engine verification or evaluation of Zero-X model properties.
**Interface:** REST API, JSON. **Status:** Not started.

- **IC14 → IC13 ( AI-Assisted DT → Planning and Scheduling Manager )**: In cases when the simulation results show infeasibilities of the current policy, the Planning and Scheduling Manager needs to be triggered for re-evaluation of the planning and scheduling decisions.
**Interface:** REST API, JSON. **Status:** Not started.
  
- **IC13 → IC14 ( Planning and Scheduling Manager → AI-Assisted DT )**: Allow the DT to simulate or assist in a decision-making operation or an optimization algorithm performed by the Planning and Scheduling Manager.
**Interface:** REST API, JSON. **Status:** Not started.

- **IC14 → IC16 (AI-Assisted DT → Circularity & Sustainability Optimizer (CSO))**: The Digital Twin pushes, periodically or event-based, a structured dynamic state of the system combining resource monitoring data, telemetry/historical data, and asset predictions. With this data the CSO evaluates the current "health" of the circularity. **Interface:** REST API, JSON. **Status:** Not started.
- **IC16 → IC14 (CSO  → AI-Assisted Digital Twin)**: Bi-directional exchange completing the loop above. The CSO returns a Circularity Health Index, including scores for material efficiency, remaining useful life (RUL) optimization, and waste-reduction potential. Per D6.1 (Section 6.2), the optimizer also propagates long-term sustainability objectives and alternative configuration profiles (e.g., supply chain topology modifications, resource re-allocations) back to the Digital Twin layer, which simulates these scenarios and returns an objective configuration ranking to guide final system adaptation. **Interface:** REST API, JSON. **Status:** Not started.

{/*
<!---
Describe how the component connects with the rest of the platform.

Suggested points:

- Input dependencies from other components.
- Output dependencies to other components.
- Communication protocols and interfaces.
- Main exchanged data, events, files, or API calls.
--> 
*/}
## OpenAPI Specs / API Documentation
D7.1 lists the component's integration points with Interface Type "REST API" and Data Format "JSON"; the Specification/Schema Reference and the specifications themselves are not yet available.

{/*
<!--Where applicable, provide:

- Repository OpenAPI spec: TBD
- Swagger UI: TBD
-->
/*} 
{/*
<!--
Recommended approach:

- Keep `docs/openapi.yaml` in the component repository.
- Copy `docs/index.html` from `UniMaaS-project-eu/openapi-swagger-pages-template`.
- Enable GitHub Pages from `main` branch, `/docs` folder.

If the component does not expose an API, state that clearly.
-->
*/}
## Architecture of the Component
This component is currently under development.

Documentation of its internal architecture, including its main modules, integration with the UniMaaS platform, external dependencies, and architectural diagrams, will be added once the design has been finalized.

{/*
<!--
Describe the internal architecture of the component.

Suggested points:

- Main services/modules.
- Architecture mapping to the UniMaaS platform.
- External systems used.
- Diagram, if available.
-->
/*}
## Data Models
Since Digital Twins are use-case dependent, Data Models are different based on the specific Digital-Twin they concern.
Based on the documentation, data exchange between the Digital Twins and other platform compononets is mainly based on JSON files. However, other data structures may be used by this component, including for example python pickle (.pkl) files for storage and reusability of implemented models.

Documentation of the final data models, including request and response structures, event payloads, and exchanged datasets, will be added once the implementation has been finalized.

{/*
<!--
Describe the main data structures handled by the component.

Suggested points:

- Request/response models.
- RDF/ontology terms.
- Database entities.
- Event/message payloads.
- Files, schemas, or exchanged datasets.
-->
*/}
## Deployment Notes
This component is currently under development.

Based on the current progress, the component will be implemented in Python, Dockerized and setup as a serverless job to be used in workflows managed by the [Cloud Mfg Orchestrator](ic15-cloud-mfg-orchestrator).

Documentation of the deployment process, including build and configuration requirements, supported deployment methods, runtime dependencies, environment variables, and operational considerations, will be added once once the implementation has been finalized and the component is ready for deployment.

{/*
<!--
Describe how the component is built, configured, deployed, and operated.

Suggested points:

- Existing codebase/repository link.
- Programming languages and frameworks.
- Dockerized: Yes/No.
- State if a Dockerfile, Docker Compose, Helm, Kubernetes, or other deployment asset exists.
- Environment dependencies, containers, systems, databases, queues, or external services.
- Required environment variables or configuration files.
- Minimum hardware/runtime requirements, if relevant.
-->
*/}

{/*
<!--
## Other

Add notes, comments, references, known limitations, open questions, or contact details.
-->
*/}

