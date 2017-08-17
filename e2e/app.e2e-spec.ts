import { Myapp02Page } from './app.po';

describe('myapp02 App', () => {
  let page: Myapp02Page;

  beforeEach(() => {
    page = new Myapp02Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
