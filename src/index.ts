import { concatenation } from "./concatenation";

const button = document.querySelector('buttton');
const input = document.querySelector('input');

if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
