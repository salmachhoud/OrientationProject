import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  favoriteUniversities: any = [];
	cartView: any = [];

  constructor() { }

  getCart() {
  	return this.favoriteUniversities;
  }

  addToCart(item) {
  	if(this.favoriteUniversities.length == 0) {
  		this.prependItemToCart(item);
  	} else {
  		let itemExists = this.checkItemExists(item);
  		if(itemExists) {
  			for(var a = 0; a < this.favoriteUniversities.length; a++) {
  				if(this.favoriteUniversities[a].name == item.name) {
  				}
  			}
  		} else {
  			this.prependItemToCart(item);
  		}
  	}
  }

  checkItemExists(item) {
  	for(var a = 0; a < this.favoriteUniversities.length; a++) {
  		if(this.favoriteUniversities[a].name == item.name) {
  			return true;
  		} else {
  			return false;
  		}
  	}
  }

  prependItemToCart(item) {
  	let newItem = {
      name: item.name,
      description: item.description,
  		quantity: 1,
  	}

  	this.favoriteUniversities.unshift(newItem);
  }

  removeItemFromCart(item) {
  	for(var index = 0; index < this.favoriteUniversities.length; index++) {
  		let cartItem = this.favoriteUniversities[index];
  		if(cartItem.name == item.name) {
  			if(cartItem.quantity > 1) {
  				cartItem.quantity -= 1;
  			} else {
  				this.favoriteUniversities.splice(index, 1);
  			}
  		}
  	}
  }

  emptyCart() {
  	this.favoriteUniversities = [];
  }

}
