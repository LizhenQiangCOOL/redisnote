import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Redis 笔记",
  description: "Redis 读书笔记",
  // 主题
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    //顶部导航
    nav: [
      { text: '主页', link: '/' }
    ],

    // 左侧导航栏
    sidebar: [
      {
        text: '开篇',
        collapsed: false,
        items: [
          { text: '开篇词 | 这样学Redis，才能技高一筹', link: '/begin/01.md' },
        ]
      },{
        text: '基础篇',
        collapsed: false,
        items: [
          { text: '01 | 基本架构：一个键值数据库包含什么？', link: '/basic/01.md' },
          { text: '02 | 数据结构：快速的Redis有哪些慢操作？', link: '/basic/02.md' },
          { text: '03 | 高性能IO模型：为什么单线程Redis能那么快？', link: '/basic/03.md' },
          { text: '04 | AOF日志：宕机了，Redis如何避免数据丢失？', link: '/basic/04.md' },
          { text: '05 | 内存快照：宕机后，Redis如何实现快速恢复？', link: '/basic/05.md' },
          { text: '06 | 数据同步：主从库如何实现数据一致？', link: '/basic/06.md' },
          { text: '07 | 哨兵机制：主库挂了，如何不间断服务？', link: '/basic/07.md' },
          { text: '08 | 哨兵集群：哨兵挂了，主从库还能切换吗？', link: '/basic/08.md' },
          { text: '09 | 切片集群：数据增多了，是该加内存还是加实例？', link: '/basic/09.md' },
          { text: '10 | 第1～9讲课后思考题答案及常见问题答疑', link: '/basic/10.md' }
        ]
      },{
        text: '实践',
        collapsed: false,
        items:[
          {
            text:"数据结构",
            collapsed: false,
            items:[
              { text: '11 | “万金油”的String，为什么不好用了？', link: '/practice/data_structure/11.md' },
              { text: '12 | 有一亿个keys要统计，应该用哪种集合？', link: '/practice/data_structure/12.md' },
              { text: '13 | GEO是什么？还可以定义新的数据类型吗？', link: '/practice/data_structure/13.md' },
              { text: '14 | 如何在Redis中保存时间序列数据？', link: '/practice/data_structure/14.md' },
              { text: '15 | 消息队列的考验：Redis有哪些解决方案？', link: '/practice/data_structure/15.md' },
            ]
          }
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
  // 最后更新时间
  lastUpdated: true
})
