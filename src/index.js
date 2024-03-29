import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const app = document.querySelector('#app');
const API_KEY = 'AIzaSyBam9CvN3MJ-xSo4Ciqihr1L-tBsgqSwVU';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, videoData => {
      this.setState({
        videoList: videoData,
        selectedVideo: videoData[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={video => this.setState({selectedVideo: video})}
          videoList={this.state.videoList}
        />
      </div>
    );
  }
}





ReactDOM.render(<App />, app);


