import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ChooseBank from './chooseBank'

test('ChooseBank component renders as expected', () => {
  const component = shallow(<ChooseBank />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
