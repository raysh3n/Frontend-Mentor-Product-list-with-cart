# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order cart__confirm-buttonation modal when they click "cart__confirm-button Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
 <br>Desktop <br>
![](./desktop%20Screenshot%202025-05-04%20at%2018-09-46%20Frontend%20Mentor%20Product%20list%20with%20cart.png)
![](./dekstop%20modal%20Screenshot%202025-05-04%20at%2018-14-31%20Frontend%20Mentor%20Product%20list%20with%20cart.png)
 <br>Mobile <br>
![](./mobile%20Screenshot%202025-05-04%20at%2018-10-23%20Frontend%20Mentor%20Product%20list%20with%20cart.png)
![](./mobile%20modal%20Screenshot%202025-05-04%20at%2018-10-34%20Frontend%20Mentor%20Product%20list%20with%20cart.png)


### Links

- Solution URL: [here](https://www.frontendmentor.io/solutions/responsive-product-list-with-cart-solution-ZAVv2G077e)
- Live Site URL: [here](https://fem-product-list-with-cart-raysh3n.netlify.app/)

## My process
 - spent quite a lot of time aligning the cart button to the image. 
 - spent quite a lot of time on the js logic. 



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned
#### JS
- using export import
- using event delegation


#### HTML 
- using dialog 
- using `<picture>`   


#### CSS
- study this part for the dialog 
```css
.dialog-confirmed__product-name {

    font-weight: 700;
    font-size: 0.9rem;


    /* Allow it to grow and take available space */
    /* min-width: 0; */
    /* Important for flex items to allow shrinking */

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

}
```
![like this](./overflow%20Screenshot%202025-05-04%20182400.png)




### Continued development
- Going to improve the Javascript part. A little bit messy. 


- not sure what why I cannot change `event.target.closest('.cart__remove-icon')` to `event.target.closest('.cart')`. It won't go to this if statement. Will find out why soon.

```js
 if (event.target.closest('.cart__remove-icon')) { 
        console.log('inside2');

        targetPoint = document.querySelector(`#product-${id}`).querySelector('.product__add-cart-button-quantity');
        console.log(targetPoint);
    }
```
   

- might tidy up the HTML and CSS as well. 