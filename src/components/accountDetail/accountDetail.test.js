import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AccountDetail from './accountDetail'

const account = {
  account: 'Natwest',
  name: "Doe J.",
  accountNumber: "123456789",
  sortCode: "600028"
}

test('AccountDetail component renders as expected', () => {
  const component = shallow(<AccountDetail />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
