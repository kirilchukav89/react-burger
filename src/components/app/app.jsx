import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';

function App() {
  const { data, loading, hasError } = useSelector(store => store.allIngredients);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getIngredients());

  // }, []);

  return (
    <>
      <AppHeader />
      <main className={styles.mainSection}>
        <DndProvider backend={HTML5Backend}>
          <section className={styles.mainSectionCol}>
            <BurgerIngredients/>
          </section>
          <section className={styles.mainSectionCol}>
          {!loading && !hasError && <BurgerConstructor ingredients={data} />}
          </section>
        </DndProvider>
      </main>
    </>
  );
}

export default App;