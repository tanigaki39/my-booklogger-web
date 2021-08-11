import { getPage } from 'next-page-tester'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('About page', () => {
  it('About page が表示できる', async () => {
    const { page } = await getPage({
      route: '/about',
    })
    render(page)

    expect(await screen.findByText('About page')).toBeInTheDocument()
  })

  it('About page から Index page へ遷移できる', async () => {
    const { page } = await getPage({
      route: '/about',
    })
    render(page)

    userEvent.click(await screen.getByTestId('nav-index'))
    expect(await screen.findByText('Index page')).toBeInTheDocument()
  })
})
