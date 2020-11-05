const search = instantsearch({
  appId: 'EFD6VBZXBP',
  indexName: 'products',
  apiKey: 'a790fd140e7cd902b4ec457ccf175c15'
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-searchbar',
    placeholder: 'Search into posts...',
    poweredBy: true 
  })
);
search.addWidget(
  instantsearch.widgets.hits({
    container: '#search-hits'
  })
);

search.start();