import "@babel/polyfill"
import { handleSubmit } from "./formHandler";
const { TestScheduler } = require('jest');


/*test('Checking Valid value', () => {
    expect(handleSubmit('click')).toBe(2);
});*/

test( 'Checking sum', () => {  expect(1 + 2).toBe(3); });