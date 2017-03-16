import React from 'react'

import styles from './transactionRow.css'

const TransactionRow = (props) => {
  return (
    <div className={styles.transaction} >
      <div className={styles.description}>
        {props.description}
      </div>
      <div className={styles.amount}>
        {props.type === 'OUT' && " - "}
        £{props.amount}
      </div>
    </div>
  )
}

export default TransactionRow
