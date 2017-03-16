import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TransactionsTable from './transactionsTable'
import { IN, OUT } from '../../views/statement/statement'

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

test('TransactionsTable component renders as expected', () => {
  const component = shallow(<TransactionsTable  transactions={transactions} />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
