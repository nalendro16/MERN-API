// Import express ke project = impoort express from 'express'
const express = require('express')

// Membuat server express
const app = express()

app.use(() => {
  console.log('Helo from server..')
  console.log('Hello dua..')
})

// App jalan di port berapa
app.listen(4000)
