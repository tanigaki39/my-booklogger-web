import * as React from 'react'
import Head from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION, OG_IMAGE, SITE_URL } from '@src/constants'
// ____________________________________________
//
interface ComponentProps {
  isIndex?: boolean
  title?: string
  description?: string
}

interface ContainerProps extends ComponentProps {}
// ____________________________________________
//
export const Component: React.FC<ComponentProps> = ({ title = SITE_NAME, description = SITE_DESCRIPTION, isIndex }) => (
  <Head>
    <title>{title}</title>
    <meta property="description" content={description} />
    <meta name="image" content={`${SITE_URL}${OG_IMAGE}`} />

    {/* OpenGraph  */}
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:type" content={isIndex ? 'website' : 'article'} />
    <meta property="og:image" content={`${SITE_URL}${OG_IMAGE}`} />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${SITE_URL}${OG_IMAGE}`} />
  </Head>
)
// ____________________________________________
//
export const Meta: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}
