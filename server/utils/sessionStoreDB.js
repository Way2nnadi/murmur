//this options allows us to use our current database(firebase)
//to store our session IDs instead of using memcache
//the session will last in our DB for 30 days before being automatically
//clean up

exports.options= {
  host: 'fiery-heat-3376.firebaseio.com/', //our database location
  reapInterval: 2592000000 //sessionId will be stored for 30 days
};