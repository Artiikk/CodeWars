function formatter(...args) {
  return args.map((el, i) => {
    return `${i++}. ` + el;
  }).join(' ')
}

formatter('Дюма - Граф Монте Кристо', 'Лавкрафт - Зов Ктулху');
