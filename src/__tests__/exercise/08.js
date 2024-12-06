// testing custom hooks
// http://localhost:3000/counter-hook

import { renderHook, act } from '@testing-library/react'
import useCounter from '../../components/use-counter'



test('exposes the count and increment/decrement functions', async () => {

  const { result } = renderHook(useCounter)

  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('allows customization of initial count', async () => {

  const { result } = renderHook(useCounter, { initialProps: { initialCount: 10 } })
  expect(result.current.count).toBe(10)
  act(() => result.current.increment())
  expect(result.current.count).toBe(11)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(10)
})

test('allows customization of step', async () => {

  const { result } = renderHook(useCounter, { initialProps: { step: 10 } })
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(10)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

/* eslint no-unused-vars:0 */
