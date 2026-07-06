---
title: IC8 - Formal Modelling Engine
sidebar_position: 1
---

## IC8 - Formal Modelling Engine

**Component metadata:** **ID:** IC8 | **Name:** Formal Modelling Engine | **Area:** Modelling | **Partner:** QUB | **Task:** T5.1 | **TRL:** TBD

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

The Formal Modelling Engine is responsible for creating the appropriate model representation of each pilot use case. These customized modular dynamic models incorporate intent-specific infrastructure subgraphs extracted from the KG representation of manufacturing assets and capabilities and represent the available manufacturing providers that satisfy customer intents, necessary AI-based predictions of asset availability or demand fluctuation and asset or capability correlations, and Zero-X specifications such as the quantification and evaluation of circularity and sustainability aspects. All the parameters are taken into consideration by an automated pipeline employed to construct the corresponding formal model by determining its structure or formulation, such as DES, Flow Networks, MILP formulations, or rule-based modeling, and tailoring it to the subsequent decision-making task or optimization algorithm leveraged on top of it. Consequently, this component dynamically constructs models that enable the description of system behaviours, resource interactions, timing aspects, and control logic.

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
