import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Signup = () => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser(
        {
          variables: {
            ...formState
          },
        }
      );
      const token = data.addUser.token;
      console.log(token)
      Auth.login(token);
    } catch (err) {
      console.error(err)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main className="fullPage container container-fluid mx-auto pt-5">
      <div className="row justify-center">
        <div className="col-3 text-center" id="img-container">
          <img className="login-img custom-border" src="/src/assets/images/Photo5.png" alt="A couple getting married"/>
          <img className="login-img custom-border" src="/src/assets/images/Photo2.png" alt="A couple getting married"/>
        </div>
        <div className="card col-5 custom-bg-light">
          <h4 className="card-header text-center custom-bg-blue5 var-text-light custom-text-lg p-3 mt-3">Sign Up</h4>
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
                  className="form-input"
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                />
                <input
                  className="form-input my-3"
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input my-3"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <div className='text-center'>
                  <button
                    className="custom-btn p-3 px-5 custom-text-md"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>

              <div className='text-center'>
                <a className='var-text-blue3 custom-text-md' href="/Signup">
                  Already have an account? <br />
                  Click here to <br />
                  Login instead! <br />
                  </a>
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
          <img className="login-img custom-border" src="/src/assets/images/Photo6.png" alt="A couple getting married"/>
          <img className="login-img custom-border" src="/src/assets/images/Photo1.png" alt="A couple getting married"/>
        </div>
      </div>
    </main>
  );
};

export default Signup;