import React, {Component} from 'react';
import Songs from '../components/Songs';

class Album extends Component{ 

  constructor(props) {
    super(props);

    console.log('albummmmmmmm',props);
    const album = props.album;
    const currentSong = props.currentSong;
    const isPlaying = props.isPlaying;
    const toggleOne = props.toggleOne;
  }
  componentDidMount () {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
}
  
  render(){
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={this.album.songs}
          currentSong={this.currentSong}
          isPlaying={this.isPlaying}
          toggleOne={this.toggleOne} />
      </div>
    );
  }
}

export default Album;
