export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ name: 'John Doe' })
  }
  res.status(404).json({ message: 'Not found' })
}
