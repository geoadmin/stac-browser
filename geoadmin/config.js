export default {
  catalogUrl: 'https://data.geo.admin.ch/api/stac/v0.9/',
  catalogTitle: 'data.geo.admin.ch',
  pathPrefix: '/browser/',
  historyMode: 'hash',
  cardViewSort: 'desc',
  socialSharing: ['email', 'bsky', 'mastodon'],  // no X
  preprocessSTAC: stac => {
      if (stac.getBrowserPath() == '/') {
        stac.conformsTo.push('https://api.stacspec.org/v1.0.0/item-search');
        stac.links = stac.links.map(link => {
          if (link.rel === 'search') {
            link.type = 'application/geo+json';
          }
          return link;
        });
      }
      return stac;
    },
  supportedLocales: [
    "de-CH",
    "en",
    "fr-CH",
    "it-CH",
  ],
}
