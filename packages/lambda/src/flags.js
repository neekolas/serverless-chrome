const LOGGING_FLAGS = process.env.DEBUG ? ['--enable-logging', '--log-level=0', '--v=99'] : [];

export default [
	...LOGGING_FLAGS,
	'--disable-gpu',
	'--single-process', // Currently wont work without this :-(
	'--no-sandbox',
	'--headless',
	'--ignore-certificate-errors'
];
