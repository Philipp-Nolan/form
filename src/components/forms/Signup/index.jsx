import React from 'react';
import style from './style.module.sass';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSchemas';

const initialValues = {
  firstname: '',
  lastname: '',
  displayname: '',
  email: '',
  password: '',
  confirm_password: '',
};

function Signup() {
  return (
    <Formik initialValues={initialValues} validationSchema={SIGN_UP_SCHEMA}>
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form className={style.form}>
            <h1>CREATE AN ACCOUNT</h1>
            <p>We always keep your name and email address private.</p>
            <div className={style.inputWrapper}>
              <Field type="text" name="firstname" placeholder="First name" />
              <ErrorMessage component="span" name="firstname" />
              <Field type="text" name="lastname" placeholder="Last name" />
              <ErrorMessage component="i" name="lastname" />
            </div>
            <div className={style.inputWrapper}>
              <Field type="text" name="displayname" placeholder="Display Name" />
              <ErrorMessage component="span" name="displayname" />
              <Field type="email" name="email" placeholder="Email Address" />
              <ErrorMessage component="i" name="email" />
            </div>
            <div className={style.inputWrapper}>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage component="span" name="password" />
              <Field type="password" name="confirm_password" placeholder="Password Confirmation" />
              <ErrorMessage component="i" name="confirm_password" />
            </div>
            <div className={style.radioWrapper}>
              <div className={style.radioContainer}>
                <Field
                  className={style.radio}
                  type="radio"
                  id="radio2"
                  name="contact"
                  value="Join As a Buyer"
                />
                <label className={style.radioLabel} htmlFor="radio2">
                  <b>Join As a Buyer</b>
                  <br></br>I am looking for a Name, Logo or Tagline for my business, brand or
                  product.
                </label>
              </div>

              <div className={style.radioContainer}>
                <Field
                  className={style.radio}
                  type="radio"
                  id="radio1"
                  name="contact"
                  value="Join As a Creative or Marketplace Seller"
                />
                <label className={style.radioLabel} htmlFor="radio1">
                  <b>Join As a Creative or Marketplace Seller</b>
                  <br></br>I plan to submit name ideas, Logo designs or sell names in Domain
                  Marketplace.
                </label>
              </div>
            </div>

            <div className={style.check}>
              <Field id="remember_me" className="example" name="remember_me" type="checkbox" />

              <label htmlFor="remember_me">
                Allow Squadhelp to send marketing/promotional offers from time to time
              </label>
            </div>
            <Field className={style.submitBtn} type="submit" value="Create account" />
          </Form>
        );
      }}
    </Formik>
  );
}
export default Signup;
