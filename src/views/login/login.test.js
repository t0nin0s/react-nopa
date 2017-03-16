import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Login from './login'

test('Login component renders as expected', () => {
  const component = shallow(<Login />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
