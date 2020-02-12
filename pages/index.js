import Link from 'next/link'

const IndexPage = () => {
  return (
    <ul>
      <li><Link href="/attempt1"><a>Attempt 1</a></Link></li>
      <li><Link href="/attempt2"><a>Attempt 2</a></Link></li>
      <li><Link href="/attempt3"><a>Attempt 3</a></Link></li>
      <li><Link href="/attempt4"><a>Attempt 4</a></Link></li>
    </ul>
  )
}

export default IndexPage
