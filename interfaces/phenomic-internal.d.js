/* eslint-disable no-unused-vars */

type PromiseAction = {
  types: Array<string>,
  page: string,
  promise: Promise,
}

type PhenomicCollectionItem = {
  head: Object,
  body: string,
  __filename: string,
  __url: string,
  __resourceUrl: string,
  __dataUrl: string,
}

type PhenomicCollection = Array<PhenomicCollectionItem>

type PhenomicMinifiedCollection = Array<Object>

type PhenomicAssetsConfig = {
  route: string,
  path: string,
}

type PhenomicOfflineConfig = {
  appcache: boolean,
  serviceWorker: boolean,
  pattern: Array<string>,
}

// @todo enhance this type
type WebpackConfig = Object

// Configs generated from configurator
type PhenomicConfig = {
  cwd: string,
  source: string,
  destination: string,
  assets: PhenomicAssetsConfig, // no string type
  offline: boolean,
  offlineConfig: PhenomicOfflineConfig,
  CNAME: boolean,
  nojekyll: boolean,
  devHost: string,
  devPort: number,
  dev: boolean,
  production: boolean,
  static: boolean,
  server: boolean,
  open: boolean,
  baseUrl: Object,
  scriptNode: string,
  scriptBrowser: string,
  webpackConfig?: WebpackConfig,
  webpackConfigBrowser?: WebpackConfig,
  webpackConfigNode?: WebpackConfig,
}

type Url = {
  href: string,
  protocol?: string,
  slashes?: boolean,
  host?: string,
  auth?: string,
  hostname?: string,
  port?: string,
  pathname?: string,
  search?: string,
  path?: string,
  query?: Object,
  hash?: string,
}
