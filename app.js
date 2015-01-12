(function(){
	var app = angular.module('gemStore', []);
	var gem = {
		name: 'Azurite',
		price: 2.95,
		description: "This is a gem",
		canPurchase: false
	}

	app.controller('ModalController', function(){
		this.showModal = false;
	})

	app.controller('StoreController', function(){
		this.products = gems;
		this.restockGems = function(product){
			// console.log(this.products)
			// console.log(product);
			for (var i = 0; i < gems.length; i++){
				gems[i].soldOut = false;
				// .soldOut = false;
			}
		}
	});

	var gems = [
		{ name: 'Azurite', price: 2.95, soldOut: false },
		{ name: 'Bloodstone', price: 5.95, soldOut: false },
		{ name: 'Zircon', price: 3.95, soldOut: false }
	]

})();