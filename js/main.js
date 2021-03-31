(() => {
	document.addEventListener('DOMContentLoaded', () => {
		/***************************************************************************************************************************************************************************/
		document.querySelector('.header__burger').addEventListener('click', function () {
			let headerBurger = document.querySelector('.header__burger');
			let headerNav = document.querySelector('.nav');
			headerBurger.classList.toggle('header__burger--active');
			if (headerNav.style.top !== '0px') {
				headerNav.classList.add('nav--active');
				setTimeout(function () {
					headerNav.style.top = '0px';
				}, 100)
			} else {
				headerNav.style.top = '-768px';
				setTimeout(function () {
					headerNav.classList.remove('nav--active');
				}, 200)
			}
		});
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		function calculateWindowSize() {
			let windowSize = window.innerWidth;
			window.addEventListener('resize', function () {
				windowSize = window.innerWidth;
			});
			return windowSize;
		};
		document.querySelector('.header-search__btn').addEventListener('click', function (e) {
			let headerSearchInput = document.querySelector('.header-search__input');
			headerSearchInput.classList.toggle('header-search__input--active');
			let headerSearchInputActive = document.querySelector('.header-search__input--active');
			if (calculateWindowSize() < 1024) {
				document.querySelector('.header__logo').style.display = 'none';
				document.querySelector('.header__burger').style.display = 'none';
				document.querySelector('.header-search__close').style.display = 'block';
				headerSearchInput.closest('.header-search').style.width = '100%';
			}
			if (headerSearchInput.classList.contains('header-search__input--active')) {
				e.preventDefault();
			}
			if (calculateWindowSize() < 576) {
				document.querySelector('.header').classList.add('header--search-active');
			};
		});
		document.querySelector('.header-search__close').addEventListener('click', function (e) {
			e.preventDefault();
			let headerSearchInput = document.querySelector('.header-search__input');
			headerSearchInput.classList.remove('header-search__input--active')
			headerSearchInput.closest('.header-search').style.width = 'auto';
			document.querySelector('.header__logo').style.display = 'block';
			document.querySelector('.header__burger').style.display = 'block';
			document.querySelector('.header-search__close').style.display = 'none';
			if (calculateWindowSize() < 576) {
				document.querySelector('.header').classList.remove('header--search-active');
			}
		});
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		new Swiper('.hero-swiper', {
			effect: 'fade',
			simulateTouch: false,
			navigation: false,
			pagination: false,
			preloadImages: false,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			lazy: {
				loadOnTransitionStart: false,
				loadPrevNext: false,
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			}
		});
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		const dropDownBtn = document.querySelectorAll('.menu__btn');
		document.onclick = function (event) {
			const target = event.target;
			if (!target.closest('.menu__item') && !target.closest('.drop-down')) {
				const dropDown = document.querySelectorAll('.drop-down');
				dropDown.forEach(function (e) {
					e.classList.remove('drop-down--active');
				});
				dropDownBtn.forEach(function (e) {
					e.classList.remove('menu__btn--active');
				});
			};
		};
		for (let index = 0; index < dropDownBtn.length; index++) {
			const element = dropDownBtn[index];
			element.addEventListener('click', function () {
				if (element.classList.contains('menu__btn--active')) {
					element.classList.remove('menu__btn--active');
				} else {
					dropDownBtn.forEach(function (e) {
						e.classList.remove('menu__btn--active');
					});
					element.classList.add('menu__btn--active');
				};
				const dropDown = document.querySelectorAll('.drop-down');
				if (dropDown.item(index).classList.contains('drop-down--active')) {
					dropDown.item(index).classList.remove('drop-down--active');
				} else {
					dropDown.forEach(function (e) {
						e.classList.remove('drop-down--active');
					});
					dropDown.item(index).classList.add('drop-down--active');
				};
			});
		};
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		function smoothScroll(btn) {
			btn.addEventListener('click', function (event) {
				let href = this.getAttribute('href').replace('#', '');
				let sectionOffset = document.getElementById(href);
				sectionOffset.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
				event.preventDefault();
			});
		};
		let navLinks = document.querySelectorAll('.nav__link');
		for (let i = 0; i < navLinks.length; i++) {
			const element = navLinks[i];
			smoothScroll(element);
		}
		let heroLink = document.querySelector('.hero__link');
		smoothScroll(heroLink);

		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		let select = function () {
			let selectHeader = document.querySelectorAll('.filter__header');
			let selectItem = document.querySelectorAll('.filter__item');
			selectHeader.forEach(item => {
				item.addEventListener('click', selectToggle);
			});
			selectItem.forEach(item => {
				item.addEventListener('click', selectChoose);
			});
			function selectChoose() {
				let selectItemText = this.innerText,
					select = this.closest('.filter'),
					currentText = select.querySelector('.filter__current');
				currentText.innerText = selectItemText;
				select.classList.remove('filter-active');
			};
			function selectToggle() {
				this.parentElement.classList.toggle('filter-active');
				let currentText = this.closest('.filter').querySelector('.filter__current');
				for (let index = 0; index < selectItem.length; index++) {
					const el = selectItem[index];
					if (currentText.innerText === el.innerText) {
						el.classList.add('filter__item--hidden');
					} else {
						el.classList.remove('filter__item--hidden');
					};
				};
			};
		};
		select();
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		let gallerySwiper = null;
		function gallerySwiperInit() {
			gallerySwiper = new Swiper('.gallery-swiper', {
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				navigation: {
					nextEl: '.gallery-swiper__btn-next',
					prevEl: '.gallery-swiper__btn-prev'
				},
				pagination: {
					type: 'fraction',
					el: '.gallery-swiper__pagination'
				},
				keyboard: {
					enabled: true,
					onlyInViewport: true,
					pageUpDown: true
				},
				breakpoints: {
					1580: {
						spaceBetween: 50,
						slidesPerColumn: 2,
						slidesPerView: 3
					},
					1200: {
						slidesPerColumn: 2,
						slidesPerView: 3,
						spaceBetween: 34
					},
					1024: {
						slidesPerColumn: 2,
						slidesPerView: 2,
						spaceBetween: 34
					},
					850: {
						slidesPerColumn: 2,
						slidesPerView: 3,
						spaceBetween: 34
					},
					700: {
						slidesPerColumn: 2,
						slidesPerView: 2,
						spaceBetween: 34
					},
					576: {
						slidesPerColumn: 2,
						slidesPerView: 2,
						spaceBetween: 34
					},
					320: {
						slidesPerColumn: 1,
						slidesPerView: 1,
						spaceBetween: 34
					},
				},
			});
		};
		gallerySwiperInit()
		function gallerySwiperDestroy() {
			if (gallerySwiper) {
				gallerySwiper.destroy();
				gallerySwiper = null;
			};
		};
		window.addEventListener('resize', () => {
			gallerySwiperDestroy();
			gallerySwiperInit();
		});
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		const popupLinks = document.querySelectorAll('.popup-link');
		const body = document.querySelector('body');
		const popupCloseIcon = document.querySelectorAll('.close-popup');
		let unlock = true;
		const timeout = 800;
		if (popupLinks.length > 0) {
			for (let index = 0; index < popupLinks.length; index++) {
				const popupLink = popupLinks[index];
				popupLink.addEventListener('click', function (e) {
					const popupName = popupLink.getAttribute('href').replace('#', '');
					const currentPopup = document.getElementById(popupName);
					popupOpen(currentPopup);
					e.preventDefault();
				});
			};
		};
		if (popupCloseIcon.length > 0) {
			for (let index = 0; index < popupCloseIcon.length; index++) {
				const el = popupCloseIcon[index];
				el.addEventListener('click', function (e) {
					popupClose(el.closest('.popup'));
					e.preventDefault();
				});
			};
		};
		function popupOpen(currentPopup) {
			if (currentPopup && unlock) {
				const popupActive = document.querySelector('.popup.open');
				if (popupActive) {
					popupClose(popupActive, false);
				} else {
					bodyLock();
				};
				currentPopup.classList.add('open');
				currentPopup.addEventListener('click', function (e) {
					if (!e.target.closest('.popup__content')) {
						popupClose(e.target.closest('.popup'));
					};
				});
			};
		};
		function popupClose(popupActive, doUnlock = true) {
			if (unlock) {
				popupActive.classList.remove('open');
				if (doUnlock) {
					bodyUnlock();
				};
			};
		};
		function bodyLock() {
			const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
			body.style.paddingRight = lockPaddingValue;
			body.classList.add('lock');
			unlock = false;
			setTimeout(function () {
				unlock = true;
			}, timeout);
		};
		function bodyUnlock() {
			setTimeout(function () {
				body.style.paddingRight = '0px';
				body.classList.remove('lock');
			}, timeout);
			unlock = false;
			setTimeout(function () {
				unlock = true;
			}, timeout);
		};
		(function () {
			// проверяем поддержку
			if (!Element.prototype.closest) {
				// реализуем
				Element.prototype.closest = function (css) {
					var node = this;
					while (node) {
						if (node.matches(css)) return node;
						else node = node.parentElement;
					}
					return null;
				};
			}
		})();
		(function () {
			// проверяем поддержку
			if (!Element.prototype.matches) {
				// определяем свойство
				Element.prototype.matches = Element.prototype.matchesSelector ||
					Element.prototype.webkitMatchesSelector ||
					Element.prototype.mozMatchesSelector ||
					Element.prototype.msMatchesSelector;
			}
		})();
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		const accordionBlock = document.querySelectorAll('.accordion__date');
		const accordionLists = document.querySelectorAll('.accordion__list');
		for (let i in accordionBlock) {
			i = parseInt(i);
			if (i !== 0 && i !== 7 && i !== 14 && i !== 21) continue;
			accordionBlock[i].classList.add('accordion__date--active');
		}
		for (let i in accordionLists) {
			i = parseInt(i);
			if (i !== 0 && i !== 7 && i !== 14 && i !== 21) continue;
			accordionLists[i].classList.add('accordion__list--active');
		}
		for (let index = 0; index < accordionBlock.length; index++) {
			const el = accordionBlock[index];
			el.addEventListener('click', function () {
				const currentAccordionBlock = this,
					currentAccordionBlockClass = currentAccordionBlock.classList.contains('accordion__date--active');
				currentAccordionBlock.closest('.accordion').querySelectorAll('.accordion__date').forEach(function (accBlo) {
					accBlo.classList.remove('accordion__date--active');
				});
				if (currentAccordionBlockClass) {
					currentAccordionBlock.classList.remove('accordion__date--active');
				} else {
					currentAccordionBlock.classList.add('accordion__date--active');
				};
				const accordionList = this.closest('.accordion__block').querySelector('.accordion__list'),
					accordionListClass = accordionList.classList.contains('accordion__list--active');
				if (accordionListClass) {
					accordionList.classList.remove('accordion__list--active');
				} else {
					currentAccordionBlock.closest('.accordion').querySelectorAll('.accordion__list').forEach(function (accBlo) {
						accBlo.classList.remove('accordion__list--active');
					});
					accordionList.classList.add('accordion__list--active');
				};
			});
		};
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		const painterBtns = document.querySelectorAll('.accordion__tab');
		for (let index = 0; index < painterBtns.length; index++) {
			const el = painterBtns[index];
			const closestPainterContent = el.closest('.catalog__content').querySelectorAll('.painter__content');
			closestPainterContent.forEach(function (painterContent) {
				painterContent.style.display = "none";
			});
			const painterContents = document.querySelectorAll('.painter__content');
			for (let painterContent of painterContents) {
				const painterContentData = painterContent.dataset.targetPainter;
				if (painterContentData !== 'domeniko-girlandaio' && painterContentData !== 'giorgione' &&
					painterContentData !== 'Carl-D-F-Bach' && painterContentData !== 'alekseev') continue;
				painterContent.style.opacity = '1';
				painterContent.style.display = 'block';
			};
			el.addEventListener('click', function (event) {
				const currentPainterBtn = this;
				currentPainterBtn.closest('.catalog__content').querySelectorAll('.accordion__tab').forEach(function (painterBtn) {
					painterBtn.classList.remove('accordion__tab--active');
				});
				currentPainterBtn.classList.add('accordion__tab--active');
				const painter = event.currentTarget.dataset.painter,
					closestPainterContent = this.closest('.catalog__content').querySelectorAll('.painter__content');
				closestPainterContent.forEach(function (painterContent) {
					painterContent.style.display = "none";
				});
				function fadeIn(el) {
					var opacity = 0.01;
					document.querySelector(el).style.display = "block";
					var timer = setInterval(function () {
						if (opacity >= 1) {
							clearInterval(timer);
						}
						document.querySelector(el).style.opacity = opacity;
						opacity += opacity * 0.1;
					}, 10);
				}
				let emptyPainters = document.querySelectorAll('.painter');
				let emptyPainterWidth = window.getComputedStyle(document.querySelector(`[data-empty-painter-width]`)).maxWidth;
				if (document.querySelector(`[data-target-painter="${painter}"]`)) {
					fadeIn(`[data-target-painter="${painter}"]`);
					for (const emptyPainter of emptyPainters) {
						emptyPainter.style.minWidth = '0px';
					}
				} else {
					for (const emptyPainter of emptyPainters) {
						emptyPainter.style.minWidth = emptyPainterWidth;
					};
				};
				function smoothScrollData(btn) {
					let dataAttr = btn.dataset.painter;
					let targetDataAttr = document.querySelector(`[data-target-painter="${dataAttr}"]`)
					if (targetDataAttr !== null) {
						targetDataAttr.scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						});
					}
				};
				if (calculateWindowSize() <= 1023) {
					smoothScrollData(el);
				};
			});
		};

		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		const languageBtns = document.querySelectorAll('.languages__tab');
		for (let index = 0; index < languageBtns.length; index++) {
			const el = languageBtns[index];
			const catalogContent = document.querySelectorAll('.catalog__content');
			catalogContent.forEach(function (catCon) {
				catCon.style.display = "none";
			});
			document.querySelector(`[data-target-language="french"]`).style.display = "block";
			languageBtns.forEach(function (languageBtn) {
				languageBtn.closest('.languages__item').classList.remove('languages__tab--active');
			});
			document.querySelector(`[data-language="french"]`).disabled = true;
			document.querySelector(`[data-language="french"]`).closest('.languages__item').classList.add('languages__tab--active');
			el.addEventListener('click', function (event) {
				const currentLanguageBtn = this;
				languageBtns.forEach(function (languageBtn) {
					languageBtn.disabled = false;
					languageBtn.closest('.languages__item').classList.remove('languages__tab--active');
				});
				currentLanguageBtn.disabled = true;
				currentLanguageBtn.closest('.languages__item').classList.add('languages__tab--active');
				const catCon = event.currentTarget.dataset.language,
					allCatalogContents = document.querySelectorAll('.catalog__content');
				allCatalogContents.forEach(function (allCatalogContent) {
					allCatalogContent.style.display = "none";
				});
				function fadeIn(el) {
					var opacity = 0.01;
					document.querySelector(el).style.display = "block";
					var timer = setInterval(function () {
						if (opacity >= 1) {
							clearInterval(timer);
						}
						document.querySelector(el).style.opacity = opacity;
						opacity += opacity * 0.1;
					}, 10);
				}
				if (document.querySelector(`[data-target-language="${catCon}"]`)) {
					fadeIn(`[data-target-language="${catCon}"]`)
				};
			});
		};
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		const eventsBtn = document.querySelector('.events__btn');
		const eventsColumns = document.querySelectorAll('.events__column');
		eventsBtn.addEventListener('click', function (event) {
			eventsBtn.remove();
			for (let index = 0; index < eventsColumns.length; index++) {
				const el = eventsColumns[index];
				el.style.display = "flex";
			};
		});
		let eventsSwiper = null;
		function eventsSwiperInit() {
			eventsSwiper = new Swiper('.events__swiper', {
				slidesPerView: 1,
				slidesPerColumn: 1,
				spaceBetween: 50,
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				pagination: {
					type: 'bullets',
					el: '.events__pagination',
				},
			});
		};
		function eventsSwiperDestroy() {
			if (eventsSwiper) {
				eventsSwiper.destroy();
				eventsSwiper = null;
			};
		};
		if (calculateWindowSize() < 768) {
			eventsSwiperInit();
		} else {
			eventsSwiperDestroy();
		};
		window.addEventListener('resize', function () {
			if (calculateWindowSize() < 768) {
				if (!eventsSwiper) {
					eventsSwiperInit();
				}
			} else {
				eventsSwiperDestroy();
			};
		});
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		let editionsSwiper = null;
		function editionsSwiperInit() {
			editionsSwiper = new Swiper('.editions-swiper', {
				breakpoints: {
					1201: {
						spaceBetween: 50,
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 50
					},
					900: {
						slidesPerView: 3,
						spaceBetween: 34
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 34
					},
				},
				navigation: {
					nextEl: '.editions-swiper__btn-next',
					prevEl: '.editions-swiper__btn-prev'
				},
				pagination: {
					el: '.editions-swiper__pagination',
					type: 'fraction'
				},
			});
		};
		function editionsSwiperDestroy() {
			if (editionsSwiper) {
				editionsSwiper.destroy();
				editionsSwiper = null;
			};
		};
		if (calculateWindowSize() > 767) {
			editionsSwiperInit();
		} else {
			editionsSwiperDestroy();
		};
		window.addEventListener('resize', function () {
			if (calculateWindowSize() > 767) {
				if (!editionsSwiper) {
					editionsSwiperInit();
				}
			} else {
				editionsSwiperDestroy();
			};
		});
		let categoriesTitle = document.querySelector('.categories__title');
		let categoriesItem = document.querySelectorAll('.categories__item');
		let categoriesLabel = document.querySelectorAll('.categories__label');
		let categoriesInput = document.querySelectorAll('.categories__input');

		for (let i = 0; i < categoriesInput.length; i++) {
			const el = categoriesInput[i];
			el.addEventListener('change', () => {
				el.closest('.categories__item').classList.toggle('categories__item--active');
			})
		}

		categoriesTitle.addEventListener('click', function () {
			categoriesItem.forEach(function (el) {
				el.classList.toggle('categories__item--show');
			});
		});
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		tippy('#projects-tooltip-1', {
			content: 'Пример современных тенденций - современная методология разработки',
			duration: 200,
			maxWidth: 264,
			theme: 'gray'
		});
		tippy('#projects-tooltip-2', {
			content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
			duration: 200,
			maxWidth: 264,
			theme: 'gray'
		});
		tippy('#projects-tooltip-3', {
			content: 'В стремлении повысить качество',
			duration: 200,
			maxWidth: 264,
			theme: 'gray'
		});
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		new Swiper('.projects-swiper', {
			breakpoints: {
				1386: {
					slidesPerView: 3,
					spaceBetween: 50
				},
				900: {
					slidesPerView: 2,
					spaceBetween: 50
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 34
				},
				320: {
					slidesPerView: 1,
					spaceBetween: 34
				},
			},
			navigation: {
				nextEl: '.projects-swiper__btn-next',
				prevEl: '.projects-swiper__btn-prev'
			},
		})
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		const editions = document.querySelector('#events');
		let mapLock = true;
		window.addEventListener('scroll', () => {
			const windowOffset = window.pageYOffset;
			const editionsOffset = editions.offsetTop;
			if (windowOffset > editionsOffset && mapLock) {
				ymaps.ready(init);
				mapLock = false;
			}
		})
		function init() {
			var myMap = new ymaps.Map("map", {
				center: [55.758463, 37.601079],
				zoom: 14
			});
			var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
				iconLayout: 'default#image',
				iconImageHref: '../img/contacts/map-marker.svg',
				iconImageSize: [20, 20],
				iconImageOffset: [-3, -42]
			});
			myMap.geoObjects.add(myPlacemark);
			if (calculateWindowSize() < 1025) {
				myMap.behaviors.disable('scrollZoom');
				myMap.behaviors.disable('multiTouch');
				myMap.behaviors.disable('drag');
			}
			window.addEventListener('resize', () => {
				if (calculateWindowSize() < 1025) {
					myMap.behaviors.disable('scrollZoom');
					myMap.behaviors.disable('multiTouch');
					myMap.behaviors.disable('drag');
				} else {
					myMap.behaviors.enable('scrollZoom');
					myMap.behaviors.enable('multiTouch');
					myMap.behaviors.enable('drag');
				}
			});
		}
		/***************************************************************************************************************************************************************************/

		/***************************************************************************************************************************************************************************/
		var selector = document.querySelectorAll('input[type="tel"]');
		var im = new Inputmask("+7 (999) 999-99-99");
		im.mask(selector);

		let validateForms = function (selector, rules, successModal, yaGoal) {
			new window.JustValidate(selector, {
				rules: rules,
				messages: {
					name: {
						minLength: 'Имя должно содержать не менее 2 символов!',
						required: 'Введите своё имя'
					},
					tel: {
						required: 'Введите свой номер телефона'
					},
				},
				submitHandler: function (form) {
					let formData = new FormData(form);
					let xhr = new XMLHttpRequest();
					xhr.onreadystatechange = function () {
						if (xhr.readyState === 4) {
							if (xhr.status === 200) {
								console.log('Отправлено');
							};
						};
					};
					xhr.open('POST', '../php/mail.php', true);
					xhr.send(formData);
					form.reset();
				}
			});
		};
		validateForms('.form', { tel: { required: true }, name: { required: true, minLength: 2, maxLength: 10 } }, '.thanks-popup', 'send goal');
		/***************************************************************************************************************************************************************************/
	})
})()

