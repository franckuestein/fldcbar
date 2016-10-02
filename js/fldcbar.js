var request = require('request');

(function updateInfo() {
    request("https://api.coinmarketcap.com/v1/ticker/foldingcoin/", function(error, response, body){
		jsonInfo = JSON.parse(body);
		// console.log(jsonInfo);
		priceStats(jsonInfo); // we send all the info from price API to function priceStats
	});
    setTimeout(updateInfo, 10000); // Refresh every 10 seconds
})();

function priceStats(arr){
	document.getElementById("priceBtc").innerHTML = arr[0]['price_btc']+" ฿";
	document.getElementById("priceUsd").innerHTML = arr[0]['price_usd']+" $";
	document.getElementById("volumeUsd").innerHTML = "Vol: "+arr[0]['24h_volume_usd']+" $";

	// 24h change check
	if (arr[0]['percent_change_24h'] > 0){
		document.getElementById("change").className += " up";
		document.getElementById("change").innerHTML = arr[0]['percent_change_24h']+" %";
	}else if (arr[0]['percent_change_24h'] < 0){
		document.getElementById("change").className += " down";
		document.getElementById("change").innerHTML = arr[0]['percent_change_24h']+" %";
	}else{
		document.getElementById("change").className += " same";
		document.getElementById("change").innerHTML = arr[0]['percent_change_24h']+" %";
	}
}

// Close app button. You can already use cmd+Q
const remote = require('electron').remote;
document.getElementById("quit").addEventListener("click", function (e) {
   var window = remote.getCurrentWindow();
   window.close();
});