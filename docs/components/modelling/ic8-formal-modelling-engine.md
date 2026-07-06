---
title: IC8 - Formal Modelling Engine
sidebar_position: 1
---

## IC8 - Formal Modelling Engine

**Component metadata:** **ID:** IC8 | **Area:** Modelling | **Partner:** QUB | **Task:** T5.1

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

The Formal Modelling Engine is responsible for creating the appropriate model representation of each pilot use case. These customized modular dynamic models incorporate intent-specific infrastructure subgraphs extracted from the KG representation of manufacturing assets and capabilities and represent the available manufacturing providers that satisfy customer intents, necessary AI-based predictions of asset availability or demand fluctuation and asset or capability correlations, and Zero-X specifications such as the quantification and evaluation of circularity and sustainability aspects. All the parameters are taken into consideration by an automated pipeline employed to construct the corresponding formal model by determining its structure or formulation, such as DES, Flow Networks, MILP formulations, or rule-based modeling, and tailoring it to the subsequent decision-making task or optimization algorithm leveraged on top of it. Consequently, this component dynamically constructs models that enable the description of system behaviours, resource interactions, timing aspects, and control logic.

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
