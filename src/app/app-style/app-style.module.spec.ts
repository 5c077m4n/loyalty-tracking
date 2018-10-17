import { AppStyleModule } from './app-style.module';

describe('AppStyleModule', () => {
  let appStyleModule: AppStyleModule;

  beforeEach(() => {
    appStyleModule = new AppStyleModule();
  });

  it('should create an instance', () => {
    expect(appStyleModule).toBeTruthy();
  });
});
