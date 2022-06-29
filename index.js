// Write your code here!

const main = document.getElementById('main');
main.remove();


const newHeader = document.createElement('h1');
newHeader.id = 'victory';

document.body.append('newHeader');

newHeader.textContent = 'YOUR-NAME is the champion';