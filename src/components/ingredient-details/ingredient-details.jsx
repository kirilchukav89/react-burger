import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';
import { ingredientType } from '../../utils/types';

const IngredientDetails = ({ ingredient }) => {
  return (
    <>
      <img src={ingredient.image_large} alt={ingredient.name}/>
        <div className={`text text_type_main-medium mt-4 ${styles.ingredientTitle}`}>{ingredient.name}</div>
        <div className={`mt-8 ${styles.ingredientInfo}`}>
          <span style={{ flex: '1 1 25%'}}>
            <div className="text text_type_main-small">Калории, ккал</div>
            <div className="text text_type_digits-default">{ingredient.calories}</div>
          </span>
          <span style={{ flex: '1 1 25%'}}>
            <div className="text text_type_main-small">Белки, г</div>
            <div className="text text_type_digits-default">{ingredient.proteins}</div>
          </span>
          <span style={{ flex: '1 1 25%'}}>
            <div className="text text_type_main-small">Жиры, г</div>
            <div className="text text_type_digits-default">{ingredient.fat}</div>
          </span>
          <span style={{ flex: '1 1 25%'}}>
            <div className="text text_type_main-small">Углеводы, г</div>
            <div className="text text_type_digits-default">{ingredient.carbohydrates}</div>
          </span>
        </div>
    </>
  )
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.shape(ingredientType)
};

export default IngredientDetails;