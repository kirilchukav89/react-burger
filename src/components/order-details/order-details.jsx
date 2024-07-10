import { useSelector } from 'react-redux';
import styles from './order-details.module.css';
import doneImage from '../../images/done.png';

const OrderDetails = () => {
  const { data, loading, hasError, errorType } = useSelector(store => store.order);
  return (
    (loading) ?
      <div className="text text_type_main-medium mt-8">Оформляем заказ...</div>
      :
      (!loading && hasError)
      ?
      <div className="text text_type_main-medium mt-8">Ошибка оформления заказа ({errorType})</div>
      :
      <>
        <div className="text text_type_digits-large mt-30">{data.order.number}</div>
        <div className="text text_type_main-medium mt-8">{data.name}</div>
        <img src={doneImage} alt="done" className="mt-15"/>
        <div className="text text_type_main-default mt-15">Ваш заказ начали готовить</div>
        <div className={`text text_type_main-default mt-2 mb-15 ${styles.textGray}`}>Дождитесь готовности на орбитальной станции</div>
      </>
  )
};

export default OrderDetails;