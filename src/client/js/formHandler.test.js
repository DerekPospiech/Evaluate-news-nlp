import "@babel/polyfill"
import { handleSubmit } from "./formHandler";
import { postData } from "./newsChecker";
import { checkForNews } from "./newsChecker";
const { TestScheduler } = require('jest');



test('Checking Valid value', () => {
    document.body.innerHTML = `
    <input id="search" />
    <button id="submitButton">Submit</button>
  `;

    const searchInput = document.getElementById('search');
    const submitButton = document.getElementById('submitButton');
    const event = new Event('build');

    searchInput.value = 'Hello!';
    

    expect(handleSubmit(event)).toBe(2);
});


