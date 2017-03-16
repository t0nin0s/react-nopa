import React from 'react'

var airbnb = require('./images/Airbnb.png')
var metro = require('./images/Metro.png')
var pariti = require('./images/Pariti.png')
var unshackled = require('./images/Unshackled.png')
import styles from './partners.css'

const Partners = () => (
  <section className='section section-tertiary'>
    <div className={styles.wrapper}>
      <div className={[styles.container, 'centered'].join(' ')}>
        <h1>Our partners:</h1>
        <ul>
          <li className={styles.partnerItem}>
            <img src={airbnb} alt='' />
          </li>
          <li className={styles.partnerItem}>
            <img src={metro} alt='' />
          </li>
          <li className={styles.partnerItem}>
            <img src={pariti} alt='' />
          </li>
          <li className={styles.partnerItem}>
            <img src={unshackled} alt='' />
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Partners
