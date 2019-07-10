import _ from 'lodash';
import './style.css';
import Proper from './proper.gif';

function component() {
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	const myGif = new Image();
	myGif.src = Proper;

	element.appendChild(myGif);

	return element;
}

document.body.appendChild(component());
