import React from 'react';

// new component Mauro

class Artist extends React.Component{
  constructor(props){
    super();
  }
  
  componentDidMount () {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);
  }

  render(){
    return(
      <div>
        <h3>ARTIST NAME</h3>
        <h4>ALBUMS</h4>
        <h4>SONGS</h4>
      </div>);
  }
}

export default Artist