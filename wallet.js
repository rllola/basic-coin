let lotion = require('lotion')

let promise = lotion.connect('9079018273a21f3ffbe1f58b7fd9713a7a29102f95d045740368e7f931edeb89')
  .then(async function (result) {

    console.log(result)
  })

console.log('Hey')
