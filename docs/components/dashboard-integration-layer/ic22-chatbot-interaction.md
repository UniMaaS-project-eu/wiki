---
title: IC22 - Chatbot Interaction
sidebar_position: 6
---

**Component metadata:** **ID:** IC22 | **Name:** Chatbot Interaction | **Area:** User-Facing | **Partner:** CEL | **Task:** T8.2 | **TRL:** TBD

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

This is the GUI component of the UniMaaS Dashboard that enables consumer users to submit orders/intents to the platform and to verify their acceptance status, based on the minimum requirements needed by the platform for resource selection, orchestration, and end-to-end monitoring.

## Integration Context

This component is a full-stack web application. When the UniMaaS Dashboard needs to support this functionality it opens a new web page into the web browser to host this application and enable the user to submit new orders. 

## OpenAPI Specs / API Documentation

As a GUI, it does not expose or provide APIs to other services.

## Architecture of the Component

This is a full-stack web application that calls the APIs of the UniMaaS services to support the creation of new orders and to submit and register them.

## Data Models

TBD: The data model of this application depends on the data model of the UniMaaS services related to the creation, validation and registration of orders.

## Deployment Notes

Technology stack:
- HTML
- CSS
- Javascript
- NodeJS

Dockerized: Yes (TBD: Dockerfile + Docker-Compose)

## Other

None

