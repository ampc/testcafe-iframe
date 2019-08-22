import { ClientFunction } from 'testcafe';

class Helper {
  getLocation = ClientFunction(() => document.location.href);
  greetingText = (currentTime = new Date()) => {
    const currentHour = currentTime.getHours();
    const splitAfternoon = 13; // 24hr time to split the afternoon
    const splitEvening = 20; // 24hr time to split the evening

    if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
      // Between 12 PM and 5PM
      return 'Good afternoon';
    } else if (currentHour >= splitEvening) {
      // Between 5PM and Midnight
      return 'Good evening';
    }
    // Between dawn and noon
    return 'Good morning';
  };
  scrollToElement = ClientFunction((selector: Selector, offset: { x: number; y: number }) => {
    return new Promise((resolve) => {
      const element: any = selector();
      if (element && element.scrollIntoView) {
        element.scrollIntoView();
      }
      // do a small shift up and left
      if (window && window.scrollBy && offset) {
        window.scrollBy(offset.x, offset.y);
      }
      resolve();
    });
  });
}
export default new Helper();
