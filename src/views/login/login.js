import React from 'react'

import Layout from '../../components/layout/layout'
import LoginForm from '../../components/loginForm/loginForm'

const Login = () => {
  return (
    <Layout>
      <div className='content'>
        <section className='section section--primary'>
          <div className='container centered'>
            <h1 className='section__h1 section__h1--margin'>
              Which bank does this account belong to?
            </h1>
            <p className='section__p'>
              {`Track of all your payments by connecting as
              many bank accounts as you'd like to your Nopa
              account and get updates your balance instantly.
              Plus it's free.`}
            </p>
            <LoginForm />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Login
