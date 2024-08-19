// 242. Valid Anagram

// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      const count = sMap.get(s[i]) + 1;
      sMap.set(s[i], count);
    } else {
      sMap.set(s[i], 1);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (sMap.has(t[j])) {
      sMap.set(t[j], sMap.get(t[j]) - 1)
    } else {
      return false;
    }
  }
  for (let [i, j] of sMap) {
    if (j !== 0) return false
  }
  return true
};
