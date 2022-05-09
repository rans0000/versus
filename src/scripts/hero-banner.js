import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/effect-fade/effect-fade.min.css';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    autoplay: { delay: 5000, },
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
