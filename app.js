 const express = require('express')
const app = express()

const port = 5000

app.get('/:slug', (request, response) => {
  const slug = request.params.slug
  const name = request.query.name
  const age = request.query.age
  const habit = request.query.habit

  response.json({
    message: slug,
    person: `${name} who is ${age} has a habit of ${habit}`
  })
})

app.listen(port, () => console.log('Server running on port: ' + port))