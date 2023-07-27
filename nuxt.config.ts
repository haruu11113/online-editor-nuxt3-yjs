// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  app: {
    baseURL: process.env.BASE_URL,
  },
  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
})
