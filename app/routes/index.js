import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return {
      name: 'Julián Acosta',
      title: 'Software Engineer',
      photoUrl: '',
      summary: [
        `I’m full-stack senior developer with over 10 years of experience, with experience in single
      page application development, designing and implementing REST APIs and knowledge about UX
      design process. I am a perfectionist, meticulous, with a sensibility for visual details and I
      love to learn new things every day, I am motivated by working with talented engineers and to
      share my experience with my team.`,
        `During my career I have comprehended software development as the way we capture, analyze,
      transform and transport data between different systems, in order to fulfill business
      requirements, using the best, cost effective and simple algorithms, designs and strategies for
      each of the individual problems that these requirements bring on.`
      ],
      contact: {
        email: 'iam@julianacosta.me',
        phone: '+1 305',
        address: '',
        websites: [
          {
            name: null,
            url: 'https://julianacosta.me'
          },
        ],
        social: [
          {
            network: 'linkedIn',
            userName: 'iamjulianacosta',
          },
          {
            network: 'twitter',
            userName: 'iamjulianacosta',
            displayName: null,
          }
        ]
      },
      skills: [
        {
          type: 'main',
          title: 'Front-End Development',
          skills: [
            {
              name: 'JavaScript and Front-End development',
              description: 'I have broad JavaScript experience, developing complex single page applications, extensive knowledge about single page application frameworks, best performance practices and object-oriented JavaScript, using ES6 new features and syntax. Also, I have experience with JavaScript in the back end, using it to develop web servers, taking advantage of the event loop to generate high performance services.',
              level: 3.5
            }
          ]
        }
      ],
      languages: [
        {
          name: 'English',
          alternativeName: 'English',
          skill: 4.5
        },
        {
          name: 'Español',
          alternativeName: 'Spanish',
          skill: 5
        }
      ],
      experience: [
        {
          company: 'usermind',
          jobs: [
            {
              role: 'Front-End Lead Developer',
              skills: [
                `HTML`, `JavaScript`, `Ember.js`, `Node.js`, `Keycloak`, `JSON API`, `SASS`, `Bootstrap`, `Jenkins`, `Docker`, `Python`
              ],
              description: [
                `I oversaw team training, recruiting and mentoring team developers, making sure that they were motivated and balancing the team workload distributing tasks. Other responsibilities were getting requirements from product team, breaking it down into stories, and working with agile to ensure that new features were adequately tracked, and deadlines met, also doing feature technical planning, working with another teams to ensure interoperability between company systems.`,
                `I worked also in secondary projects for the company, implementing a SSO solution for the company, to integrate with different external systems and designed APIs for several services to make it consistent and compatible with the front-end, designing a Node.JS middleware to perform user management, also being a product owner for an end to end framework testing service that ensures the entire application is working correctly before deploying it.`
              ],
              city: 'Seattle, working remote',
              start: '2019-01-28',
              end: '2019-12-12'
            },
            {
              role: 'Front-End Senior Developer',
              description: [
                `As a developer, I was in charge of the company’s web application, developing its new features, making sure that it has high standards of maintainability and code quality, keeping its dependencies up to date; I did a progressive overhauling of about 75% of the application, enforcing repeatable patterns that ensured that all team members could maintain it better, reducing development and maintenance time and cost.`,
              ],
              city: 'Seattle, working remote',
              start: '2017-04-03',
              end: '2019-01-01'
            }
          ]
        }
      ],
      // experience: [
      //   {
      //     role: 'Front-End developer',
      //     company: 'Usermind',
      //     skills: [
      //       `HTML`, `JavaScript`, `Ember.js`, `Node.js`, `Keycloak`, `JSON API`, `SASS`, `Bootstrap`, `Jenkins`, `Docker`, `Python`
      //     ],
      //     description: [
      //       `As a developer, I was in charge of the company’s web application, developing its new features, making sure that it has high standards of maintainability and code quality, keeping its dependencies up to date; I did a progressive overhauling of about 75% of the application, enforcing repeatable patterns that ensured that all team members could maintain it better, reducing development and maintenance time and cost.`,
      //       `As a team leader, I oversaw team training, recruiting and mentoring team developers, making sure that they were motivated and balancing the team workload distributing tasks. Other responsibilities were getting requirements from product team, breaking it down into stories, and working with agile to ensure that new features were adequately tracked, and deadlines met, also doing feature technical planning, working with another teams to ensure interoperability between company systems.`,
      //       `I worked also in secondary projects for the company, implementing a SSO solution for the company, to integrate with different external systems and designed APIs for several services to make it consistent and compatible with the front-end, designing a Node.JS middleware to perform user management, also being a product owner for an end to end framework testing service that ensures the entire application is working correctly before deploying it.`
      //     ],
      //     city: 'Seattle, working Remote',
      //     start: '2017-04-03',
      //     end: '2019-12-12'
      //   }
      // ],
      education: [
        {
          name: 'Bachelor’s degree on Interactive Media Design',
          college: 'Universidad ICESI',
          city: 'Cali, Colombia',
          end: '2014-07-26',
        }
      ],
      projects: [
        {
          name: 'Resume builder',
          description: [''],
          url: 'https://github.com/iamjulianacosta/resume-builder'
        }
      ]
    }
  }
}
