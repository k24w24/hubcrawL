// This config will go through all web pages on https://www.example.com and save one object
// per page containing the title along with an objectID equal to the value of the meta tag "pageID".
module.exports = {
  appId: 'SGPC13Q72I',
  apiKey: '81c994d22ed4113675e98525c47266cc',
  rateLimit: 2,
  schedule: 'at 12:00 am',
  startUrls: ['https://hubcrawl.netlify.app/post'],
  actions: [
    {
      indexName: 'crawler-example',
      pathsToMatch: ['https://hubcrawl.netlify.app/**'],
      recordExtractor: ({ $ }) => {
        const objectID = $('meta[name="pageID"]').attr('content');
        const title = $('title').text();

        return [
          {
            objectID,
            title,
          },
        ];
      },
    },
  ],
};