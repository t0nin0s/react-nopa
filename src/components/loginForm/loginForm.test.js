import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import LoginForm from './loginForm'

describe('Login Form tests', () => {
  let login;

  beforeEach(() => {
    login = mount(<LoginForm />)
  })

  test('LoginForm component renders as expected in homepage', () => {
    const component = shallow(<LoginForm home='true' />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('Surname input expected to be rendered', () => {
    const surname = login.find('#surname')
    expect(surname).toBeDefined()
  })

  test('sortcode input expected to be rendered', () => {
    const sortcode = login.find('#sortcode')
    expect(sortcode).toBeDefined()
  })

  test('account input expected to be rendered', () => {
    const account = login.find('#account')
    expect(account).toBeDefined()
  })

  test('passcode input expected to be rendered', () => {
    const passcode = login.find('#passcode')
    expect(passcode).toBeDefined()
  })

  test('memorable input expected to be rendered', () => {
    const memorable = login.find('#memorable')
    expect(memorable).toBeDefined()
  })

  test('fill out the form', () => {
    login.ref('surname').simulate('change', {target: {value: 'David'}})
    login.ref('sortcode').simulate('change', {target: {value: 'Blane'}})
    login.find('form').simulate('submit')
  })

})
