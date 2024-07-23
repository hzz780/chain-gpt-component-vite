import ChainGPTIcon from '../../assets/icon.svg';
import styles from './styles.module.css';

export function ChainGPTLogo({className}: {className?: string}) {
  return <>
    <img
      src={ChainGPTIcon}
      alt="chainGPT close"
      className={`${styles.logo} ${className}`}
    />
  </>
}
