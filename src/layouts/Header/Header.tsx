import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

import logoSvg from '../../assets/img/img/XGG.svg';
import MenuCategory from './MenuCategoryChand/MenuCategoryChand';
import { Modal } from '../../components/HoverWindow/HoverWindow';
import { useSelector } from 'react-redux';
import Search from '../../components/Search/index';
import { selectCart } from '../../components/redux/cart/selectors';

const headerData = [
  { info: 'О нас', link: '/product' },
  { info: 'Галерея', link: '/product' },
  { info: 'Каталог', link: '/product' },
  { info: 'События', link: '/product' },
  { info: 'События', link: '/product' },
  { info: 'Издания', link: '/product' },
  { info: 'Проекты', link: '/product' },
  { info: 'Контакты', link: '/product' },
];

function Header() {
  const [isModal, setModal] = React.useState(false);
  const onClose = () => setModal(false);

  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <div className="header">
      <header className="header">
        <div className="header__top">
          <div className="container header__container">
            <Link to="/" className="header__logo">
              <img src={logoSvg} alt="" />
            </Link>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {headerData.map((obj, i) => (
                  <li key={i} className="header__nav-item">
                    <Link to={obj.link} className="header__nav-link">
                      {obj.info}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header__signin">
              <Link to="#" className="header__signin-icon"></Link>
              <Link to="#" className="header__signin-desc">
                Войти
              </Link>
            </div>
            <div className="header__signin">
              {location.pathname !== '/cart' && (
                <Link to="/cart" className="header__signin-desc button button--cart">
                  <span>{totalPrice} ₽</span>
                  <div className="button__delimiter"></div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{totalCount}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container header__container">
            <ul className="header__list">
              <React.Fragment>
                <li
                  className="header__item"
                  // onClick={() => setModal(!isModal)}
                  onMouseOver={() => setModal(true)}
                  onMouseLeave={() => setModal(false)}>
                  <button className="header__item-btn">
                    <strong className="header__item-heading">Свет</strong>
                    <span className="header__item-icon"></span>
                  </button>
                  <Modal
                    visible={isModal}
                    title="Заголовок"
                    content={<MenuCategory setModal={setModal} />}
                    onClose={onClose}
                  />
                </li>
              </React.Fragment>
            </ul>
            {location.pathname !== '/cart' && <Search />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
