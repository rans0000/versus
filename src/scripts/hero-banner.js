import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/effect-fade/effect-fade.min.css';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, EffectFade],
    autoplay: true,
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
