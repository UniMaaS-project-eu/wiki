---
title: IC9 - Use Case Model
sidebar_position: 2
---

## IC9 - Use Case Model

**Component metadata:** **ID:** IC9 | **Area:** Modelling | **Partner:** QUB | **Task:** T5.1

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

The Use Case Model is a containerised instance of the pilot-specific model produced by the Formal Modelling Engine. It is delivered as a Docker container that instantiates the respective model for each pilot based on the input provided by the Formal Modelling Engine, so that the formal representation of every use case can be executed in isolation per pilot.

## Integration Context

Describe which UniMaaS components this component integrates with, including verbal inputs and outputs.

## OpenAPI Specs / API Documentation

Where applicable, provide:

- Repository `openapi.yaml`: TBD
- Swagger UI: TBD

Recommended approach:

- Keep `docs/openapi.yaml` in the component repository.
- Copy `docs/index.html` from `UniMaaS-project-eu/openapi-swagger-pages-template`.
- Enable GitHub Pages from `main` branch, `/docs` folder.

If the component does not expose an API, state that clearly.

## Architecture of the Component

TBD

## Data Models

TBD

## Deployment Notes

TBD

## Other

TBD
