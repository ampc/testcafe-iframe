import BasePage from "../common/BasePage";
import { Selector, t } from "testcafe";

class StorePage extends BasePage {
  public bikeSharing = Selector(
    "div.service-item.icon.icon-bikesharing.tooltipstered",
    { visibilityCheck: true }
  );
  public bus = Selector(
    "div.service-item.icon.icon-publictransportation.tooltipstered",
    { visibilityCheck: true }
  );
  public parking = Selector(
    "div.service-item.icon.icon-parking.tooltipstered",
    { visibilityCheck: true }
  );
  public carSharing = Selector(
    "div.service-item.icon.icon-carsharing.tooltipstered",
    { visibilityCheck: true }
  );
  public bikeParking = Selector(
    "div.service-item.icon.icon-bikeparking.tooltipstered",
    { visibilityCheck: true }
  );
  public service = Selector(
    "a.product.product-item-action div.prod-service-name",
    { visibilityCheck: true }
  );
  public productName = Selector("a.product.product-item-action div.prod-name", {
    visibilityCheck: true
  });
  public status = Selector("a.product.product-item-action div.prod-note", {
    visibilityCheck: true
  });
  public subscribeButton = Selector("#product-page > div.prod-link > div > a", {
    visibilityCheck: true
  });
  public creditCardIframe = Selector("#braintree-hosted-field-number", {
    visibilityCheck: true
  });
  public creditCardNumber = Selector("input#credit-card-number", {
    visibilityCheck: true
  });
  public creditCardCvcIframe = Selector("#braintree-hosted-field-cvv", {
    visibilityCheck: true
  });
  public creditCardCvc = Selector("#cvv", { visibilityCheck: true });
  public expirationDateIframe = Selector(
    "#braintree-hosted-field-expirationDate",
    { visibilityCheck: true }
  );
  public expirationDate = Selector("#expiration", { visibilityCheck: true });
  public creditCardAssociationCheckbox = Selector(
    "input[name='card-associtation']"
  );
  public confirmSubscribeButton = Selector("button", {
    visibilityCheck: true
  }).withAttribute("type", "submit");
  public automaticRenewCheckbox = Selector(
    "#subscription-form > div.row > div:nth-child(4) > div > div > div > div > input[type=checkbox]",
    { visibilityCheck: true }
  );
  //Mobi BusCas Diário

  public mobibuscasProduct = Selector("div.prod-name")
    .find("p")
    .withText("MOBI BUSCAS DIÁRIO");
  public message = Selector("div.popUp-container div div#main-messages");
  /**
   *
   * @param productIndex
   * @param creditCardNumber
   * @param cvc
   * @param expirationDate
   * @param associateCard
   * @param automaticRenew
   */
  async subscribeProduct(
    // productIndex: number,
    creditCardNumber: string,
    cvc: string,
    expirationDate: string
  ) {
    await t
      //Click on a listed product
      .click(this.mobibuscasProduct)
      .click(this.subscribeButton);

    //Credit card
    await t
      // Credit card number
      .switchToIframe(this.creditCardIframe)
      // .hover(this.creditCardNumber)
      // .click(this.creditCardNumber)
      .typeText(this.creditCardNumber, creditCardNumber, { replace: true })
      .switchToMainWindow()

      //CVC
      .switchToIframe(this.creditCardCvcIframe)
      // .hover(this.creditCardCvc)
      // .click(this.creditCardCvc)
      .typeText(this.creditCardCvc, cvc, { replace: true })
      .switchToMainWindow()

      //Expiration date
      .switchToIframe(this.expirationDateIframe)
      // .hover(this.expirationDate)
      // .click(this.expirationDate)
      .typeText(this.expirationDate, expirationDate, { replace: true })
      .switchToMainWindow();
  }
}
export default new StorePage();
