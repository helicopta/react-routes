import React, {Component} from 'react';
import Songs from '../components/Songs';

class Album extends Component{ 

  constructor(props) {
    super(props);
    this.state = {
      album: {}
    };
  }

  componentDidMount () {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
}
 
  render(){
    const album = this.props.selectedAlbum || {};

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
    );
  }
}

export default Album;


//<Songs
//          songs={this.state.album.songs}
//          currentSong={currentSong}
//          isPlaying={isPlaying}
//          toggleOne={toggleOne} />