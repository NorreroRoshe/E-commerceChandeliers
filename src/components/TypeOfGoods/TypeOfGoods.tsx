import React from 'react';
import { Link } from 'react-router-dom';
import { typesOfChapter } from '../../pages/Chapter/Chapter';
import s from './TypeOfGoods.module.scss';

type TypeOfGoodsProp = {
  typesHome: typesOfChapter[];
  title: string;
};

export const TypeOfGoods: React.FC<TypeOfGoodsProp> = ({ typesHome, title }) => {
  return (
    <section className={s.section_product}>
      <div className={`${s.container} ${s.product__container}`}>
        <h2 className={s.product_heading}>{title}</h2>
        <ul className={s.product__categories}>
          {typesHome.map((obj, i) => (
            <li key={i} className={s.product__categories_item}>
              <Link className={s.product__categories_link} to="/">
                <img src={obj.img} alt="Lustra" className={s.product__categories_img} />
                <p className={s.product__categories_description}>{obj.info}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
