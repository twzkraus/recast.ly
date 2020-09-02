// GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&type=video&key=[YOUR_API_KEY] HTTP/1.1

/*
if successful, we get: {
  "kind": "youtube#searchListResponse",
  "etag": etag,
  "nextPageToken": string,
  "prevPageToken": string,
  "regionCode": string,
  "pageInfo": {
    "totalResults": integer,
    "resultsPerPage": integer
  },
  "items": [
    search Resource
  ]
}

items:[] === list of results that match the search criteria
*/

var searchYouTube = (options={query: 'dogs', max: 5, key: 'no key provided'}, callback = ()=>{}) => {
  console.log('searching youtube');
  // required options: query (string to search), max (max # of videos to return), key (API key)
  // send GET request to youtube
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + options.max + '&q=' + options.query + '&type=video&key=' + options.key,
    type: 'GET',
    success: callback,
    error: function(error) {
      console.error('youtube: Failed to fetch videos', error);
    }
  });
    // use callback on succesful completion of request--pass in videos array returned from YT

};

export default searchYouTube;
