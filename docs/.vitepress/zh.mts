import { defineConfig, type DefaultTheme } from 'vitepress'
import { Guide, Reference } from './sidebar.mts'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '基于Vitepress的全功能技术文档最佳实践模板',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: Guide('en') },
      '/zh/reference/': { base: '/zh/reference/', items: Reference('en') },
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Joey Yang`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      link: '/zh/api-examples',
      activeMatch: '/zh/guide/'
    },
    {
      text: '参考',
      link: '/zh/reference/site-config',
      activeMatch: '/zh/reference/'
    },
    {
      text: "贡献",
      link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    }
  ]
}