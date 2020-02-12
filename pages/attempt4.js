// Get the data from an API service
import fetch from 'isomorphic-unfetch'

const Attempt4Page = ({ entries }) => {
  // The render method doesn't receive any secrets
  return (
    <ul>
      { entries.map(({ label, hasSecret }) => (
        <li>{label}{hasSecret ? ' *' : null}</li>
      )) }
    </ul>
  )
}

Attempt4Page.getInitialProps = async function() {
  // Call an API method (hardcoding port for simplicity)
  const port = 3000
  const res = await fetch(`http://localhost:${port}/api/entries`)
  const entries = await res.json()
  return { entries }
}

export default Attempt4Page
