import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LOGIN_SCHEMA } from '../../../utils/validationSchemas';
import style from './style.module.sass';
import { BrowserRouter as BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

function Login() {
  return (
    <Formik initialValues={initialValues} validationSchema={LOGIN_SCHEMA}>
      {(formikProps) => {
        return (
          <Form className={style.form}>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
            <Field type="email" name="email" placeholder="Email Address" />
            <ErrorMessage name="email" component="span" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="span" />
            <div className={style.check}>
              <Field id="remember_me" className="example" name="remember_me" type="checkbox" />
              <label htmlFor="remember_me">Remember Me</label>
            </div>
            <Field className={style.submitBtn} type="submit" value="Login" />
          </Form>
        );
      }}
    </Formik>
  );
}
export default Login;
