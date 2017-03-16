import React from 'react'

import Layout from '../../components/layout/layout'
import AccountDetail from '../../components/accountDetail/accountDetail'
import TransactionsTable from '../../components/transactionsTable/transactionsTable'

import styles from './statement.css'

export const OUT = 'OUT'
export const IN = 'IN'

const transactions = [
  {date: 'Today', description: 'Tesco', type: OUT, amount: '35.98'},
  {date: 'Today', description: 'Tesco', type: OUT, amount: '35.98'},
  {date: 'Today', description: 'Tesco', type: OUT, amount: '35.98'},
  {date: '22 November 2016', description: 'Tesco', type: OUT, amount: '35.98'},
  {date: '22 November 2016', description: 'Tesco', type: OUT, amount: '35.98'},
  {date: '21 November 2016', description: 'Tesco', type: OUT, amount: '35.98'},
  {date: '21 November 2016', description: 'Tesco', type: OUT, amount: '35.98'},
  {date: '20 November 2016', description: 'Tesco', type: OUT, amount: '35.98'},
]

const Statement = () => (
  <Layout>
    <div className='statement'>
      <div className='content'>
        <section className='section section--primary'>
          <div className={[styles.container, 'centered'].join(' ')}>
            <h1 className={[styles.desktopOnly, 'section__h1'].join(' ')}>
              Which bank does this account belong to?
            </h1>
            <p className={[styles.desktopOnly, 'section__p'].join(' ')}>
              {`Track of all your payments by connecting as
              many bank accounts as you'd like to your
              NOPA account and get updates your balance
              instantly. Plus it's free.`}
            </p>
            <AccountDetail />
            <TransactionsTable transactions={transactions}/>
            <a href="#" className={[styles.button, 'button'].join(' ')}>Show More</a>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Statement
