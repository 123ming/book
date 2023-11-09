module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ces', link: '/ces/' },
      { text: 'ces2', link: '/ces2/' },
    ],
    sidebar: {
      '/ces/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],
      '/ces2/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],
    }
  }
}