const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Millbohm Consulting Group",
  tagline:
    "Brisbane-based corporate services firm providing both company secretarial and financial management services",
  url: "https://millbohm.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "millbohm", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "Millbohm Consulting Group",
      logo: {
        alt: "Millbohm Logo",
        src: "img/logo.svg",
      },
      items: [{ to: "/contact", label: "Contact", position: "left" }],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Millbohm Consulting Group Pty Ltd ABN 18 094 474 218. All rights reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
