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

        Array.prototype.forEach.call(Self.selectorElements, (el, k) => {
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

            Array.prototype.forEach.call(elements, (curEl, k) => {
                curEl.classList.remove('selected');
            });

            target.classList.add('selected');
            Self.close(v, optionsContainer);
        }
    },
    init: () => {
      const Self = window.Selectors;

      const elements = document.querySelectorAll('.selector');

      Array.prototype.forEach.call(elements, (v, k) => {
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
                  Array.prototype.forEach.call(options, (el, kk) => {

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

        Array.prototype.forEach.call(elements, (v, k) => {
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

        const isVisibilitySupport = document.body.style.hasOwnProperty('visibility');

        if (isVisibilitySupport) {
            Self.popupContainer.style.visibility = 'visible';
        }else {
            Self.popupContainer.style.display = 'block';
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

        const isVisibilitySupport = document.body.style.hasOwnProperty('visibility');

        if (isVisibilitySupport) {
            Self.popupContainer.style.visibility = 'hidden';
        }else {
            Self.popupContainer.style.display = 'none';
        }
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

        Array.prototype.forEach.call(popupElements, (v, k) => {
            popupWrap.insertBefore(v, null);
        });

        Array.prototype.forEach.call(popupCallers, (v, k) => {

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

    const isVisibilitySupport = document.body.style.hasOwnProperty('visibility');

    if(window.innerWidth <= 991) {
        const fixedHeader = document.querySelector('.header__fixed');
        const headerMain = document.querySelector('.header-main');
        if(fixedHeader) {
            fixedHeader.style.top = `-${Number(fixedHeader.offsetHeight) + 100}px`;
        }
        if(headerMain) {
            if (isVisibilitySupport) {
                headerMain.style.visibility = 'hidden';
            }else {
                // headerMain.style.display = 'none';
            }
        }
        delete scrollEvents['fixedHeader'];
    } else {
        const headerMain = document.querySelector('.header-main');
        if(headerMain) {
            if (isVisibilitySupport) {
                headerMain.style.visibility = 'visible';
            }else {
                headerMain.style.display = 'block';
            }
        }
        fixedHeaderHandler();
        scrollEvents.fixedHeader = {handler: fixedHeaderHandler, name: 'fixedHeader'};
    }
};
resizeEvents.fixedHeader = {handler : resizeFixedHeaderHandler, name: 'fixedHeader'};

document.addEventListener('DOMContentLoaded', function() {

    const isVisibilitySupport = document.body.style.hasOwnProperty('visibility');

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

    Array.prototype.forEach.call(countBlocks, (v) => {

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
});
