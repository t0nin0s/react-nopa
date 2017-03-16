import React, { Component } from 'react'

import TransactionCategoryRow from '../transactionCategoryRow/transactionCategoryRow'
import TransactionRow from '../transactionRow/transactionRow'
import styles from './transactionsTable.css'

class TransactionsTable extends Component {

  renderTransactions () {
    const transactions = []
    let lastDate = null;
    this.props.transactions.forEach( (transaction, index) => {
      if (transaction.date !== lastDate) {
        transactions.push(<TransactionCategoryRow category={ transaction.date } key={'cat'+index}/>)
      }
      transactions.push(
        <TransactionRow
          description={transaction.description}
          type={transaction.type}
          amount={transaction.amount}
          key={'row'+index}
        />
      )
      lastDate = transaction.date
    })
    return transactions
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <span>Your transactions for the last 30 days</span>
        <div className={styles.transactionTable}>
          { this.renderTransactions() }
        </div>
      </div>
    )
  }
}

export default TransactionsTable
