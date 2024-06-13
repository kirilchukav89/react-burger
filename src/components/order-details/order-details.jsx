import styles from './order-details.module.css';
import doneImage from '../../images/done.png';

const OrderDetails = () => {
  return (
    <>
      <div className="text text_type_digits-large mt-30">034536</div>
        <div className="text text_type_main-medium mt-8">идентификатор заказа</div>
        <img src={doneImage} alt="done" className="mt-15"/>
        <div className="text text_type_main-default mt-15">Ваш заказ начали готовить</div>
        <div className={`text text_type_main-default mt-2 mb-15 ${styles.textGray}`}>Дождитесь готовности на орбитальной станции</div>
    </>
  )
};

export default OrderDetails;