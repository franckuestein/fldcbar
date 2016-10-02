var menubar = require('menubar');
var mb = menubar({width: 400, height: 350, fullscreen: false})

mb.on('ready', function ready () {
	console.log('Running FoldingCoin ticker in your operating system.')
})

/*mb.on('after-create-window', function(){
	mb.window.openDevTools();
})*/