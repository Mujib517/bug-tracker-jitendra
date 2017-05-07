import { BugTrackerJitendraPage } from './app.po';

describe('bug-tracker-jitendra App', function() {
  let page: BugTrackerJitendraPage;

  beforeEach(() => {
    page = new BugTrackerJitendraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
