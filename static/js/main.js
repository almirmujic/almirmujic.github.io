const copied = (val) => {
	let notification = document.querySelector('.notification');

	if (val) {
		notification.classList.add('copied');
	} else {
		notification.classList.remove('copied');
	}
};

const copyToClipboard = () => {
	const text = 'contact.almir@gmail.com';
	var dummy = document.createElement('input');
	document.body.appendChild(dummy);
	dummy.setAttribute('value', text);
	dummy.select();
	document.execCommand('copy');
	document.body.removeChild(dummy);
	copied(true);
	setTimeout(() => {
		copied(false);
	}, 2000);
	console.log('copied');
};
