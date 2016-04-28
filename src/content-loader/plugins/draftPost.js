const defaultOpts = {
  enable: process.env.NODE_ENV === "production",
}

export default function draftPost(opts = defaultOpts) {
  return function plugin(textData) {
    if (!opts.enable) {
      return textData
    }

    // Prevent emiting file
    if (textData.head.draft) {
      return null
    }
  }
}
