import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Partners from './partners'

test('Partners component renders as expected in homepage', () => {
  const component = shallow(<Partners />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
