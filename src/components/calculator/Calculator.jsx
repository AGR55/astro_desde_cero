import { useState } from 'preact/hooks';
import Display from '../display/Display';
import Button from '../buttons/Button';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [value, setValue] = useState('0');

  const handleClick = (btnValue) => {
    if (btnValue === 'CE') {
      setValue('0');
    } else if (btnValue === '<-') {
      setValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (btnValue === '=') {
      try {
        // Reemplaza 'X' por '*' y '^' por '**'
        const expression = value.replace(/X/g, '*').replace(/\^/g, '**');
        // Evalúa la expresión de forma segura
        // Nota: `eval` sigue siendo inseguro para aplicaciones en producción
        const result = eval(expression);
        setValue(result.toString());
      } catch (error) {
        setValue('0');
      }
    } else {
      setValue((prev) => (prev === '0' ? btnValue : prev + btnValue));
    }
  };

  return (
    <div className={styles.calculator}>
      <Display className={styles.display} value={value} />
      <div className={styles.buttons}>
        {['%', 'CE', '<-', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '^', '0', '.'].map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
        <Button className={styles.equal} value="=" onClick={() => handleClick('=')} />
      </div>
    </div>
  );
}

export default Calculator;
