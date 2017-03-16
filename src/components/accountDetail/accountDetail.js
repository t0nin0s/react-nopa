import React from 'react'

import styles from './accountDetail.css'

const AccountDetail = () => (
  <div className={styles.container}>
    <div className={[styles.details, styles.left].join(' ')}>
      <h4>Natwest</h4>
      <h4> Doe J.</h4>
    </div>
    <div className={[styles.details, styles.right].join(' ')}>
      <h4>Current Account</h4>
      <h4>12345698</h4>
      <h4>600028</h4>
    </div>
  </div>
)

export default AccountDetail
