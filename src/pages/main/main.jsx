import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import styles from './main.module.css';

function Main() {
  return (
    <>
      <main className={styles.mainSection}>
          <section className={styles.mainSectionCol}>
            <BurgerIngredients/>
          </section>
          <section className={styles.mainSectionCol}>
            <BurgerConstructor/>
          </section>
      </main>
    </>
  );
}

export default Main;