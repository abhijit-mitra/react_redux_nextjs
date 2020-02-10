import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({children, ...rest}) => (
  <button {...rest} className={styles.primary}>{children}</button>
);

Button.proTypes={
  children: PropTypes.element.isRequired,
};


export default Button;
