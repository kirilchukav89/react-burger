import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag } from "react-dnd";
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-card.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useModal } from '../../hooks/useModal';
import { setCurrentIngredient } from '../../services/actions';

const IngredientCard = ({ index }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const ingredient = useSelector(store => store.allIngredients.data[index]);
  const constructorData = useSelector(store => store.constructorIngredients.data);
  const dispatch = useDispatch();
  const [, dragRef, dragPreviewRef] = useDrag({
    type: "ingredient",
    item: ingredient
  });

  const handleClickOnCard = () => {
    dispatch(setCurrentIngredient(ingredient));
    openModal();
  }

  let count = 0;
  constructorData.map((item) => {
    if (ingredient._id === item._id) {
      count = (item.type === 'bun') ? count + 2 : ++count;
    }
  });

  return (
    <>
      {
        isModalOpen && <Modal modalHeader='Детали ингредиента' closeModal={closeModal}>
          <IngredientDetails/>
        </Modal>
      }
      <li ref={dragRef} className={styles.card} onClick={() => handleClickOnCard()}>
        <div className={styles.img}>
          <img ref={dragPreviewRef} src={ingredient.image} alt={ingredient.name}/>
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
        {(count > 0) && <Counter count={count} size="default" extraClass="m-1" />}
      </li>
    </>
  )
};

IngredientCard.propTypes = {
  count: PropTypes.number
};

export default IngredientCard;
