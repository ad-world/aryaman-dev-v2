module.exports = {
	purge    : [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode : 'class', // or 'media' or 'class'
	theme    : {
		container : {
			center : true
		},
		colors    : {
			blue  : {
				dark  : '#5f85db',
				light : '#90b8f8'
			},
			grey  : {
				dark  : '#26282b',
				light : '#353941',
				main  : '#AAAAAA'
			},
			white : '#F4F9F9',
			sky   : {
				dark  : '#A4EBF3',
				light : '#CCF2F4'
			}
		}
	},
	variants : {
		extend : {}
	},
	plugins  : []
};
