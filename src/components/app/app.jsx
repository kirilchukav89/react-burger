import { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';

const API = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [state, setState] = useState({ 
    ingredients: null,
    loading: true,
    hasError: false,
    errorType: null
  })

  useEffect(() => {
    const getProductData = async () => {
      fetch(API).then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then(data => setState({ ...state, ingredients: data.data, loading: false }))
      .catch(error => setState({ ...state, loading: false, hasError: true, errorType: error }))
    }
    getProductData();
  }, [])

  return (
    <>
      <AppHeader />
      <main className={styles.mainSection}>
        <section className={styles.mainSectionCol}>
          {!state.loading && !state.hasError && <BurgerIngredients ingredients={state.ingredients} />}
        </section>
        <section className={styles.mainSectionCol}>
        {!state.loading && !state.hasError && <BurgerConstructor ingredients={state.ingredients} />}
        </section>
      </main>
    </>
  );
}

export default App;