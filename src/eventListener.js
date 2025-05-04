
import * as main from '/src/main.js'
import * as template from '/src/template.js'
import * as logic from '/src/logic.js'



export const getEventStartLoad=function() {
    //window.addEventListener('load', function () {
    document.addEventListener('DOMContentLoaded',function(){
      console.log('hoshdoadhaohdad');
      
      fetch('/data.json').then(response=>{
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('resres');
        return response.json();
      }).then(
          products => {
          // Loop through the JSON array and call the abara function
          products.forEach(  ( product,index) => {
            const productItem=template.getProductHTML(product,++index);
            document.querySelector('.products__grid').appendChild(productItem);
    
          })
    })
    });
    
}




const productGridSection = document.querySelector('.products__grid');

export const getEventAddCartBtn = function() {
    productGridSection.addEventListener('click', function (event) {
        console.log('jock')
        if (event.target.classList.contains('product__add-cart-button--grouped')) {
            logic.switchToQuantityButton(event);
        }


        if (event.target.classList.contains('product__add-cart-button-quantity--grouped')) {
            if (event.target.classList.contains('product__quantity-decrement')) {

                const retrievedId = Number(event.target.closest('.product').id.replace('product-', ''));//const retrievedId = Number(event.currentTarget.closest('.product').id.replace('product-', ''));
                var qty = 1;
                const product = main.products.find(element => element.productId === retrievedId);
                console.log(product);
                if (product) {
                    logic.updateMinusOrder(retrievedId, event);
                } else {
                    logic.switchToAddCartButton(event); //if the value is 0, swtich back to addcart button
                }


            }

            if (event.target.classList.contains('product__quantity-increment')) {

                console.log('increment');
                //get the clicked productid HEREHERE
                const retrievedId = Number(event.target.closest('.product').id.replace('product-', ''));//const retrievedId = Number(event.currentTarget.closest('.product').id.replace('product-', ''));
                //find it 
                var qty = 1;
                const product = main.products.find(element => element.productId === retrievedId);

                console.log(product);
                if (product) {
                    logic.updateAddOrder(retrievedId);
                }

            }
        }

    });

}


export const getEventCartDeleteItem= function(){
    document.querySelector('.cart').addEventListener('click', (event) => {
        console.log(event);

        if (event.target.closest('.cart__remove-icon')) {
            console.log(event.target.closest('.cart-item'));
            const retrievedId = Number(event.target.closest('.cart__item').id.replace('cart-product-', ''));
            logic.removeProductCart(retrievedId, event)
        }




        if (event.target.classList.contains('cart__confirm-button')) {
            //reset all

            //populate first the dialog before show
            dialog.querySelector('.dialog-item-list').innerHTML = '';



            main.products.forEach(function (element) {
                dialog.querySelector('.dialog-item-list').appendChild(template.getModalItemHTML(element));
            });
            dialog.querySelector('.dialog-confirmed__total-amount').textContent = `$${main.order.totalPrice.toFixed(2)}`;

            dialog.showModal();
            // console.log(dialog.querySelector('.dialog-confirmed__total-amount'));

        }
    });
}
 






//Dialog

const orderBtn = document.querySelector('.cart__confirm-button');
const dialog = document.querySelector('dialog')
const closeBtn = document.querySelector('.dialog-confirmed-new-order');




 export const getEventOpenDialog= function() {
document.querySelector('.cart').addEventListener('click', (event) => {
  console.log(event);

  if (event.target.closest('.cart__remove-icon')) {
    console.log(event.target.closest('.cart-item'));
    const retrievedId = Number(event.target.closest('.cart__item').id.replace('cart-product-', ''));
    logic.removeProductCart(retrievedId,event)
  }




  if (event.target.classList.contains('cart__confirm-button')) {
//reset all

//populate first the dialog before show
    dialog.querySelector('.dialog-item-list').innerHTML='';



    main.products.forEach(function(element) {
      dialog.querySelector('.dialog-item-list').appendChild(template.getModalItemHTML(element));
    });
    dialog.querySelector('.dialog-confirmed__total-amount').textContent = `$${main.order.totalPrice.toFixed(2) }`;

    dialog.showModal();
   // console.log(dialog.querySelector('.dialog-confirmed__total-amount'));

  }
});
 };


export const getEventCloseDialog= function () {
    closeBtn.addEventListener('click', () => {
        dialog.close();
        location.reload();
    });

}

export const getEventOutsideDialog = function () {

    // close modal when clicking outside
    dialog.addEventListener('click', event => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!isInDialog) {
            dialog.close();
        }
    });



};








