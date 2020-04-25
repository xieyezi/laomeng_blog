module.exports = {
  base: "/laomeng_blog/", // 比如你的仓库是test
  title: " Flutter | 老孟程序员", //左上角的博客标题以及网站显示的标题
  description:
    "出版《Flutter 实战入门》一书，现任职于京东，专注分享Flutter原理及实践应用",
  theme: "antdocs",
  markdown: {
    lineNumbers: true,
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],

    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
      },
    ],
  ],
  themeConfig: {
    //主题配置项
    logo: "/logo.png",
    smoothScroll: true, //平滑滚动
    sidebarDepth: 1,
    repo: 'xieyezi/laomeng_blog',
    docsRepo: "xieyezi/laomeng_blog",
    docsBranch: 'gh-pages',
    editLinks: true, // 编辑链接
    editLinkText: "帮助我改善这个页面", // 链接字段
    lastUpdated: "最后更新时间", // 最后更新时间
    backToTop: true,
    ads: {
      style: 1,
      image: "https://s1.ax1x.com/2020/03/22/84PzLD.png",
      text:
        "如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在文档侧边栏等页面。",
      link: "https://github.com/xieyezi",
    },
    nav: [
      //导航栏
      { text: "首页", link: "/" },
      { text: "组件", link: "/flutter/" },
      { text: "最新文章", link: "/new/" },
      { text: "共建者计划", link: "/react/" },
      {
        text: "联系",
        items: [
          {
            text: "Github",
            link: "https://github.com/xieyezi",
          },
          {
            text: "掘金",
            link: "https://juejin.im/user/5c1cfe85e51d4511851c478d/posts",
          },
          {
            text: "微信",
            link: "https://i.loli.net/2020/04/05/itpSUfw1vNQc3sH.jpg",
          },
        ],
      },
    ],
  },

  plugins: [
    //美化相关：

    ["vuepress-plugin-reading-progress"], //顶部进度条
    [
      "vuepress-plugin-code-copy",
      {
        color: "#6D7EAD",
        successText: "🌈复制成功！🌈",
      },
    ],
    "@vuepress/last-updated", //显示文章最后更新时间

    //功能添加：
    [
      "vuepress-plugin-auto-sidebar",
      {
        titleMode: "lowercase",
      },
    ], //自动生成侧边栏
    [
      "permalink-pinyin",
      {
        lowercase: true,
        separator: "-",
      },
    ], //转换链接汉字为英文的插件
  ],
};
