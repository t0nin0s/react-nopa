import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Statement from './statement'

test('Statement component renders as expected', () => {
  const component = shallow(<Statement />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
