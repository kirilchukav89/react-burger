import React from 'react';
import { Logo, Button, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div className={styles.logoWrapper}>
        <a href='/'>
          <Logo />
        </a>
      </div>
      <div className={styles.buttonWrapper}>
        <Button htmlType="button" type="secondary" extraClass={`${styles.button} ${styles.buttonActive} pt-4 pb-4 pl-5 pr-5 mr-2 mt-4 mb-4`}>
          <span className={styles.buttonIcon}>
            <BurgerIcon type="secondary"/>
          </span>
          <span className="ml-2">Конструктор</span>
        </Button>
        <Button htmlType="button" type="secondary" extraClass={`${styles.button} pt-4 pb-4 pl-5 pr-5 mr-2 mt-4 mb-4`}>
          <span className={styles.buttonIcon}>
            <ListIcon type="secondary"/>
          </span>
          <span className="ml-2">Лента заказов</span>
        </Button>
      </div>
      <div className={styles.buttonWrapper}>
        <Button htmlType="button" type="secondary" extraClass={`${styles.button} pt-4 pb-4 pl-5 pr-5 ml-2 mt-4 mb-4`}>
          <span className={styles.buttonIcon}>
            <ProfileIcon type="secondary"/>
          </span>
          <span className="ml-2">Личный кабинет</span>
        </Button>
      </div>
    </div>
  </header>
)

export default AppHeader;