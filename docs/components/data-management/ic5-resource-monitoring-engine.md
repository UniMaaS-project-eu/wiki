---
title: IC5 - Resource Monitoring Engine
sidebar_position: 5
---

**Component metadata:** **ID:** IC5 | **Name:** Resource Monitoring Engine | **Area:** Data Management | **Partner:** NTUA | **Task:** T4.2 | **TRL:** TBD

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

The Cloud-based Resource Monitoring Engine collects real-time Industrial Internet of Things (IIoT) and time-series data from manufacturing assets and resources to enable continuous status monitoring and analysis. It is responsible for enabling the monitoring of manufacturing resources belonging to the Physical Smart Manufacturing layer. Besides monitoring, it provides an interface between the IIoT layer and the UniMaaS platform, supporting core functionalities not only of the Data Management Suite but also of components in the Modelling and the Decision-Making Suite. Such real-time properties may concern the utilization status of assets under operational use, metrics such as temperature and humidity of devices central to the manufacturing process, or GPS location and lifecycle properties of logistic and transportational assets.

## Integration Context

Describe how the component connects with the rest of the platform.

Suggested points:

- Input dependencies from other components.
- Output dependencies to other components.
- Communication protocols and interfaces.
- Main exchanged data, events, files, or API calls.

## OpenAPI Specs / API Documentation

Where applicable, provide:

- Repository OpenAPI spec: TBD
- Swagger UI: TBD

Recommended approach:

- Keep `docs/openapi.yaml` in the component repository.
- Copy `docs/index.html` from `UniMaaS-project-eu/openapi-swagger-pages-template`.
- Enable GitHub Pages from `main` branch, `/docs` folder.

If the component does not expose an API, state that clearly.

## Architecture of the Component

Describe the internal architecture of the component.

Suggested points:

- Main services/modules.
- Architecture mapping to the UniMaaS platform.
- External systems used.
- Diagram, if available.

## Data Models

Describe the main data structures handled by the component.

Suggested points:

- Request/response models.
- RDF/ontology terms.
- Database entities.
- Event/message payloads.
- Files, schemas, or exchanged datasets.

## Deployment Notes

Describe how the component is built, configured, deployed, and operated.

Suggested points:

- Existing codebase/repository link.
- Programming languages and frameworks.
- Dockerized: Yes/No.
- State if a Dockerfile, Docker Compose, Helm, Kubernetes, or other deployment asset exists.
- Environment dependencies, containers, systems, databases, queues, or external services.
- Required environment variables or configuration files.
- Minimum hardware/runtime requirements, if relevant.

## Other

Add notes, comments, references, known limitations, open questions, or contact details.
