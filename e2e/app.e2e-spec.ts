import { Ng2BootstrapPocPage } from './app.po';

describe('ng2-bootstrap-poc App', function() {
  let page: Ng2BootstrapPocPage;

  beforeEach(() => {
    page = new Ng2BootstrapPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
