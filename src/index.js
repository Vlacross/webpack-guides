// import _ from 'lodash';
import printMe from './print';


async function getComponent() {

	// return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
	// })
	// .catch(error => 'An error occured while loading the component');
	const element = document.createElement('div');
	const btn = document.createElement('button');

	const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.innerHTML = 'Click me and check the console!'
	btn.onclick = printMe

	element.appendChild(btn)

	return element;

}

getComponent()
.then(component => {
	document.body.appendChild(component);
})

// if (module.hot) {
// 	module.hot.accept('./print.js', function() {
// 		console.log('Accepting the updated printMe module!');
// 		printMe();
// 	})
// }

