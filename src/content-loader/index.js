import { join } from "path"

export default function() {
  const collectionLoader = join(__dirname, "collection-loader.js")
  const contentLoader = join(__dirname, "content-loader.js")

  return `${ collectionLoader }!${ contentLoader }`
}

export descriptionPlugin from "../plugins/description.js"
