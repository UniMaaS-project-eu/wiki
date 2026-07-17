---
title: IC16 - Circularity & Sustainability Optimizer
sidebar_position: 4
---

**Component metadata:** **ID:** IC16 | **Name:** Circularity & Sustainability Optimizer | **Area:** Decision-Making | **Partner:** UPV | **Task:** T6.4 | **TRL:** TBD

## Description of Component

The Circularity & Sustainability Optimizer (CSO) optimises manufacturing models by integrating economic, environmental and social objectives to enhance sustainability and circular-economy functionalities, such as resource reuse. It refines the models used in the platform's long, strategic decision loop.

The CSO establishes the long-term strategic and re-optimization layer of the UniMaaS Decision-Making Suite, embedding sustainability dimensions directly into the Manufacturing Service Chain (MSC) lifecycle. It enhances traditional base models by integrating additional parameters, decision variables, and objectives aligned with the three sustainability pillars (economic, environmental, and social), plus resilience and human-centricity, together covering the pillars of the Industry 5.0 paradigm.

The development process begins with conceptual modeling (KIR 11), based on literature and pilot reviews, to create a multidimensional taxonomy. This taxonomy then guides the design of sustainable models and optimization solutions (KIR 12). By benchmarking these sustainable outputs against base models, the optimizer enables the implementation of circular and resilient manufacturing processes.

Problems addressed span both decision horizons:

- Short-term operations: simultaneous minimisation of operational costs and CO₂ emissions, balancing CO₂ trade-offs in logistics, validating sustainable inventory decisions, and improving overall resource efficiency.
- Long-term strategic decisions: integration of ecodesign and recycling strategies, development of repair loops, adoption of green materials and recycled aggregates, closed-loop supply chain reconfiguration, and building resilience against operational disruptions.

## Integration Context

The CSO operates within the Decision-Making Suite (WP6) and exchanges data with the AI-Assisted Digital Twin, the Planning and Scheduling Manager, and the Zero-X Evaluation Engine.

Integration points defined in D7.1:

- **IC14 → IC16 (AI-Assisted Digital Twin → CSO)**: The Digital Twin pushes, periodically or event-based, a structured dynamic state of the system combining resource monitoring data, telemetry/historical data, and asset predictions. With this data the CSO evaluates the current "health" of the circularity. Interface: REST API, JSON. Status: Not started.
- **IC16 → IC14 (CSO → AI-Assisted Digital Twin)**: Bi-directional exchange completing the loop above. The CSO returns a Circularity Health Index, including scores for material efficiency, remaining useful life (RUL) optimization, and waste-reduction potential. Interface: REST API, JSON. Status: Not started. Per D6.1 (Section 6.2), the optimizer also propagates long-term sustainability objectives and alternative configuration profiles (e.g., supply chain topology modifications, resource re-allocations) back to the Digital Twin layer, which simulates these scenarios and returns an objective configuration ranking to guide final system adaptation.
- **IC16 → IC13 (CSO → Planning and Scheduling Manager)**: When a circularity "health" evaluation detects a relevant system change, the CSO provides the Planning and Scheduling Manager with actionable directives and optimized setpoints: optimized control setpoints, operational constraints, task re-prioritization, resource reallocation requests, and updated scheduling constraints. Event-based, triggered by the outcome of a circularity evaluation. Interface: REST API, JSON. Status: Not started.

Additionally, per the D6.1 architecture, structural changes are governed through the Zero-X Evaluation Engine (IC12): the CSO transmits non-validated updated models reflecting alternative configurations, which are verified against baseline constraints, zero-defect bounds, and intent requirements before mathematically validated models are returned for active deployment.

## OpenAPI Specs / API Documentation

D7.1 lists the component's integration points with Interface Type "REST API", Data Format "JSON", and Specification/Schema Reference "(OpenAPI)"; the specifications themselves are not yet available.

- Repository OpenAPI spec: TBD
- Swagger UI: TBD

Recommended approach:

- Keep `docs/openapi.yaml` in the component repository.
- Copy `docs/index.html` from `UniMaaS-project-eu/openapi-swagger-pages-template`.
- Enable GitHub Pages from `main` branch, `/docs` folder.

## Architecture of the Component

Per the high-level architecture in D6.1 (Section 6.2), the component is structured around a **Core Optimization Engine** and an **Alignment Vector** used to evaluate live MSCs and update configurable infrastructure elements.

- **Core Optimization Engine**: implements a dual-loop framework that processes baseline operational inputs through a standard modeling track while simultaneously evaluating sustainable criteria through a parallel sustainable model track. The engine executes a continuous trade-off evaluation between these parallel loops, matching operational deltas against the Alignment Vector.
- **Alignment Vector**: translates the economic, environmental, social, resilience, and human-centric pillars of the Industry 5.0 paradigm into quantitative optimization constraints and targets.
- **External validation loops**: to maintain an adaptive, closed-loop framework without executing premature changes on active physical infrastructures, the optimizer maintains automated, bidirectional data interfaces with:
  - the **AI-Assisted Digital Twin (IC14)** — a simulation-driven validation loop: live structural synchronization data is ingested to map the state of the manufacturing ecosystem; sustainability objectives and alternative configuration profiles are simulated by the Digital Twin, which returns an objective configuration ranking.
  - the **Zero-X Evaluation Engine (IC12)** — model governance: non-validated updated models are verified against baseline constraints, zero-defect bounds, and intent requirements before validated models return for deployment.

Diagram: //TODO see Figure 6.1X in D6.1 ("Circularity and Sustainability Optimizer high-level architecture").

## Data Models

Main data exchanged (formal schemas: TBD):

- **Digital Twin state input**: structured dynamic (future-aware) system state combining resource monitoring data, telemetry/historical data, and asset predictions (JSON).
- **Circularity Health Index (output)**: scores for material efficiency, remaining useful life (RUL) optimization, and waste-reduction potential (JSON).
- **Optimization directives (output to IC13)**: optimized control setpoints, operational constraints, task re-prioritization, resource reallocation requests, and updated scheduling constraints (JSON).
- **Alternative configuration profiles**: candidate infrastructure/supply-chain configurations sent to the Digital Twin for simulation; objective configuration rankings returned.
- **Sustainability taxonomy (KIR 11)**: multidimensional mapping of parameters, decision variables, and optimization objectives to the categories economic, environmental, social, resilience, and human-centricity.

## Deployment Notes

TBD.

- Existing codebase/repository link: TBD
- Programming languages and frameworks: TBD
- Dockerized: TBD

## Other

Pilot-specific triple bottom line objectives targeted by the optimizer (from D6.1 Section 6.3, based on D3.1 questionnaire responses):

- **Aircraft maintenance** — Economic: minimise downtime duration and operational disruptions. Environmental: maximise the lifespan of components. Social: optimise workforce utilisation.
- **Automotive supply chains** — Economic: balance and reduce transport and inventory costs and ensure overall profitability. Environmental: extend the lifespan of containers and minimise empty return transport. Social: prioritise sourcing in EU regions, limit the duration of repetitive worker tasks, and improve worker productivity.
- **3D construction printing** — Economic: improve profitability, reduce material costs, and mitigate the impact of demand variability. Environmental: reduce resource waste (tools and materials) and lower energy consumption. Social: adapt to labour availability constraints.
- **Order picking / warehouse logistics** — Economic: ensure profitability and optimal warehouse storage. Environmental: optimise the lifecycle of pallets and minimise overall energy and fuel consumption. Social: guarantee appropriate working conditions (safety, dignity) and ensure strict regulatory compliance.

References: D6.1 (Chapter 6, "Circularity and Sustainability Optimization"), D7.1 (Sections 2.2.3 and 5.3.3).
