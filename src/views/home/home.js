import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/layout/layout'
import Partners from '../../components/partners/partners'
const shapes = require('./images/shapes.svg')

const Home = () => (
  <Layout home>
    <div className='content'>
      <section className='section section--primary'>
        <div className='container centered'>
          <h1 className='section__h1 section__h1--margin'>
            Your finances, in one place
          </h1>
          <p className='section__p'>
            {`Track all your payments by connecting as
            many bank accounts as you'd like to your
            NOPA account and get updates your balance
            instantly.`}
          </p>
          <Link to='/bank' className='button button--large'>
            Get Started
          </Link>
        </div>
      </section>
      <section className='section section--secondary'>
          <div className='two-columns'>
            <div className='column--desktop centered'>
              <h1 className='columns__h1'>
                {`There's no such things as 'one size fits all' finance.`}
              </h1>
              <p className='columns__p'>
                {`We were founded to make money simple and fair,
                for everyone: whether you're looking for a loan,
                or to get better rewards for your investment.`}
              </p>
            </div>
            <div className='column--desktop centered'>
              <img src={shapes} alt='' />
            </div>
        </div>
      </section>
      <Partners />
    </div>
  </Layout>
)

export default Home
