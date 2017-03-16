import React from 'react'
import { mount, render, shallow } from 'enzyme'
import { MemoryRouter } from 'react-router'

import Routes from './routes'
import Home from '../../views/home/home'
import Login from '../../views/login/login'
import ChooseBank from '../../views/chooseBank/chooseBank'
import Statement from '../../views/statement/statement'

test('should render the Home component when visiting /', () => {
  const component = shallow(
    <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
      <Home />
    </MemoryRouter>
  )

  expect(component.find(Home).length).toBe(1)
})

test('should render the Login component when visiting /', () => {
  const component = shallow(
    <MemoryRouter initialEntries={[ '/login' ]} initialIndex={0}>
      <Login />
    </MemoryRouter>
  )

  expect(component.find(Login).length).toBe(1)
})

test('should render the ChooseBank component when visiting /', () => {
  const component = shallow(
    <MemoryRouter initialEntries={[ '/bank' ]} initialIndex={0}>
      <ChooseBank />
    </MemoryRouter>
  )

  expect(component.find(ChooseBank).length).toBe(1)
})

test('should render the Statement component when visiting /', () => {
  const component = shallow(
    <MemoryRouter initialEntries={[ '/statement' ]} initialIndex={0}>
      <Statement />
    </MemoryRouter>
  )

  expect(component.find(Statement).length).toBe(1)
})
