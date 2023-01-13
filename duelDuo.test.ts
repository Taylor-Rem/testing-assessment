const { Builder, Capabilities, By } = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  await driver.get('http://localhost:4000/');
});

afterAll(async () => {
  await driver.sleep(500);
  await driver.quit();
});

test('page loads', async () => {
  const title = await driver.findElement(By.id('title'));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});
