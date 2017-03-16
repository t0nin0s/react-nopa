import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from './header'

test('Header component renders as expected in homepage', () => {
  const component = shallow(<Header home='true' />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Header component renders as expected', () => {
  const component = shallow(<Header />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
