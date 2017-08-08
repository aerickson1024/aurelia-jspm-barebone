export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([{
      route: ['', 'home'],
      moduleId: 'components/home/home',
      name: 'home',
      title: 'Home',
      nav: true
    }]);

    this.router = router;
  }
}
