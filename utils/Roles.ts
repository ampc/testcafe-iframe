import { Role } from "testcafe";
import endpoints from "../config/endpoints";
import LoginPage from "../tests/page_objects/login/LoginPage";
import data from "../config/data";
import Helper from "./Helper";
import envs from "../config/envs";

export const userStore = Role(
  `${envs.baseUrl}${endpoints.login}`,
  async t => {
    await LoginPage.login(
      data.users.userStore.username,
      data.users.userStore.password
    );
    await t.expect(Helper.getLocation()).contains("/personal-area/overview");
  },
  { preserveUrl: true }
);
