import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: "Cardano Scaling",
  url: "https://cardano-scaling.github.io",
  baseUrl: "/website/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/faviconl.io",
  organizationName: "Input Output",
  projectName: "Cardano Scaling",
  staticDirectories: ["static"],

  scripts: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "hydra.family",
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        blog: {
          id: "monthly",
          path: "monthly",
          routeBasePath: "monthly",
          authorsMapPath: "../authors.yaml",
          editUrl: "https://github.com/cardano-scaling/website/tree/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        }
      }
    ]
  ],

  themeConfig: {
      navbar: {
        title: "Cardano Scaling",
        items: [
          {
            to: "/monthly",
            label: "Monthly reports",
            position: "left",
          },
          {
            href: "https://github.com/cardano-scaling",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Legal",
            items: [
              {
                label: "Terms & Conditions",
                to: "https://static.iohk.io/terms/iohktermsandconditions.pdf",
              },
              {
                label: "Privacy Policy",
                to: "https://static.iohk.io/terms/iog-privacy-policy.pdf",
              },
              {
                label: "Contributors",
                to: "https://github.com/orgs/cardano-scaling/people",
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["haskell"],
      }
    },

  markdown: {
    mermaid: true,
  },
};

export default config;
