import React from 'react';
import '../styles/main.css';

export default function Home() {
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

	return (
		<div>
			<ul>
				<li>
					<h1>Updated portfolio coming soon.</h1>
				</li>
				<li>
					<span>
						Find my work on{' '}
						<a href="https://github.com/almirmujic">
							GitHub
						</a>
					</span>
				</li>
				<li>
					<span>
						Contact me by{' '}
						<a href="/" onClick={copyToClipboard}>
							Email
						</a>
					</span>
					<span class="notification">
						- copied to clipboard!
					</span>
				</li>
				<li>
					<span>
						Connect with me on{' '}
						<a href="https://linkedin.com/in/almirmujic">
							LinkedIn
						</a>
					</span>
				</li>
			</ul>
		</div>
	);
}
