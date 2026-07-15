---
title: IC24 - Real-Time Infrastructure Updates
sidebar_position: 8
---

**Component metadata:** **ID:** IC24 | **Name:** Real-Time Infrastructure Updates | **Area:** User-Facing | **Partner:** CEL | **Task:** T8.2 | **TRL:** TBD

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

This is the GUI component that enable the UniMaaS Dashboard to provide real-time monitoring and visualization of the entire process (service chain status, progress, and operational signals).that while consumers submit orders/intents to the platform, the dashboard is the natural place to track what has been requested and which service chain is being executed.

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

