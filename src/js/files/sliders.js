import { tabs } from "../files/functions.js";
/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
if (document.querySelector('.main-home__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.main-home__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: false,
		speed: 1000,
		loop: true,
		preloadImages: true,
		lazy: true,
		// Эффекты
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		// Пагинация
		pagination: {
			el: '.main-home__dotts',
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.main-home__arrow-prev',
			nextEl: '.main-home__arrow-next',
		},

		// Брейкпоинты
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		// События
		on: {

		}
	});
}

document.querySelectorAll('.product__content').forEach(n => {
	const productSlider = new Swiper(n.querySelector('.product__slider'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		autoHeight: false,
		speed: 1000,
		preloadImages: true,

		// Пагинация
		pagination: {
			el: n.querySelector('.product__dotts'),
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.product__arrow-prev'),
			nextEl: n.querySelector('.product__arrow-next'),
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.1,
			},
			480: {
				slidesPerView: 1.5,
			},
			768: {
				slidesPerView: 2.8,
			},
			992: {
				slidesPerView: 3,
			},
			1268: {
				slidesPerView: 4,
			},
		},
		// События
		on: {

		}
	});
});

if (document.querySelector('.product-catalog')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.product-catalog', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: false,
		speed: 1000,
		preloadImages: true,

		// Пагинация
		pagination: {
			el: '.product-catalog__dotts',
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.product-catalog__arrow-prev',
			nextEl: '.product-catalog__arrow-next',
		},
	});
}

if (document.querySelector('.reviews__slider')) {
	new Swiper('.reviews__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 2,
		spaceBetween: 0,
		//autoHeight: true,
		speed: 1000,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		preloadImages: true,
		//lazy: true,

		// Пагинация
		pagination: {
			el: '.reviews__dotts',
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.reviews__arrow-prev',
			nextEl: '.reviews__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
				//autoHeight: true,
			},
			768: {
				slidesPerView: 1.5,
			},
			992: {
				slidesPerView: 2,
			},
			1268: {
				slidesPerView: 2,
			},
		},
		// События
		on: {

		}
	});
}

if (document.querySelector('.top-product-card__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.top-product-card__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 10,
		autoHeight: false,
		speed: 1000,
		preloadImages: true,

		// Пагинация
		pagination: {
			el: '.top-product-card__dotts',
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.top-product-card__arrow-prev',
			nextEl: '.top-product-card__arrow-next',
		},
	});
}


document.querySelectorAll('.tabs__body').forEach(n => {
	const areasApplicationSlider = new Swiper(n.querySelector('.areas-application__slider'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		slidesPerView: 1,
		spaceBetween: 10,
		autoHeight: false,
		speed: 1000,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.areas-application__arrow-prev'),
			nextEl: n.querySelector('.areas-application__arrow-next'),
		},
	});
});
