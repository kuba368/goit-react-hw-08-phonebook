import { Link } from 'react-router-dom';
import styles from './AuthNavigation.module.css';

export const AuthNavigation = () => {
  return (
    <div>
      <Link className={styles.link} to="/register">
        Register
      </Link>
      <Link className={styles.link} to="/login">
        Login
      </Link>
    </div>
  );
};
