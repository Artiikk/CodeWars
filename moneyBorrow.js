 const friends = [
  { name: "Kelly", hasMoney: false, friends: [ { name: "Artem", hasMoney: true, friends: [] }, { name: "Toma", hasMoney: false, friends: [] } ] },
  { name: "Alice", hasMoney: false, friends: [ { name: "Jimmy", hasMoney: false, friends: [] }, { name: "Benoit", hasMoney: false, friends: [] } ] },
  { name: "Anna", hasMoney: false, friends: [ { name: "Frank", hasMoney: false, friends: [] } ] },
  { name: "Ali", hasMoney: false, friends: [] },
  { name: "Mike", hasMoney: false, friends: [ { name: "Stiven", hasMoney: true, friends: [ { name: "Carlos", hasMoney: true, friends: [] } ] } ]}
];

/*
 * You need to find a person to borrow some money. 
 * You should not use stack.
 */ 

class Q {
	constructor(array = []) {
  	this.q = array;
  }
	add(value) {
  	this.q.push(value);
  }
  remove() {
  	return this.q.shift();
  }
}

function findGuyWithMoney(arr) {
	const q = new Q(arr);
  
  while(friends.length !== 0) {
		const friend = q.remove();
    if (friend.hasMoney) {
	    return friend;
    } else {
    	q.add(...friend.friends);
    }
  }
}

const result = findGuyWithMoney(friends);
