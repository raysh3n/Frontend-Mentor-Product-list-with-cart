import '/styles/modern-normalize.css'
import '/styles/style.css'
import '/styles/product.css'
import '/styles/cart.css'
import '/styles/dialog.css'
import '/styles/utils.css'


//console.log('hi');


//addcart button 
//click the addtocart button, then change to quantity button.
//click outside the quantity button, will reset to addtocart button. 
//click the increment icon will update the cart number, add to cart if not exist, or update the quantity and value if already in the cart. 
//click the decrement icon will update the cart number, if exist, update the quanaty and value, if 0, remove it from the cart section
const addCartBtn = document.querySelectorAll('.product__add-cart-button');

addCartBtn.forEach(
  (btn)=>{
    btn.addEventListener('click', function (e) {

      const clickedButton=e.currentTarget; //pay attention im using currentTarget instead of target
      console.log(e.currentTarget);
      const productId = (clickedButton).closest('.product__image-section').closest('.product').id;

      const qtyBtn = document.createElement('button'); //creates a DOM element

      qtyBtn.className = 'product__add-cart-button--quantity';

      qtyBtn.innerHTML = `
    <div class="product__quantity-adjust product__quantity-decrement">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
        <path fill="currentcolor" d="M0 .375h10v1.25H0V.375Z"/>
      </svg>
    </div>
    <span>1</span>
    <div class="product__quantity-adjust product__quantity-increment">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
        <path fill="currentcolor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
      </svg>
    </div>
  `;


      clickedButton.parentNode.replaceChild(qtyBtn, clickedButton);


    })
});



document.addEventListener('click',function(){

});





//cart section
// x button when clicked will remove it, and also auto update the order total.



//confirm order
//display the pop up modal with order confirmed. 
// Using debounce on window resize

const orderBtn=document.querySelector('.cart__confirm-button');
const dialog=document.querySelector('dialog')
const closeBtn = document.querySelector('.dialog-confirmed-new-order');


orderBtn.addEventListener('click',()=>{
    // console.log('object');
  dialog.showModal();  
})

closeBtn.addEventListener('click', () => {
    dialog.close();
});
