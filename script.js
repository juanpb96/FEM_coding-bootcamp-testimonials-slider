const testimonials = document.getElementsByClassName('testimonial');
const testimonialList = Object.entries(testimonials);
testimonialList.forEach( el => el[1].classList.add('animate__animated', 'animate__fast') );
testimonialList[0][1].classList.add('active');

let activeTestimonial = 0;
const button = document.getElementsByClassName('button')[0];

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
        testimonialList[activeTestimonial][1].classList.remove('active');
        testimonialList[activeTestimonial][1].classList.remove('animate__fadeInLeft');
        testimonialList[activeTestimonial][1].classList.remove('animate__fadeInRight');

        if (e.target.id === 'btn--prev') {
            activeTestimonial = activeTestimonial - 1 < 0 ? testimonialList.length - 1 : activeTestimonial - 1;
            testimonialList[activeTestimonial][1].classList.add('animate__fadeInLeft');
        } else if (e.target.id === 'btn--next') {
            activeTestimonial = activeTestimonial + 1 === testimonialList.length ? 0 : activeTestimonial + 1;
            testimonialList[activeTestimonial][1].classList.add('animate__fadeInRight');
        }
        testimonialList[activeTestimonial][1].classList.add('active');
    };
});