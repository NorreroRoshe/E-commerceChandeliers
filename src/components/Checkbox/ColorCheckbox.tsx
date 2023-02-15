import React from 'react'
// import styles from './ColorCheckbox.module.scss';
// import 'simplebar';
// import 'simplebar/dist/simplebar.css';
// import './colors.scss';

// const color = [
//   { color: 'Бронзовый', class: 'bronze' },
//   { color: 'Белый', class: 'white' },
//   { color: 'Бежевый', class: 'bej' },
//   { color: 'Бирюзовый', class: 'biruz' },
//   { color: 'Голубой', class: 'golub' },
//   { color: 'Желтый', class: 'yellow' },
//   { color: 'Зеленый', class: 'green' },
//   { color: 'Золотой', class: 'gold' },
//   { color: 'Изумруд', class: 'izumrud' },
//   { color: 'Коричневый', class: 'brown' },
//   { color: 'Красный', class: 'red' },
//   { color: 'Мат сильвер', class: 'matsil' }
// ]

// function Colorcheckbox({ value, onClickCategory }) {

//   // const [value, setValue] = React.useState(0)

//   return (
//     <div className={styles.new}>
//       <div className={`${styles.header__dropdown_wrap} ${styles.header__dropdown_wrap_colorcheck}`} data-simplebar>
//         <form>
//           {
//             color.map((obj, i) => (<div key={i} onClick={() => onClickCategory(i)} className={value === i ? 'styles.form_group active' : ''}>
//               {/* <input type="checkbox" id={obj.class} />
//               <label className={obj.class} for={obj.class}>
//                 <span>{obj.color}</span>
//                 <span>(150)</span></label> */}
//               {obj.color}
//             </div>))
//           }
//         </form>
//       </div>
//     </div >
//   );
// }

// export default Colorcheckbox;