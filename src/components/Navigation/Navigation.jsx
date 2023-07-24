import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link className={styles.link} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className={styles.link} to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};
