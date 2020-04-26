function list(names) {
  const namesValues = names.map(el => names.length ? el.name : '')
  const newArr = []
  for (let i = 0; i < namesValues.length; i++) {
    const element = namesValues[i]
    const lastValue = (namesValues.length - 1 === i)
    newArr.push(element)

    if (lastValue) break
    newArr.push(', ')
  }
  if (newArr.length > 1) newArr.splice(-2, 1, ' & ')
  return newArr.join('')
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]))
// returns 'Bart'

console.log(list([]))
// returns ''