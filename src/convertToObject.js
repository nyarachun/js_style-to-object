'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  const obj = {};
  const arr = sourceString.split(';');

  arr.forEach((el) => {
    const newEl = el.trim();

    if (newEl) {
      const newnewEl = newEl.split(':');

      obj[newnewEl[0].trim()] = newnewEl[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
