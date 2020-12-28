import React, { useState, useEffect } from 'react';
import LoginForm from '../components/Signin';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUser } from '../redux/actionCreators/signinAction';
import { NavigationBar } from '../components/Nav/NavigationBar';
import { Footer } from '../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

const signin = () => {
  const [errors, setErrors] = useState('');
  const [details, setDetails] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const { loading, isLoggedIn, error } = useSelector((state) => state.auth);
  const { t } = useTranslation();

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = details;
    const emailFormat = /^[a-z][\w-\.]*\@[a-z]+\.[a-z]{2,4}$/;
    const passwordFormat = /[a-z]/;

    !emailFormat.test(email)
      ? setErrors(t('signin.errorEmail'))
      : !password
      ? setErrors(t('signin.errorPassword'))
      : !passwordFormat.test(password)
      ? setErrors(t('signin.errorPass'))
      : dispatch(loggedUser(details));
  };

  if (isLoggedIn) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const user = JSON.parse(loggedInUser);
    window.location =
      user.role === 'driver' ? '/dashboard/driver' : '/dashboard';
  }
  useEffect(() => {
    error ? setErrors(error) : '';
  }, [error]);

  return (
    <div>
      <NavigationBar />
      <LoginForm
        submitHandler={submitHandler}
        error={errors}
        loading={loading}
        setDetails={setDetails}
        details={details}
      />
      <Footer />
    </div>
  );
};
export default signin;
