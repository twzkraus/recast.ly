import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // hold state for 6 positions: 5 videos in list, 1 in player
    };
  }

  // make function for onClick of a videoListEntry
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
          <div><h5><VideoPlayer video={exampleVideoData[0]} /></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><VideoList videos={exampleVideoData}/></h5></div>
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