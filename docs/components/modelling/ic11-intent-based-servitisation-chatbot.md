---
title: IC11 - Intent-Based Servitisation/Chatbot
sidebar_position: 4
---

## IC11 - Intent-Based Servitisation/Chatbot

**Component metadata:** **ID:** IC11 | **Area:** Modelling | **Partner:** ETS | **Task:** T5.3

The sections below are suggested to keep component documentation consistent across UniMaaS. If another structure better describes this component, partners may adapt it, as long as the page clearly explains the component role, integrations, API documentation, architecture, data models, and deployment information.

## Description of Component

The Intent-based Servitisation Manager translates high-level natural-language intents from MaaS stakeholders into structured, machine-executable JSON Requirement Models (RMs) aligned with the UniMaaS Formal Modelling Framework. Inputs are a textual user intent and a serialized provider/Knowledge-Graph constraint snapshot; outputs are three alternative, constraint-compliant RMs encoding goal, trigger, actions, constraints, resources, and optimisation profile. The component implements a three-stage pipeline: intent to RM generation; RM to manufacturing-process mapping via retrieve-and-match; deterministic selection and KG state update. It is built on a Mistral-7B-Instruct-v0.3 model and exposed through a full-stack prototype with a FastAPI backend, a React/TypeScript chatbot frontend, and a translator abstraction layer. It supports all four UniMaaS pilots with pilot-specific Pydantic validation schemas and is designed for fully local, self-contained deployment within the consortium's Kubernetes-based testbed.

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
