import enhanceCollection from "../enhance-collection"
import feed from "./feed"
import cache from "./cache"

let timeout

module.exports = function(textData) {
  // Don't emit file if content-loader return null
  // Useful when for draft post plugin
  if (textData === null) {
    return ""
  }

  if (!this.emitFile) {
    throw new Error("emitFile is required from module system")
  }
  // emit file
  // remove leading slash. webpack doesn't like it
  this.emitFile(textData.__dataUrl.slice(1), JSON.stringify(textData))

  const query = this.options.phenomic ? this.options.phenomic.loader : {}
  const relativePath = textData.__filename

  let previousIndex
  cache.forEach((md, index) => {
    if (md.__filename === relativePath) {
      previousIndex = index
    }
  })
  if (previousIndex) {
    cache[previousIndex] = textData
  }
  else {
    cache.push(textData)
  }

  if (timeout) {
    clearTimeout(timeout)
  }
  else {
    setTimeout(() => {
      // emit updated feeds
      const feeds = query.feeds || []
      const feedsOptions = query.feedsOptions || {}
      Object.keys(feeds).forEach((name) => {
        const { feedOptions, collectionOptions } = feeds[name]
        this.emitFile(name, feed({
          feedOptions: {
            ...feedsOptions,
            ...feedOptions,
          },
          destination: name,
          collection: enhanceCollection(
            cache.map((item) => ({
              ...item.head,
              description: item.body,
              __url: item.__url,
            })),
            collectionOptions
          ),
        }))
      })
    }, 100)
  }

  return "module.exports = " + JSON.stringify(textData.__dataUrl)
}
