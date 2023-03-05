/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }
// module.exports = nextConfig

const removeImports = require('next-remove-imports')()

module.exports = removeImports({
  experimental: { esmExternals: true },
  experimental: {
    appDir: true,
  },
})
