'use strict'

export const getProductHTML = function (product, id) {

  const productElement = document.createElement('div');
  productElement.classList.add('product');
  productElement.id = `product-${id}`;

  productElement.innerHTML = `

        <div class="product__image-section">
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcset="${product.image.desktop}"
                />
                <source
                    media="(min-width: 768px)"
                    srcset="${product.image.tablet}"
                />
                <img
                    class="product__image"
                    src="${product.image.mobile}"
                    alt=""
                />
            </picture>

            <button class="product__add-cart-button product__add-cart-button--grouped">
                <span class="product__cart-icon product__add-cart-button--grouped"></span>
                <span class="product__add-cart-label product__add-cart-button--grouped">Add to Cart</span>
            </button>
        </div>

        <div class="product__info-section">
            <div class="product__category">${product.product__category}</div>
            <div class="product__name">${product.product__name}</div>
            <div class="product__price">${product.product__price.toFixed(2)}</div>
        </div>
  `;
  return productElement;
}






export const getQtyBtnHTML = function (qty = 1) {
  return `
    <div class="product__quantity-adjust product__quantity-decrement product__add-cart-button-quantity--grouped">
      <svg class="product__quantity-decrement product__add-cart-button-quantity--grouped" xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
        <path class="product__quantity-decrement product__add-cart-button-quantity--grouped" fill="currentcolor" d="M0 .375h10v1.25H0V.375Z"/>
      </svg>
    </div>
    <span class="product__add-cart-button-quantity--grouped product__quantity">${qty}</span>
    <div class="product__quantity-adjust product__quantity-increment product__add-cart-button-quantity--grouped">
      <svg class="product__add-cart-button-quantity--grouped product__quantity-increment" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
        <path class="product__add-cart-button-quantity--grouped product__quantity-increment" fill="currentcolor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
      </svg>
    </div>
  `;
}



export const getAddCartBtnHTML = function () {
  return `
								<span class="product__cart-icon product__add-cart-button--grouped"></span>
								<span class="product__add-cart-label product__add-cart-button--grouped">Add to Cart</span>
							`;
}


export const getEmptyCartHTML = function () {
  return `
    	<div class="cart__empty-section">
    <img src="/assets/images/illustration-empty-cart.svg" alt="" />
				<p class="cart__content-empty">Your added items will appear here</p>
                </div>
        `;
}


export const getCartItemHTML = function (product) {

  const cartItemElement = document.createElement('div');
  cartItemElement.classList.add('cart__item');
  cartItemElement.id = `cart-product-${product.productId}`;

  cartItemElement.innerHTML = `<div class="cart__item-info">
      <p class="cart__product-name">${product.productName}</p>
      <div class="cart__pricing">
        <div class="cart__quantity">${product.productQuantity}x</div>
        <div class="cart__price-per-item">@$${product.productPricePerItem.toFixed(2)}</div>
        <div class="cart__total-price">$${product.productTotalPricePerItem.toFixed(2)}</div>
      </div>
    </div>
    <div class="cart__remove-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentcolor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
    </div>`;

  return cartItemElement;
}


export const getCartFooterHTML = function (order) {
  return `<div class="cart__total-section">
						<div class="cart__total-label">Order Total</div>
						<div class="cart__total-amount">$${order.totalPrice.toFixed(2)}</div>
					</div>

					<div class="cart__carbon-info">
						<img
							class="cart__carbon-icon"
							src="/assets/images/icon-carbon-neutral.svg"
							alt=""
						/>
						This is a &nbsp;<span class="cart__carbon-bold">carbon-neutral</span
						>&nbsp; delivery
					</div>

					<button class="cart__confirm-button">Confirm Order</button> `
}



export const getModalItemHTML = function (product) {
  const productElement = document.createElement('div');
  productElement.classList.add('dialog-confirmed__item');
  // productElement.id = `product-${id}`;

  productElement.innerHTML = `
  <img class="dialog-confirmed__thumbnail" src="/assets/images/${product.productImageName}-thumbnail.jpg"></img>

    <div class="dialog-confirmed__middle">

	<p class="dialog-confirmed__product-name">${product.productName}</p>

							<div class="dialog-confirmed__pricing">
								<div class="dialog-confirmed__quantity">x${product.productQuantity}</div>
								<div class="dialog-confirmed__price-per-item">@$${product.productPricePerItem.toFixed(2)}</div>
							</div>

								</div>

						
 <div class="dialog-confirmed__total-price">$${product.productTotalPricePerItem.toFixed(2) }</div>`;



return productElement;

}