import styles from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  // const initialState = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };
  // const [state, setState] = useState({ ...initialState });
  // const { name, email, password } = state;

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setState(prevState => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onData({ ...state });
  //   setState({ ...initialState });
  // };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Username
        <input
          className={styles.input}
          type="text"
          name="name"
          // onChange={handleChange}
          // value={name}
          placeholder="Username"
          pattern="^[^\d]+$"
          title="Please, insert your Username"
          required
        />
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            // value={email}
            // onChange={handleChange}
            autoComplete="email"
            placeholder="Email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please, insert your Email"
            required
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
            autoComplete="current-password"
            placeholder="Password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            title="Please, insert your Password"
            required
          />
        </label>
      </label>
      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
};
