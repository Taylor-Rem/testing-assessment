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

test('title is displayed on page load', async () => {
  const title = await driver.findElement(By.id('title'));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test('draw button displays choices div', async () => {
  const draw = await driver.findElement(By.id('draw'));
  const choices = await driver.findElement(By.id('choices'));
  await draw.click();
  expect(await choices.isDisplayed()).toBe(true);
});

test('clicking add to duo button displays div player-duo', async () => {
  const draw = await driver.findElement(By.id('draw'));
  await draw.click();
  const addToDuo = await driver.findElement(
    By.xpath('//*[contains(@class, "bot-btn")]')
  );
  await addToDuo.click();
  const playerDuo = await driver.findElement(By.id('player-duo'));
  expect(await playerDuo.isDisplayed()).toBe(true);
});
