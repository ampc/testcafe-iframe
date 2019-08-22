import BasePage from '../common/BasePage';
import { Selector } from 'testcafe';

class Overview extends BasePage {
  public activeUsagesTitle = Selector('#usages-active > h3');
  public usagesHistoryTitle = Selector('#usages-history > h3');
}

export default new Overview();
