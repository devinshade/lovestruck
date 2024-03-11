import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Signup from './Signup.jsx';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="fullPage container container-fluid mx-auto pt-5">
      <div className="row justify-center">
        <div className="col-3 text-center" id="img-container">
          <img className="login-img custom-border" src="/src/assets/images/Placeholder.png" alt="PLACEHOLDER"/>
          <img className="login-img custom-border" src="/src/assets/images/Placeholder.png" alt="PLACEHOLDER"/>
        </div>
        <div className="card col-5">
          <h4 className="card-header bg-dark text-light">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <>
              <form className='row p-5' onSubmit={handleFormSubmit}>
                <input
                  className="form-input mt-5"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input my-5"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>

              <div>
                <a href="/Signup">Sign Up Instead</a>
              </div>
              </>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
        <div className="col-3 text-center" id="img-container">
          <img className="login-img custom-border" src="/src/assets/images/Placeholder.png" alt="PLACEHOLDER"/>
          <img className="login-img custom-border" src="/src/assets/images/Placeholder.png" alt="PLACEHOLDER"/>
        </div>
      </div>
    </main>
  );
};

export default Login;
