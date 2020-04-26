function to_nato(words) {
  const natoArr = ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu']

  const alphabetObj = natoArr.reduce(function(acc, cur) {
    const firstLetter = cur.slice(0, 1)
    acc[firstLetter] = cur
    return acc
  }, {})

  return words.replace(/\s/g, '').split('').map(c => alphabetObj[c.toUpperCase()] || c).join(' ')
}

console.log(to_nato('If you can read!'))