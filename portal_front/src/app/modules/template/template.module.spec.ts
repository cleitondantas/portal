import { TemplateModule } from './template.module';

describe('PrincipalModule', () => {
  let principalModule: TemplateModule;

  beforeEach(() => {
    principalModule = new TemplateModule();
  });

  it('should create an instance', () => {
    expect(principalModule).toBeTruthy();
  });
});
