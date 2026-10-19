function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>]/g, '');
}

function calculateHash(data) {
  return Buffer.from(data).toString('base64');
}

module.exports = { sanitizeInput, calculateHash };