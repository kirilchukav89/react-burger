import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useDrag } from "react-dnd";
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-card.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { ingredientType } from '../../utils/types';
import { useModal } from '../../hooks/useModal';
import { setCurrentIngredient } from '../../services/actions';

const IngredientCard = ({ ingredient, count = 0 }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();
  const [, dragRef, dragPreviewRef] = useDrag({
    type: "ingredient",
    item: ingredient
  });

  const handleClickOnCard = () => {
    dispatch(setCurrentIngredient(ingredient));
    openModal();
  }

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
  ingredient: PropTypes.shape(ingredientType),
  count: PropTypes.number
};

export default IngredientCard;
