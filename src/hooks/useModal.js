import { useState, useCallback } from "react";
import { useDispatch } from 'react-redux';
import { CLEAR_CURRENT_INGREDIENT } from "../services/actions";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    dispatch({ type: CLEAR_CURRENT_INGREDIENT });
  }, []);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
