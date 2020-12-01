import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

// import Layout from '../components/layout';
// import SEO from '../components/seo';

export default function NotFoundPage() {
	useEffect(() => {
		navigate('/');
	}, []);
	return (
		<div>
			<h1>404: Not Found</h1>
			<p>
				You just hit a route that doesn&#39;t exist... the
				sadness.
			</p>
		</div>
	);
}
