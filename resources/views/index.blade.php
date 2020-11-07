@include('layout.head')

<header>

    <div class="header header-main">
        <div class="container-fluid container-accent">
            <div class="container">
                <div class="header__top">
                    <div class="header__social-block social-block blocks">
                        <a href="#" class="social-block__link">
                            <i class="fab fa-instagram social-block__icon"></i>
                        </a>
                        <a href="#" class="social-block__link">
                            <i class="fab fa-facebook-f social-block__icon"></i>
                        </a>
                        <a href="#" class="social-block__link">
                            <i class="fab fa-pinterest-p social-block__icon"></i>
                        </a>
                    </div>
                    <div class="header__currency-block currency-block blocks">
                        <div class="currency-block__selector selector" tabindex="-1">
                            <div class="selector__head">
                                <input class="selector__field" type="text" name="select-currency">
                                <div class="selector__active">
                                    RUB
                                </div>
                                <i class="fas fa-caret-down selector__icon"></i>
                            </div>
                            <div class="selector__options">
                                <div class="selector__body">
                                    <div class="option">USD</div>
                                    <div class="option">EUR</div>
                                    <div class="option selected">RUB</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header__region-block region-block blocks">
                        <div class="region-block__selector selector" tabindex="-1">
                            <div class="selector__head">
                                <input class="selector__field" type="text" name="select-currency">
                                <div class="selector__active">
                                    Русский
                                </div>
                                <i class="fas fa-caret-down selector__icon"></i>
                            </div>
                            <div class="selector__options">
                                <div class="selector__body">
                                    <div class="option selected">Русский</div>
                                    <div class="option">English</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="header__row">

                <div class="header__logo-block logo-block blocks">
                    <div class="logo-block__logo">
                        <a href="/">
                            <img class="lazy" data-srcset="img/logo.svg" data-src="img/logo.svg" alt="UShop" draggable="false">
                        </a>
                    </div>
                </div>

                <div class="header__search-block search-block blocks">
                    <div class="search__block-search search">
                        <input class="search__input" type="text" name="search" placeholder="Поиск">
                        <button class="search__button button" type="button">
                            <i class="far fa-search search__button-icon"></i>
                        </button>
                    </div>
                </div>

                <div class="header__count-block count-block blocks">
                    <a href="#" class="count-block__row">
                        <i class="fal fa-poll count-block__icon"></i>
                        <span class="count-block__title" aria-hidden="true">
                                Cравнение
                            </span>
                        <span class="count-block__count">
                                0
                            </span>
                    </a>
                </div>

                <div class="header__count-block count-block blocks">
                    <a href="#" class="count-block__row">
                        <i class="fal fa-heart count-block__icon"></i>
                        <span class="count-block__title" aria-hidden="true">
                                Избранное
                            </span>
                        <span class="count-block__count">
                                200
                            </span>
                    </a>
                </div>

                <div class="header__count-block count-block blocks">
                    <a href="#" class="count-block__row">
                        <i class="fal fa-shopping-cart count-block__icon"></i>
                        <span class="count-block__title">
                                Корзина
                            </span>
                        <span class="count-block__count">
                                99
                            </span>
                    </a>
                </div>

                <div class="header__user-block user-block blocks">

                    <div class="user-block__row">
                        <div class="user-block__action user-action">

                            <div class="dropdown dropdown-noicon">
                                <div class="dropdown__head">
                                            <span class="dropdown__head-text">
                                                <a href="#" class="button">
                                                    <i class="fal fa-user button__icon user-action__icon"></i>
                                                    <span class="user-action__name">мой кабинет</span>
                                                </a>
                                            </span>
                                    <i class="fas fa-caret-down dropdown__head-dropdown-icon"></i>
                                </div>
                                <div class="dropdown__wrap">
                                    <div class="dropdown__wrap-body wrap-body">
                                        <div class="dropdown__element"><a class="button" href="#"><i class="fal fa-user button__icon"></i>Мой кабинет</a></div>
                                        <div class="dropdown__element"><a class="button" href="#"><i class="fal fa-luggage-cart button__icon"></i>Текущие заказы</a></div>
                                        <div class="dropdown__element"><a class="button" href="#"><i class="fal fa-file-invoice-dollar button__icon"></i>Личный счет</a></div>
                                        <div class="dropdown__element"><a class="button" href="#"><i class="fal fa-database button__icon"></i>Личные данные</a></div>
                                        <div class="dropdown__element"><a class="button" href="#"><i class="fal fa-key button__icon"></i>Сменить пароль</a></div>
                                        <div class="dropdown__element"><a class="button" href="#"><i class="fal fa-history button__icon"></i>История заказов</a></div>
                                        <div class="dropdown__element"><a class="button" href="#"><i class="fal fa-user-chart button__icon"></i>Профили заказов</a></div>
                                        <div class="dropdown__element"><a class="button" href="#"><i class="fal fa-shopping-cart button__icon"></i>Корзина</a></div>
                                        <div class="dropdown__element"><a class="button" href="#"><i class="fal fa-address-book button__icon"></i>Контакты</a></div>
                                        <div class="dropdown__element"><a class="button" href="#"><i class="fal fa-sign-out-alt button__icon"></i>Выйти</a></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="header">
        <div class="header__fixed">
            <div class="container">
                <div class="header__row">

                    <div class="header__mobile-menu mobile-menu" js-popup="popup__main-menu">
                        <div class="mobile-menu__icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <!-- <div class="header__mobile-menu mobile-menu">
                        <div class="mobile-menu__icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div> -->

                    <div class="header__logo-block logo-block blocks">
                        <div class="logo-block__logo">
                            <a href="/">
                                <img class="lazy" data-src="img/logo.svg" data-srcset="img/logo.svg" alt="UShop" draggable="false">
                            </a>
                        </div>
                    </div>

                    <div class="header__search-block search-block blocks">
                        <div class="search__block-search search">
                            <input class="search__input" type="text" name="search" placeholder="Поиск">
                            <button class="search__button button" type="button">
                                <i class="far fa-search search__button-icon"></i>
                            </button>
                        </div>
                    </div>

                    <div class="header__count-block count-block blocks">
                        <a href="#" class="count-block__row">
                            <i class="fal fa-poll count-block__icon"></i>
                            <span class="count-block__title" aria-hidden="true">
                                    Cравнение
                                </span>
                            <span class="count-block__count">
                                    0
                                </span>
                        </a>
                    </div>

                    <div class="header__count-block count-block blocks">
                        <a href="#" class="count-block__row">
                            <i class="fal fa-heart count-block__icon"></i>
                            <span class="count-block__title" aria-hidden="true">
                                    Избранное
                                </span>
                            <span class="count-block__count">
                                    200
                                </span>
                        </a>
                    </div>

                    <div class="header__count-block count-block blocks">
                        <a href="#" class="count-block__row">
                            <i class="fal fa-shopping-cart count-block__icon"></i>
                            <span class="count-block__title">
                                    Корзина
                                </span>
                            <span class="count-block__count">
                                    99
                                </span>
                        </a>
                    </div>

                    <div class="header__user-block user-block blocks">

                        <div class="user-block__row">
                            <div class="user-block__action user-action">

                                <div class="dropdown dropdown-noicon">
                                    <div class="dropdown__head">
                                                <span class="dropdown__head-text">
                                                    <a href="#" class="button" title="Мой кабинет">
                                                        <i class="fal fa-user button__icon user-action__icon"></i>
                                                    </a>
                                                </span>
                                        <i class="fas fa-caret-down dropdown__head-dropdown-icon"></i>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</header>

<section class="section main-menu-section">
    <div class="container">

        <nav class="menu main-menu">
            <ul class="menu__container">
                <li class="menu__element"><a class="menu__link button" href="#"><i class="menu__link-icon fas fa-th"></i>Каталог</a></li>
                <li class="menu__element"><a class="menu__link button" href="#"><i class="menu__link-icon fab fa-hotjar"></i>Акции</a></li>
                <li class="menu__element"><a class="menu__link button" href="#">Услуги</a></li>
                <li class="menu__element"><a class="menu__link button" href="#">Блог</a></li>
                <li class="menu__element"><a class="menu__link button" href="#">Бренды</a></li>
                <li class="menu__element"><a class="menu__link button" href="#">Как купить</a></li>
                <li class="menu__element"><a class="menu__link button" href="#">Компания</a></li>
                <li class="menu__element"><a class="menu__link button" href="#">Контакты</a></li>
            </ul>
        </nav>

    </div>
</section>

<section class="section section-slider">
    <div class="container-fluid">
        <div class="slider main-page-slider">
            <div class="slider__container">

                <div class="slider-row">
                    <div class="banner banner-main lazy-background" data-src="/img/0.2.jpg">
                        <div class="container banner__container">
                            <div class="banner__content action-event">
                                <div class="action-event__subtitle">
                                    Электроника
                                </div>
                                <div class="action-event__title">
                                    Надежная техника
                                </div>
                                <div class="action-event__content">
                                    Смартфоны, игровые приставки, HD-телевизоры и аудиосистемы для технологичной жизни. Покупайте электронику в интернет-магазине по выгодным ценам: проводные наушники от 300 р.
                                </div>
                                <div class="action-event__action">
                                    <a href="#" class="button btn-accent btn-catalog">перейти в каталог</a>
                                </div>
                            </div>
                            <div class="banner__wrap">
                                <div class="banner__image">
                                    <img class="lazy" data-src="/img/0.1.png" data-srcset="/img/0.1.png" alt="">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="slider-row">
                    <div class="banner banner-main lazy-background" data-src="/img/1.1.jpg">
                        <div class="container banner__container">
                            <div class="banner__content action-event">
                                <div class="action-event__subtitle">
                                    Транспорт
                                </div>
                                <div class="action-event__title">
                                    Мотоциклы
                                </div>
                                <div class="action-event__content">
                                    Стильный дизайн, отличная управляемость, литые диски и плавные линии притягивают взгляды. Почувствуйте полную свободу и будьте уверены на дороге. Выберите свой идеальный мотоцикл!
                                </div>
                                <div class="action-event__action">
                                    <a href="#" class="button btn-accent btn-catalog">выбрать мотоцикл</a>
                                </div>
                            </div>
                            <div class="banner__wrap">
                                <div class="banner__image">
                                    <img class="lazy" data-src="/img/1.2.png" data-srcset="/img/1.2.png" alt="">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="slider-row">
                    <div class="banner banner-main lazy-background" data-src="/img/2.2.jpg">
                        <div class="container banner__container">
                            <div class="banner__content action-event">
                                <div class="action-event__subtitle">
                                    Одежда
                                </div>
                                <div class="action-event__title">
                                    Изящные образы <br> на каждый день
                                </div>
                                <div class="action-event__content">
                                    Комфорт может притягивать взгляды и быть стильным. Подбирайте удобную одежду для повседневной жизни в каталоге: легкие платья, футболки с принтами или брюки для прогулок
                                </div>
                                <div class="action-event__action">
                                    <a href="#" class="button btn-accent btn-catalog">женская одежда</a>
                                    <a href="#" class="button btn-catalog">аксессуары</a>
                                </div>
                            </div>
                            <div class="banner__wrap">
                                <div class="banner__image">
                                    <img class="lazy" data-src="/img/2.1.png" data-srcset="/img/2.1.png" alt="">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section section-items">
    <div class="container">
        <div class="items">
            <div class="items__wrapper">
                <div class="item">
                    <div class="item__icon"><i class="fal fa-shipping-fast"></i></div>
                    <div class="item__content">
                        <div class="item__title">Быстрая доставка</div>
                        <div class="item__description">Бережно доставляем товары по России за 24 часа</div>
                    </div>
                </div>
                <div class="item">
                    <div class="item__icon"><i class="fal fa-comment-alt-lines"></i></div>
                    <div class="item__content">
                        <div class="item__title">Клиентский сервис</div>
                        <div class="item__description">Отвечаем на вопросы покупателей в течение 10 минут</div>
                    </div>
                </div>
                <div class="item">
                    <div class="item__icon"><i class="fal fa-gift"></i></div>
                    <div class="item__content">
                        <div class="item__title">Бонусы за покупки</div>
                        <div class="item__description">Дарим подарки и скидки до 70% всем покупателям</div>
                    </div>
                </div>
                <div class="item">
                    <div class="item__icon"><i class="fal fa-file-certificate"></i></div>
                    <div class="item__content">
                        <div class="item__title">Гарантия качества</div>
                        <div class="item__description">Соответствуем требованиям и стандартам качества</div>
                    </div>
                </div>
                <div class="item">
                    <div class="item__icon"><i class="fal fa-wallet"></i></div>
                    <div class="item__content">
                        <div class="item__title">Доступные цены</div>
                        <div class="item__description">Работаем напрямую с ведущими производителями</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section popular-categories-section">
    <div class="container section__top">
        <h3 class="section__title">Популярные категории</h3>
        <a href="#" class="button">Весь каталог</a>
    </div>
    <div class="container">
        <div class="items categories-items">
            <div class="items__wrapper">
                <div class="item">
                    <a href="#" class="item__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <style>.cls-1,.cls-2{fill:var(--color-accent);fill-rule:evenodd}.cls-2{opacity:.1}</style>
                            </defs>
                            <path class="cls-1" d="M167,1419h-6a1,1,0,0,1,0-2h6a3,3,0,0,0,3-3v-1h-9a1,1,0,0,1,0-2h9v-3h-1v-1h1v-3h-1v-1h1v-3h-1v-1h1v-3H153a0.908,0.908,0,0,0-1,0,1,1,0,0,1-1-1v-2a5,5,0,0,1,5-5h11a5,5,0,0,1,5,5v21A5,5,0,0,1,167,1419Zm3-26a3,3,0,0,0-3-3H156a3,3,0,0,0-3,3v1h17v-1Zm-19.508-6.11L142,1381.78V1417h1a1,1,0,0,1,0,2h-9a2,2,0,0,1-2-2v-36a2,2,0,0,1,2-2h6a1.934,1.934,0,0,1,.592.1,0.972,0.972,0,0,1,.907.03l10,6.01a1.013,1.013,0,0,1,.367,1.38A1,1,0,0,1,150.492,1386.89ZM134,1417h2v-36h-2v36Zm6-36h-2v36h2v-36Zm8,17h8a2,2,0,0,1,2,2v17a2,2,0,0,1-2,2h-8a2,2,0,0,1-2-2v-17A2,2,0,0,1,148,1398Zm0,19h8v-17h-8v17Zm4-1a1,1,0,1,1,1-1A1,1,0,0,1,152,1416Zm0.5-14h-1a0.5,0.5,0,0,1,0-1h1A0.5,0.5,0,0,1,152.5,1402Zm7.5-2h-1v-1h1v1Zm0,4h-1v-1h1v1Zm0,1h1v1h-1v-1Zm0,4h1v1h-1v-1Zm1-2h1v1h-1v-1Zm1-2h1v1h-1v-1Zm0,4h1v1h-1v-1Zm1-2h1v1h-1v-1Zm1-2h1v1h-1v-1Zm0,4h1v1h-1v-1Zm1-2h1v1h-1v-1Zm1-2h1v1h-1v-1Zm0,4h1v1h-1v-1Zm1-2h1v1h-1v-1Zm2-5h-1v-1h1v1Zm0-4h-1v-1h1v1Zm-1,6h-1v-1h1v1Zm0-4h-1v-1h1v1Zm-1,2h-1v-1h1v1Zm0-4h-1v-1h1v1Zm-1,6h-1v-1h1v1Zm0-4h-1v-1h1v1Zm-1,2h-1v-1h1v1Zm0-4h-1v-1h1v1Zm-1,6h-1v-1h1v1Zm0-4h-1v-1h1v1Zm-1,2h-1v-1h1v1Zm0-4h-1v-1h1v1Zm-1,6h-1v-1h1v1Zm0-4h-1v-1h1v1Zm-2-3h1v1h-1v-1Zm1,5h-1v-1h1v1Zm8,8h-1v-1h1v1Zm-1-5h1v1h-1v-1Zm-8,3h-1v-1h1v1Z" transform="translate(-132 -1379)"></path>
                            <path class="cls-2" d="M168,1418h-8v-6h11v3A3,3,0,0,1,168,1418Zm-16-26a3,3,0,0,1,3-3h13a3,3,0,0,1,3,3v3H152v-3Zm5,26H147v-19h10v19Zm-24-38h8v38h-8v-38Z" transform="translate(-132 -1379)"></path>
                        </svg>
                    </a>
                    <div class="item__content">
                        <a href="#" class="item__title">Электроника</a>
                        <div class="item__description">
                            <a href="#" class="item__description-item button">
                                Телевизоры
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Аудиотехника
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Игры и приставки
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Телефоны
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <a href="#" class="item__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <style>.cls-1,.cls-2{fill:var(--color-accent);fill-rule:evenodd}.cls-2{opacity:.1}</style>
                            </defs>
                            <path class="cls-1" d="M1528,806.184l-2.83,13.883a3.5,3.5,0,0,1-.01,6.866l2.82,16.933a1,1,0,1,1-1.98.311L1524.8,837H1518a1,1,0,0,1,0-2h6.47l-1.34-8H1517v-2h6.81a0.146,0.146,0,0,1,.02,0,0.8,0.8,0,0,1,.12,0h0.55a1.5,1.5,0,0,0,0-3H1517v-2h6.18l1.02-5h-8.76a5.912,5.912,0,0,0-2.24-1.57,0.974,0.974,0,0,1,.8-0.43h10.61l0.4-2h-14.02l0.4,2h-2l-1.39-6.816a0.992,0.992,0,0,1,.75-1.186,0.96,0.96,0,0,1,.41,0h17.68a0.96,0.96,0,0,1,.41,0A0.992,0.992,0,0,1,1528,806.184ZM1525.42,809l0.41-2h-15.66l0.41,2h14.84ZM1515,821v5a5.976,5.976,0,0,1-2.08,4.51A3.992,3.992,0,0,1,1515,834v2a3.994,3.994,0,0,1-3,3.859V844a1,1,0,0,1-1,1h-3a1,1,0,0,1-1-1l-0.8-4h-9.4l-0.8,4a1,1,0,0,1-1,1h-3a1,1,0,0,1-1-1v-4.141a3.994,3.994,0,0,1-3-3.859v-2a3.992,3.992,0,0,1,2.08-3.49A5.976,5.976,0,0,1,1488,826v-5a6,6,0,0,1,6-6h15A6,6,0,0,1,1515,821Zm-6,22h1v-3h-1.5Zm-16,0h1l0.5-3H1493v3Zm-3-9v2a2,2,0,0,0,2,2h19a2,2,0,0,0,2-2v-2a2,2,0,0,0-2-2h-19A2,2,0,0,0,1490,834Zm0-13v5a4,4,0,0,0,4,4h15a4,4,0,0,0,4-4v-5a4,4,0,0,0-4-4h-15A4,4,0,0,0,1490,821Zm16.5,4a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,1506.5,825Zm-10,0a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,1496.5,825Z" transform="translate(-1488 -805)"></path>
                            <path class="cls-2" d="M1524.5,826H1517v-5h7.5A2.5,2.5,0,0,1,1524.5,826ZM1511,839h-19a3,3,0,0,1-3-3v-1h25v1A3,3,0,0,1,1511,839Zm-2-8h-15a5,5,0,0,1-5-5v-5a5,5,0,0,1,5-5h15a5,5,0,0,1,5,5v5A5,5,0,0,1,1509,831Zm-12.5-9a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,1496.5,822Zm10,0a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,1506.5,822Z" transform="translate(-1488 -805)"></path>
                        </svg>
                    </a>
                    <div class="item__content">
                        <a href="#" class="item__title">Мебель</a>
                        <div class="item__description">
                            <a href="#" class="item__description-item button">
                                Диваны
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Шкафы
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Столы
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Стулья
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <a href="#" class="item__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40.06" height="40" viewBox="0 0 40.06 40">
                            <defs>
                                <style>.cls-1,.cls-2{fill:var(--color-accent);fill-rule:evenodd}.cls-2{opacity:.1}</style>
                            </defs>
                            <path class="cls-1" d="M1289,376h-2a1.9,1.9,0,0,1-.78-0.186l-0.06.341,4.78,12.372a1.024,1.024,0,0,1,.06.784v0.526a29.052,29.052,0,0,1-22,0V389h0.02a0.962,0.962,0,0,1,.1-0.466l4.73-12.268-0.07-.447a1.94,1.94,0,0,1-.78.181h-2a2,2,0,0,1-2-2v-5a6,6,0,0,1,6-6h10a6,6,0,0,1,6,6v5A2,2,0,0,1,1289,376Zm-9,14c0.33,0,.64-0.022.96-0.031l-0.96-4.345-0.96,4.345C1279.36,389.978,1279.67,390,1280,390Zm-8.94-1h1.24a27.522,27.522,0,0,0,4.7.841s-0.01-.01,0-0.014l1.99-9.039a1,1,0,0,1,.82-0.793c0.01,0,.01,0,0.02,0a7.226,7.226,0,0,0,.34,0c0.01,0,.01,0,0.02,0a1,1,0,0,1,.82.793l1.99,9.039c0.01,0,0,.009,0,0.014a27.522,27.522,0,0,0,4.7-.841h1.3l-4.27-11.034A0.991,0.991,0,0,1,1284,377h-8a0.983,0.983,0,0,1-.67.943Zm6.72-24a2.964,2.964,0,0,0,4.44,0h-4.44Zm11.22,4a4,4,0,0,0-4-4h-0.42a5,5,0,0,1-9.16,0H1275a4,4,0,0,0-4,4v5h2v-2h0.13l-0.14-.836a1,1,0,0,1,.82-1.162,1.014,1.014,0,0,1,1.17.826l0.72,4.233A0.822,0.822,0,0,1,1276,375h8.31l0.71-4.172a1.014,1.014,0,0,1,1.17-.826,1,1,0,0,1,.82,1.162l-0.14.836H1287v2h2v-2h0v-3Zm-26-4a1,1,0,1,1,1-1A1,1,0,0,1,1263,365Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,1263,368.005Zm9.38-10.977c-1.21,2.043-3.91,3.687-5.38,4.471V369a1,1,0,0,1-2,0v-7.5c-1.47-.782-4.16-2.423-5.38-4.461A6.984,6.984,0,0,0,1253,364v6h3v-5a1,1,0,0,1,2,0v21h8a1,1,0,0,1,0,2h-8v2h8a1,1,0,0,1,0,2h-8a2,2,0,0,1-2-2V376h-3a2,2,0,0,1-2-2V364a9,9,0,0,1,8.01-8.942c0-.02-0.01-0.039-0.01-0.058a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3c0,0.027-.01.052-0.01,0.079a8.988,8.988,0,0,1,7.49,5.921h-2.16A6.984,6.984,0,0,0,1272.38,357.028ZM1253,374h3v-2h-3v2Zm17-20h-8a1,1,0,0,0-1,1c0,2.4,5,4.8,5,4.8s5-2.279,5-4.8A1,1,0,0,0,1270,354Z" transform="translate(-1251 -352)"></path>
                            <path class="cls-2" d="M1289,375h-3l-1,1h-9l-2-1-3-1-1-1v-6l1-1,1-1,1-1h3l1,1,1,1,2,1h1l1-1,2-1,1-1,3,1,1,1,1,1v7Zm-23-15c-3.31,0-6-3.134-6-7h12C1272,356.866,1269.31,360,1266,360Zm-14,11h6v4h-6v-4Zm15,19h-10v-3h10v3Zm15,1h-4l2-10Z" transform="translate(-1251 -352)"></path>
                        </svg>
                    </a>
                    <div class="item__content">
                        <a href="#" class="item__title">Одежда</a>
                        <div class="item__description">
                            <a href="#" class="item__description-item button">
                                Женская одежда
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Мужская одежда
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Одежда для подростков
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Одежда для новорожденных
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <a href="#" class="item__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <style>.cls-1,.cls-2{fill:var(--color-accent);fill-rule:evenodd}.cls-2{opacity:.1}</style>
                            </defs>
                            <path class="cls-1" d="M1267.34,2436.92a1.029,1.029,0,0,1-1.32-.54l-2.92-7.02a0.922,0.922,0,0,1-.07-0.36H1263v-3.5a1.5,1.5,0,0,0-3,0v6.64a3.98,3.98,0,0,1,1.3,7.12c1.6,3.18,2.7,9.11,2.7,13.74,0,6.63-2.24,9-5,9s-5-2.37-5-9c0-4.63,1.1-10.56,2.7-13.74a3.98,3.98,0,0,1,1.3-7.12v-6.64a3.5,3.5,0,0,1,7,0v3.17l2.91,6.97A0.981,0.981,0,0,1,1267.34,2436.92ZM1256,2453c0,5.52,1.34,7,3,7s3-1.48,3-7c0-4.45-.87-10.81-2.08-13.12a3.587,3.587,0,0,1-1.84,0C1256.87,2442.19,1256,2448.55,1256,2453Zm3-19a2,2,0,1,0,2,2A2.006,2.006,0,0,0,1259,2434Zm-12.5,9a4.507,4.507,0,0,1,4.5,4.47h0c-0.95,8.38-4.34,14.53-8,14.53h-7c-4.42,0-8-8.95-8-20s3.58-20,8-20h7c3.65,0,7.04,6.13,8,14.5h0a4.5,4.5,0,0,1-9,0h0.01a27.985,27.985,0,0,0-2.51-9.1c-1.51,3.27-2.5,8.58-2.5,14.6s0.99,11.33,2.5,14.6a28.422,28.422,0,0,0,2.52-9.13H1242A4.507,4.507,0,0,1,1246.5,2443Zm-2.5-6.5h0a2.5,2.5,0,0,0,5,0h0.02c-0.77-7.25-3.35-12.5-6.02-12.5a3.235,3.235,0,0,0-2.45,1.58A28.545,28.545,0,0,1,1244,2436.5Zm-9,5.5c0-7.93,1.85-14.77,4.53-18H1236c-3.31,0-6,8.06-6,18s2.69,18,6,18h3.53C1236.85,2456.77,1235,2449.93,1235,2442Zm5.55,16.42A3.235,3.235,0,0,0,1243,2460h0c2.68,0,5.26-5.27,6.03-12.53H1249a2.5,2.5,0,0,0-5,0h0A28.536,28.536,0,0,1,1240.55,2458.42Zm-6.05-.42a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,1234.5,2458Zm-1.5-30.5a1.5,1.5,0,1,1,1.5,1.5A1.5,1.5,0,0,1,1233,2427.5Zm1,7a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,1234,2434.5Zm-1.5,16.5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,1232.5,2451Zm-0.5-11a2,2,0,1,1-2,2A2.006,2.006,0,0,1,1232,2440Z" transform="translate(-1228 -2422)"></path>
                            <path class="cls-2" d="M1262,2460l-2,1c-1.21-1.17-2-3.45-2-7.28,0-4.47,1.09-10.29,2.64-13.08L1261,2441l1,3,1,6v8Zm-15-3-2,3-1,1h-2l-1-1-2-2,1-1,1-3,2-5,1-4,3-1a8.319,8.319,0,0,1,2,1,3.4,3.4,0,0,0,1,1v5l-1,3Zm-1-17-2-1-1-3-1-6-1-2-1-2,2-3h2l2,2,3,6,1,4v3l-1,1Z" transform="translate(-1228 -2422)"></path>
                        </svg>
                    </a>
                    <div class="item__content">
                        <a href="#" class="item__title">Бижутерия и ювелирные изделия</a>
                        <div class="item__description">
                            <a href="#" class="item__description-item button">
                                Броши
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Серьги
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Браслеты
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <a href="#" class="item__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <style>.cls-1,.cls-2{fill:var(--color-accent);fill-rule:evenodd}.cls-2{opacity:.1}</style>
                            </defs>
                            <path class="cls-1" d="M1337,376h-1a10,10,0,0,1-10,10h0v3a3,3,0,0,1-3,3h-8a3,3,0,0,1-3-3v-3a10,10,0,0,1-10-10h-1a2,2,0,0,1-2-2v-5a2,2,0,0,1,2-2h6v-2h-2a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2h-2v2h7v-4.277a1.983,1.983,0,0,1-1-1.723v-2a1.983,1.983,0,0,1,1-1.723V355a3,3,0,0,1,6,0v2.277a1.983,1.983,0,0,1,1,1.723v2a1.983,1.983,0,0,1-1,1.723V367h7v-2h-2a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2h-2v2h6a2,2,0,0,1,2,2v5A2,2,0,0,1,1337,376Zm-23,13a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1v-3h-10v3Zm-2-5h14a8,8,0,0,0,8-8h-25.91a5.981,5.981,0,0,0,3.74,4.581v0a0.991,0.991,0,0,1-.7,1.855v0.021a7.987,7.987,0,0,1-5.05-6.459H1304A8,8,0,0,0,1312,384Zm8-29a1,1,0,0,0-2,0v2h2v-2Zm1,4.5a0.5,0.5,0,0,0-.5-0.5h-3a0.5,0.5,0,0,0-.5.5v1a0.5,0.5,0,0,0,.5.5h3a0.5,0.5,0,0,0,.5-0.5v-1Zm-3,3.5v4h2v-4h-2Zm19,6h-36v5h36v-5Z" transform="translate(-1299 -352)"></path>
                            <path class="cls-2" d="M1334,380l-3,4-4,1h-17l-3-1-2-2-2-3h31.33Zm-34-11h38v5h-38v-5Z" transform="translate(-1299 -352)"></path>
                        </svg>
                    </a>
                    <div class="item__content">
                        <a href="#" class="item__title">Сантехника</a>
                        <div class="item__description">
                            <a href="#" class="item__description-item button">
                                Ванны
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Душевые кабины
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Смесители
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Унитазы
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <a href="#" class="item__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40.031" viewBox="0 0 40 40.031">
                            <defs>
                                <style>.cls-1,.cls-2{fill: var(--color-accent);fill-rule:evenodd}.cls-2{opacity:.1}</style>
                            </defs>
                            <path class="cls-1" d="M148,832v11a2,2,0,0,1-2,2H132a2,2,0,0,1-2-2V832a1.992,1.992,0,0,1,1.027-1.737A1.905,1.905,0,0,1,131,830v-7.277A1.994,1.994,0,0,1,130,821v-2a1.944,1.944,0,0,0,0-2l1-4a2,2,0,0,1,2-2h0.1a4.993,4.993,0,0,1,1.7-2.839l-3.095-1.232a1,1,0,1,1,.562-1.919l5.03,2a0.837,0.837,0,0,1,.084.044A4.859,4.859,0,0,1,138,807h3a3.927,3.927,0,0,1,.524.063A2.016,2.016,0,0,1,142,807h4a1,1,0,0,1,0,2v2a1.905,1.905,0,0,1-.027.263A1.992,1.992,0,0,1,147,813l1,4a1.944,1.944,0,0,0,0,2v2a1.994,1.994,0,0,1-1,1.723V830a1.905,1.905,0,0,1-.027.263A1.992,1.992,0,0,1,148,832Zm-16,11h9v-8a1,1,0,0,1,2,0v8h3V832H132v11Zm1-13h12v-7H133v7Zm7-21h-2a2.99,2.99,0,0,0-2.816,2H140v-2Zm4,0h-2v2h2v-2Zm1,4H133l-1,4h14Zm1,6H132v2h14v-2Zm-21.5,24a14.478,14.478,0,0,0,3.5-.443V843a4.941,4.941,0,0,0,.27,1.55,16.5,16.5,0,1,1,0-32.1A4.941,4.941,0,0,0,128,814v0.443a13.877,13.877,0,0,0-5.773-.252A4.136,4.136,0,0,0,122,815.5a4.714,4.714,0,0,0,.906,2.693A19.719,19.719,0,0,1,128,816.4v2.059a17.88,17.88,0,0,0-3.637,1.285A14.519,14.519,0,0,0,128,821.9v2.07a17.013,17.013,0,0,1-5.4-3.265,18.048,18.048,0,0,0-2.591,1.887l7.693,7.688a1,1,0,1,1-1.411,1.413l-7.688-7.683a18.113,18.113,0,0,0-2.273,3.189c3.1,3,5.274,8.783,5.6,15.564A14.476,14.476,0,0,0,124.5,843ZM110,828.5a14.416,14.416,0,0,0,2.007,7.335,19.8,19.8,0,0,1,1.838-8.152A4.573,4.573,0,0,0,111.5,827a4.2,4.2,0,0,0-1.443.274C110.023,827.678,110,828.086,110,828.5Zm11.235-9.33A6.378,6.378,0,0,1,120,815.5a5.113,5.113,0,0,1,.071-0.792,14.54,14.54,0,0,0-5.079,2.862l3.608,3.606A20.293,20.293,0,0,1,121.235,819.17Zm-4.045,3.42-3.611-3.608a14.49,14.49,0,0,0-3.165,6.14A5.41,5.41,0,0,1,111.5,825a6.236,6.236,0,0,1,3.24.962A20.168,20.168,0,0,1,117.19,822.59ZM115.44,829a17.8,17.8,0,0,0-1.44,7,17.568,17.568,0,0,0,.236,2.741,14.512,14.512,0,0,0,5.675,3.506C119.55,836.482,117.838,831.593,115.44,829Z" transform="translate(-108 -804.969)"></path>
                            <path class="cls-2" d="M132,822l-1-4,15-1,1,2-1,3H132Zm9-14h4v4h-4v-4Zm-28,17a11.959,11.959,0,0,1,15-11.607v23.214A11.959,11.959,0,0,1,113,825Zm33,19-15-1V831l16,1Z" transform="translate(-108 -804.969)"></path>
                        </svg>
                    </a>
                    <div class="item__content">
                        <a href="#" class="item__title">Спортивные товары</a>
                        <div class="item__description">
                            <a href="#" class="item__description-item button">
                                Мячи
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Экипировки
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Гантели
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <a href="#" class="item__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <style>.cls-1,.cls-2{fill: var(--color-accent);fill-rule:evenodd}.cls-2{opacity:.1}</style>
                            </defs>
                            <path class="cls-1" d="M347.213,2090h-0.394a0.844,0.844,0,0,1,.181.5c0,1.38-4.029,2.5-9,2.5s-9-1.12-9-2.5a0.844,0.844,0,0,1,.181-0.5h-0.394A10.988,10.988,0,0,1,337,2073.05V2066a1,1,0,0,1,2,0v7.05A10.988,10.988,0,0,1,347.213,2090ZM338,2091c3.314,0,6-.22,6-0.5s-2.686-.5-6-0.5-6,.22-6,0.5S334.686,2091,338,2091Zm-9-7a8.917,8.917,0,0,0,1.593,5.08,14.031,14.031,0,0,1,3.025-.76,11.354,11.354,0,0,1,.489-12.43A9.012,9.012,0,0,0,329,2084Zm9-9a3,3,0,0,0-.3.02,9.415,9.415,0,0,0-1.87,13.06c0.7-.05,1.42-0.08,2.17-0.08a21.681,21.681,0,0,1,7.407,1.08A8.975,8.975,0,0,0,338,2075Zm-12.947,7.2A11.569,11.569,0,0,0,323,2082c-0.343,0-.68.02-1.015,0.05a13.451,13.451,0,0,0-3.182,17.18,36.721,36.721,0,0,1,4.2-.23c4.383,0,8.156.7,9.924,1.71a11.871,11.871,0,0,0,2.029-5.71h2.008a13.932,13.932,0,0,1-2.481,7H334c0,1.66-4.925,3-11,3s-11-1.34-11-3h-0.48a13.978,13.978,0,0,1,10.49-21.95c0-.02-0.01-0.03-0.01-0.05v-14a1,1,0,0,1,2,0v14c0,0.02-.009.03-0.009,0.05,0.422,0.03.841,0.08,1.252,0.15C325.147,2080.85,325.09,2081.52,325.053,2082.2ZM323,2103c4.418,0,8-.45,8-1s-3.582-1-8-1-8,.45-8,1S318.582,2103,323,2103Zm-12-9a11.9,11.9,0,0,0,2.079,6.71,12.583,12.583,0,0,1,3.662-1.18,15.226,15.226,0,0,1,1.6-16.59A12,12,0,0,0,311,2094Z" transform="translate(-309 -2065)"></path>
                            <path class="cls-2" d="M347,2088l-1,2-2-1h-4.253a12.99,12.99,0,0,1-2.77-8.13A9.491,9.491,0,0,1,340,2074h1l3,2,3,4,1,4v2Zm-16,14-2-2h-6s-3.356-3-3-9,3.619-9.12,5-10v7.79l3.211,4.9L331,2095h4v5l-2,2h-2Z" transform="translate(-309 -2065)"></path>
                        </svg>
                    </a>
                    <div class="item__content">
                        <a href="#" class="item__title">Освещение</a>
                        <div class="item__description">
                            <a href="#" class="item__description-item button">
                                Люстры
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Светильники
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Фонари
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <a href="#" class="item__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <style>.cls-1,.cls-2{fill: var(--color-accent);fill-rule:evenodd}.cls-2{opacity:.1}</style>
                            </defs>
                            <path class="cls-1" d="M1102,4069.03c-0.01.05-.01,0.11-0.02,0.16A4.986,4.986,0,0,1,1097,4074h-4v2h1a1,1,0,0,1,1,1l0.91,8.15a4.806,4.806,0,0,1,.09.85,4,4,0,0,1-8,0,4.806,4.806,0,0,1,.09-0.85L1089,4077a1,1,0,0,1,1-1h1v-2h-4a4.991,4.991,0,0,1-4.98-4.8,1.1,1.1,0,0,1-.02-0.18V4069h0a1.229,1.229,0,0,1,.02-0.27l4-13.97A4.991,4.991,0,0,1,1091,4050h2a4.991,4.991,0,0,1,4.98,4.76l4,13.97a1.229,1.229,0,0,1,.02.27h0v0.03Zm-11.94,16.51a1.759,1.759,0,0,0-.06.46,2,2,0,0,0,4,0,1.759,1.759,0,0,0-.06-0.46L1093,4078h-2Zm5.96-30.27a1.229,1.229,0,0,1-.02-0.27h0a3,3,0,0,0-3-3h-2a3,3,0,0,0-3,3h0a1.229,1.229,0,0,1-.02.27l-3.97,13.84A2.992,2.992,0,0,0,1087,4072h4v-7a1,1,0,0,1,2,0v7h4a2.99,2.99,0,0,0,2.99-2.88ZM1078,4079a7.971,7.971,0,0,0,6.24-3H1086v0.98a10,10,0,1,1-8-15.98,9.843,9.843,0,0,1,2.99.46l-0.66,1.89a7.824,7.824,0,0,0-2.33-.35A8,8,0,0,0,1078,4079Zm0-22a14,14,0,1,0,8,25.48v2.36a16,16,0,1,1-3.03-29.04l-0.66,1.88A13.94,13.94,0,0,0,1078,4057Z" transform="translate(-1062 -4050)"></path>
                            <path class="cls-2" d="M1100.89,4068.11a3.74,3.74,0,0,1,.11.89,4,4,0,0,1-4,4h-6a3.973,3.973,0,0,1-3.49-5.92L1091,4054a2.006,2.006,0,0,1,2-2h2a2,2,0,0,1,1.48,3.34L1101,4068Zm-21.44,11.96a7.555,7.555,0,1,1,0-15.11,7.832,7.832,0,0,1,1.29.12l-0.67,3.92,0.02,0.02a6.263,6.263,0,0,0-.09.98,6,6,0,0,0,6,6h0.14A7.535,7.535,0,0,1,1079.45,4080.07Z" transform="translate(-1062 -4050)"></path>
                        </svg>
                    </a>
                    <div class="item__content">
                        <a href="#" class="item__title">Товары для дома</a>
                        <div class="item__description">
                            <a href="#" class="item__description-item button">
                                Текстиль
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Декор
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Инвентарь
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <a href="#" class="item__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <style>.cls-1,.cls-2{fill: var(--color-accent);fill-rule:evenodd}.cls-2{opacity:.1}</style>
                            </defs>
                            <path class="cls-1" d="M1101,3620.94V3627a3,3,0,0,1-3,3h-8a3,3,0,0,1-3-3v-6.06a12.974,12.974,0,0,1,0-21.88V3593a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v6.06A12.974,12.974,0,0,1,1101,3620.94Zm-12,6.06a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1v-5a13,13,0,0,1-10,0v5Zm10-34a1,1,0,0,0-1-1h-8a1,1,0,0,0-1,1v5a13,13,0,0,1,10,0v-5Zm-5,6a11,11,0,1,0,11,11A10.994,10.994,0,0,0,1094,3599Zm7.5,7.87-5.5,3.15a2,2,0,0,1-3.99.11l-2.39-1.21a0.991,0.991,0,0,1-.53-1.31,1.014,1.014,0,0,1,1.32-.53l2.48,1.26a1.942,1.942,0,0,1,1.11-.34,2,2,0,0,1,1,.28l5.5-3.15a0.993,0.993,0,0,1,1.37.37A1.01,1.01,0,0,1,1101.5,3606.87Zm-20.91,11.2c-0.19.09-.39,0.16-0.59,0.24V3627a3,3,0,0,1-3,3h-1a3,3,0,0,1-3-3v-8.67a9.5,9.5,0,0,1,0-17.66V3593a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v7.69c0.2,0.08.4,0.15,0.59,0.24a15.768,15.768,0,0,0-.99,1.75,7.5,7.5,0,1,0,0,13.64A15.768,15.768,0,0,0,1080.59,3618.07Zm-2.59-17.93V3593a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1v7.13A8.4,8.4,0,0,1,1078,3600.14Zm-3,18.73V3627a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1v-8.14A8.4,8.4,0,0,1,1075,3618.87Zm2.94-9.08a1.466,1.466,0,0,1-2.84.19l-2.51-1.09a1,1,0,0,1-.53-1.31,1.014,1.014,0,0,1,1.32-.53l2.51,1.09a1.368,1.368,0,0,1,.61-0.14,1.29,1.29,0,0,1,.39.08l1.28-.73a15.211,15.211,0,0,0-.17,2.15h0c0,0.08.01,0.16,0.01,0.25Z" transform="translate(-1067 -3590)"></path>
                            <path class="cls-2" d="M1096,3622a10,10,0,1,1,10-10A10,10,0,0,1,1096,3622Zm-22-4h5v11h-5v-11Zm0-27h5v11h-5v-11Z" transform="translate(-1067 -3590)"></path>
                        </svg>
                    </a>
                    <div class="item__content">
                        <a href="#" class="item__title">Часы</a>
                        <div class="item__description">
                            <a href="#" class="item__description-item button">
                                Мужские часы
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Женские часы
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Детские часы
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <a href="#" class="item__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <style>.cls-1,.cls-2{fill: var(--color-accent);fill-rule:evenodd}.cls-2{opacity:.1}</style>
                            </defs>
                            <path class="cls-1" d="M730.5,1247a7.518,7.518,0,0,1-4.51-1.29,6.648,6.648,0,0,1-2.99,1.16v-1.97c1.179-.16,2-0.5,2-0.9v-31.7a9.1,9.1,0,0,1-7,0v2.7h-2v-2.7a9.1,9.1,0,0,1-7,0v2.7h-2v-5c0-1.66,2.462-3,5.5-3a7.57,7.57,0,0,1,4.5,1.28,8.55,8.55,0,0,1,9,0,7.57,7.57,0,0,1,4.5-1.28c3.038,0,5.5,1.34,5.5,3v34C736,1245.66,733.538,1247,730.5,1247Zm-18-38c-1.933,0-3.5.45-3.5,1s1.567,1,3.5,1,3.5-.45,3.5-1S714.433,1209,712.5,1209Zm9,0c-1.933,0-3.5.45-3.5,1s1.567,1,3.5,1,3.5-.45,3.5-1S723.433,1209,721.5,1209Zm9,0c-1.933,0-3.5.45-3.5,1s1.567,1,3.5,1,3.5-.45,3.5-1S732.433,1209,730.5,1209Zm3.5,3.31a9.222,9.222,0,0,1-7,0V1244c0,0.55,1.567,1,3.5,1s3.5-.45,3.5-1v-31.69ZM721,1247H696v-30h25v30Zm-2-5h-3a1,1,0,0,1,0-2h3v-16H705a1,1,0,0,1,0-2h14v-3H698v3h3a1,1,0,0,1,0,2h-3v16h14a1,1,0,0,1,0,2H698v3h21v-3Zm-17.573-5.1a1.019,1.019,0,0,1-.427.1c-0.038,0-.07-0.02-0.106-0.02a1,1,0,0,1-.244-0.05l-0.064-.03a0.821,0.821,0,0,1-.278-0.18,0.041,0.041,0,0,0-.023-0.02,1.072,1.072,0,0,1-.178-0.27c-0.013-.03-0.025-0.05-0.036-0.08s-0.04-.07-0.05-0.11a0.967,0.967,0,0,1-.006-0.17A0.418,0.418,0,0,1,700,1236v-6c0-.02.009-0.03,0.01-0.05a1,1,0,0,1,.056-0.28c0.011-.03.018-0.06,0.032-0.09a1.1,1.1,0,0,1,.171-0.25c0.014-.02.025-0.03,0.04-0.05a0.791,0.791,0,0,1,.238-0.16,0.438,0.438,0,0,1,.1-0.05c0.023-.01.039-0.02,0.063-0.03l7.56-2.02c0.014-.01.028,0,0.042-0.01a1.155,1.155,0,0,1,.186,0,1.155,1.155,0,0,1,.186,0c0.014,0.01.028,0,.042,0.01l7.56,2.02c0.024,0.01.04,0.02,0.063,0.03a0.438,0.438,0,0,1,.1.05,0.791,0.791,0,0,1,.238.16c0.015,0.02.026,0.03,0.04,0.05a1.1,1.1,0,0,1,.171.25c0.014,0.03.021,0.06,0.032,0.09a1,1,0,0,1,.056.28c0,0.02.01,0.03,0.01,0.05v6a0.418,0.418,0,0,1-.015.07,0.967,0.967,0,0,1-.006.17c-0.01.04-.036,0.07-0.05,0.11s-0.023.05-.036,0.08a1.072,1.072,0,0,1-.178.27,0.041,0.041,0,0,0-.023.02,0.821,0.821,0,0,1-.278.18l-0.064.03a1,1,0,0,1-.244.05c-0.036,0-.068.02-0.106,0.02a1.019,1.019,0,0,1-.427-0.1L708.5,1235Zm7.3-3.88L715,1234.7v-3.96l-6.5-1.74-6.5,1.74v3.96l6.272-1.68c0.014-.01.028,0,0.042-0.01a1.155,1.155,0,0,1,.186,0,1.155,1.155,0,0,1,.186,0C708.7,1233.02,708.714,1233.01,708.728,1233.02Z" transform="translate(-696 -1207)"></path>
                            <path class="cls-2" d="M730,1246v-34l5-1v34Zm-33-23h23v18H697v-18Zm4,13,7-2,8,2v-6l-8-2-7,3v5Z" transform="translate(-696 -1207)"></path>
                        </svg>
                    </a>
                    <div class="item__content">
                        <a href="#" class="item__title">Строительные материалы</a>
                        <div class="item__description">
                            <a href="#" class="item__description-item button">
                                Обои
                                <span class="separator">—</span>
                            </a>
                            <a href="#" class="item__description-item button">
                                Клеи
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section top-articles-section">
    <div class="container section__top">
        <h3 class="section__title">Лучшие предложения</h3>

        <div class="section__top-container">
            <div class="filter ajax" data-filter="main_page_catalog" appendAction="main_page_catalog_appendBtn">
                <span class="filter__btn button active" filter-type="catalog::hit">Хит</span>
                <span class="filter__btn button" filter-type="catalog::advise">Советуем</span>
                <span class="filter__btn button" filter-type="catalog::new">Новинка</span>
                <span class="filter__btn button" filter-type="catalog::action">Акция</span>
            </div>
            <a href="#" class="button">Весь каталог</a>
        </div>
    </div>
    <div class="container">
        <div class="catalog" id="main_page_catalog">
            <div class="items catalog__items">
                <div class="items__wrapper">

                    <div class="item product-item">
                        <div class="item__content">
                            <div class="item__image-wapper">
                                <div class="item__actions-top actions-top">
                                    <span class="actions-top__action">Хит</span>
                                </div>
                                <div class="item__icons-block icons-block">
                                    <span title="Нравится" class="icons-block__item button"><i class="far fa-heart"></i></span>
                                    <span title="Быстрый просмотр" class="icons-block__item button"><i class="far fa-eye"></i></span>
                                </div>
                                <a href="#" class="item__thumb">
                                    <div class="item__image-selector image-selector">
                                            <span class="image-selector__item active">
                                                <span class="image-selector__item-nav"></span>
                                                <img class="lazy" data-src="/css/img/p1.1.jpg" data-srcset="/img/p1.1.jpg" alt="">
                                            </span>
                                        <span class="image-selector__item">
                                                <span class="image-selector__item-nav"></span>
                                                <img class="lazy" data-src="/css/img/p1.2.jpg" data-srcset="/img/p1.2.jpg" alt="">
                                            </span>
                                        <span class="image-selector__item">
                                                <span class="image-selector__item-nav"></span>
                                                <img class="lazy" data-src="/css/img/p1.3.jpg" data-srcset="/img/p1.3.jpg" alt="">
                                            </span>
                                        <span class="image-selector__item">
                                                <span class="image-selector__item-nav"></span>
                                                <img class="lazy" data-src="/css/img/p1.4.jpg" data-srcset="/img/p1.4.jpg" alt="">
                                            </span>
                                    </div>
                                </a>
                            </div>
                            <div class="item__info">
                                <div class="item__info-rating info-rating">
                                    <div class="info-rating__wrapper" title="Рейтинг 4 из 5">
                                        <div class="info-rating__item filled"><i class="fas fa-star"></i></div>
                                        <div class="info-rating__item filled"><i class="fas fa-star"></i></div>
                                        <div class="info-rating__item filled"><i class="fas fa-star"></i></div>
                                        <div class="info-rating__item filled"><i class="fas fa-star"></i></div>
                                        <div class="info-rating__item"><i class="fas fa-star"></i></div>
                                    </div>
                                    <div class="info-rating__count">3</div>
                                </div>
                                <h4 class="item__title">
                                    <a href="#" class="item__title-link button">
                                        <span>Смартфон SY 15</span>
                                    </a>
                                </h4>
                                <div class="item__art">
                                    <span>Арт.: D98186A5</span>
                                </div>
                                <div class="item__price price">
                                    <div class="price__value">30 000</div>
                                    <div class="price__currency">₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="catalog__actions">
                <button class="button bordered-btn catalog__appendBtn" id="main_page_catalog_appendBtn">Загрузить еще</button>
            </div>
        </div>
    </div>
</section>

<div class="popup-container">
    <div class="popup-wrap">

        <div class="popup popup__main-menu" style="width: 500px;height: 500px;background: #fff;display: flex;">
            g
        </div>

    </div>
</div>

<a class="scroll-to-top" href="#">
    <i class="far fa-arrow-up"></i>
</a>

@include('layout.footer')
