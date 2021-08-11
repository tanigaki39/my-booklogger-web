import * as React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
// ____________________________________________
//
const Component: React.FC = () => (
  <header css={styles.header}>
    <nav css={styles.navigation}>
      <div css={styles.link}>
        <Link href="/" passHref>
          <a data-testid="nav-index">Index</a>
        </Link>
      </div>
      <div css={styles.link}>
        <Link href="/about" passHref>
          <a data-testid="nav-about">About</a>
        </Link>
      </div>
    </nav>
  </header>
)
// ____________________________________________
//
const styles = {
  header: css({
    background: '#f5f5f5',
    padding: '1em',
  }),
  navigation: css({
    display: 'flex',
    alignItems: 'center',
  }),
  link: css({
    '& ~ &': {
      marginLeft: '1em',
    },
  }),
}
// ____________________________________________
//
export const Header: React.FC = () => {
  return <Component />
}
