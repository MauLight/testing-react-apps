// form testing
// http://localhost:3000/login

import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { build, fake } from '@jackfranklin/test-data-bot'
import Login from '../../components/login'

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  }
})

test('submitting the form calls onSubmit with username and password', async () => {
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit} />)

  const { username, password } = buildLoginForm()

  await userEvent.type(screen.getByRole('textbox', { name: /username/i }), username)
  await userEvent.type(screen.getByText(/password/i), password)
  await userEvent.click(screen.getByRole('button', { name: /submit/i }))

  //screen.debug()
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password
  })
})

/*
eslint
  no-unused-vars: "off",
*/
