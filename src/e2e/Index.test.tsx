import { getPage } from 'next-page-tester'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('Index page', () => {
  it('Index page が表示できる', async () => {
    const { page } = await getPage({
      route: '/',
    })
    render(page)

    expect(await screen.findByText('Index page')).toBeInTheDocument()
  })

  it('Index page から About page へ遷移できる', async () => {
    const { page } = await getPage({
      route: '/',
    })
    render(page)

    userEvent.click(await screen.getByTestId('nav-about'))
    expect(await screen.findByText('About page')).toBeInTheDocument()
  })
})
