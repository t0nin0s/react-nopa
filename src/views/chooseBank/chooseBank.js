import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/layout/layout'
import Partners from '../../components/partners/partners'
var barclays = require('./images/Barclays.png')
var logoLloyds = require('./images/LogoLloyds.png')
var logoTSB = require('./images/LogoTSB.png')
var logoNatwest = require('./images/LogoNatwest.png')
var logoHSBC = require('./images/LogoHSBC.png')
var logoSantander = require('./images/LogoSantander.png')

const ChooseBank = () => (
  <Layout>
    <div className='content'>
      <section className='section section--primary'>
        <div className='container centered'>
          <h1 className='section__h1'>
            Which bank does this account belong to?
          </h1>
          <p className='mobile-only'>Choose your bank</p>
          <p className='section__p desktop-only'>
            {`Track of all your payments by connecting as
            many bank accounts as you'd like to your
            NOPA account and get updates your balance
            instantly. Plus it's free.`}
          </p>
          <div className='two-columns'>
            <div className='column'>
              <div className='img-wrapper'>
                <img className='img-wrapper__img' src={barclays} alt='' />
              </div>
              <div className='img-wrapper'>
                <img className='img-wrapper__img' src={logoLloyds} alt='' />
              </div>
              <div className='img-wrapper'>
                <img className='img-wrapper__img' src={logoTSB} alt='' />
              </div>
            </div>
            <div className='column'>
              <div className='img-wrapper'>
                <img className='img-wrapper__img' src={logoNatwest} alt='' />
              </div>
              <div className='img-wrapper'>
                <img className='img-wrapper__img' src={logoHSBC} alt='' />
              </div>
              <div className='img-wrapper'>
                <img className='img-wrapper__img' src={logoSantander} alt='' />
              </div>
            </div>
            <Link to='/statement' className='button button--fullWidth'>
              Get started
            </Link>
          </div>
        </div>
      </section>
      <Partners />
    </div>
  </Layout>
)

export default ChooseBank
