var request = require('request');

(function updateInfoPolo() {
    request("http://api.cryptocoincharts.info/tradingPair/fldc_btc", function(error, response, body){
		jsonInfo = JSON.parse(body);
		priceStats(jsonInfo); // we send all the info from price API to function priceStats
	});
    setTimeout(updateInfoPolo, 10000); // Refresh every 10 seconds
})();

function priceStats(arr){
	var percent_change_24h = (arr.price - arr.price_before_24h) / arr.price_before_24h;

	// Poloniex
	document.getElementById("priceBtcPolo").innerHTML = arr.markets[0].price+" ฿";
	document.getElementById("volumeBtcPolo").innerHTML = "Vol: "+parseFloat(arr.markets[0].volume_btc).toFixed(2)+" ฿";

	// Bittrex
	document.getElementById("priceBtcTtrex").innerHTML = arr.markets[1].price+" ฿";
	document.getElementById("volumeBtcTtrex").innerHTML = "Vol: "+parseFloat(arr.markets[1].volume_btc).toFixed(2)+" ฿";

	// 24h change check
	if (percent_change_24h > 0){
		document.getElementById("change").className += " up";
		document.getElementById("change").innerHTML = "~ +"+percent_change_24h.toFixed(2)+" %";
	}else if (percent_change_24h < 0){
		document.getElementById("change").className += " down";
		document.getElementById("change").innerHTML = "~ -"+percent_change_24h.toFixed(2)+" %";
	}else{
		document.getElementById("change").className += " same";
		document.getElementById("change").innerHTML = "~"+percent_change_24h.toFixed(2)+" %";
	}
}

// Close app button. You can already use cmd+Q in macOS
const remote = require('electron').remote;
document.getElementById("quit").addEventListener("click", function (e) {
   var window = remote.getCurrentWindow();
   window.close();
});