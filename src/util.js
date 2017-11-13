/**
 * @param {String} hash 
 * @return {Number[]}
 */
export function decodeBarIDs(hash) {
  try {
    const idString = atob(hash).split('');
    const fixedSize = Math.floor(idString.length / 2)
    return Array.from(Array(fixedSize))
      .map((value, index) => idString.slice(index * 2, 2).join(''))
      .map(Number);
  } catch (ex) {
    if (ex instanceof DOMException) {
      return null;
    } else {
      throw ex;
    }
  }
}

/**
 * @param {Number[]} ids 
 */
export function encodeBarIDs(ids) {
  return btoa(ids.join(''));
}
