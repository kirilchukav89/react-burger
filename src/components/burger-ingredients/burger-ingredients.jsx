import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import { getIngredients } from '../../services/actions';

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('one');
  const { data, loading, hasError } = useSelector(store => store.allIngredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <>
      <h1 className="text text_type_main-large mt-10">
        Соберите бургер
      </h1>
      <div className={`${styles.tabs} mt-5`}>
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
      {
        (loading) ?
        <div className="text text_type_main-medium mt-8">Загрузка...</div>
        :
        (!loading && hasError)
        ?
        <div className="text text_type_main-medium mt-8">Ошибка загрузки</div>
        :
        <div className={`${styles.wrapper} customScroll pt-10`}>
          <p className="text text_type_main-medium">
            Булки
          </p>
          <div className="pt-6 pb-2 pl-1 pr-1">
            <div className={`${styles.cardWrapper} mb-8 pr-3 pl-3`}>
              {
                data.map((ingredient) => (
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
                data.map((ingredient) => (
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
                data.map((ingredient) => (
                  (ingredient.type==='main') && <IngredientCard ingredient={ingredient} key={ingredient._id}/>
                ))
              }
            </ul>
          </div>
        </div>
      }
    </>
  )
}

export default BurgerIngredients;
