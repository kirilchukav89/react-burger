import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from "react-dnd";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-item.module.css';
import { removeIngredient, moveIngredient } from '../../services/actions';
import { ingredientType } from '../../utils/types';

const ConstructorItem = ({ ingredient, index }) => {
  const dispatch = useDispatch();
  const [{ isDrag }, dragRef, dragPreviewRef] = useDrag({
    type: "constructor-item",
    item: { index },
    collect: monitor => ({
      isDrag: monitor.isDragging()  
    })
  });
  const [{ isHover }, dropTarget] = useDrop({
    accept: "constructor-item",
    drop(item) {
      if (item.index !== index) {
        dispatch(moveIngredient({ moveIndex: item.index, targetIndex: index }));
      }
    },
    collect: (monitor) => ({
      isHover: monitor.isOver()
    })
  });

  return (
    <div ref={dropTarget} className={`
      ${styles.ingredient}
      ${isHover && styles.ingredientHover}
      ${isDrag && styles.ingredientDrag}
    `}>
      <button ref={dragRef} type="button" className={styles.dragButton}>
        <DragIcon type="primary"/>
      </button>
      <div ref={dragPreviewRef} className={styles.ingredientItem}>
        <ConstructorElement
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image_mobile}
          handleClose={() => dispatch(removeIngredient(index))}
        />  
      </div>
    </div>
  )
}

ConstructorItem.propTypes = {
  ingredient: PropTypes.shape(ingredientType),
  index: PropTypes.number
};

export default ConstructorItem;
