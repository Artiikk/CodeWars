const fetchUrl = function(url) {
  console.log(`Fetching ${url}`, this.firstName);
};

const user = {
  firstName: "Bob",
};

function debounce(callback, delay) {
  let timeoutId = null;

  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback(args), delay);
  };
}

const fetching = debounce(fetchUrl.bind(user), 300);
fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);
