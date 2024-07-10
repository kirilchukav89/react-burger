import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import ConstructorItem from '../constructor-item/constructor-item';
import { useModal } from '../../hooks/useModal';
import { getOrder, addIngredient } from '../../services/actions';

const BurgerConstructor = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { data, totalPrice } = useSelector(store => store.constructorIngredients);
  const dispatch = useDispatch();
  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(ingredient) {
      dispatch(addIngredient(ingredient));
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const handleClickOrderButton = () => {
    let orderList = data.map(ingredient => {
      return ingredient._id
    })
    openModal();
    dispatch(getOrder(orderList));
  }

  let elementOfBun = data.find((ingredient) => {
    return ingredient.type === 'bun'
  })

  return (
    <div ref={dropTarget} className={`
      ${styles.constructorWrapper}
      ${!data.length && styles.emptyWrapper}
      ${isHover && styles.hoverWrapper}
    `}>
      {
        isModalOpen && <Modal closeModal={closeModal}>
          <OrderDetails/>
        </Modal>
      }
      {
        !data.length && <div className={`${styles.emptyText} text text_type_main-medium`}>Перетащите сюда необходимые ингредиенты</div>
      }
      {
        elementOfBun && <div className={styles.lockIngredient}>
          <div className={styles.ingredient}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${elementOfBun.name} (верх)`}
              price={elementOfBun.price}
              thumbnail={elementOfBun.image_mobile}
            />
          </div>
        </div>
      }
      <div className={`${styles.ingredientsWrapper} customScroll`}>
        <div className={styles.ingredients}>
          {
            data.map((ingredient, index) => (
              (ingredient.type !== 'bun') && <ConstructorItem index={index} key={ingredient.uniqueId}/>
            ))
          }
        </div>
      </div>
      {
        elementOfBun && <div className={styles.lockIngredient}>
          <div className={styles.ingredient}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${elementOfBun.name} (низ)`}
              price={elementOfBun.price}
              thumbnail={elementOfBun.image_mobile}
            />
          </div>
        </div>
      }
      <div className={`${styles.buttonWrapper} mt-10 pb-10 pr-4 pl-4`}>
        <div className={`${styles.cost} mr-10`}>
            <span className="text text_type_digits-medium mr-2">
              {totalPrice}
            </span>
            <span className={styles.costIcon}>
              <CurrencyIcon type="primary"/>
            </span>
          </div>
        <Button disabled={!data.length} htmlType="button" type="primary" size="large" onClick={() => handleClickOrderButton()}>
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

export default BurgerConstructor;
