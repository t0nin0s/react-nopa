import React from 'react'

import styles from './transactionCategoryRow.css'

const TransactionCategoryRow = (props) => (
  <div className={styles.categoryRow}>
    {props.category}
  </div>
)

export default TransactionCategoryRow
