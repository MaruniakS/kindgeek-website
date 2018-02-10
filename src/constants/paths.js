const BASE_PATHS = {
  TECHNOLOGIES: '/technologies',
  EXPERTISE: '/expertise',
  INDUSTRIES: '/industries'
};

const PATHS = Object.freeze({
  INDEX: '/',
  WORK_PROCESS: '/work-process',
  ABOUT: '/about',
  TECHNOLOGIES: {
    INDEX: BASE_PATHS.TECHNOLOGIES,
    JS: BASE_PATHS.TECHNOLOGIES + '/js'
  },
  NOT_FOUND: '*'
});

export default PATHS;
