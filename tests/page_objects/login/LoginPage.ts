import { Selector, t } from 'testcafe';
import BasePage from '../common/BasePage';

class LoginPage extends BasePage {
  public registerButton = Selector('a').withText('Registar');
  public usernameField = Selector('#username', { visibilityCheck: true });
  public passwordField = Selector('#password', { visibilityCheck: true });
  public loginButton = Selector('div.form-group').find('button');
  public errorMessage = Selector('#login-form > div:nth-child(4) > span');

  async login(username: string, password: string) {
    await t
      .hover(this.usernameField)
      .click(this.usernameField)
      .typeText(this.usernameField, username)
      .hover(this.passwordField)
      .click(this.passwordField)
      .typeText(this.passwordField, password)
      .hover(this.loginButton)
      .click(this.loginButton);
  }
}
export default new LoginPage();
