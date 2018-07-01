const BASE_PATHS = {
  TECHNOLOGIES: '/technologies',
  EXPERTISE: '/expertise',
  INDUSTRIES: '/industries',
  PORTFOLIOS: '/portfolios',
  TESTIMONIALS: '/testimonials',
  CAREERS: '/careers',
  SERVICES: '/services'
};

const PATHS = Object.freeze({
  INDEX: '/',
  WORK_PROCESS: '/work-process',
  ABOUT: '/about',
  EXAMPLE: '/example',
  STARS: '/starts',
  OUR_TEAM: '/our-team',
  BLOG: 'http://lab.kindgeek.com/',
  CONTACT: '#contact',
  EXPERTISE: {
    INDEX: BASE_PATHS.EXPERTISE,
    ERP: BASE_PATHS.EXPERTISE + '/erp',
    CLOUD_SOLUTIONS: BASE_PATHS.EXPERTISE + '/cloud-solutions',
    DIGITAL_TRANSFORMATION: BASE_PATHS.EXPERTISE + '/digital-transformation',
    BLOCK_CHAIN: BASE_PATHS.EXPERTISE + '/block-chain',
    PRODUCT_MANAGEMENT: BASE_PATHS.EXPERTISE + '/product-management',
    DATA_SCIENCE: BASE_PATHS.EXPERTISE + '/data-science',
    HIGH_LOAD: BASE_PATHS.EXPERTISE + '/high-science',
    UI_UX: BASE_PATHS.EXPERTISE + '/ui-ux'
  },
  INDUSTRIES: {
    INDEX: BASE_PATHS.INDUSTRIES,
    HEALTH_CARE: BASE_PATHS.INDUSTRIES + '/health-care',
    EDUCATION: BASE_PATHS.INDUSTRIES + '/education',
    MEDIA: BASE_PATHS.INDUSTRIES + '/media',
    FINANCE: BASE_PATHS.INDUSTRIES + '/finance',
    RETAIL: BASE_PATHS.INDUSTRIES + '/retail'
  },
  TECHNOLOGIES: {
    INDEX: BASE_PATHS.TECHNOLOGIES,
    JAVA: BASE_PATHS.TECHNOLOGIES + '/java',
    PHP: BASE_PATHS.TECHNOLOGIES + '/php',
    JS: BASE_PATHS.TECHNOLOGIES + '/js',
    IOS: BASE_PATHS.TECHNOLOGIES + '/ios',
    C_SHARP: BASE_PATHS.TECHNOLOGIES + '/c-sharp'
  },
  PORTFOLIOS: {
    INDEX: BASE_PATHS.PORTFOLIOS
  },
  TESTIMONIALS: {
    INDEX: BASE_PATHS.TESTIMONIALS
  },
  CAREERS: {
    INDEX: BASE_PATHS.CAREERS
  },
  SERVICES: {
    INDEX: '/#services',
    START_UP: BASE_PATHS.SERVICES + '/startup'
  },

  NOT_FOUND: '*'
});

export default PATHS;
