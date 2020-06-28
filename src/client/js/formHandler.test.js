import "@babel/polyfill"
import { handleSubmit } from "./formHandler";
const { TestScheduler } = require('jest');


const editButton = document.createElement('button');
editButton.setAttribute('class', 'edit');
document.getElementById('edit').addEventListener('click');

test('Checking Valid value', () => {
    expect(handleSubmit(document.getElementById('edit').click())).toBe(2);
});

//test( 'Checking sum', () => {  expect(1 + 2).toBe(3); });
