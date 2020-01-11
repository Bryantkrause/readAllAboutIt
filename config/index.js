module.exports = require('mongoose')
  .connect('mongodb://localhost/articledb', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })