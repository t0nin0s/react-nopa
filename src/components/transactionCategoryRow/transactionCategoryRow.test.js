import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TransactionCategoryRow from './TransactionCategoryRow'

test('TransactionCategoryRow component renders as expected', () => {
  const component = shallow(<TransactionCategoryRow />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
