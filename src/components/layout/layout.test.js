import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Layout from './layout'

test('Layout component renders as expected', () => {
  const component = shallow(<Layout />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
