import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: exampleVideoData[0],
      videos: exampleVideoData.slice(1),
    };
  }

  // make function for onClick of a videoListEntry
  onListItemClick(clickedVideo) {
    // event.preventDefault();
    // this = videoListEntry that was clicked
    var oldPlayer = this.state.player;
    var indexOfClickedVideo = this.state.videos.indexOf(clickedVideo);
    this.state.videos.splice(indexOfClickedVideo, 1, oldPlayer);

    this.setState({
      // swap the player to the clicked video
      player: clickedVideo,
    });
  }
    // if videoListEntry is selected, shuffle states: clicked video goes to player, others must change

  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
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