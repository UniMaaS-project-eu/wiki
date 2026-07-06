---
title: IC7 - DPP Infrastructure
sidebar_position: 7
---

## IC7 - DPP Infrastructure

**Component metadata:** **ID:** IC7 | **Name:** DPP Infrastructure | **Area:** Data Management | **Partner:** ODINS | **Task:** T4.4 | **TRL:** TBD

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

Provides a Digital Product Passport (DPP) framework for recording, managing, and retrieving structured information about industrial products and assets throughout their lifecycle. Its goal is to support traceability, transparency, circularity, and the reuse of relevant information, in line with European initiatives related to the ESPR and digital product passports. The solution is based on an interoperable representation using NGSI-LD, managed through Orion-LD, and is complemented by a blockchain layer focused exclusively on traceability and auditability. In this way, the DPP enables up-to-date information on products to be maintained and verifiable evidence of their evolution within the UniMaaS ecosystem to be preserved.

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
