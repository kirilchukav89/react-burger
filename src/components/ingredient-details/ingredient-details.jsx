import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';

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
  ingredient: PropTypes.shape({
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    proteins: PropTypes.number,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string
  })
};

export default IngredientDetails;