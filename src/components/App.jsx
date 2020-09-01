import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYoutube from '../lib/searchYoutube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: exampleVideoData[0],
      videos: exampleVideoData.slice(1),
      textEntered: '',
    };

    // invoke searchYoutube once App is initialized
    // this.onSearch();
    searchYoutube({query: 'dogs', max: 5, key: YOUTUBE_API_KEY,});
  }

  // make function for onClick of a videoListEntry
  onListItemClick(clickedVideo) {
    // event.preventDefault();
    // this = videoListEntry that was clicked
    var oldPlayer = this.state.player;
    var indexOfClickedVideo = this.state.videos.indexOf(clickedVideo);
    this.state.videos.splice(indexOfClickedVideo, 1, oldPlayer);
    // if videoListEntry is selected, shuffle states: clicked video goes to player, others must change

    this.setState({
      // swap the player to the clicked video
      player: clickedVideo,
    });
  }

  onSearch() {
    var options = {
      query: this.state.textEntered || 'dogs',
      max: 5,
      key: YOUTUBE_API_KEY,
    };

    // run searchYoutube with appropriate parameters
    searchYoutube(options, (data) => {
      // callback: change the state of app to include resulting videos and player
      this.setState({
        player: data.items[0],
        videos: data.items.slice(1),
        textEntered: '',
      });
    });
  }

  handleChange(event) {
    // update textEntered state to match search box details
    this.setState({ textEntered: event.target.value + event.key});
  }

  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><Search keyFunc={this.handleChange.bind(this)} clickFunc={this.onSearch.bind(this)}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><VideoPlayer video={this.state.player} /></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><VideoList videos={this.state.videos} func={this.onListItemClick.bind(this)}/></h5></div>
        </div>
      </div>
    </div>
    );
  }

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


// App will contain Search, VideoList, and VideoPlayer