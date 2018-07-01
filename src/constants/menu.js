import PATHS from './paths';

export const MENU = [
  {
    title: 'services',
    path: '#services'
  },
  {
    title: 'expertise',
    path: PATHS.EXPERTISE.INDEX,
    children: [
      {
        title: 'ERP',
        path: PATHS.EXPERTISE.ERP
      },
      {
        title: 'Cloud Solutions',
        path: PATHS.EXPERTISE.CLOUD_SOLUTIONS
      },
      {
        title: 'Digital Transformation',
        path: PATHS.EXPERTISE.DIGITAL_TRANSFORMATION
      },
      {
        title: 'BlockChain',
        path: PATHS.EXPERTISE.BLOCK_CHAIN
      },
      {
        title: 'Product Management',
        path: PATHS.EXPERTISE.PRODUCT_MANAGEMENT
      },
      {
        title: 'Data Science',
        path: PATHS.EXPERTISE.DATA_SCIENCE
      },
      {
        title: 'High Load',
        path: PATHS.EXPERTISE.HIGH_LOAD
      },
      {
        title: 'UI/UX',
        path: PATHS.EXPERTISE.UI_UX
      }
    ]
  },
  {
    title: 'industries',
    children: [
      {
        title: 'HealthCare',
        path: PATHS.INDUSTRIES.HEALTH_CARE
      },
      {
        title: 'Education',
        path: PATHS.INDUSTRIES.EDUCATION
      },
      {
        title: 'Media',
        path: PATHS.INDUSTRIES.MEDIA
      },
      {
        title: 'Finance',
        path: PATHS.INDUSTRIES.FINANCE
      },
      {
        title: 'Retail',
        path: PATHS.INDUSTRIES.RETAIL
      }
    ]
  },
  {
    title: 'technologies',
    children: [
      {
        title: 'Java',
        path: PATHS.TECHNOLOGIES.JAVA
      },
      {
        title: 'PHP',
        path: PATHS.TECHNOLOGIES.PHP
      },
      {
        title: 'JS',
        path: PATHS.TECHNOLOGIES.JS
      },
      {
        title: 'IOS',
        path: PATHS.TECHNOLOGIES.IOS
      },
      {
        title: '.Net',
        path: PATHS.TECHNOLOGIES.C_SHARP
      }
    ]
  },
  {
    title: 'our work',
    children: [
      {
        title: 'WORK PROCESS',
        path: PATHS.WORK_PROCESS
      },
      {
        title: 'PROJECTS',
        path: PATHS.PORTFOLIOS.INDEX
      },
      {
        title: 'OUR STARS',
        path: PATHS.STARS
      },
      {
        title: 'REFERENCES',
        path: PATHS.TESTIMONIALS
      }
    ]
  },
  {
    title: 'company',
    children: [
      {
        title: 'OUR TEAM',
        path: PATHS.OUR_TEAM
      },
      {
        title: 'CAREERS',
        path: PATHS.CAREERS.INDEX
      },
      {
        title: 'BLOG',
        path: PATHS.BLOG
      }
    ]
  },
  {
    title: 'contact',
    path: '#contact'
  },
  {
    title: 'for startup',
    path: PATHS.SERVICES.START_UP,
    classes: 'startup-btn'
  }
];
