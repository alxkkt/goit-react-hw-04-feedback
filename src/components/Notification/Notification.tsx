import React from 'react';

import styles from './Notification.module.css';

type TProp = { message: string };

const Notification = ({ message }:TProp) => {
  return <p className={styles.message}>{message}</p>;
};

export default Notification;
