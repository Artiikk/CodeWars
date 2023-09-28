const fibGenerator = function*() {
    let prevValue = 0;
    let nextValue = 1;

    while (true) {
      const current = prevValue;

      prevValue = nextValue;
      nextValue = current + prevValue;

      yield current;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
