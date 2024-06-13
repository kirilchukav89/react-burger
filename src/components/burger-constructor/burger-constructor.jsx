import { useState } from 'react';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

const BurgerConstructor = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <>
      <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
        <OrderDetails/>
      </Modal>
      <div className={`${styles.lockIngredient} mt-25`}>
        <div className={styles.ingredient}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
      </div>
      <div className={`${styles.ingredientsWrapper} customScroll`}>
        <div className={styles.ingredients}>
          <div className={styles.ingredient}>
            <button type="button" className={styles.dragButton}>
              <DragIcon type="primary"/>
            </button>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.ingredient}>
            <button type="button" className={styles.dragButton}>
              <DragIcon type="primary"/>
            </button>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.ingredient}>
            <button type="button" className={styles.dragButton}>
              <DragIcon type="primary"/>
            </button>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.ingredient}>
            <button type="button" className={styles.dragButton}>
              <DragIcon type="primary"/>
            </button>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.ingredient}>
            <button type="button" className={styles.dragButton}>
              <DragIcon type="primary"/>
            </button>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.ingredient}>
            <button type="button" className={styles.dragButton}>
              <DragIcon type="primary"/>
            </button>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.ingredient}>
            <button type="button" className={styles.dragButton}>
              <DragIcon type="primary"/>
            </button>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
          <div className={styles.ingredient}>
            <button type="button" className={styles.dragButton}>
              <DragIcon type="primary"/>
            </button>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.lockIngredient}>
        <div className={styles.ingredient}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
      </div>
      <div className={`${styles.buttonWrapper} mt-10 pb-10 pr-4 pl-4`}>
        <div className={`${styles.cost} mr-10`}>
          <span className="text text_type_digits-medium mr-2">
            610
          </span>
          <span className={styles.costIcon}>
            <CurrencyIcon type="primary"/>
          </span>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={() => setVisibleModal(true)}>
          Оформить заказ
        </Button>
      </div>
    </>
  )
}

export default BurgerConstructor;