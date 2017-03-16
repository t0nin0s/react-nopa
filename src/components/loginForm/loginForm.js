import React, { Component } from 'react'

import styles from './loginForm.css'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      surname: '',
      sortcode: '',
      account: '',
      passcode: '',
      memorable: '',
      errors: {},
      formError: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const target = event.target
    const value = target.value
    const field = target.name

    this.setState({
      [field]: value
    })
  }

  validate () {
    let { surname, sortcode, account, passcode, memorable } = this.state
    // Surname not empty and just letters
    let surnameVal = /^[a-zA-Z\s]+$/.test(surname) ? false : true
    // Sortcode 6 digits
    let sortcodeVal = /^\d{6}$/.test(sortcode) ? false : true
    // Account number 10 digits
    let accountVal = /^\d{10}$/.test(account) ? false : true
    // Passcode not empty numbers and letters
    let passcodeVal = /^[0-9a-zA-Z\s]+$/.test(passcode) ? false : true
    // Mem word not empty numbers and letters
    let memorableVal = /^[0-9a-zA-Z\s]+$/.test(memorable) ? false : true

    let formVal = surnameVal ||
                  sortcodeVal ||
                  accountVal ||
                  passcodeVal ||
                  memorableVal

    this.setState({
      formError: formVal,
      errors: {
        surname: surnameVal,
        sortcode: sortcodeVal,
        account: accountVal,
        passcode: passcodeVal,
        memorable: memorableVal
      }
    })
    return formVal
  }

  handleSubmit (event) {
    event.preventDefault()
    let validationFail = this.validate()

    if (validationFail) {
      alert('Please check the form, there are errors')
    } else {
      alert('The form has been submitted')
    }
  }

  render () {
    return (
      <div>
        <div id='error' className={this.state.formError ? styles.visible : styles.hidden}>
          There are errors, please check
        </div>
        <form onSubmit={this.handleSubmit} method='post'>
          <input ref='surname'
            type='text'
            value={this.state.surname}
            name='surname'
            id='surname'
            placeholder='Surname'
            onChange={this.handleChange}
            className={this.state.errors.surname ? styles.error : ''}
           />

          <input ref='sortcode'
            type='text'
            value={this.state.sortcode}
            name='sortcode'
            id='sortcode'
            placeholder='Sort Code'
            onChange={this.handleChange}
            className={this.state.errors.sortcode ? styles.error : ''}
            />

          <input ref='account'
            type='text'
            value={this.state.account}
            name='account'
            id='account'
            placeholder='Account Number'
            onChange={this.handleChange}
            className={this.state.errors.account ? styles.error : ''}
            />

          <input ref='passcode'
            type='text'
            value={this.state.passcode}
            name='passcode'
            id='passcode'
            placeholder='Passcode'
            onChange={this.handleChange}
            className={this.state.errors.passcode ? styles.error : ''}
            />

          <input ref='memorable'
            type='text'
            value={this.state.memorable}
            name='memorable'
            id='memorable'
            placeholder='Memorable'
            onChange={this.handleChange}
            className={this.state.errors.memorable ? styles.error : ''}
            />

          <input type='submit'
            value='Log in & connect'
            className='button'
            />
        </form>
      </div>
    )
  }
}

export default LoginForm
