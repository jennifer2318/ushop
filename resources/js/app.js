/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

class Templater {
    constructor () {}

    template(data) {
       console.log('gg');
    }

    html (templateObj) {

       if( typeof(templateObj) === 'object' && templateObj !== null && templateObj.hasOwnProperty('name')) {
            return this[templateObj.name](templateObj.data);
       }
       return null
    }

}

const template = {
   name: 'template',
   data: {

   }
};

window.TemplateBuilder = new Templater();

TemplateBuilder.html(template);

const configObserver = { attributes: true, childList: true, subtree: true,  characterData: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'characterData') {
            const parent = mutation.target.parentElement;
            if (parent.classList.contains('count-block__count')) {
                if (parent.innerHTML.trim().length >= 3) {
                    parent.classList.add('count-block__count-big');
                }else {
                    parent.classList.remove('count-block__count-big');
                }
            }
        }
    }
};

// Create an observer instance linked to the callback function
window.observer = new MutationObserver(callback);

window.scrollEvents = {};
window.resizeEvents = {};

window.Selectors = {
    selectorElements: [],
    activeClassName: 'selector-active',
    open: (v, optionsContainer) => {
        const Self = window.Selectors;

        v.classList.add(Self.activeClassName);
        optionsContainer.style.opacity = 1;
        optionsContainer.style.transform = 'scaleY(1)';
    },
    close: (v, optionsContainer) => {
        const Self = window.Selectors;

        v.classList.remove(Self.activeClassName);
        optionsContainer.style.opacity = 0;
        optionsContainer.style.transform = 'scaleY(0)';

        v.blur();
    },
    onBlur: (e, v, optionsContainer) => {
        const Self = window.Selectors;

        Self.close(v, optionsContainer);
    },
    onFocus: (e, v, optionsContainer) => {
        const Self = window.Selectors;

        [].forEach.call(Self.selectorElements, (el, k) => {
            if (el.dom === v && !el.dom.classList.contains(Self.activeClassName)) return;

            const optionsContainer = el.dom.querySelector('.selector__options');
            Self.close(el.dom, optionsContainer);
        });

        if (v.classList.contains(Self.activeClassName)) {
            Self.close(v, optionsContainer);
            return;
        }

        Self.open(v, optionsContainer);
    },
    onSelect: (e, v, el, field, elements, optionsContainer) => {
        const Self = window.Selectors;
        const target = e.target;

        if (v === el) return;
        if (!target.classList.contains('option')) return;

        const active = v.querySelector('.selector__active');

        if (target.innerHTML !== active.innerHTML) {
            active.innerHTML = target.innerHTML;
            field.value = target.innerHTML;

            [].forEach.call(elements, (curEl, k) => {
                curEl.classList.remove('selected');
            });

            target.classList.add('selected');
            Self.close(v, optionsContainer);
        }
    },
    init: () => {
      const Self = window.Selectors;

      const elements = document.querySelectorAll('.selector');

      [].forEach.call(elements, (v, k) => {
          const field = v.querySelector('input');
          const optionsContainer = v.querySelector('.selector__options');
          const options = v.querySelectorAll('.selector__options .option');

          if (field !== undefined && optionsContainer !== undefined && options.length > 0) {

              const check = Self.selectorElements.find(item => item.dom === v && item.active === true);

              if (check !== undefined) return;

              const focusHandler = (e) => {
                  Self.onFocus(e, v, optionsContainer);
              };

              v.addEventListener('focus', focusHandler);

              const blurHandler =  (e) => {
                  Self.onBlur(e, v, optionsContainer);
              };

              v.addEventListener('blur', blurHandler);

              const noSelect = v.attributes.getNamedItem('data-noselect');

              let selectHandler = {};

              if (noSelect === null) {
                  [].forEach.call(options, (el, kk) => {

                      if (el.classList.contains('selected')) {
                          Self.onSelect({target: el}, v, el, field, elements, optionsContainer);
                      }

                      selectHandler = (e) => {
                          Self.onSelect(e, v, el, field, options, optionsContainer);
                      };

                      el.addEventListener('click', selectHandler);
                  });
              }

              Self.selectorElements.push({dom: v, active: true,
                handler: {
                    focus: focusHandler,
                    blur: blurHandler,
                    select: selectHandler
                }
              });
          }
      });
   }
};

window.Dropdowns = {
    dropdownElements: [],
    activeClassName: 'dropdown-active',
    onMouseOver: (e, v, wrap) => {
        const Self = window.Dropdowns;

        if (v.classList.contains(Self.activeClassName)) return;

        v.classList.add(Self.activeClassName);
        wrap.style.opacity = 1;
        wrap.style.transform = 'scaleY(1)';
    },
    onMouseLeave: (e, v, wrap) => {
        const Self = window.Dropdowns;

        v.classList.remove(Self.activeClassName);
        wrap.style.opacity = 0;
        wrap.style.transform = 'scaleY(0)';
    },
    init: () => {
        const Self = window.Dropdowns;

        const elements = document.querySelectorAll('.dropdown');

        [].forEach.call(elements, (v, k) => {
            const wrap = v.querySelector('.dropdown__wrap');
            const dropdownElements = v.querySelectorAll('.dropdown__wrap .dropdown__element');

            if (wrap !== undefined && dropdownElements.length > 0) {

                const check = Self.dropdownElements.find(item => item.dom === v && item.active === true);

                if (check !== undefined) return;

                const mouseoverHandler =  (e) => {
                    Self.onMouseOver(e, v, wrap);
                };

                v.addEventListener('mouseover', mouseoverHandler);

                const mouseleaveHandler = (e) => {
                    Self.onMouseLeave(e, v, wrap);
                };

                v.addEventListener('mouseleave', mouseleaveHandler);

                Self.dropdownElements.push({dom: v, active: true, handler: {mouseleave: mouseleaveHandler,mouseover: mouseoverHandler}});
            }
        });
    }
};

window.Popups = {
    popupElements: [],
    popupCallers: [],
    activePopup: null,
    popupContainer: null,
    onClick: (e, v, popup) => {
        const Self = window.Popups;

        if (Self.activePopup === popup) return;

        if (Self.activePopup !== null) Self.close();

        Self.open(v, popup);
    },
    open: (v, popup) => {
        const Self = window.Popups;

        const isVisibilitySupport = document.body.style.hasOwnProperty('content-visibility');

        if (isVisibilitySupport) {
            Self.popupContainer.style.contentVisibility = 'visible';
        }

        Self.popupContainer.style.display = 'block';
        Self.popupContainer.style.opacity = 1;

        Self.activePopup = popup;

        const timeoutHandler = () => {
            window.Popups.openHandler(v, popup);
        };

        setTimeout(timeoutHandler, 200);
    },
    openHandler: (v) => {
        const Self = window.Popups;

        const activePopupElement = Self.popupElements.findIndex(item => item.dom === Self.activePopup);
        Self.popupElements[activePopupElement].active = true;

        Self.activePopup.style.opacity = 1;
        Self.activePopup.style.transform = 'scale(1)';
    },
    close: () => {
        const Self = window.Popups;

        const isVisibilitySupport = document.body.style.hasOwnProperty('content-visibility');

        if (isVisibilitySupport) {
            Self.popupContainer.style.contentVisibility = 'hidden';
        }

        Self.popupContainer.style.display = 'none';
        Self.popupContainer.style.opacity = 0;

        if (Self.activePopup !== null) {
            Self.activePopup.style.opacity = 0;
            Self.activePopup.style.transform = 'scale(0)';

            const activePopupElement = Self.popupElements.findIndex(item => item.dom === Self.activePopup);
            Self.popupElements[activePopupElement].active = false;
        }

        Self.activePopup = null;
    },
    init: () => {
        const Self = window.Popups;

        const popupCallers = document.querySelectorAll('[js-popup]');
        const popupContainer = document.querySelector('.popup-container');

        if (popupContainer === undefined) return;

        Self.popupContainer = popupContainer;

        const popupElements = document.querySelectorAll('.popup');
        const popupWrap = Self.popupContainer.querySelector('.popup-wrap');

        [].forEach.call(popupElements, (v, k) => {
            popupWrap.insertBefore(v, null);
        });

        [].forEach.call(popupCallers, (v, k) => {

            const jpPopupAttr = v.attributes.getNamedItem('js-popup');
            const popup = document.querySelector('.' + jpPopupAttr.value);

            if (jpPopupAttr.value.length === 0 || popup === undefined) return;

            const onClickHandler = (e) => {
                Self.onClick(e, v, popup);
            };

            v.addEventListener('click', onClickHandler);

            Self.popupCallers.push({dom: v, active: true, handler: {click: onClickHandler}});
            Self.popupElements.push({dom: popup, active: false});
        });

        const popupClickHandler = (e) => {
            Self.close();
        };

        popupContainer.addEventListener('click', popupClickHandler);
    }

};

window.DataFilter = {
    filters: {},
    btnClass: 'filter__btn',
    onClick: (e, key, btnKey) => {
        const Self = window.DataFilter;

        e.preventDefault();

        const targetObj = Self.filters[key];

        if (targetObj.activeKey === btnKey) {
            return;
        }

        const target = Self.filters[key].buttons[btnKey];
        const filterTypeValue = target.attributes.getNamedItem('filter-type').value;

        targetObj.activeDom.classList.remove('active');

        targetObj.lastAction = filterTypeValue;
        targetObj.activeKey = btnKey;
        targetObj.activeDom = target;

        target.classList.add('active');

        axios.post(`/${ Self.getUrl(filterTypeValue)}`, {type: Self.getType(filterTypeValue)})
            .then( response => {
                Self.onSuccess(response, key);
            })
            .catch( error => {
                Self.onError(error);
            });
    },
    getUrl: (str) => {
        return str.substr(0, str.indexOf('::'));
    },
    getType: (str) => {
        return str.substr(str.indexOf('::') + 2);
    },
    onError: (err) => {
        console.log(err);
    },
    onSuccess: (resp, key) => {
        const Self = window.DataFilter;

        const targetObj = Self.filters[key];

        console.log(resp.data);
    },
    onAppend: (e, key) => {
        const Self = window.DataFilter;

        e.preventDefault();

        const targetObj = Self.filters[key];
        console.log('append');
    },
    init: () => {
        const Self = window.DataFilter;

        const filters = document.querySelectorAll('[data-filter]');

        [].forEach.call(filters , (v, k) => {

            const dataFilter = v.attributes.getNamedItem('data-filter');
            if (dataFilter === null || dataFilter.value === '') {
                return;
            }

            const dataFilterDom = document.querySelector(`#${dataFilter.value}`);
            if (dataFilterDom === null) {
                return;
            }

            const filterButtons = v.querySelectorAll(`.${Self.btnClass}`);

            if (filterButtons.length > 0) {
                Self.filters[k] = {
                    dom: v,
                    buttons: [],
                    dataFilter: dataFilterDom,
                    lastAction: '',
                    activeDom: null,
                    activeKey: 0,
                    elementsCount: 0,
                };

                [].forEach.call(filterButtons, (btn, key) => {
                    const filterType = btn.attributes.getNamedItem('filter-type');
                    if (filterType !== null && filterType.value !== '') {

                        Self.filters[k].buttons.push(btn);

                        btn.addEventListener('click', e => {
                            Self.onClick(e, k, key);
                        });

                        if (key === 0) {
                            Self.filters[k].activeDom = btn;
                            Self.filters[k].lastAction = filterType.value;
                            Self.filters[k].activeKey = 0;
                        }

                    }
                });

                const appendAction = v.attributes.getNamedItem('appendAction');

                if (appendAction !== null && appendAction.value !== '') {

                    const appendDom = document.querySelector(`#${appendAction.value}`);
                    if (appendDom !== null) {
                        Self.filters[k].appendDom = appendDom;
                        appendDom.addEventListener('click', e => {
                            Self.onAppend(e, k);
                        });
                    }

                }
            }
        });
    }
};

window.ImageSelector = {
    imageSelectors: {},
    activeClassName: 'active',
    onMouseEnter: (e, v, k, parent) => {
        const Self = window.ImageSelector;

        const active = parent.querySelector(`.image-selector__item.${Self.activeClassName}`);

        if (active !== null) {
            active.classList.remove('active');
        }

        v.classList.add('active');
    },
    init: () => {
        const Self = window.ImageSelector;

        const selectors = document.querySelectorAll('.image-selector');

        [].forEach.call(selectors, (v, k) => {

            if (Object.values(Self.imageSelectors).find( p => p.active === true && p.dom === v) !== undefined) return;

            const images = v.querySelectorAll('.image-selector__item');
            if (images !== null && images.length > 1) {
                images[0].classList.add('active');

                [].forEach.call(images, (el, key) => {
                   el.addEventListener('mouseenter', e => {
                       Self.onMouseEnter(e, el, key, v);
                   })
                });
            } else if (images.length === 1) {
                images[0].classList.add('active');
                images[0].querySelector('.image-selector__item-nav').style.display = 'none';
            }

            Self.imageSelectors[k] = {dom: v, active: true}
        });

    }
};

class Slider {
    defaultConf = {
        selector: '.slider',
        selectorDom: null,
        containerDom: null,
        data: '.slider-row',
        dataDom: null,
        time: 8000,
        auto: false,
        dots: false,
        type: 'slide',
    };
    config;

    constructor(conf) {
        this.config = Object.assign(this.defaultConf, conf);
        if (this.getDomElements()) {
            this.init();
        }
    }

    getDomElements() {
        const cfg = this.config;

        if (cfg.selector !== null || typeof cfg.selector === "string") {
            cfg.selectorDom = document.querySelector(cfg.selector);
        }

        if (cfg.selectorDom !== null && cfg.selectorDom !== undefined) {

            if (cfg.containerDom === undefined && cfg.containerDom === null) return false;

            cfg.containerDom = cfg.selectorDom.querySelector('.slider__container');

            switch (typeof cfg.data) {
                case "string": {
                    cfg.dataDom = cfg.selectorDom.querySelectorAll(cfg.data);

                    return true;
                }
                case "object": {
                    if (Array.isArray(cfg.data)) {
                        cfg.dataDom = cfg.data;

                        return true;
                    }
                }
            }
        }

        return false;
    }

    init() {
        const cfg = this.config;

        cfg.positions = [];
        cfg.active = 0;
        cfg.activeDom = cfg.dataDom[0];
        cfg.interval = -1;
        cfg.isReverse = false;
        cfg.posX1 = 0;
        cfg.posInit = 0;
        cfg.last = -1;
        cfg.animId1 = -1;

        const width = cfg.activeDom.getBoundingClientRect().width;
        const height = cfg.activeDom.getBoundingClientRect().height;

        cfg.width = width;
        cfg.posThreshold = width * 0.15;

        switch (cfg.type) {
            case 'opacity' : {
                [].forEach.call(cfg.dataDom, (v, k) => {

                    cfg.dataDom[k].style.opacity = 0;
                    cfg.dataDom[k].style.position = 'absolute';
                    cfg.dataDom[k].style.left = 0;
                    cfg.dataDom[k].style.top = 0;

                    if (cfg.active === k) {
                        cfg.dataDom[k].style.opacity = 1;
                        cfg.dataDom[k].style.position = 'relative';
                    }
                });
            } break;
            default: {
                cfg.containerDom.style.transform = `translate3d(-${width * cfg.active}, 0px, 0px)`;
            }
        }

        cfg.activeDom.classList.add('active');

        this.initButtons();
        this.dotsInit();
        this.calculatePositions();
        this.animateSlides();

        this.initEvents();

        this.interval();
    }

    interval() {
        const cfg = this.config;

        if (cfg.auto === true) {
            clearInterval(cfg.interval);
            cfg.interval = setInterval(() => {

                if (cfg.active + 1 === cfg.dataDom.length) {
                    cfg.isReverse = true;
                }

                if (cfg.active < cfg.dataDom.length-1 && !cfg.isReverse) {
                    this.nextSlider(null, this);
                }else {
                    this.prevSlider(null, this);
                }

                if (cfg.active - 1 < 0) {
                    cfg.isReverse = false;
                }

            }, cfg.time);
        }
    }

    initButtons() {
        const cfg = this.config;

        const prevBtn = document.createElement('button');
        prevBtn.classList.add('slider__prev');
        prevBtn.innerHTML = "<i class='slider__prev-icon far fa-chevron-left'></i>";

        const nextBtn = document.createElement('button');
        nextBtn.classList.add('slider__next');
        nextBtn.innerHTML = "<i class='slider__next-icon far fa-chevron-right'></i>";

        cfg.selectorDom.prepend(prevBtn);
        cfg.selectorDom.append(nextBtn);

        cfg.prevBtn = cfg.selectorDom.querySelector('.slider__prev');
        cfg.nextBtn = cfg.selectorDom.querySelector('.slider__next');

        this.buttonsState();
    }

    dotsInit() {
        const cfg = this.config;

        if (cfg.dots === true) {
            const dotsContainer = document.createElement('div');
            dotsContainer.classList.add('slider__dots');

            cfg.selectorDom.append(dotsContainer);

            cfg.dotsDom = cfg.selectorDom.querySelector('.slider__dots');

            cfg.dotsDataDom = [];
            [].forEach.call(cfg.dataDom, (v, k) => {
                const dot = document.createElement('span');
                dot.classList.add('slider__dots-dot');
                if (cfg.active === k) {
                    dot.classList.add('active');
                }
                cfg.dotsDom.append(dot);

                const dotDom = cfg.dotsDom.querySelectorAll('.slider__dots-dot')[k];

                cfg.dotsDataDom[k] = dotDom;

                dotDom.addEventListener('click', e => {
                    this.dotAction(e, this, k);
                });
            });

        }
    }

    dotAction(e, _this, k) {
        const cfg = _this.config;

        cfg.last = cfg.active;
        cfg.active = k;
        cfg.activeDom = cfg.dataDom[cfg.active];

        cfg.dataDom[cfg.last].classList.remove('active');

        _this.interval();
        _this.animateSlides();
        _this.buttonsState();
        _this.dotsState();
    }

    dotsState() {
        const cfg = this.config;

        cfg.dotsDataDom[cfg.last].classList.remove('active');
        cfg.dotsDataDom[cfg.active].classList.add('active');
    }

    buttonsState() {
        const cfg = this.config;

        cfg.prevBtn.classList.toggle('disabled', cfg.active === 0);
        cfg.nextBtn.classList.toggle('disabled', cfg.active === --cfg.dataDom.length);
    }

    prevSlider(e, _this) {
        const cfg = _this.config;

        _this.interval();

        if (cfg.type === 'opacity') {
            clearTimeout(cfg.animId1);
        }

        if (cfg.active > 0) {
            cfg.last = cfg.active;
            cfg.active = cfg.active - 1;
            cfg.activeDom.classList.remove('active');
            cfg.activeDom = cfg.dataDom[cfg.active];
            cfg.activeDom.classList.add('active');

            _this.calculatePositions();
        }
        _this.animateSlides();
        _this.buttonsState();
        _this.dotsState();
    }

    nextSlider(e, _this) {
        const cfg = _this.config;

        _this.interval();

        if (cfg.type === 'opacity') {
            clearTimeout(cfg.animId1);
        }

        if (cfg.active < cfg.dataDom.length-1) {
            cfg.last = cfg.active;
            cfg.active = cfg.active + 1;
            cfg.activeDom.classList.remove('active');
            cfg.activeDom = cfg.dataDom[cfg.active];
            cfg.activeDom.classList.add('active');

            _this.calculatePositions();
        }
        _this.animateSlides();
        _this.buttonsState();
        _this.dotsState();
    }

    getEvent(e) {
        return e.type.search('touch') !== -1 ? e.touches[0] : e;
    }

    swipeAction(e, _this) {
        const cfg = _this.config;

        let evt = _this.getEvent(e);

        _this.interval();

        cfg.posX2 = cfg.posX1 - evt.clientX;
        cfg.posX1 = evt.clientX;

        switch (cfg.type) {
            case 'opacity' : break;
            default: {
                let transform = +cfg.containerDom.style.transform.match(/[-0-9.]+(?=px)/)[0];

                const pos2 = cfg.posX2 <= 0;

                if (pos2) {
                    cfg.containerDom.style.transform = `translate3d(${transform + -cfg.posX2}px, 0px, 0px)`;
                }else {
                    cfg.containerDom.style.transform = `translate3d(${transform - cfg.posX2}px, 0px, 0px)`;
                }

                if (transform > 400 || transform < (cfg.positions[cfg.positions.length-1] + -400)) {
                    _this.animateSlides();
                }
            }
        }
    }

    swipeEnd(e, _this) {
        const cfg = _this.config;

        cfg.containerDom.removeEventListener('touchmove', _this.touchmoveHandler);
        cfg.containerDom.removeEventListener('mousemove', _this.touchmoveHandler);

        cfg.containerDom.removeEventListener('touchend', _this.touchendHandler);
        cfg.containerDom.removeEventListener('mouseup', _this.touchendHandler);

        const posFinal = cfg.posInit - cfg.posX1;

        if (Math.abs(posFinal) > cfg.posThreshold) {
            if (cfg.posInit < cfg.posX1) {
                _this.prevSlider(null, _this);
            }else if (cfg.posInit > cfg.posX1) {
                _this.nextSlider(null, _this);
            }
        }

        if (cfg.posInit !== cfg.posX1) {
            _this.animateSlides();
        }
    }

    swipeStart(e, _this) {
        const cfg = _this.config;

        let evt = _this.getEvent(e);

        cfg.posInit = cfg.posX1 = evt.clientX;

        cfg.containerDom.addEventListener('touchmove', _this.touchmoveHandler, {passive: true});
        cfg.containerDom.addEventListener('mousemove', _this.touchmoveHandler, {passive: true});

        cfg.containerDom.addEventListener('touchend', _this.touchendHandler, {passive: true});
        cfg.containerDom.addEventListener('mouseup', _this.touchendHandler, {passive: true});
    }

    touchmoveHandler = e => {
        this.swipeAction(e, this);
    };

    touchstartHandler = e => {
        this.swipeStart(e, this);
    };

    touchendHandler = e => {
        this.swipeEnd(e, this);
    };

    initEvents() {
        const cfg = this.config;

        cfg.prevBtn.addEventListener('click', e => {
            this.prevSlider(e, this);
        });

        cfg.nextBtn.addEventListener('click', e => {
            this.nextSlider(e, this);
        });

        cfg.containerDom.addEventListener('touchstart', this.touchstartHandler, {passive: true});
        cfg.containerDom.addEventListener('mousedown', this.touchstartHandler, {passive: true});

        window.addEventListener('resize', e => {
            this.onResize(e, this);
        });
    }

    calculatePositions() {
        const cfg = this.config;

        const width = cfg.activeDom.getBoundingClientRect().width;

        switch (cfg.type) {
            case 'opacity' : break;
            default: {
                [].forEach.call(cfg.dataDom, (v, k) => {
                    cfg.positions[k] = -(width * k);
                });
            }
        }

    }

    animateSlides() {
        const cfg = this.config;

        switch (cfg.type) {
            case 'opacity' : {

                [].forEach.call(cfg.dataDom, (v, k) => {
                   if (k !== cfg.last && k !== cfg.active) {

                       cfg.dataDom[k].style.opacity = 0;
                       cfg.dataDom[k].style.position = 'absolute';
                   }
                });

                if (cfg.last !== -1) {
                    cfg.dataDom[cfg.active].style.position = 'relative';
                    cfg.dataDom[cfg.last].style.position = 'absolute';

                    cfg.dataDom[cfg.active].style.opacity = 1;

                    cfg.animId1 = setTimeout(() => {
                        cfg.dataDom[cfg.last].style.opacity = 0;
                    }, 225);
                }
            } break;
            default: cfg.containerDom.style.transform = `translate3d(${cfg.positions[cfg.active]}px, 0px, 0px)`;
        }
    }

    onResize(e, _this) {
        const cfg = _this.config;

        _this.calculatePositions();
        _this.animateSlides();
    }
}

const fixedHeaderHandler = (e) => {
    const fixedHeader = document.querySelector('.header__fixed');

    if(fixedHeader) {
        if(window.scrollY >= 300) {
            fixedHeader.style.top = 0;
        }else if(parseInt(fixedHeader.style.top) >= 0) {
            fixedHeader.style.top = `-${Number(fixedHeader.offsetHeight) + 100}px`;
        }
    }

};
scrollEvents.fixedHeader = ({handler: fixedHeaderHandler, name: 'fixedHeader'});

const scrollToTopHandler = (e) => {
    const scrollToTop = document.querySelector('.scroll-to-top');

    if(scrollToTop) {
        if(window.scrollY >= 300) {
            scrollToTop.style.right = '30px';
            scrollToTop.style.opacity = 1;
        }else {
            scrollToTop.style.right = '-200px';
            scrollToTop.style.opacity = 0;
        }
    }

};
scrollEvents.scrollToTop = ({handler: scrollToTopHandler, name: 'scrollToTop'});

const resizeFixedHeaderHandler = (e) => {

    const isVisibilitySupport = document.body.style.hasOwnProperty('content-visibility');

    if(window.innerWidth <= 991) {
        const fixedHeader = document.querySelector('.header__fixed');
        const headerMain = document.querySelector('.header-main');
        if(fixedHeader) {
            fixedHeader.style.top = `-${Number(fixedHeader.offsetHeight) + 100}px`;
        }
        if(headerMain) {
            if (isVisibilitySupport) {
                headerMain.style.contentVisibility = 'hidden';
            }else {
                headerMain.style.display = 'none';
            }
        }
        delete scrollEvents['fixedHeader'];
    } else {
        const headerMain = document.querySelector('.header-main');
        if(headerMain) {
            if (isVisibilitySupport) {
                headerMain.style.contentVisibility = 'visible';
            }else {
                headerMain.style.display = 'block';
            }
        }
        fixedHeaderHandler();
        scrollEvents.fixedHeader = {handler: fixedHeaderHandler, name: 'fixedHeader'};
    }
};
resizeEvents.fixedHeader = {handler : resizeFixedHeaderHandler, name: 'fixedHeader'};

const mainBlock = function() {

    const isVisibilitySupport = document.body.style.hasOwnProperty('content-visibility');

    window.onscroll = (e) => {
        Object.values(scrollEvents).forEach( event => {
            event.handler(e);
        });
    };

    window.onresize = (e) => {
        Object.values(resizeEvents).forEach( event => {
            event.handler(e);
        });
    };

    const scrollToTop = document.querySelector('.scroll-to-top');
    const scrollToTopClickHandler = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    scrollToTop.addEventListener('click', scrollToTopClickHandler);

    const countBlocks = document.querySelectorAll('.count-block .count-block__count');

    [].forEach.call(countBlocks, (v) => {

        if (v.innerHTML.trim().length >= 3) {
            v.classList.add('count-block__count-big');
        }else {
            v.classList.remove('count-block__count-big');
        }

        observer.observe(v, configObserver);
    });

    Popups.init();
    Selectors.init();
    Dropdowns.init();
    DataFilter.init();
    ImageSelector.init();

    new Slider({
        auto: true,
        dots: true,
        type: 'opacity',
    });
};

const lazyBlock = function() {

    let active = false;

    const lazyLoad = function() {

        let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
        let lazyIframes = [].slice.call(document.querySelectorAll("iframe.lazy"));
        let lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

        if (active === false) {
            active = true;

            setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");
                    }
                });

                lazyIframes.forEach(function(lazyFrame) {
                    if ((lazyFrame.getBoundingClientRect().top <= window.innerHeight && lazyFrame.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyFrame).display !== "none") {
                        lazyFrame.src = lazyFrame.dataset.src;
                        lazyFrame.classList.remove("lazy");
                    }
                });

                lazyBackgrounds.forEach(function(lazyBackground) {
                    if ((lazyBackground.getBoundingClientRect().top <= window.innerHeight && lazyBackground.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyBackground).display !== "none") {
                        lazyBackground.style.backgroundImage = `url('${lazyBackground.dataset.src}')`;
                        lazyBackground.classList.remove("lazy-background");
                    }
                });

                if (lazyIframes.length === 0 && lazyImages.length === 0 && lazyBackgrounds.length === 0) {
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationchange", lazyLoad);
                }

                active = false;
            }, 200);
        }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
    lazyLoad();
};

if (document.readyState !== "loading") {
    mainBlock();
    lazyBlock();
} else {
    document.addEventListener("DOMContentLoaded", mainBlock);
    document.addEventListener("DOMContentLoaded", lazyBlock);
}
