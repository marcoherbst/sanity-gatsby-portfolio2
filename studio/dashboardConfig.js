export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5fc6b255a51aab5bb12bf59d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-cyqvd78e',
                  apiId: 'ace47a45-9ae4-4d4f-bb58-2b88e93fa4b1'
                },
                {
                  buildHookId: '5fc6b2566c3c56603310f3b3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-o3msbvyv',
                  apiId: 'efaf50cc-9505-4e3d-8624-ec9535c99a88'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcoherbst/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-o3msbvyv.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
