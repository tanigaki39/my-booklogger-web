import * as React from 'react'
import { NextPage } from 'next'
import { Meta } from '@src/components/Meta'
import NextLink from 'next/link'
// ____________________________________________
//
const Page: NextPage = () => {
  return (
    <div>
      <Meta title="My Booklogger" isIndex />
      <h1>My Booklogger</h1>
      <p>My Booklogger のサポートページです。</p>
      <p>
        <NextLink href="/privacy">プライバシーポリシー</NextLink>
      </p>
    </div>
  )
}
// ____________________________________________
//
export default Page
