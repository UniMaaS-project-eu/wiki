---
title: IC17 - Core Integration Platform
sidebar_position: 1
---

## IC17 - Core Integration Platform

**Component metadata:** **ID:** IC17 | **Name:** Core Integration Platform | **Area:** Platform Integration | **Partner:** NET | **Task:** T8.1 | **TRL:** TBD

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

Serves as the central backend layer of the UniMaaS platform, enabling the frontend components developed in T8.2 to access and use the capabilities provided by the Data Management, Modelling, and Decision-Making suites.

It acts as a common entry point between the user dashboard services and the underlying suite components, receiving frontend requests, coordinating the required backend operations, and returning the relevant information in a consistent form.

By hiding the complexity of the individual suite components, the platform allows the frontend applications to interact through a unified interface. This supports a coherent flow of information and functionality across the UniMaaS platform while keeping the frontend focused on user interaction, visualization, and workflow support.

## Integration Context

The Core Integration Platform acts as the backend-for-frontend between the CEL frontend components and the downstream UniMaaS suite components. It receives user-facing requests from dashboard, registration, search, provider, chatbot, monitoring, DPP, and order-status flows, then exposes a unified REST interface grouped by downstream component.

Current downstream integration groups exposed by the API:

- IC1 UniMaaS EDC Connector: TBD
- IC3 Knowledge Graph: TBD
- IC4 Federated Catalogue: TBD
- IC5 Resource Monitoring Engine: TBD
- IC6 IAM & Data Governance: TBD
- IC7 DPP Infrastructure: TBD
- IC11 Intent-Based Servitisation/Chatbot: TBD
- IC15 Cloud Mfg Orchestrator: TBD

## OpenAPI Specs / API Documentation

Repository and live API documentation:

- Component repository: [UniMaaS-project-eu/core-integration-platform](https://github.com/UniMaaS-project-eu/core-integration-platform)
- Repository OpenAPI spec: [docs/openapi.json](https://github.com/UniMaaS-project-eu/core-integration-platform/blob/main/docs/openapi.json)
- Swagger UI: [https://unimaas-project-eu.github.io/core-integration-platform/](https://unimaas-project-eu.github.io/core-integration-platform/)

## Architecture of the Component

The component is implemented as a FastAPI backend-for-frontend.

Main structure:

- `app/main.py` creates the FastAPI app, defines Swagger tags, and registers routers.
- `app/routers/` exposes HTTP endpoints grouped by downstream component.
- `app/services/` contains integration behavior and readiness-aware placeholder responses.
- `app/schemas/` contains Pydantic request/response models used by the API and OpenAPI spec.
- `app/settings.py` loads environment configuration from `.env` using Pydantic settings.
- `app/clients/` is reserved for outbound integration client helpers.
- `docs/integration.md` tracks downstream readiness, missing inputs, and integration assumptions.
- `docs/openapi.json` and `docs/index.html` publish the API contract through GitHub Pages.

Runtime flow:

1. Frontend components call IC17 REST endpoints.
2. The relevant FastAPI router validates request data using Pydantic schemas.
3. The service layer either returns a frontend-facing DTO, calls or prepares to call the downstream component, or returns an explicit missing-contract response.
4. When downstream URLs and auth tokens are configured, IC17 can use those values from environment-backed settings.

## Data Models

TBD

## Deployment Notes

Technology stack and runtime:

- Python 3.11+.
- FastAPI 0.115+.
- Pydantic Settings for environment-backed configuration.
- `uv` for dependency management; `pyproject.toml` and `uv.lock` are tracked.
- Docker and Docker Compose for local/containerized deployment.
- Runtime port: `8000`.
- Health endpoint: `/health`.
- Local Swagger endpoint when running the API: `/docs`.
- Local OpenAPI JSON endpoint when running the API: `/openapi.json`.

Local Docker Compose run:

```bash
cp .env.example .env
docker compose up --build
```

Optional local development run:

```bash
uv sync --dev
uv run uvicorn app.main:app --reload
```

Configuration is provided through `.env` / environment variables:

- `APP_ENV`
- `REQUEST_TIMEOUT_SECONDS`
- `IC1_EDC_BASE_URL`, `IC1_EDC_AUTH_TOKEN`
- `IC3_KNOWLEDGE_GRAPH_BASE_URL`, `IC3_KNOWLEDGE_GRAPH_AUTH_TOKEN`
- `IC4_FEDERATED_CATALOGUE_BASE_URL`, `IC4_FEDERATED_CATALOGUE_AUTH_TOKEN`
- `IC5_RESOURCE_MONITORING_BASE_URL`, `IC5_RESOURCE_MONITORING_AUTH_TOKEN`
- `IC6_IAM_GOVERNANCE_BASE_URL`, `IC6_IAM_GOVERNANCE_AUTH_TOKEN`
- `IC7_DPP_BASE_URL`, `IC7_DPP_AUTH_TOKEN`
- `IC11_CHATBOT_BASE_URL`, `IC11_CHATBOT_AUTH_TOKEN`
- `IC15_ORCHESTRATOR_BASE_URL`, `IC15_ORCHESTRATOR_AUTH_TOKEN`

## Other

Current integration readiness, based on the repository integration tracker:

- IC4 Federated Catalogue: ready as a starting contract from the EDC federated catalogue management API.
- IC3 Knowledge Graph: TBD
- IC1 UniMaaS EDC Connector: TBD
- IC5 Resource Monitoring Engine: TBD
- IC6 IAM & Data Governance: TBD
- IC7 DPP Infrastructure: TBD
- IC15 Cloud Mfg Orchestrator: TBD

Tests in the repository cover OpenAPI tag grouping, healthcheck behavior, EDC RDF model exposure, Knowledge Graph route exposure, named missing-input behavior for blocked infrastructure routes, and the workflow status response shape.
