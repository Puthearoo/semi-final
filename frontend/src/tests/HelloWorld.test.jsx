import { render, screen } from '@testing-library/react'
import HelloWorld from '../components/HelloWorld'

test('renders hello world message', () => {
  render(<HelloWorld />)
  expect(screen.getByText('Hello World!')).toBeInTheDocument()
  expect(screen.getByText('Welcome to our sample application')).toBeInTheDocument()
})