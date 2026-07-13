---
title: Platform Management and Business Intelligence Dashboard
sidebar_position: 1
---

### Task T8.2

> This page will be completed by the following partners:
>
> **Lead:** CEL
>
> **Contributors:** NTUA, UPV, NET, NET-BE, ODINS

## The UniMaaS Dashboard: Overview and Core Architecture
The dashboard serves as the primary human-machine interface (HMI) of the MaaS (Manufacturing-as-a-Service) platform. It acts as a centralized ecosystem hub where providers publish their manufacturing capabilities, consumers discover and evaluate available services, and all stakeholders achieve end-to-end visibility into the real-time execution of selected manufacturing service chains.

Beyond simple data visualization, the dashboard’s primary operational role is to translate complex orchestration and monitoring streams into actionable situational awareness for stakeholders.

To achieve this, the UniMaaS dashboard is architected around a dual-role framework:
- An Onboarding and Marketplace Interface: Designed to streamline ecosystem entry, resource cataloging, and service discovery for both providers and consumers.
- An Operational Cockpit: Tailored for the comprehensive, end-to-end monitoring and lifecycle management of manufacturing service chain execution.

<br>

## Functional Components & Integrated Components (ICs)
The core functionalities of the UniMaaS dashboard are cross-referenced with specific Integrated Components (ICs) as detailed below:

### 1. Ecosystem Onboarding & Profile Management
#### IC19 - Registration Page for Providers/Clients (Ecosystem Onboarding Interface)
This component comprises the full suite of Graphical User Interface (GUI) elements and dashboard functionalities that allow actors to seamlessly enter the UniMaaS ecosystem, configure their profiles, and participate in MaaS processes. This interface is structurally divided into two tailored environments:
- **Provider Onboarding Interface** (Manufacturing Service Providers): Dedicated to companies offering manufacturing capabilities. It allows them to register as verified providers and publish their assets in a structured, standardized format. Key features include:
  - **Organizational Profiling**: Creation and maintenance of corporate profiles, including secure, role-based access control (RBAC) for users.
  - **Resource Asset Descriptors**: Structured entry and lifecycle maintenance of asset profiles (including machinery, production lines, operational processes, workforce availability, logistics assets, software tools, and supply chain sub-networks).
  - **Industrial Domain Classification**: Alignment and assignment of resources to specific industrial domains, ensuring semantic consistency with the core Resource Registry.
  - **Governance & Policy Definition**: Optional configuration of operational constraints, terms of use, dynamic availability schedules, and granular data-sharing policies (defining exactly what data is disclosed and to whom).
  - **Data Validation Gateways**: Automated compliance checks to ensure the minimum required information is complete, rendering the resource formally discoverable and selectable via the Resource Registry.
- **Consumer Onboarding Interface** (Manufacturing Service Consumers): Dedicated to service requesters—such as SMEs or large industrial customers—enabling them to submit manufacturing requests. Key features include:
  - **Client Profiling**: Setting up organizational data, user roles, and corporate preferences.
  - **Operational Constraints & Preferences**: Configuration of baseline Quality of Service (QoS) criteria, target constraints, and regulatory compliance requirements.
  - **Intent & Order Submission**: Direct access to specialized functions for submitting high-level manufacturing intents and explicit orders.
  - **Tracking & Catalog Browsing**: Native interfaces to browse the verified resource catalog and track the historical lifecycle of submitted requests.

### 2. Resource Discovery & Capability Publication
#### IC20 - Search Engine for Customers (Discovery, Visualization, and Search Interface)
This component acts as the user-facing "marketplace catalog" of UniMaaS. It provides advanced search, filtering, and visualization capabilities over the Resource Registry, allowing customers to intuitively locate available manufacturing assets and services classified by their specific industrial domains.
#### IC21 - Provider’s UI (Provider-Side Publication Interface)
The dedicated interface through which Manufacturing Service Providers actively manage their offering. It provides the administrative tools to enter, update, or deprecate descriptors of manufacturing resources, data streams, and supply chain components. The UI ensures these descriptors are formatted in compliance with UniMaaS standards before being stored in the Resource Registry and made available to the broader UniMaaS software suites.

### 3. Order Management & Interaction
#### IC22 - Chatbot Interaction (Consumer-Side Ordering Interface)
An intelligent, conversational interface designed to simplify the order ingestion process. It enables consumers to submit high-level manufacturing intents or formal orders using natural language. The chatbot guides users to satisfy the minimum informational requirements needed by the platform for automated resource selection, orchestration, and subsequent end-to-end monitoring, providing real-time feedback on order acceptance status.
#### IC23 - Real-Time Order Status UI (Bilateral Order Management)
This interface mediates the critical interaction between human end-users and the underlying UniMaaS platform. It provides a synchronized, bilateral view for both Consumers and Providers, allowing them to track the live progress of submitted and received orders, respectively. Additionally, it features built-in analytics dashboards to monitor current values, historical trends, and deviations of the most critical project KPIs.

### 4. Execution Monitoring & Traceability
#### IC24 - Real-Time Infrastructure Updates (Execution Monitoring Cockpit)
As the central command center during service chain execution, this cockpit provides real-time monitoring and rich visualization of the entire manufacturing process. It tracks service chain statuses, operational progress, and real-time telemetry signals from the shop floor.
Crucially, it acts as the user-facing mechanism to observe asset release and the closing of execution cycles, supporting continuous automated brokering and the rapid re-allocation of idle assets back into the ecosystem.
#### IC25 - DPP Interface Connection (Digital Product Passport Integration)
This specialized integration bridges the platform frontend with Digital Product Passport (DPP) architectures. It allows the dashboard to retrieve, visualize, and manage comprehensive product lifecycle information. By doing so, it supports end-to-end product traceability, supply chain circularity, and lifecycle-aware product data management directly from the user interface.
