/**
 * Check if a string contains dog-related words
 * @param {string} text - The text to check
 * @returns {boolean} - True if the text contains dog-related words, false otherwise
 */
function isDog(text) {
  if (typeof text !== 'string') {
    return false;
  }

  const dogWords = [
    'woof',
    'bark',
    'arf',
    'ruff',
    'bow-wow',
    'yip',
    'yap',
    'growl',
    'howl',
    'puppy',
    'dog',
    'doggo',
    'pupper'
  ];

  const lowerText = text.toLowerCase();
  
  return dogWords.some(word => lowerText.includes(word));
}

module.exports = isDog;
