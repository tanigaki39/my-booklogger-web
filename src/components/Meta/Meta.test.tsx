import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Component } from './Meta'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

describe('Meta', () => {
  it('title 関係のタグが存在する', () => {
    const title = 'page title'

    render(<Component title={title} isIndex />)

    expect(document.title).toBe(title)
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(title)
    expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe(title)
  })

  it('description 関係のタグが存在する', () => {
    const description = 'page title'

    render(<Component description={description} isIndex />)

    expect(document.querySelector('meta[property="description"]')?.getAttribute('content')).toBe(description)
    expect(document.querySelector('meta[property="og:description"]')?.getAttribute('content')).toBe(description)
    expect(document.querySelector('meta[name="twitter:description"]')?.getAttribute('content')).toBe(description)
  })

  it('image 関係のタグが存在する', () => {
    render(<Component isIndex />)

    expect(document.querySelector('meta[name="image"]')).toBeInTheDocument()
    expect(document.querySelector('meta[property="og:image"]')).toBeInTheDocument()
    expect(document.querySelector('meta[name="twitter:image"]')).toBeInTheDocument()
  })

  it('og:site_name が存在する', () => {
    render(<Component isIndex />)

    expect(document.querySelector('meta[property="og:site_name"]')).toBeInTheDocument()
  })

  it('og:url が存在する', () => {
    render(<Component isIndex />)

    expect(document.querySelector('meta[property="og:url"]')).toBeInTheDocument()
  })

  it('isIndex が true のとき、og:type は website である', () => {
    render(<Component isIndex />)

    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe('website')
  })

  it('isIndex が false のとき、og:type は article である', () => {
    render(<Component isIndex={false} />)

    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe('article')
  })
})
