import path from "path"
import loaderUtils from "loader-utils"
import frontMatterParser from "gray-matter"

import joinUri from "../_utils/join-uri"
import urlify from "../_utils/urlify"
import description from "./description"
import validator from "./validator"

module.exports = function(input) {
  this.cacheable()

  const query = this.options.phenomic ? this.options.phenomic.loader : {}

  try {
    validator(query)
  }
  catch (err) {
    this.emitError(err)
  }

  const context = query.context || this.options.context
  const renderer = query.renderer || require("./default-renderer").default

  const defaultHead = query.defaultHead
  const parsed = frontMatterParser(input)

  const relativePath = path.relative(context, this.resourcePath)
  const tmpUrl = urlify(
    parsed.data.route
      // custom route
      ? parsed.data.route
      // default route
      : relativePath
  )

  const url = urlify(tmpUrl)
  const resourceUrl = urlify(tmpUrl, true)

  const hash = loaderUtils.getHashDigest(input)
  const dataUrl = resourceUrl + "." + hash + ".json"

  const metadata = {
    __filename: relativePath,
    __url: joinUri("/", url),
    __resourceUrl: joinUri("/", resourceUrl),
    __dataUrl: joinUri("/", dataUrl),
  }
  let textData = {
    head: {
      ...defaultHead,
      ...parsed.data,
    },
    body: renderer(parsed.content),
    rawBody: parsed.content,
    raw: parsed.orig,
    ...metadata,
  }

  textData = description(textData, query.description)

  return textData
}
