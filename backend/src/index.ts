// 📁 src/index.ts
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const tasks = [
  { id: 1, title: 'Write blog post', priority: 'High' },
  { id: 2, title: 'Refactor UI', priority: 'Medium' },
  { id: 3, title: 'Stretch & hydrate', priority: 'Low' },
]

app.get('/api/tasks', (req, res) => {
  res.json(tasks)
})

app.listen(3000, () => {
  console.log('✨ Backend running on http://localhost:3000')
})
