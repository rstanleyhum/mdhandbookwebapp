const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage')();
const path = require('path');

const storageBucketName = "mdhandbookapp-1debf.appspot.com";
const indexFilename = "indexfile.json";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.updateindex = functions.storage.object().onChange(event => {
  const object = event.data;
  const filePath = object.name;
  console.log(filePath);
  if (filePath == indexFilename) {
    console.log("Do nothing");
    return;
  }
  console.log("Perform the indexing");
  return;
  
  const baseFileName = path.basename(filePath, path.extname(filePath));
});


exports.httpsupdateindex = functions.https.onRequest((request, response) => {
  const bucket = gcs.bucket(storageBucketName);
  var indexfile = bucket.file(indexFilename);
  bucket.getFiles()
    .then(data =>{
      files = data[0];
      var getallmetadata = files.map(item => {
        return item.getMetadata()
      });
      return Promise.all(getallmetadata);
    })
    .then(data2 => {
      return data2.map( meta => {
        var item = {}
        item.name = meta[0].name
        item.updated = Date.parse(meta[0].updated);
        return item;
      });
    })
    .then(json => {
      return indexfile.save(JSON.stringify(json, null, 2));
    })
    .then( () => {
      response.send();
    })
    .catch(err => {
      console.log(err);
    })
});


exports.checkfiles = functions.https.onRequest((request, response) => {
  const bucket = gcs.bucket(storageBucketName);
  var indexfile = bucket.file(indexFilename);
  var checkDate = new Date(2017, 8, 10, 9, 22);
  indexfile.get()
    .then(data => {
      var file = data[0];
      var fileUpdated = new Date(file.metadata.updated)
      if (fileUpdated < checkDate) {
        response.send("Nothing to do.");
        throw true
      }
      return file.download();
    })
    .then(data => {
      var contents = data[0];
      var filedata = JSON.parse(contents);
      var json = _getJSON(filedata, checkDate.getTime());
      response.send(JSON.stringify(json, null, 2));
    })
    .catch( err => {
      console.log(err);
    })
});


const _getJSON = (filedata, check) => {
  var updateFiles = filedata.map(item => {
    if (check < item.updated) {
      return item.name;
    } else {
      return null;
    }
  });
  var filteredFiles = updateFiles.filter(item => item != null);
  var finalFiles = filteredFiles.filter(item => item != indexFilename);
  return finalFiles;
};


exports.checkallfiles = functions.https.onRequest((request, response) => {
  const bucket = gcs.bucket(storageBucketName);
  var indexfile = bucket.file(indexFilename);
  var checkDate = new Date(2017, 6, 10, 9, 22);
  indexfile.download()
    .then(data => {
      var contents = data[0]
      var filedata = JSON.parse(contents);
      var json = _getJSON(filedata, checkDate.getTime());
      response.send(JSON.stringify(json, null, 2));
    })
    .catch(err => {
      console.log(err);
    })
});

