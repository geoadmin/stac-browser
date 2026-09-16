export default {
  catalogUrl: 'https://data.geo.admin.ch/api/stac/v1/',
  catalogTitle: 'data.geo.admin.ch',
  pathPrefix: '/browser/',
  historyMode: 'hash',
  defaultCollectionSort: '-title',
  defaultItemSort: '-properties.title',
  socialSharing: ['email', 'bsky', 'mastodon'],  // no X
  supportedLocales: [
    "de-CH",
    "en",
    "fr-CH",
    "it-CH",
  ],
}
