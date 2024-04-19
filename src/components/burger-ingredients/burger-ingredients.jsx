import React from 'react';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';

const IngredientCard = ({ingredient, count=false}) => (
  <li className={styles.card}>
    <div className={styles.img}>
      <img src={ingredient.image} alt={ingredient.name}/>
    </div>
    <div className={`${styles.cost} mt-1 mb-1`}>
      <span className="text text_type_digits-default mr-2">
        {ingredient.price}
      </span>
      <span className={styles.costIcon}>
        <CurrencyIcon type="primary"/>
      </span>
    </div>
    <p className="text text_type_main-default mt-1">
      {ingredient.name}
    </p>
    {count && <Counter count={count} size="default" extraClass="m-1" />}
  </li>
);

const BurgerIngredients = ({ingredients}) => {
  const [current, setCurrent] = React.useState('one');
  return (
    <>
      <h1 className="text text_type_main-large mt-10">
        Соберите бургер
      </h1>
      <div style={{ display: 'flex' }} className="mt-5">
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.wrapper} customScroll pt-10`}>
        <p className="text text_type_main-medium">
          Булки
        </p>
        <div className="pt-6 pb-2 pl-1 pr-1">
          <div className={`${styles.cardWrapper} mb-8 pr-3 pl-3`}>
            {
              ingredients.map((ingredient) => (
                (ingredient.type==='bun') && <IngredientCard ingredient={ingredient} key={ingredient._id}/>
              ))
            }
          </div>
        </div>
        <p className="text text_type_main-medium">
          Соусы
        </p>
        <div className="pt-6 pb-2 pl-1 pr-1">
          <div className={`${styles.cardWrapper} mb-8 pr-3 pl-3`}>
            {
              ingredients.map((ingredient) => (
                (ingredient.type==='sauce') && <IngredientCard ingredient={ingredient} key={ingredient._id}/>
              ))
            }
          </div>
        </div>
        <p className="text text_type_main-medium">
          Начинки
        </p>
        <div className="pt-6 pb-2 pl-1 pr-1">
          <ul className={`${styles.cardWrapper} mb-8 pr-3 pl-3`}>
            {
              ingredients.map((ingredient) => (
                (ingredient.type==='main') && <IngredientCard ingredient={ingredient} key={ingredient._id}/>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default BurgerIngredients;