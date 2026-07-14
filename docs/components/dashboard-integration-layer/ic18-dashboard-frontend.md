---
title: IC18 - Dashboard & Frontend
sidebar_position: 2
---

**Component metadata:** **ID:** IC18 | **Name:** Dashboard & Frontend | **Area:** User-Facing | **Partner:** CEL | **Task:** T8.2 | **TRL:** TBD

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

The UniMaaS dashboard is the integrated graphical user interface for the UniMaaS platform. It serves both as a marketplace where the offerings and orders of providers and customers converge, and as a dashboard to monitor order statuses along with the values and trends of the most significant KPIs for the various stakeholders.

## Integration Context

The UniMaaS dashboard is a cloud-based frontend application accessible via web browser. It features an architecture based on micro-frontends. Specifically, it dynamically loads and integrates micro-frontends, each of which is dedicated to providing a GUI to the various micro-services of the UniMaaS platform. These micro-frontends are:
- IC19 Registration Page for Providers/Client
- IC20 Search Engine for Customers
- IC21 Provider’s UI 
- IC22 Chatbot Interaction 
- IC23 Real-Time Order Status UI IC24 Real-Time Infrastructure Updates
- IC25 DPP Inteface Connection
The dashboard and all of its micro-frontends rely on input data provided through API calls (HTTP-Rest Communication Protocol) to the component IC17 - Core Integration Platform.

## OpenAPI Specs / API Documentation

As a GUI, it does not expose or provide APIs to other services.

## Architecture of the Component

The following figure shows the dashboard architecture. The micro-frontends (UC19-UC25) are dynamically loaded, and their GUIs are graphically integrated by the main frontend: the dashboard. Each of these GUIs invokes the APIs of the Core Integration Platform, which acts as a "facade" for all the services of the UniMaaS platform. Finally, the "Intent-Based Servitisation Chatbot" component is integrated/linked to manage the chatbot's GUI for creating and submitting orders/intents.

## Data Models

The data model of the dashboard is the data model of the Core Integration Platform's APIs.

## Deployment Notes

Technology stack:
- HTML
- CSS
- Javascript
- Custom Web Elements
- NodeJS
- 
Containerization: Yes
(TBD: Dockerfile + Docker-Compose)

## Other

Nothing
