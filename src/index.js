import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function componect() {
    var element = document.createElement('div');
    var btn = document.createElement('button');


    element.innerHTML = _.join(['hello', 'world'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(componect());

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
