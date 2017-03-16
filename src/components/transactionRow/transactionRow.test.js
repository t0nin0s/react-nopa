import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TransactionRow from './transactionRow'

test('TransactionRow component renders as expected', () => {
  const component = shallow(<TransactionRow />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
