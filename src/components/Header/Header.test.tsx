import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Header } from './Header'

describe('Header', () => {
  it('各画面へのリンクがある', () => {
    render(<Header />)
    const links = screen.getAllByRole('link').map((link) => link.getAttribute('href'))
    const expected = ['/', '/about']

    expect(links).toEqual(expected)
  })
})
