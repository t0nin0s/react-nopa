import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from './home'

test('Home component renders as expected', () => {
  const component = shallow(<Home />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
