import "@babel/polyfill"
import { handleSubmit } from "./formHandler";
const { TestScheduler } = require('jest');


const editButton = document.createElement('button');
//editButton.setAttribute('id', 'edit');
//document.getElementById('edit').addEventListener('click');
editButton.addEventListener('click');


test('Checking Valid value', () => {
    expect(handleSubmit(editButton.simulate('click'))).toBe(2);
});

//test( 'Checking sum', () => {  expect(1 + 2).toBe(3); });
