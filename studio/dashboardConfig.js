export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6040db0d704d28141dd1f77f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fz1urxpb',
                  apiId: '0e64fe5f-c7cf-45b8-bc24-e67353f756dd'
                },
                {
                  buildHookId: '6040db0dd8583b149a70315b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-axbcrq85',
                  apiId: '36cca41d-63b8-4209-9cba-5fa51b29627b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisbmac/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-axbcrq85.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
