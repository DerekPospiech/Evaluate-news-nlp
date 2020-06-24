import "@babel/polyfill"
import { postData } from "./newsChecker";
const { TestScheduler } = require('jest');

/*test('Checking Valid Post', () => {
    expect(postData('/', "https://wiki.ubuntu.com/").polarity != null).toBe(true);
});*/

test( 'Checking sum', () => {  expect(1 + 2).toBe(3); });
