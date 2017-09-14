const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage')();
const path = require('path');

const storageBucketName = "mdhandbookapp-1debf.appspot.com";
const indexFilename = "indexfile.json";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// exports.updateindex = functions.storage.object().onChange(event => {
//   const object = event.data;
//   const filePath = object.name;

//   if (filePath == indexFilename) {
//     return;
//   }
  
//   const bucket = gcs.bucket(storageBucketName);
//   var indexfile = bucket.file(indexFilename);
  
//   _updateIndex(bucket, indexfile)
//     .then( () => {
//       return;
//     })
//     .catch(err => {
//       console.log(err);
//     });

//   return;
// });


const _updateIndex = (bucket, indexfile) => {
  var p = new Promise( (resolve, reject) => {
    _getFilesFromBucket(bucket)
      .then(data => {
        var files = data[0];
        return _getMetadata(files);
      })
      .then(metadata => {
        return _parseMetadata(metadata);
      })
      .then(json => {
        return _saveToIndexFile(indexfile, json);
      })
      .then( () => {
        resolve();
      })
      .catch( err => {
        reject(err);
      });
  });
  return p;
}

const _getFilesFromBucket = (bucket) => {
  return bucket.getFiles();
};

const _getMetadata = (files) => {
  var getallmetadata = files.map(item => {
    return item.getMetadata()
  });
  return Promise.all(getallmetadata);
};

const _parseMetadata = (metadata) => {
  return metadata.map(meta => {
    var item = {};
    item.name = meta[0].name;
    item.updated = Date.parse(meta[0].updated);
    return item;
  });
};

const _saveToIndexFile = (indexfile, json) => {
  return indexfile.save(JSON.stringify(json, null, 2));
}

exports.httpsupdateindex = functions.https.onRequest((request, response) => {
  const bucket = gcs.bucket(storageBucketName);
  var indexfile = bucket.file(indexFilename);
  _updateIndex(bucket, indexfile)
    .then( () => {
      response.end();
    })
    .catch(err => {
      response.status(500).json({"error": err});
    })
});


exports.checkfiles = functions.https.onRequest((request, response) => {
  const bucket = gcs.bucket(storageBucketName);
  var indexfile = bucket.file(indexFilename);
  
  var checkDate = _getCheckDate(request.query.time);

  indexfile.get()
    .then(data => {
      var file = data[0];
      var fileUpdated = new Date(file.metadata.updated)
      
      if (fileUpdated < checkDate) {
        var returnData = [];
        var content = [];
        returnData[0] = JSON.stringify(content);
        return Promise.resolve(returnData);
      }
      return file.download();
    })
    .then(data => {
      var contents = data[0];
      var filedata = JSON.parse(contents);
      var json = _getJSON(filedata, checkDate.getTime());
      response.json(json);
    })
    .catch( err => {
      response.status(500).json({"error": err});
    });
});


const _getCheckDate = (timestring) => {
  var checkTime = parseInt(timestring);
  if (!checkTime) {
    checkTime = Date.now();
  }
  return new Date(checkTime);
}


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


exports.forcecheckfiles = functions.https.onRequest((request, response) => {
  const bucket = gcs.bucket(storageBucketName);
  var indexfile = bucket.file(indexFilename);
  
  var checkDate = _getCheckDate(request.query.time)
  
  indexfile.download()
    .then(data => {
      var contents = data[0]
      var filedata = JSON.parse(contents);
      var json = _getJSON(filedata, checkDate.getTime());
      response.json(json);
    })
    .catch(err => {
      response.status(500).json({"error": err});
    })
});

