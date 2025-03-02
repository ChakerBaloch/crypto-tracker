import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Crypto Tracker',
  tagline: 'Crypto Tracker is a real-time cryptocurrency price tracking application. It fetches live price data',

  url: 'http://localhost:3000',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ChakerBaloch', // Usually your GitHub org/user name.
  projectName: 'crypto-tracker', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/ChakerBaloch/crypto-tracker',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],


  themeConfig: {
    
    navbar: {
      title: 'Crypto Tracker',
     
      items: [
        {
          href: 'https://github.com/ChakerBaloch/crypto-tracker',
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
            { label: 'Project Setup', to: '/docs/project-setup' },
            { label: 'API Integration', to: '/docs/api-integration' },
            { label: 'State Management', to: '/docs/state-management' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/chakerbaloch/crypto-tracker' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'API Reference', to: '/docs/api-integration' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crypto Tracker. Built with Docusaurus.`,
    },
  }
}

export default config;
