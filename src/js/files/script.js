import { bodyLock, bodyUnlock } from "../files/functions.js";

//наведение/клик каталог
const menuButton = document.querySelector('.menu-button');
function menu() {
	if (menuButton) {
		const menuContent = document.querySelector('.menu__content');
		const menuTitles = document.querySelectorAll('.menu__sublink');
		if (document.documentElement.clientWidth > 991.98) {
			menuButton.addEventListener("mouseenter", function (e) {
				menuContent.classList.add("_hover")
				menuButton.classList.add("_hover")
			});
			menuContent.addEventListener("mouseenter", function (e) {
				menuContent.classList.add("_hover")
				menuButton.classList.add("_hover")
			});
			menuContent.addEventListener("mouseleave", function () {
				menuContent.classList.remove("_hover");
				menuButton.classList.remove("_hover");
			});
			menuButton.addEventListener("mouseleave", function () {
				menuContent.classList.remove("_hover");
				menuButton.classList.remove("_hover");
			});
			menuButton.addEventListener("click", function (e) {
				document.documentElement.classList.remove("_active-catalog")
			});
		} else {
			menuContent.classList.remove("_hover")
			menuButton.classList.remove("_hover")
			menuButton.addEventListener("mouseenter", function (e) {
				menuContent.classList.remove("_hover")
				menuButton.classList.remove("_hover")
			});
			menuContent.addEventListener("mouseenter", function (e) {
				menuContent.classList.remove("_hover")
				menuButton.classList.remove("_hover")
			});
			menuButton.addEventListener("click", function (e) {
				document.documentElement.classList.toggle("_active-catalog")
			});
			menuTitles.forEach(title => {
				title.addEventListener('click', async (e) => {
					document.documentElement.classList.toggle("_menu-catalog-active")

					let parent = e.target.parentNode

					if (parent.classList.contains('_active')) {
						parent.classList.remove('_active')
						menuContent.classList.remove("_active-column")
					} else {
						parent.classList.add('_active')
						menuContent.classList.add("_active-column")
					}
				})
			});
		}
	}
}
menu();

window.addEventListener("resize", function (e) {
	menu();
});

//========================================================================================================================================================

//Видео
const myVideos = document.querySelectorAll('.popup__video-item');
if (myVideos) {
	myVideos.forEach(myVideo => {
		myVideo.addEventListener('click', function (e) {
			let parent = e.target.parentNode

			if (parent.classList.contains('_active')) {
				parent.classList.remove('_active')
			} else {
				parent.classList.add('_active')
			}
			if (myVideo.paused) {
				myVideo.play();
			} else {
				myVideo.pause();
			}
		});
	});

}

//========================================================================================================================================================

//Скролл 
function scrollBlock() {

	let scrollBlocks = document.querySelectorAll('.scroll');

	if (scrollBlocks) {

		let speed = 2; // Скорость скролла.
		let left = 0;
		let top = 0;
		let drag = false;
		let coorX = 0;
		let coorY = 0;

		scrollBlocks.forEach(scrollBlock => {
			scrollBlock.addEventListener('mousedown', function (e) {
				drag = true;
				coorX = e.pageX;
				coorY = e.pageY;
			});
			document.addEventListener('mouseup', function () {
				drag = false;
				left = scrollBlock.scrollLeft;
				top = scrollBlock.scrollTop;
			});
			scrollBlock.addEventListener('mousemove', function (e) {
				if (drag) {
					this.scrollLeft = left - (e.pageX - coorX) * speed;
					this.scrollTop = top - (e.pageY - coorY) * speed;
				}
			});
		});

	}

};

scrollBlock()

//========================================================================================================================================================

const pageAbout = document.querySelector('.page__about');

function paralaxScroll() {
	if (pageAbout) {
		const pageAboutStones_1 = document.querySelector('.about__stone-1');
		const pageAboutStones_2 = document.querySelector('.about__stone-2');
		const position = pageAbout.offsetTop - 190;
		const height = pageAbout.offsetHeight;
		const header = document.querySelector('.header');
		const heightHeader = header.offsetHeight;

		const res = position - heightHeader;

		const offsetBottom = pageAbout.offsetTop + (height / 2);
		const res_2 = offsetBottom - heightHeader - 190;
		window.addEventListener("scroll", function (e) {
			var scroll = window.scrollY;
			if (scroll > res && scroll) {
				pageAboutStones_1.classList.add("_active")
			} else {
				pageAboutStones_1.classList.remove("_active")
			}
			if (scroll > res_2 && scroll) {
				pageAboutStones_2.classList.add("_active")
			} else {
				pageAboutStones_2.classList.remove("_active")
			}
		});
	}
}

paralaxScroll()
window.addEventListener("resize", function (e) {
	paralaxScroll()
});

