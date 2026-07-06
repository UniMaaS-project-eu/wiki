---
title: IC9 - Use Case Model
sidebar_position: 2
---

## IC9 - Use Case Model

**Component metadata:** **ID:** IC9 | **Name:** Use Case Model | **Area:** Modelling | **Partner:** QUB | **Task:** T5.1 | **TRL:** TBD

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

The Use Case Model is a containerised instance of the pilot-specific model produced by the Formal Modelling Engine. It is delivered as a Docker container that instantiates the respective model for each pilot based on the input provided by the Formal Modelling Engine, so that the formal representation of every use case can be executed in isolation per pilot.

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
