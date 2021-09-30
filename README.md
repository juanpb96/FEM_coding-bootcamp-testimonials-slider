# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects! 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

Mobile view 📱:

![Mobile solution preview](./design/Screenshot_mobile-preview.png)

Desktop view 💻:

![Desktop solution preview](./design/Screenshot_desktop-preview.png)

### Links

- Solution URL: [Click here](https://www.frontendmentor.io/solutions/mobilefirst-coding-bootcamp-testimonials-slider-Ixp2-oeW6)
- Live Site URL: [See live site here](https://juanbonilla.me/FEM_coding-bootcamp-testimonials-slider/)

## My process

### Built with

- Semantic HTML5 markup
- CSS / SCSS custom properties
- Flexbox
- Mobile-first workflow
- [Animate.css](https://animate.style/) - For animation styles

### What I learned

This challenge was perfect to test the `clamp` property that I saw for `font-size`. This is great to adapt the text according to the screen size. Below you can see how I implemented `clamp`: 

```scss
.testimonial__quote {
  font: 300 clamp(1.125rem, 2.3vw, 2rem)/1.5rem $f-family;
}
```
You can see how I included this one inside the `font` shorthand. `clamp` will take 3 values: min, default and max. So depending on the screen size the text won't be less than `1.125rem` nor higher than `2rem`, but can vary `2.3vw` and that is why the text can change dynamically its `font-size`.

### Continued development

This was an interesting challenge to implement the slider feature which I have not done before. I will continue looking for ways to do it better and learn how to create a functionality to move the slides by dragging them with the mouse.

### Useful resources

- [Animate.css](https://animate.style/) - This helped me when I was looking for some way of animate my slider every time the user clicked the slider buttons, this library can implement those animations easy and with no additional effort.

## Author

- Website - [juanbonilla.me](https://juanbonilla.me)
- Frontend Mentor - [@juanpb96](https://www.frontendmentor.io/profile/juanpb96)
- LinkedIn - [Juan Bonilla](https://www.linkedin.com/in/juan-pablo-bonilla-6b8730115/)