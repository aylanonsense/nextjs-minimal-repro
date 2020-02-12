// Require the data in the render method

const Attempt1Page = () => {
  const data = require('../data.json')
  const entries = data.map(({ label, secret }) => ({ label, hasSecret: !!secret }))
  return (
    <ul>
      { entries.map(({ label, hasSecret }) => (
        <li>{label}{hasSecret ? ' *' : null}</li>
      )) }
    </ul>
  )
}

export default Attempt1Page
