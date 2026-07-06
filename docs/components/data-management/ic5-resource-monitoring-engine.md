---
title: IC5 - Resource Monitoring Engine
sidebar_position: 5
---

## IC5 - Resource Monitoring Engine

**Component metadata:** **ID:** IC5 | **Area:** Data Management | **Partner:** NTUA | **Task:** T4.2

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

The Cloud-based Resource Monitoring Engine collects real-time Industrial Internet of Things (IIoT) and time-series data from manufacturing assets and resources to enable continuous status monitoring and analysis. It is responsible for enabling the monitoring of manufacturing resources belonging to the Physical Smart Manufacturing layer. Besides monitoring, it provides an interface between the IIoT layer and the UniMaaS platform, supporting core functionalities not only of the Data Management Suite but also of components in the Modelling and the Decision-Making Suite. Such real-time properties may concern the utilization status of assets under operational use, metrics such as temperature and humidity of devices central to the manufacturing process, or GPS location and lifecycle properties of logistic and transportational assets.

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
