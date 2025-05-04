import '/styles/modern-normalize.css'
import '/styles/style.css'
import '/styles/product.css'
import '/styles/cart.css'
import '/styles/dialog.css'
import '/styles/utils.css'

import * as template from '/src/template.js'
import * as logic from '/src/logic.js'
import * as listener from '/src/eventListener'
//import * as dialog from '/src/dialog.js'




'use strict';

const randomSixDigit = Math.floor(100000 + Math.random() * 900000);

export var order = {
  id: randomSixDigit,
  totalPrice: 0
};
//window.order = order;

export var products = [];//[{id:0,quantity:5},{id:1,quantity:10}];
//window.products = products; //may type at console now, due to js declared as module, need to use this way

//order={product[], totalPrice}

//product=[ 
//{
// name:
// qty:
// productPricePerItem:
// productTotalPricePerItem:
//},
//{
// name:
// qty:
// pricePerItem:
// totalPricePerItem:
//}
// ]




/* in the end
order={
product :[ {
id:
name:
qty:
pricePerItem:
totalPricePerItem
},
{
productId:
productName:
productQuantity:
pricePerItem:
totalPricePerItem
},
totalPrice:
}
*/



listener.getEventStartLoad();


listener.getEventAddCartBtn();


listener.getEventCartDeleteItem();


//Dialog
listener.getEventOpenDialog();
listener.getEventCloseDialog();
listener.getEventOutsideDialog();






