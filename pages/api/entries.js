import data from '../../data.json'

export default (req, res) => {
	const entries = data.map(({ label, secret }) => ({ label, hasSecret: !!secret }))
  res.status(200).json(entries)
}
