const index = {

    carousel(control, interval = 0) {

        if (control.dataset.disabled)
            return false;

        if (!interval) {
            clearInterval(this.carouselInterval);
            const self = this;
            setTimeout(() => self.setCarouselInterval(), 6000);
        }

        const container = $('.carousel-inner .images');
        const images = container.find('img');
        const imageWidth = images.width();
        const imagesToSlide = screen.width < 768 ? 2 : 3;
        let position = parseInt(container.css('margin-left'));

        const lastImage = container[0].querySelector('img:last-child');
        const lastImageOffsetLeft = lastImage.offsetLeft;
        const firstImage = container[0].querySelector('img:first-child');
        const firstImageOffsetLeft = firstImage.offsetLeft;
        const parent = container[0].parentElement;
        const parentOffsetLeft = parent.offsetLeft;
        const parentOffsetRight = parent.offsetLeft + parent.offsetWidth;

        if (firstImageOffsetLeft >= parentOffsetLeft - imageWidth && control.classList.contains('left')) {        //РµСЃР»Рё СЃР»РµРІР° РЅРµС‚ РєР°СЂС‚РёРЅРѕРє
            container
                .css({marginLeft: (0 - this.carouselWidth) + 'px'})
                .removeClass('animated')
                .prepend(this.carouselImagesHTML);
            position = parseInt(container.css('margin-left'));
        } else if (lastImageOffsetLeft <= parentOffsetRight + imageWidth && control.classList.contains('right'))        //РµСЃР»Рё СЃРїСЂР°РІР° РЅРµС‚ РєР°СЂС‚РёРЅРѕРє
            container
                .removeClass('animated')
                .append(this.carouselImagesHTML);

        const marginLeft = (control.classList.contains('right') ? position - imageWidth * imagesToSlide : position + imageWidth * imagesToSlide) + 'px';

        container.addClass('animated').css({marginLeft: marginLeft});
        control.setAttribute('data-disabled', 1);
        setTimeout(() => control.removeAttribute('data-disabled'), 800);
    },


    carouselWidth: 0,
    carouselImagesHTML: '',

    init() {

        const self = this;
        $('.carousel-control').on('click', e => self.carousel(e.target, 0));
        this.setCarouselInterval();

    },

    setCarouselInterval() {
        const carouselControl = document.querySelector('.carousel-control.right');
        const self = this;
        clearInterval(this.carouselInterval);
        this.carouselInterval = setInterval(() => self.carousel(carouselControl), 6000);
    },

};

$(document).ready(() => {
    $('.carousel-inner .images img').each((i, img) => index.carouselWidth += img.offsetWidth);
    index.carouselImagesHTML = $('.carousel-inner .images').html();
    index.init();
});