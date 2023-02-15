import React from 'react';

import { SectionHero } from './SectionHero/SectionHero';
import { TypeOfGoods } from '../../components/TypeOfGoods/TypeOfGoods';
import { GoodsCatalogue } from '../../components/GoodsCatalogue/GoodsCatalogue';

export const Home: React.FC = () => {

  const typesHome = [
    { info: 'Люстры', img: 'https://loft-concept.ru/upload/uf/f95/Lyustry.jpg' },
    { info: 'Подвесные светильники', img: 'https://loft-concept.ru/upload/uf/a77/Podvesnye-svetilniki.jpg' },
    { info: 'Потолочные светилники', img: 'https://loft-concept.ru/upload/uf/1a9/Potolochnye-svetilniki.jpg' },
    { info: 'Бра , настенные лампы', img: 'https://loft-concept.ru/upload/uf/0e0/Bra.jpg' },
    { info: 'Настольные лампы', img: 'https://loft-concept.ru/upload/uf/a7c/Nastolnaya-lampa.jpg' },
    { info: 'Торшеры', img: 'https://loft-concept.ru/upload/uf/f41/Torshery.jpg' },
    { info: 'Подсветка для картин', img: 'https://loft-concept.ru/upload/uf/b7d/Podsvetka-dlya-kartin.jpg' },
    { info: 'Лампочки', img: 'https://loft-concept.ru/upload/uf/ac0/Lampochki.jpg' },
  ];

  return (
    <div className="wrapp">
      <main>
        <SectionHero />
        <TypeOfGoods typesHome={typesHome} title={'Свет'} />
        <GoodsCatalogue />
      </main>
    </div>
  );
};

















// [
//   {
//     "info": "Люстры",
//     "img": "https://loft-concept.ru/upload/uf/f95/Lyustry.jpg"
//   },
//   {
//     "info": "Подвесные светильники",
//     "img": "https://loft-concept.ru/upload/uf/a77/Podvesnye-svetilniki.jpg"
//   },
//   {
//     "info": "Потолочные светилники",
//     "img": "https://loft-concept.ru/upload/uf/1a9/Potolochnye-svetilniki.jpg"
//   },
//   {
//     "info": "Бра , настенные лампы",
//     "img": "https://loft-concept.ru/upload/uf/0e0/Bra.jpg"
//   },
//   {
//     "info": "Настольные лампы",
//     "img": "https://loft-concept.ru/upload/uf/a7c/Nastolnaya-lampa.jpg"
//   },
//   {
//     "info": "Торшеры",
//     "img": "https://loft-concept.ru/upload/uf/f41/Torshery.jpg"
//   },
//   {
//     "info": "Подсветка для картин",
//     "img": "https://loft-concept.ru/upload/uf/b7d/Podsvetka-dlya-kartin.jpg"
//   },
//   {
//     "info": "Лампочки",
//     "img": "https://loft-concept.ru/upload/uf/ac0/Lampochki.jpg"
//   }
// ]