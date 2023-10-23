export default {
  lang: 'en-US',
  title: 'ts-monorepo-template',
  description: '',

  themeConfig: {
    repo: 'ts-monorepo-template/ts-monorepo-template',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/' }
    ],

    sidebar: {
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    { text: 'What is ts-monorepo-template?', link: '/' },
    { text: '@ts-monorepo-template/package1', link: '/package1' },
  ]
}

