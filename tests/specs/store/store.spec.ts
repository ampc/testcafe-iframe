import endpoints from "../../../config/endpoints";
import { Selector } from "testcafe";
import StorePage from "../../page_objects/store/StorePage";
import { userStore } from "../../../utils/Roles";
import Helper from "../../../utils/Helper";

fixture("Store").beforeEach(async t => {
  await t.useRole(userStore);
  await t.expect(Helper.getLocation()).contains(endpoints.personalAreaOverview);
  await t.hover(StorePage.topNavBar.storePageButton);
  await t.click(StorePage.topNavBar.storePageButton);
  await t.expect(Helper.getLocation()).contains(endpoints.store);
});

test("Subscribe without saving card information", async t => {
  const creditCard = "4111 1111 1111 1111";
  const cvc = "123";
  const expirationDate = "225"; //the system includes the zero for the month

  await StorePage.subscribeProduct(creditCard, cvc, expirationDate);
  await t
    .expect(StorePage.message.innerText)
    .contains("A subscrição foi efetuada com sucesso!");
}).meta("regression", "true");
