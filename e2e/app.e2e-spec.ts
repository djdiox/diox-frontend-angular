import { DioxFrontendPage } from './app.po';

describe('diox-frontend App', () => {
  let page: DioxFrontendPage;

  beforeEach(() => {
    page = new DioxFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
