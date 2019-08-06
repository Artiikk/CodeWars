const alcoholCount = (...arr) => arr.reduce((el, next) => el + next, 0);

alcoholCount(237,1000,1470,200,432);
