namespace Common {
    class Carousel {
        // container                       : any;
        // images                          : any;
        // imageWidth                      : any;
        // imagesToSlide                   : any;
        //
        // position                        : any;
        //
        // lastImage                       : any;
        // lastImageOffsetLeft             : any;
        // firstImage                      : any;
        // firstImageOffsetLeft            : any;
        // parent                          : any;
        // parentOffsetLeft                : any;
        // parentOffsetRight               : any;

        constructor() {
            // this.initElems();

        }

        // private initElems(): void {
        //     this.container = $('.carousel-inner .images');
        //     this.images = this.container.find('img');
        //     this.imageWidth = this.images.width();
        //     this.imagesToSlide = screen.width < 768 ? 2 : 3;
        //
        //     this.position = parseInt(this.container.css('margin-left'));
        //
        //     this.lastImage = this.container[0].querySelector('img:last-child');
        //     this.lastImageOffsetLeft = this.lastImage.offsetLeft;
        //     this.firstImage = this.container[0].querySelector('img:first-child');
        //     this.firstImageOffsetLeft = this.firstImage.offsetLeft;
        //     this.parent = this.container[0].parentElement;
        //     this.parentOffsetLeft = this.parent.offsetLeft;
        //     this.parentOffsetRight = this.parent.offsetLeft + this.parent.offsetWidth;
        // }
    }
}
//
//
// const index = {
//
//     carousel(control, interval = 0) {
//
//         if (control.dataset.disabled)
//             return false;
//
//         if (!interval) {
//             clearInterval(this.carouselInterval);
//             const self = this;
//             setTimeout(() => self.setCarouselInterval(), 6000);
//         }
//
//         const container = $('.carousel-inner .images');
//         const images = container.find('img');
//         const imageWidth = images.width();
//         const imagesToSlide = screen.width < 768 ? 2 : 3;
//
//
//         let position = parseInt(container.css('margin-left'));
//
//         const lastImage = container[0].querySelector('img:last-child');
//         const lastImageOffsetLeft = lastImage.offsetLeft;
//         const firstImage = container[0].querySelector('img:first-child');
//         const firstImageOffsetLeft = firstImage.offsetLeft;
//         const parent = container[0].parentElement;
//         const parentOffsetLeft = parent.offsetLeft;
//         const parentOffsetRight = parent.offsetLeft + parent.offsetWidth;
//
//         if (firstImageOffsetLeft >= parentOffsetLeft - imageWidth && control.classList.contains('left')) {
//             container
//                 .css({marginLeft: (0 - this.carouselWidth) + 'px'})
//                 .removeClass('animated')
//                 .prepend(this.carouselImagesHTML);
//             position = parseInt(container.css('margin-left'));
//         } else if (lastImageOffsetLeft <= parentOffsetRight + imageWidth && control.classList.contains('right'))
//             container
//                 .removeClass('animated')
//                 .append(this.carouselImagesHTML);
//
//         const marginLeft = (control.classList.contains('right') ? position - imageWidth * imagesToSlide : position + imageWidth * imagesToSlide) + 'px';
//
//         container.addClass('animated').css({marginLeft: marginLeft});
//         control.setAttribute('data-disabled', 1);
//         setTimeout(() => control.removeAttribute('data-disabled'), 800);
//     },
//
//
//     carouselWidth: 0,
//     carouselImagesHTML: '',

//     init() {
//
//         const self = this;
//         $('.carousel-control').on('click', e => self.carousel(e.target, 0));
//         this.setCarouselInterval();
//
//     },
//
//     setCarouselInterval() {
//         const carouselControl = document.querySelector('.carousel-control.right');
//         const self = this;
//         clearInterval(this.carouselInterval);
//         this.carouselInterval = setInterval(() => self.carousel(carouselControl), 6000);
//     },
//
// };
//
// $(document).ready(() => {
//     $('.carousel-inner .images img').each((i, img) => index.carouselWidth += img.offsetWidth);
//     index.carouselImagesHTML = $('.carousel-inner .images').html();
//     index.init();
//
//     setTimeout(() => {
//         let anchor = window.location.hash;
//         if ($(anchor).length) {
//             window.scrollTo({
//                 top: $(anchor).offset().top - 90,
//                 behavior: 'smooth'
//             })
//         }
//     }, 200);
//
// });