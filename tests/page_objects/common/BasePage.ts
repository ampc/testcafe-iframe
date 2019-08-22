import { Selector } from 'testcafe';

export default class BasePage {
  public topNavBar = {
    userOverviewPageButton: Selector('a#user-name'),
    loginPageButton: Selector('a').withText('ENTRAR'),
    storePageButton: Selector('a').withText('LOJA'),
    networkPageButton: Selector('a').withText('REDE MOBI'),
    parcPageButton: Selector('a').withText('PARC'),
    otherServicesPageButton: Selector('a').withText('OUTROS SERVIÇOS'),
    aboutUsPageButton: Selector('a').withText('SOBRE NÓS'),
    user: {
      overviewButton: Selector('a').withText('Área pessoal'),
      accountButton: Selector('a').withText('Conta'),
      subscriptionsButton: Selector('a').withText('Subscrições'),
      usagesButton: Selector('a').withText('Movimentos'),
      invoicesButton: Selector('a').withText('Faturas'),
      logoutButton: Selector('a').withText('Terminar sessão'),
    },
  };
  public pageTitle = Selector('h1.page-title');
  public popUpDialogErrorMessage = Selector('#main-errors > ul > li');

  public popUpDialogMainMessageTitle = Selector('#main-messages > ul > li > h1:nth-child(2)');
  public popUpDialogMainMessageBody = Selector('#main-messages > ul > li > p');
  public popUpDialogCloseButton = Selector('popUp-container')
    .find('popUp-footer')
    .find('#button-close');

  public popUpDialogDefaultMessageBody = Selector('div.popUp-body > #default-popup-notice > ul > li > h1');
}
