import { useSelector } from 'react-redux';
import styles from './ingredient-details.module.css';

const IngredientDetails = () => {
  const { data } = useSelector(store => store.currentIngredient);
  return (
    <>
      <img src={data.image_large} alt={data.name}/>
        <div className={`text text_type_main-medium mt-4 ${styles.ingredientTitle}`}>{data.name}</div>
        <div className={`mt-8 ${styles.ingredientInfo}`}>
          <span>
            <div className="text text_type_main-small">Калории, ккал</div>
            <div className="text text_type_digits-default">{data.calories}</div>
          </span>
          <span>
            <div className="text text_type_main-small">Белки, г</div>
            <div className="text text_type_digits-default">{data.proteins}</div>
          </span>
          <span>
            <div className="text text_type_main-small">Жиры, г</div>
            <div className="text text_type_digits-default">{data.fat}</div>
          </span>
          <span>
            <div className="text text_type_main-small">Углеводы, г</div>
            <div className="text text_type_digits-default">{data.carbohydrates}</div>
          </span>
        </div>
    </>
  )
};

export default IngredientDetails;