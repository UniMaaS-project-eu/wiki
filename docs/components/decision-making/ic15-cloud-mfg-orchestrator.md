---
title: IC15 - Cloud Mfg Orchestrator
sidebar_position: 3
---

**Component metadata:** **ID:** IC15 | **Name:** Cloud Mfg Orchestrator | **Area:** Decision-Making | **Partner:** NTUA | **Task:** T6.3 | **TRL:** TBD
{/*
<!--
The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.
-->
*/}
## Description of Component

Coordinates platform workflows and virtualized resources using cloud-native technologies, such as container orchestration and workflow execution engines, to execute requests and integrate with external ERP systems. Moreover, the Cloud Manufacturing Orchestrator coordinates the platform workflows for all the UniMaaS functionalities based on triggering events through the UniMaaS dashboard or any other component across the UniMaaS suites.

## Integration Context
- **IC15 → IC17 (  Cloud Mfg Orchestrator → Core Integration Platform )**: The Core Integration Platform requests the current execution state of the workflows deployed by the Cloud Mfg Orchestrator, in order to be displayed in the Real-time UI.  **Interface:** REST API, JSON **Status:** In Progress

{/*
<!--
Describe how the component connects with the rest of the platform.
Suggested points:

- Input dependencies from other components.
- Output dependencies to other components.
- Communication protocols and interfaces.
- Main exchanged data, events, files, or API calls.
-->
*/}
## OpenAPI Specs / API Documentation
D7.1 lists the component's integration points with Interface Type "REST API", Data Format "JSON" and  Specification/Schema Reference "Kubernetes CRD schema"; the specifications themselves are not yet available.

{/*
<!--
Where applicable, provide:

- Repository OpenAPI spec: TBD
- Swagger UI: TBD

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
*/}
## Data Models
This component is currently under development.

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
