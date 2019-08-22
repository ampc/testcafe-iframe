import LoginPage from "../../page_objects/login/LoginPage";
import endpoints from "../../../config/endpoints";
import data from "../../../config/data";
import Helper from "../../../utils/Helper";
import envs from "../../../config/envs";

fixture("Login").page(`${envs.baseUrl}${endpoints.login}`);

test("Login with invalid credentials", async t => {
  await LoginPage.login(data.users.userPrivate.username, "password");
  await t.expect(LoginPage.errorMessage.visible).ok();
  await t
    .expect(LoginPage.errorMessage.innerText)
    .contains("Credenciais inválidas.");
}).meta("regression", "true");

test("Login without email confirmation", async t => {
  await LoginPage.login(
    data.users.unconfirmedUser.username,
    data.users.unconfirmedUser.password
  );
  await t
    .expect(LoginPage.popUpDialogErrorMessage.innerText)
    .contains("Ocorreu um erro. Por favor tente novamente.");
}).meta("regression", "true");

test("Login with correct credentials", async t => {
  await LoginPage.login(
    data.users.userPrivate.username,
    data.users.userPrivate.password
  );
  await t.expect(Helper.getLocation()).contains(endpoints.personalAreaOverview);
})
  .meta("regression", "true")
  .meta("smoke", "true");
