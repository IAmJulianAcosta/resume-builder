import Component from '@glimmer/component';

export default class RenderedResumeComponent extends Component {
  config = {
    layout: {
      sidebar: {
        active: true,
        position: 'left',
        height: 'full',
      },
      header: {
        barBelow: true,
      }
    },
    content: {
      header: {
        display: ['title', 'photo'],
        bar: {
          display: ['contact'],
        }
      },
      sidebar: {
        display: ['education', 'skills', 'languages'],
      },
      main: {
        display: ['summary', 'experience', 'projects']
      }
    },
    skills: {
      grouped: true,
      withDescription: true,
      showLevel: true,
    },
    experience: {
      groupByCompany: false,
      showSkills: true,
      descriptionAsList: true,
      showCity: true,
      showJobDuration: true
    },
    languages: {
      displayMode: 'displayAlternative',
      showLevel: true,
    },

  }

}
