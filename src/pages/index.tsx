import * as React from 'react'
import { NextPage } from 'next'
import { Meta } from '@src/components/Meta'
// ____________________________________________
//
const Page: NextPage = () => {
  return (
    <div>
      <Meta title="My Booklogger" isIndex />
      <h1>My Booklogger</h1>
      <p>My Booklogger のサポートページです。</p>
    </div>
  )
}
// ____________________________________________
//
export default Page
