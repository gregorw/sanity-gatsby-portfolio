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
                  buildHookId: '5d5fd236f6428fb5017c707f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zsfmba6j',
                  apiId: 'a24b853a-54bf-4f55-b79e-3545edade69b'
                },
                {
                  buildHookId: '5d5fd236590e5fa8245cc9d3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y9w1i62b',
                  apiId: '39e28d5e-1966-4432-a7c5-2347146a13d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gregorw/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-y9w1i62b.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
