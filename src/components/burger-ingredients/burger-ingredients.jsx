import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import { getIngredients } from '../../services/actions';

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');
  const tabsWrapperRef = useRef();
  const bunTabRef = useRef();
  const sauseTabRef = useRef();
  const mainTabRef = useRef();
  const { data, loading, hasError } = useSelector(store => store.allIngredients);
  const constructorData = useSelector(store => store.constructorIngredients.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const onScrollTabWrapper = () => {
    const wrapperScroll = tabsWrapperRef.current.scrollTop; 
    const sauseOffset = sauseTabRef.current.offsetTop;
    const mainOffset = mainTabRef.current.offsetTop;
    if (wrapperScroll < sauseOffset) {
      setCurrent('bun')
    } if (wrapperScroll >= sauseOffset && wrapperScroll < mainOffset) {
      setCurrent('sause')
    } if (wrapperScroll >= mainOffset) {
      setCurrent('main')
    }
  }

  useEffect(()=>{
    tabsWrapperRef.current.addEventListener("scroll", onScrollTabWrapper);
    return () => {
      tabsWrapperRef.current.removeEventListener("scroll", onScrollTabWrapper);
    }
  }, [])

  return (
    <>
      <h1 className="text text_type_main-large mt-10">
        Соберите бургер
      </h1>
      <div className={`${styles.tabs} mt-5`}>
        <Tab value="bun" active={current === 'bun'} onClick={() => {
          setCurrent('bun');
          tabsWrapperRef.current.scrollTop = bunTabRef.current.offsetTop;
        }}>
          Булки
        </Tab>
        <Tab value="sause" active={current === 'sause'} onClick={() => {
          setCurrent('sause');
          tabsWrapperRef.current.scrollTop = sauseTabRef.current.offsetTop;
        }}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={() => {
          setCurrent('main');
          tabsWrapperRef.current.scrollTop = mainTabRef.current.offsetTop;
        }}>
          Начинки
        </Tab>
      </div>
      <div ref={tabsWrapperRef} className={`${styles.wrapper} customScroll pt-10`}>
        {
          (loading) ?
          <div className="text text_type_main-medium mt-8">Загрузка...</div>
          :
          (!loading && hasError)
          ?
          <div className="text text_type_main-medium mt-8">Ошибка загрузки</div>
          :
          <>
            <p ref={bunTabRef} className="text text_type_main-medium">
              Булки
            </p>
            <div className="pt-6 pb-2 pl-1 pr-1">
              <div className={`${styles.cardWrapper} mb-8 pr-3 pl-3`}>
                {
                  data.map((ingredient) => {
                    let count = 0;
                    if (ingredient.type==='bun') {
                      constructorData.map((item) => {
                        if (ingredient._id === item._id) {
                          count= count + 2;
                        }
                      })
                      return <IngredientCard ingredient={ingredient} count={count} key={ingredient._id}/>
                    }
                  })
                }
              </div>
            </div>
            <p ref={sauseTabRef} className="text text_type_main-medium">
              Соусы
            </p>
            <div className="pt-6 pb-2 pl-1 pr-1">
              <div className={`${styles.cardWrapper} mb-8 pr-3 pl-3`}>
                {
                  data.map((ingredient) => {
                    let count = 0;
                    if (ingredient.type==='sauce') {
                      constructorData.map((item) => {
                        if (ingredient._id === item._id) {
                          count++;
                        }
                      })
                      return <IngredientCard ingredient={ingredient} count={count} key={ingredient._id}/>
                    }
                  })
                }
              </div>
            </div>
            <p ref={mainTabRef} className="text text_type_main-medium">
              Начинки
            </p>
            <div className="pt-6 pb-2 pl-1 pr-1">
              <ul className={`${styles.cardWrapper} mb-8 pr-3 pl-3`}>
                {
                  data.map((ingredient) => {
                    let count = 0;
                    if (ingredient.type==='main') {
                      constructorData.map((item) => {
                        if (ingredient._id === item._id) {
                          count++;
                        }
                      })
                      return <IngredientCard ingredient={ingredient} count={count} key={ingredient._id}/>
                    }
                  })
                }
              </ul>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default BurgerIngredients;
