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
    container: '#search-hits',
    templates: {
      item: function(hit) {
        return `
          <a href="${hit.url}" class="product-card">
            <div class="product-card__header">
              <img class="post-header-avatar" src="${hit.logo}">
              <div>

                <h2 class="product-card__title">${hit.title}</h2>
                <div class="product-card__rating">
                <svg aria-hidden="true" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18 fa-2x hidden lg:block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" color="rgb(252, 156, 78)" style="width: auto;height: 13px;margin-right: 2px; position: relative; top: -1px;"><path fill="rgb(252, 156, 78)" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                  ${hit.rating}        
                </div> 
              </div>        
            </div>
            <div class="product-card__body">      
            <div class="product-card__img">
            <div class="wrapper">
            <div style="--aspect-ratio:16/12;">
            <img data-src="${hit.cover_img_thumb}" data-srcset="${hit.cover_img}" class="fade-box lazyload"/>
            </div>
            </div>
            </div>
              <p>ECI empowers to build and sustain the programs that are proven to increase integrity in organizations.
              </p>
            </div>
          
          </a>
        `;
      }
    }    
  })
);

search.start();