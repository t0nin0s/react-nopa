import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Footer from './footer'

test('Footer component renders as expected', () => {
  const component = shallow(<Footer  />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
