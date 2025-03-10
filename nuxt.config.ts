// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Wealth Academy",
      meta: [
        { name: "description", content: "get wealthy now and stop chasing money" },
        { name: "keywords", content: "wealth, make money, how to make money, get rich, wealth academy" },
        { name: "author", content: "Wealth Academy" },
        { property: "og:title", content: "Wealth Academy" },
        { property: "og:description", content: "get wealthy now and stop chasing money" },
        { property: "og:image", content: "/og-image.jpg" },
        { property: "og:url", content: "https://wealth-academy.vercel.app" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/invest.png" },
      ],
    },
  },

  compatibilityDate: '2024-11-01',
 
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
     scanPageMeta: 'after-resolve',
     sharedPrerenderData: false,
     compileTemplate: true,
   resetAsyncDataToUndefined: true,
     templateUtils: true,
       relativeWatchPaths: true,
       normalizeComponentNames: false,
       spaLoadingTemplateLocation: 'within',
       defaults: {
       useAsyncData: {
           deep: true
       }
       }
    },

  features: {
      inlineStyles: true
    },

  unhead: {
      renderSSRHeadOptions: {
        omitLineBreaks: false
      }
    },

  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon']
})