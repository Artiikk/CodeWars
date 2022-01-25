function debounce(func, ms) {
  let blocker = false;

  return function() {
    if (blocker) return;
    func.apply(this, arguments);
    blocker = true;

    setTimeout(() => blocker = false, ms);
  }
}
