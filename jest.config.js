module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(axios)/)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
  moduleNameMapper: {
    '^axios$': '<rootDir>:node_modules/axios',
  },
};
