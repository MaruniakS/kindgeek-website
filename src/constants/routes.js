const BASE_ROUTES = {
  TECHNOLOGIES: '/technologies',
  EXPERTISE: '/expertise',
  INDUSTRIES: '/industries'
};

const ROUTES = Object.freeze({
  INDEX: '/',
  WORK_PROCESS: '/work-process',
  ABOUT: '/about',
  TECHNOLOGIES: {
    INDEX: BASE_ROUTES.TECHNOLOGIES,
    JS: BASE_ROUTES.TECHNOLOGIES + '/js'
  }
});

export default ROUTES;
