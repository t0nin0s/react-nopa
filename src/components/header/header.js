import React from 'react'
import { Link } from 'react-router-dom'

var logo = require('./images/Logo_Nopa.svg')
import styles from './header.css'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        {!props.home &&
          <img src={logo} className={styles.logo} />
        }
        {props.home &&
          <img src={logo} className={[styles.logo, styles.logoHome].join(' ')} />
        }
      </Link>
      <div className={styles.logInButton}>
        <div className={styles.vCenterItems}>
          <Link to='/login' className='button buttonHeader'>Log in</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
