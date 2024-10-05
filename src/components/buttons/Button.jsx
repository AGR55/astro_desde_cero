import styles from './Button.module.css';

const Button = ({ value, onClick }) => {
  return (
    <button class={styles.buttons} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
