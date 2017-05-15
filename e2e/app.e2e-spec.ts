import { GNetUiServicesPage } from './app.po';

describe('g-net-ui-services App', () => {
  let page: GNetUiServicesPage;

  beforeEach(() => {
    page = new GNetUiServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
