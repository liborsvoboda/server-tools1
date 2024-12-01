import Pageres from './dist/index.js';

await new Pageres({delay: 2})
	.source('https://seznam.cz', ['480x320', '1024x768'], {crop: true})
	.source('https://facebook.com', ['1280x1024', '1920x1080'])
	.source('data:text/html,<h1>Awesome!</h1>', ['1024x768'])
	.destination('screenshots')
	.run();

console.log('Finished generating screenshots!');
