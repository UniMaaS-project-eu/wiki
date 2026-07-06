---
title: DevOps Environment, Continuous Integration and Quality Assurance
sidebar_position: 2
---

## DevOps Environment, Continuous Integration and Quality Assurance

### Task T8.3

The UniMaaS CI/CD environment supports the development teams with a common set of tools for source-code management, automated build and deployment, container image distribution, user access management, reverse proxying, certificate handling, monitoring, and controlled access to the development, integration, and testing environments.

The platform is based on open-source services and standard DevOps practices. It supports protected repositories and branches, automated build and deployment workflows, containerised deployments, role-based access control, HTTPS-enabled service endpoints, and environment access through firewall rules and VPN mechanisms where required.

## CI/CD Services

The core CI/CD services are listed below with their operational endpoints.

| Service | URL |
|---|---|
| GitHub organization | [https://github.com/UniMaaS-project-eu](https://github.com/UniMaaS-project-eu) |
| Jenkins | [https://jenkins.unimaas.rid-intrasoft.eu/](https://jenkins.unimaas.rid-intrasoft.eu/) |
| Harbor | [https://harbor.unimaas.rid-intrasoft.eu/](https://harbor.unimaas.rid-intrasoft.eu/) |
| Portainer | [https://portainer.unimaas.rid-intrasoft.eu/](https://portainer.unimaas.rid-intrasoft.eu/) |
| Keycloak | [https://keycloak.unimaas.rid-intrasoft.eu](https://keycloak.unimaas.rid-intrasoft.eu) |

The CI/CD platform is designed to support collaborative workflows for UniMaaS technical partners. Administration of the infrastructure and tool configuration is handled by NET, while partner access is granted according to agreed project roles and security policies.

## CI/CD Process

The CI/CD process combines Continuous Integration, Continuous Delivery, and deployment automation.

Continuous Integration enables frequent code integration, versioning, and validation, so that new commits can be built and tested before they are promoted to shared environments.

Continuous Delivery prepares the application or service for release by automating packaging, image creation, and publication to the artifact registry.

Continuous Deployment automates deployment of validated software to the selected development, integration, or testing environment, depending on the workflow and approval rules agreed for each component.

The standard process is:

1. Local development: developers work locally on component source code and configuration.
2. Version control: changes are committed to the relevant GitHub repository, where branch protection, review, and traceability rules can be applied.
3. Automated build and testing: Jenkins runs the configured pipeline, builds the component, and executes the defined checks.
4. Artifact publication: validated container images are pushed to Harbor and tagged according to the agreed versioning approach.
5. Deployment: Jenkins deploys the selected image to the target environment, while Portainer supports monitoring and operational visibility of running containers.

If a build, test, or deployment stage fails, the pipeline prevents the change from progressing and the responsible technical team resolves the issue before a new run is triggered.

## CI/CD Tools and Workflow

The UniMaaS CI/CD workflow supports two common deployment approaches.

In the GitHub-based approach, a developer commits source-code changes to GitHub, a webhook triggers Jenkins, Jenkins builds and tests the component, and a successful image is published to Harbor before deployment.

In the Harbor-based approach, a partner can provide a container image directly through Harbor, after which the deployment workflow can be triggered according to the agreed process.

Each repository should include the files required by the selected deployment approach, such as a Jenkinsfile that defines the pipeline stages and a Dockerfile or equivalent container build configuration. The concrete repository structure may differ per component, but it should remain compatible with the agreed CI/CD workflow.

## GitHub - Version Control System

GitHub is used as the version control and collaboration platform for UniMaaS. It supports repository management, branching, code review, issue tracking, and traceability of changes.

For UniMaaS, repositories and teams are organised according to the project component structure and the access rights agreed by the consortium. This setup enables partners to host component source code, manage team permissions, and maintain the Jenkinsfile and Dockerfile or equivalent deployment assets required by the CI/CD process.

To enable automated deployment through CI/CD services, each GitHub repository should include, at minimum:

- README: a brief component description, main functionality, and clear deployment instructions.
- Jenkins files: configuration files defining Jenkins pipelines for automated deployment, teardown, and testing processes.
- Docker Compose YAML: a deployment descriptor supporting container-based execution using Docker and Docker Compose.
- Additional runtime configuration: supplementary configuration required during execution, such as environment variable files.
- Test files: unit, functional, or integration tests designed to be executed automatically within CI/CD pipelines.

## Jenkins - Automated Build and Deployment

Jenkins acts as the automation server for the UniMaaS CI/CD environment and coordinates build, test, packaging, and deployment activities. It supports Continuous Integration by reacting to repository events, retrieving the latest version of the code, and executing configured pipeline stages for each component.

Pipelines are defined in Jenkins files and can include stages for building container images, executing functional or integration tests, publishing artifacts to Harbor, and deploying validated images to the selected environment. This makes deployment repeatable and reduces the risk of manual errors when components are updated during integration activities.

Jenkins folders and permissions are aligned with component ownership and partner responsibilities. Access to pipeline jobs is restricted to authorised users, while pipeline execution history and status information provide visibility into successful deployments, failed stages, and corrective actions required before a component can progress further.

Jenkins integrates with GitHub repositories so CI/CD pipelines can be triggered automatically on code changes. Pipelines can also be initiated manually when needed. In manual cases, a container image can be built and pushed to the centralised container registry, then deployed through the appropriate Jenkins pipeline by specifying the selected image.

Jenkins supports delivery pipelines as code through its Pipeline DSL, based on Groovy. Pipeline configurations are maintained in a `Jenkinsfile`, enabling version-controlled and reproducible pipeline definitions.

Two main approaches are supported:

- Declarative Pipeline: structured syntax using predefined blocks such as `pipeline`, `agent`, and `stages`, making the pipeline easier to read and maintain.
- Scripted Pipeline: a more flexible Groovy-based approach for complex logic, loops, and advanced control flow.

## Harbor - Private Container Registry

Harbor provides the private container registry used by UniMaaS to store, tag, and distribute container images. It acts as the central artifact repository for containerised components and supports controlled movement of images between development, integration, and testing environments.

Harbor supports role-based access control, project-level organisation, and policy-based management of container images. These capabilities help ensure that only authorised users and automated pipelines can push, pull, or manage artifacts related to each UniMaaS component.

Component-specific projects or repositories can be created in Harbor so Docker images are grouped according to the technical architecture and component ownership. This simplifies artifact management, supports reproducible deployments, and gives Jenkins a stable registry endpoint for publishing and retrieving images during automated workflows.

## Portainer - Monitoring and Container Management

Portainer provides operational visibility and management capabilities for the containerised services deployed in UniMaaS environments. It offers a web-based interface through which the technical team can inspect running containers, stacks, images, volumes, and environment status without relying only on command-line access.

Within the integration workflow, Portainer supports monitoring, troubleshooting, and day-to-day container management. It helps identify whether a component is running correctly, whether a container has restarted or failed, and whether deployed services are consuming the expected infrastructure resources.

This visibility is particularly useful during integration and testing activities, where partners may need quick feedback on deployment state and runtime behaviour.

## Keycloak - Identity and Access Management

Keycloak provides identity and access management for UniMaaS CI/CD services where centralised authentication is required. It supports Single Sign-On, authentication, authorisation, and centralised user management, reducing the need to maintain separate user accounts and permissions independently in each tool.

In the UniMaaS environment, Keycloak manages user groups, roles, and access rights according to the agreed access policy. This enables the infrastructure team to control which users can access administration interfaces, deployment tools, and protected resources while keeping authentication consistent across the platform.

The Keycloak configuration also supports integration of CI/CD services such as Harbor, Jenkins, and Portainer where applicable.

## NGINX - Reverse Proxy and Certificates

NGINX is used as a reverse proxy in front of the UniMaaS CI/CD services. A reverse proxy receives incoming client requests and forwards them to the appropriate backend service, allowing the platform to expose Jenkins, Harbor, Keycloak, Portainer, and related services through controlled and consistent endpoints.

This setup supports secure routing of traffic to services deployed behind the infrastructure boundary. It also helps keep backend services protected, because public access can be controlled through the proxy layer, firewall rules, and the agreed network configuration.

HTTPS communication and service identification are supported through certificate management. Let's Encrypt certificates and automated renewal mechanisms can be used with the NGINX proxy setup so CI/CD services are accessed over encrypted channels.

## Hetzner - Cloud Infrastructure Provider

Hetzner Cloud is used as the infrastructure provider for the UniMaaS platform, offering virtual machines that host deployed services and supporting components.

These virtual servers are integrated with the CI/CD workflow and act as deployment nodes for pipelines executed through Jenkins. Through this setup, containerised components can be automatically deployed, configured, and updated. The Hetzner web interface also provides an overview of provisioned resources and operational status, supporting infrastructure management and monitoring activities.

## OpenVPN - Secure Network Access

OpenVPN is used to establish secure communication channels within the UniMaaS infrastructure. It provides a Virtual Private Network (VPN) that enables authorised users, such as platform administrators and project partners, to securely access internal services and deployment environments.

Communication through the VPN is encrypted, supporting confidentiality and integrity of data exchanges. Access is granted through configuration files that can be imported into standard OpenVPN clients, allowing controlled and authenticated connectivity to platform resources.
