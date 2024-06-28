import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { ingredientType } from '../../utils/types';
import { useModal } from '../../hooks/useModal';
import { getOrder } from '../../services/actions';

const BurgerConstructor = ({ ingredients }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { data } = useSelector(store => store.constructorIngredients);
  const dispatch = useDispatch();

  const handleClickOnOrderButton = () => {
    let orderList = data.map(ingredient => {
      return ingredient._id
    })
    openModal();
    dispatch(getOrder(orderList));
  }

  return (
    <>
      {
        isModalOpen && <Modal closeModal={closeModal}>
          <OrderDetails/>
        </Modal>
      }
      <div className={`${styles.lockIngredient} mt-25`}>
        <div className={styles.ingredient}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredients[0].name} (верх)`}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image_mobile}
          />
        </div>
      </div>
      <div className={`${styles.ingredientsWrapper} customScroll`}>
        <div className={styles.ingredients}>
          {
            ingredients.map((ingredient, index) => (
              (ingredient.type !== 'bun') && <div className={styles.ingredient} key={index}>
                <button type="button" className={styles.dragButton}>
                  <DragIcon type="primary"/>
                </button>
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image_mobile}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.lockIngredient}>
        <div className={styles.ingredient}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredients[0].name} (низ)`}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image_mobile}
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
        <Button disabled={!data.length} htmlType="button" type="primary" size="large" onClick={() => handleClickOnOrderButton()}>
          Оформить заказ
        </Button>
      </div>
    </>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape(ingredientType)
  )
}; 

export default BurgerConstructor;