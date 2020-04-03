import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Main</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/new">
            <a>Create new post</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
