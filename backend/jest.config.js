module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  forceExit: true, // Add this line
  testTimeout: 30000 // Optional: increase timeout if needed
};