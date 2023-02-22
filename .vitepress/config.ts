import { defineConfig, DefaultTheme } from "vitepress";

const ogDescription = "Simplify the next generation monetization on the web.";
const ogImage = "https://webfunding.prognovel.com/og-image.png";
const ogTitle = "WebfundingJS";
const ogUrl = "https://webfunding.prognovel.com";

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || "";
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "dev";

// const deployType = (() => {
//   switch (deployURL) {
//     case "https://main--vite-docs-main.netlify.app":
//       return "main";
//     case "":
//       return "local";
//     default:
//       return "release";
//   }
// })();

// const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
//   switch (deployType) {
//     case "main":
//     case "local":
//       return [
//         {
//           text: "Vite 4 Docs (release)",
//           link: "https://vitejs.dev",
//         },
//         {
//           text: "Vite 3 Docs",
//           link: "https://v3.vitejs.dev",
//         },
//         {
//           text: "Vite 2 Docs",
//           link: "https://v2.vitejs.dev",
//         },
//       ];
//     case "release":
//       return [
//         {
//           text: "Vite 3 Docs",
//           link: "https://v3.vitejs.dev",
//         },
//         {
//           text: "Vite 2 Docs",
//           link: "https://v2.vitejs.dev",
//         },
//       ];
//   }
// })();

export default defineConfig({
  title: `WebfundingJS`,
  description: ogDescription,

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@prognovel" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
  ],

  vue: {
    reactivityTransform: true,
  },

  themeConfig: {
    logo: "/logo.svg",

    editLink: {
      pattern:
        "https://github.com/ProgNovel/impostor-server/edit/apps/docs/:path",
      text: "Suggest changes to this page",
    },

    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/prognovel" },
      { icon: "discord", link: "https://chat.vitejs.dev" },
      { icon: "github", link: "https://github.com/prognovel/impostor-server" },
    ],

    // algolia: {
    //   appId: "7H67QR5P0A",
    //   apiKey: "deaab78bcdfe96b599497d25acc6460e",
    //   indexName: "vitejs",
    //   searchParameters: {
    //     facetFilters: ["tags:en"],
    //   },
    // },

    // carbonAds: {
    //   code: "CEBIEK3N",
    //   placement: "vitejsdev",
    // },

    // localeLinks: {
    //   text: "English",
    //   items: [
    //     { text: "简体中文", link: "https://cn.vitejs.dev" },
    //     { text: "日本語", link: "https://ja.vitejs.dev" },
    //     { text: "Español", link: "https://es.vitejs.dev" },
    //   ],
    // },

    footer: {
      message: `Released under the MIT License. (${commitRef})`,
      copyright: "Copyright © 2022-present by ProgNovel & Contributors",
    },

    nav: [
      { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
      // { text: "Config", link: "/config/", activeMatch: "/config/" },
      { text: "Plugins", link: "/plugins/", activeMatch: "/plugins/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            {
              text: "Why Impostor Server",
              link: "/guide/why",
            },
            {
              text: "Installation",
              link: "/guide/",
            },
            {
              text: "Tips and Caveats",
              link: "/guide/tips-and-caveats",
            },
          ],
        },
        {
          text: "APIs",
          items: [
            {
              text: "Client Side API",
              link: "/guide/client-side-api",
            },
            {
              text: "Service Workers API",
              link: "/guide/service-workers-api",
            },
            {
              text: "Utilities",
              link: "/guide/utilities",
            },
          ],
        },
      ],
      "/config/": [
        {
          text: "Config",
          items: [
            {
              text: "Configuring Vite",
              link: "/config/",
            },
            {
              text: "Shared Options",
              link: "/config/shared-options",
            },
            {
              text: "Server Options",
              link: "/config/server-options",
            },
            {
              text: "Build Options",
              link: "/config/build-options",
            },
            {
              text: "Preview Options",
              link: "/config/preview-options",
            },
            {
              text: "Dep Optimization Options",
              link: "/config/dep-optimization-options",
            },
            {
              text: "SSR Options",
              link: "/config/ssr-options",
            },
            {
              text: "Worker Options",
              link: "/config/worker-options",
            },
          ],
        },
      ],
    },
  },
});
