export const LIGHTHOUSE_DESKTOP_LINKS: {
  testName: string;
  url: string;
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  isMobile: boolean;
  reportName: string;
}[] = [
  {
    testName: 'Home page',
    url: '/',
    performance: 95,
    accessibility: 90,
    bestPractices: 95,
    seo: 100,
    isMobile: false,
    reportName: 'home-page',
  },
  // {
  //   testName: 'Login page',
  //   url: '/login',
  //   performance: 50,
  //   accessibility: 50,
  //   bestPractices: 50,
  //   seo: 50,
  //   isMobile: false,
  //   reportName: 'login-page',
  // },
  // {
  //   testName: 'Register page',
  //   url: '/register',
  //   performance: 50,
  //   accessibility: 50,
  //   bestPractices: 50,
  //   seo: 50,
  //   isMobile: false,
  //   reportName: 'register-page',
  // },
];
