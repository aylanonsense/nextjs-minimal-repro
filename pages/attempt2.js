// Require the data in getInitialProps

const Attempt2Page = ({ entries }) => {
  // The render method doesn't receive any secrets
  return (
    <ul>
      { entries.map(({ label, hasSecret }) => (
        <li>{label}{hasSecret ? ' *' : null}</li>
      )) }
    </ul>
  )
}

Attempt2Page.getInitialProps = async function() {
  const data = require('../data.json')
  return {
  	entries: data.map(({ label, secret }) => ({ label, hasSecret: !!secret }))
  }
}

export default Attempt2Page
