import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/project-overview/">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Unified Modeling and Automated Scheduling for Manufacturing as a Service">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <Heading as="h2" className="text--center margin-bottom--lg">
                About UniMaaS
              </Heading>
              <p className="text--justify">
                Unified Modeling and Automated Scheduling for Manufacturing as a Service (UniMaaS) delivers a platform enabling flexible, decentralized manufacturing and supply chains as a Service for European SMEs and industries. It addresses key challenges such as customization, circularity and sustainability, minimal downtime, predictive maintenance, seamless communication, robustness to demand/resource variability, and cost/performance optimization.
              </p>
              
              <Heading as="h3" className="margin-top--lg margin-bottom--md">
                Components
              </Heading>
              <p>The platform is documented through component pages grouped by capability area:</p>
              <ul>
                <li><strong>Data Management</strong>: data spaces, resource monitoring, governance, knowledge graph, catalogue, and digital product passport.</li>
                <li><strong>Modelling and Decision-Making</strong>: formal models, prediction, intent handling, evaluation, planning, simulation, orchestration, and optimization.</li>
                <li><strong>Dashboard, Integration Layer, and Pilot / External Systems</strong>: frontend, backend integration, user-facing flows, and pilot ERP integrations.</li>
              </ul>
              
              <p className="margin-top--lg text--justify">
                Powered by cloud computing, digital twins, and trustworthy AI, UniMaaS supports the full lifecycle of processes and products and provides easy access to customized manufacturing service chains. The platform and its suites will be demonstrated across four pilots: aircraft maintenance, automotive seating, 3D construction printing, and logistics/warehouse management.
              </p>

              <div className="row margin-top--xl">
                <div className="col col--3">
                  <Link className="button button--primary button--block" to="/project-overview/">Project Overview</Link>
                </div>
                <div className="col col--3">
                  <Link className="button button--outline button--primary button--block" to="/architecture/">Architecture</Link>
                </div>
                <div className="col col--3">
                  <Link className="button button--outline button--primary button--block" to="/components/">Components</Link>
                </div>
                <div className="col col--3">
                  <Link className="button button--outline button--primary button--block" to="/pilot-implementations/">Pilot Implementations</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
