---
title: IC20 - Search Engine for Customers
sidebar_position: 4
---

**Component metadata:** **ID:** IC20 | **Name:** Search Engine for Customers | **Area:** User-Facing | **Partner:** CEL | **Task:** T8.2 | **TRL:** TBD

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

This is the GUI component of the UniMaaS Dashboard that is used to visualize and search available resources, which the Resource Registry also classifies by industrial domain. In practice, this is the UniMaaS “marketplace catalog” UI.

## Integration Context

This component is a micro-frontend. Technically it is a web service that provides its GUIs to the dashboard frontend on demand. Its GUIs, when assembled into the dashboard frontend, run into a standard web browser container and call the APIs of the Core Integration Platform (using HTTP-Rest communication protocol) to support all the end-user interaction requests.

## OpenAPI Specs / API Documentation

This component exposes a set of URL-endpoints: one for each GUI it implements. These endpoints are exposed only to be used by the UniMaaS Dashboard frontend. No other UniMaaS services need to access them. 

## Architecture of the Component

This component is a self-contained web services that implements one or more GUI, in the form of Custom Web Components and capable to provide each one of them through an URL-endpoint.

## Data Models

TBD: The data model of this component depends on the data model of the Core Integration Platform's APIs.

## Deployment Notes

Technology stack:
- HTML
- CSS
- Javascript
- NodeJS

Dockerized: Yes (TBD: Dockerfile + Docker-Compose)

## Other

None

