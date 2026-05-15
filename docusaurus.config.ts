import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'UniMaaS Wiki',
  tagline: 'Unified Modeling and Automated Scheduling for Manufacturing as a Service',
  favicon: 'img/logo.png',

  url: 'https://UniMaaS-project-eu.github.io',
  baseUrl: '/wiki/',

  organizationName: 'UniMaaS-project-eu', 
  projectName: 'wiki', 

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', 
          editUrl:
            'https://github.com/UniMaaS-project-eu/wiki/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: "/",
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'UniMaaS Wiki',
      logo: {
        alt: 'UniMaaS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://unimaas-project.eu/',
          label: 'Project Website',
          position: 'right',
        },
        {
          href: 'https://github.com/UniMaaS-project-eu/wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Project Overview',
              to: '/project-overview/',
            },
            {
              label: 'Architecture',
              to: '/architecture/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Project Website',
              href: 'https://unimaas-project.eu/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/UniMaaS-project-eu/wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UniMaaS Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
