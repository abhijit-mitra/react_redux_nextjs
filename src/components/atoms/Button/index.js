import React from 'react';

import styles from './Button.module.css';

const Button = ({children, ...rest}) => (
  <button {...rest} className={styles.primary}>{children}</button>
);

export default Button;
