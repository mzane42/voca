import toString from '../utilities/string/to_string';
import nilDefault from '../utilities/undefined/nil_default';

/**
 * Counts the number of `substring` appearances in `subject`.
 *
 * @function countSubstring
 * @static
 * @since 1.0.0
 * @memberOf Count
 * @param {string} [subject=''] The subject string.
 * @param {string} substring The substring to be counted.
 * @return {number} Returns the number of `substring` appearances.
 * @example
 * v.countSubstring('bad boys, bad boys whatcha gonna do?', 'boys');
 * // => 2
 */
export default function(subject, substring) {
  var subjectString = toString(nilDefault(subject, '')),
    substringString = toString(nilDefault(substring, '')),
    count = 0,
    matchIndex = 0,
    substringLength = substringString.length;
  if (subjectString === '' || substringString === '') {
    return count;
  }
  do {
    matchIndex = subjectString.indexOf(substringString, matchIndex);
    if (matchIndex !== -1) {
      count++;
      matchIndex += substringLength;
    }
  } while (matchIndex !== -1);
  return count;
}