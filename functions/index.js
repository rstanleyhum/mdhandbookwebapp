const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage')();
const path = require('path');

const storageBucketName = "mdhandbookapp-1debf.appspot.com";
const indexFilename = "indexfile.json";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.bookpages = functions.https.onRequest((request, response) => {
  const bucket = gcs.bucket(storageBucketName);
  var query = {
    prefix: 'bookpages/',
    delimiter: '/',
  };
  var checkDate = _getCheckDate(request.query.time);

  bucket.getFiles(query)
    .then(data => {
      var files = data[0];
      var names = files.map(f => _returnFilenameIfUpdated(f.metadata.name, new Date(f.metadata.updated), checkDate));
      var json = names.filter(n => n != null);
      response.json(json);
    })
    .catch( err => {
      response.status(500).json({"error": err});
    });
});


exports.stylefiles = functions.https.onRequest((request, response) => {
  const bucket = gcs.bucket(storageBucketName);
  var query = {
    prefix: 'stylefiles/',
    delimiter: '/',
  };
  var checkDate = _getCheckDate(request.query.time);

  bucket.getFiles(query)
    .then(data => {
      var files = data[0];
      var names = files.map(f => _returnFilenameIfUpdated(f.metadata.name, new Date(f.metadata.updated), checkDate));
      var json = names.filter(n => n != null);
      response.json(json);
    })
    .catch( err => {
      response.status(500).json({"error": err});
    });
});


const _returnFilenameIfUpdated = (name, lastupdated, checkdate) => {
  return lastupdated > checkdate ? name : null;
}


const _getCheckDate = (timestring) => {
  var checkTime = parseInt(timestring);
  if (!checkTime) {
    checkTime = Date.now();
  }
  return new Date(checkTime);
}