import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Redis 笔记",
  description: "Redis 读书笔记",
  // 主题
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: '主页', link: '/' }
    ],

    // 左侧导航栏
    sidebar: [
      {
        text: '开篇',
        collapsed: true,
        items: [
          { text: '开篇词 | 这样学Redis，才能技高一筹', link: '/begin/01.md' },
        ]
      },{
        text: '基础篇',
        collapsed: true,
        items: [
          { text: '01 | 基本架构：一个键值数据库包含什么？', link: '/basic/01.md' },
          { text: '02 | 数据结构：快速的Redis有哪些慢操作？', link: '/basic/02.md' },
          { text: '03 | 高性能IO模型：为什么单线程Redis能那么快？', link: '/basic/03.md' },
          { text: '04 | AOF日志：宕机了，Redis如何避免数据丢失？', link: '/basic/04.md' },
          { text: '05 | 内存快照：宕机后，Redis如何实现快速恢复？', link: '/basic/05.md' }
        ]
      }
    ],

    // 项目github链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LizhenQiangCOOL/redisnote' }
    ],

    // 本地搜索
    search: {
      provider: 'local'
    },
    // 页面编辑
    editLink: {
      pattern: 'https://github.com/LizhenQiangCOOL/redisnote/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
  // markdown配置
  markdown:{
    image:{
      // 默认禁止图片懒加载ß
      lazyLoading:true
    }
  },
  // 最后更新时间ß
  lastUpdated: true
})
