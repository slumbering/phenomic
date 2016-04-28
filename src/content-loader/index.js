import { join } from "path"

module.exports = function() {
  const collectionLoader = join(__dirname, "collection-loader.js")
  const contentLoader = join(__dirname, "content-loader.js")

  return `${ collectionLoader }!${ contentLoader }`
}
