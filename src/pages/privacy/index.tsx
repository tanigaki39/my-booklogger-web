import * as React from 'react'
import { NextPage } from 'next'
import { Meta } from '@src/components/Meta'
import NextLink from 'next/link'
// ____________________________________________
//
const Page: NextPage = () => {
  return (
    <div>
      <Meta title="プライバシーポリシー | My Booklogger" />
      <h1>プライバシーポリシー</h1>
      <h2>利用者個人情報の取得と利用</h2>
      <p>本アプリが利用者の個人情報を取得、または利用することはありません。</p>
      <p>
        <NextLink href="/">もどる</NextLink>
      </p>
    </div>
  )
}
// ____________________________________________
//
export default Page
