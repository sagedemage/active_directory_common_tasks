import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Active Directory - Common Tasks",
  description: "An article on the common tasks done on Active Directory.",
  base: "/active_directory_common_tasks/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/active_directory_common_tasks' }
    ]
  }
})
