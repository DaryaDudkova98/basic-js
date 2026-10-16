/**
 * Implement chainMaker object according to task description
 *
 */
const chain = [];

const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    chain.push(value);
    return this;
  },
  removeLink(position) {
    const isValid =
      typeof position === 'number' &&
      Number.isInteger(position) &&
      position >= 1 &&
      position <= chain.length;

    if (!isValid) {
      chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    chain.reverse();
    return this;
  },
  finishChain() {
    const result = chain
    .map((value) => `( ${value === undefined ? '' : value} )`)
    .join('~~');
  chain.length = 0;
  return result;
  },
};

module.exports = {
  chainMaker,
};
