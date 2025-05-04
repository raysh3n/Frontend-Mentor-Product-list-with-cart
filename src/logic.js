import * as template from '/src/template.js'


'use strict'

var totalquantity = 0;
const cartTotalQty = document.querySelector('.cart__total-quantity');




export const updateAddOrder = function (id) {


    const product = document.querySelector(`#product-${id}`);

    //update the array
    const productObject = products.find(object => object.productId === id);

    const cartContent = document.querySelector('.cart__content');
    const cartItemSection = document.querySelector('.cart__item-section');




    if (!productObject) {
        console.log('in');
        var qty = 1;
        const product = document.querySelector(`#product-${id}`);
        const name = product.querySelector('.product__name').textContent;
        const pricePerItem = parseFloat(product.querySelector('.product__price').textContent);
        const totalPricePerItem = pricePerItem * 1;
        const imageName = product.querySelector('.product__image')
            .src
            .split('/').pop()                // Step 1: Get the filename: "image-waffle-des-mobile.jpg"
            .split('.')[0]                  // Step 2: Remove the extension: "image-waffle-des-mobile"
            .split('-')                     // Step 3: Split into words: ["image", "waffle", "des", "mobile"]
            .slice(0, -1)                   // Step 4: Remove the last word: ["image", "waffle", "des"]
            .join('-');                     // Step 5: Join back: "image-waffle-des"



        const obj = {
            productId: id,
            productName: name,
            productImageName: imageName,
            productQuantity: qty,
            productPricePerItem: pricePerItem,
            productTotalPricePerItem: totalPricePerItem

        }
        products.push(obj);
        console.log(products);
        order.totalPrice += pricePerItem;


        //add to  the UI Cart
        totalquantity += 1;
        cartTotalQty.textContent = totalquantity;

        //update the Cart Section - qty and price


        //  cartContent.insertAdjacentHTML('afterbegin',getCartItemHTML(obj));
        if (document.querySelector('.cart__empty-section')) //if first time
        {
            const cartItemSection = document.createElement('div');
            cartItemSection.classList.add('cart__item-section');

            cartItemSection.appendChild(template.getCartItemHTML(obj));
            cartContent.innerHTML = '';
            cartContent.appendChild(cartItemSection);

            cartContent.insertAdjacentHTML('beforeend', template.getCartFooterHTML(order));

        } else {

            cartItemSection.appendChild(template.getCartItemHTML(obj));

            var cartTotalAmount = document.querySelector('.cart__total-amount');
            cartTotalAmount.textContent = `$${order.totalPrice.toFixed(2)}`;


        }





    } else {

        if (productObject.productQuantity <= 4) {

            productObject.productQuantity += 1;
            productObject.productTotalPricePerItem = productObject.productPricePerItem * productObject.productQuantity
            console.log(products);
            order.totalPrice += productObject.productPricePerItem;


            //update the UI button number
            product.querySelector('.product__quantity').textContent = productObject.productQuantity;

            totalquantity += 1;
            cartTotalQty.textContent = totalquantity;

            //update the Cart Section - qty and price

            //find the product in the cart and replace again 
            const cartProductItem = document.querySelector(`#cart-product-${id}`);
            if (cartProductItem) {

                const item = template.getCartItemHTML(productObject);
                cartItemSection.replaceChild(item, cartProductItem);


                var cartTotalAmount = document.querySelector('.cart__total-amount');
                cartTotalAmount.textContent = `$${order.totalPrice.toFixed(2)}`;

            }



        }


    }

}


export const updateMinusOrder = function (id, event) {


    const product = document.querySelector(`#product-${id}`);
    const cartProductItem = document.querySelector(`#cart-product-${id}`)
    const cartItemSection = document.querySelector(`.cart__item-section`)
    //update the array
    const productObject = products.find(object => object.productId === id);
    if (productObject.productQuantity > 1) { //need to CHANGE TO when more than 1. if 0, delete it instead from the 

        productObject.productQuantity -= 1;
        productObject.productTotalPricePerItem = productObject.productPricePerItem * productObject.productQuantity
        console.log(products);
        order.totalPrice -= productObject.productPricePerItem;


        //update the UI button number
        product.querySelector('.product__quantity').textContent = productObject.productQuantity;

        //update the Cart Section - qty and price 
        totalquantity -= 1;
        cartTotalQty.textContent = totalquantity;
        const item = template.getCartItemHTML(productObject);
        cartItemSection.replaceChild(item, cartProductItem);

        var cartTotalAmount = document.querySelector('.cart__total-amount');
        cartTotalAmount.textContent = `$${order.totalPrice.toFixed(2)}`;

    } else {
        const index = products.findIndex(object => object.productId === id);
        console.log(products);
        console.log(`${id}`); //1
        console.log(`index iss:  ${index}`);
        const pricePerItem = products[index].productPricePerItem
        products.splice(index, 1);
        console.log(products);
        order.totalPrice -= pricePerItem;

        //update the Cart Section - qty and price 
        totalquantity -= 1;
        cartTotalQty.textContent = totalquantity;



        cartProductItem.remove();




        //remove from  the UI Cart
        var cartTotalAmount = document.querySelector('.cart__total-amount');
        cartTotalAmount.textContent = `$${order.totalPrice.toFixed(2)}`;



        switchToAddCartButton(event);
    }

    //if afterwards the product is empty, switch batch to empty cart UI
    if (products.length === 0) {
        const cartContent = document.querySelector('.cart__content');
        cartContent.innerHTML = template.getEmptyCartHTML();
    }



}


export const removeProductCart = function(id, event) {

//remove from Cart totalPrice
    order.totalPrice -= Number(products.find(p => p.productId === id).productTotalPricePerItem);

    var cartTotalAmount = document.querySelector('.cart__total-amount');
    cartTotalAmount.textContent = `$${order.totalPrice.toFixed(2)}`;

//remove from UI
    document.querySelector(`#cart-product-${id}`).remove();
    
//update the totalquantity
    totalquantity -= Number(products.find(p => p.productId === id).productQuantity);
    cartTotalQty.textContent = totalquantity;





//remove from the prodcut array
    const index=products.findIndex(product=>product.productId===id);
    if(index!==-1) {
        products.splice(index,1);
        console.log('deletd')
    }




//show empty cart UI if no more
    if(products.length===0) {
        const cartContent = document.querySelector('.cart__content');
        cartContent.innerHTML = template.getEmptyCartHTML();
    }

    switchToAddCartButton(event,id)
}




//addcart button 
//click the addtocart button, then change to quantity button.
//click outside the quantity button, will reset to addtocart button. 
//click the increment icon will update the cart number, add to cart if not exist, or update the quantity and value if already in the cart. 
//click the decrement icon will update the cart number, if exist, update the quanaty and value, if 0, remove it from the cart section

//using event delegation
export const switchToQuantityButton = function (event) {
    console.log(event);
    const clickedButton = event.target.closest('.product__add-cart-button');
    console.log('clicked button is');
    console.log(clickedButton);
    const image = event.target.closest('.product__image-section').querySelector('img');   //const image = event.currentTarget.closest('.product__image-section').querySelector('img');
   

    image.classList.add('border-red');


    const qtyBtn = document.createElement('button'); //creates a DOM element
    qtyBtn.classList.add('product__add-cart-button-quantity');
    qtyBtn.classList.add('product__add-cart-button-quantity--grouped');
    // qtyBtn.className = 'product__add-cart-button-quantity--grouped';

    //check first if there is such productid in the object, if no, then no need pass as the dest has 1 as default, if have, find the qty from the array and pass the qty

    //get the clicked productid HEREHERE
    const retrievedId = Number(event.target.closest('.product').id.replace('product-', ''));//const retrievedId = Number(event.currentTarget.closest('.product').id.replace('product-', ''));
    //find it 
    var qty = 1;
    const product = products.find(element => element.productId === retrievedId);

    console.log(product);
    if (product) {
        qty = products.productQuantity;  //if have the product, then just grab from there
    } else {
        //if the product does not exist yet in the array, then add them in
        // addOrder(retrievedId);
        updateAddOrder(retrievedId);

    }



    qtyBtn.innerHTML = template.getQtyBtnHTML(qty);



    console.log(event.currentTarget.closest('.product__image-section'));
    event.target.closest('.product__image-section').replaceChild(qtyBtn, clickedButton);
    // event.currentTarget.parentNode.replaceChild(qtyBtn, clickedButton);
    return qtyBtn;
}

//using event delegation
export const switchToAddCartButton = function (event,id) {

var targetPoint;
console.log(event.target);
    // console.log(event.target.closest('.products__grid'));
    // console.log(event.target.closest('.cart__content'));

    console.log('target:', event.target);
    console.log('removeIcon:', event.target.closest('.cart__remove-icon'));
    console.log('cart:', event.target.closest('.cart__remove-icon')?.closest('.cart'));


    if (event.target.closest('.products')) {
        console.log('inside1');
        targetPoint =event.target;
    }

    if (event.target.closest('.cart__remove-icon')) { 
        console.log('inside2');

        targetPoint = document.querySelector(`#product-${id}`).querySelector('.product__add-cart-button-quantity');
        console.log(targetPoint);
    }

    const clickedButton = targetPoint.closest('.product__add-cart-button-quantity');
    console.log('clicked button is');
    console.log(clickedButton);
    const image = targetPoint.closest('.product__image-section').querySelector('img');
 // const image = event.currentTarget.closest('.product__image-section').querySelector('img');
    image.classList.remove('border-red');


    const addCartBtn = document.createElement('button'); //creates a DOM element
    addCartBtn.classList.add('product__add-cart-button');
    addCartBtn.classList.add('product__add-cart-button--grouped');
    // qtyBtn.className = 'product__add-cart-button-quantity--grouped';

    addCartBtn.innerHTML = template.getAddCartBtnHTML();
    console.log(event.currentTarget.closest('.product__image-section'));
    targetPoint.closest('.product__image-section').replaceChild(addCartBtn, clickedButton);
 //event.currentTarget.closest('.product__image-section').replaceChild(addCartBtn, clickedButton);
}