import React from 'react'
import s from './SectionHero.module.scss';

export const SectionHero: React.FC = () => {
  return (
    <section className={s.section_hero}>
      <h1 className={s.visually_hidden}>Blanchard_художественная галерея</h1>
      <div className={s.hero__fake_container}></div>
      <div className={s.hero__fade_container}>
        <div className={s.hero__fade_slide}></div>
        <div className={s.hero__fade_slide}></div>
        <div className={s.hero__fade_slide}></div>
        <div className={s.hero__fade_slide}></div>
        <div className={s.hero__fade_slide}></div>
        <div className={s.hero__fade_slide}></div>
      </div>

      <div className={`${s.container} ${s.hero__container}`}>
        <div className={s.hero__content}>
          <h2 className={s.hero__heading}>Прикоснитесь к&nbsp;прекрасному</h2>
          <p className={s.hero__description}>
            Мы вынуждены отталкиваться от того, что реализация намеченных плановых заданий
            создаёт предпосылки для новых предложений.
          </p>
          <button className={s.hero__btn}>Подписаться на рассылку</button>
        </div>
      </div>
    </section >
  )
}

