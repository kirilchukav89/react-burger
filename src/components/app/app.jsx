import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';

const API = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [state, setState] = React.useState({ 
    ingredients: null,
    loading: true,
    hasError: false
  })

  React.useEffect(() => {
    const getProductData = async () => {
      fetch(API)
        .then(res => res.json())
        .then(data => setState({ ...state, ingredients: data.data, loading: false }))
        .catch(e => setState({ ...state, loading: false, hasError: true }))
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
          <BurgerConstructor />
        </section>
      </main>
    </>
  );
}

export default App;