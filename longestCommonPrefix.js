/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if (!strs.length) return '';
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        const currentElement = strs[i];

        while (currentElement.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (!prefix) return '';
        }
    }

    return prefix;
};
