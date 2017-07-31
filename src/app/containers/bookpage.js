import React from 'react';
import axios from 'axios';

import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';

import WebFrame from '../components/webframe';
import firebase from '../services/firebase';

import PagesFilenames, { UrlBase, CssFilePath } from '../pagesapp/config/assets';

var storage = firebase.storage();
var storageRef = storage.ref();


class BookPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello World",
      loading: false,
      loaded: false,
      started: false,
      finished: false,
      pages: {},
      cssloaded: false,
      cssloading: false,
      csstext: "",
    };
  };

  loadCssFile = () => {
    if (this.state.cssloading || this.state.cssloaded) {
      return;
    }

    this.loadFile("css", CssFilePath)
    .then(result => {
      var csstext = result.data;
      this.setState({
        csstext: csstext
      });
    })
    .catch(error => {
      console.log(error);
    });

    return;
  }

  downloadFiles = () => {
    if (this.state.started || this.state.finished ) {
      return;
    }

    this.setState({
      started: true
    });

    var filenames = [];
    for (var key in PagesFilenames) {
      filenames.push(key)
    }

    var loadFilePromisesList = filenames.map( item => {
      return this.loadFile(item, UrlBase + PagesFilenames[item]);
    });

    return Promise.all(loadFilePromisesList);
  };

  loadFile = (name, path) => {
    var p = new Promise( (resolve, reject) => {
      storageRef.child(path).getDownloadURL()
      .then( url => {
        return axios({
          method: 'get',
          url: url,
          responseType: 'text'
        });
      })
      .then( response => {
        resolve({name: name, data: response.data});
      })
      .catch( error => {
        resolve({name: name, data: null });
      });
    });
    return p;
  }

  startloading = () => {
    if(this.state.loaded || this.state.started || this.state.finished ) {
      return;
    }

    this.downloadFiles()
    .then( result => {
      var pages = {}
      for (var i = 0; i < result.length; i++) {
        pages[result[i].name] = result[i].data;
      };
      this.setState({
        pages: pages,
        finished: true,
        loaded: true,
        loading: false
      });
    })
    .catch( error => {
      console.log(error);
    });

    return;
  }

  showState = () => {
    console.log(this.state);
  }

  setHtmlText = name => {
    var html = this.state.pages[name];
    this.setState({
      text: html
    });
  }

  render() {
    var names = [];
    for (var key in PagesFilenames) {
      names.push(key)
    }
    var listItems = names.map( item => {
      return <ListItem key={item} primaryText={item} onTouchTap={(e) => this.setHtmlText(item)} />
    })
    
    return (
      <div>
        <h2>Book</h2>
        <WebFrame content={this.state.text} stylesheet={this.state.csstext}  width="600" height="800" />
        <FlatButton label={"READ"} onClick={this.startloading} />
        <FlatButton label={"SHOW"} onClick={this.showState} />
        <FlatButton label={"READ CSS"} onClick={this.loadCssFile} />
        <div>
          <List>
            {listItems}      
          </List>
        </div>
      </div>
    );
  }
}

export default BookPage;
