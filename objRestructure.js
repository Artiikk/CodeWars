const arr = [
  { color: "white", id: 2 },
  { color: "black", id: 3 }
];

function formate(array) {
  return array.reduce((acc, { color, id }) => {
    acc[color] = {
      [id]: { color, id }
    }

    return acc
  }, {})
}

console.log(formate(arr))

