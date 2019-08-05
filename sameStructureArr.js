Array.prototype.sameStructureAs = function (other) {
  const array1 = JSON.stringify(this).replace(/\d/g, '');
  const array2 = JSON.stringify(other).replace(/\d/g, '');

  return array1 === array2;
};

// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [1], [2] ] ] );
