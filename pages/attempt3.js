// Require the data in getInitialProps, but only server-side

const Attempt3Page = ({ entries }) => {
  // The render method doesn't receive any secrets
  return (
    <ul>
      { entries.map(({ label, hasSecret }) => (
        <li>{label}{hasSecret ? ' *' : null}</li>
      )) }
    </ul>
  )
}

Attempt3Page.getInitialProps = async function() {
  if (typeof window === 'undefined') {
    // data.json is only required server-side (obviously causes issues for client-side rendering)
    const data = require('../data.json')
    return {
    	entries: data.map(({ label, secret }) => ({ label, hasSecret: !!secret }))
    }
  } else {
    return {
      entries: []
    }
  }
}

export default Attempt3Page
