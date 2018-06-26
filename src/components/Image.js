import React from 'react';

const Image = (props) => {
  return (
    <div className="imgItem col-sm-3">
      <a href={props.picture.props.src}><img className="flickrImg" src={props.picture.props.src} alt={props.picture.props.alt}/></a>
      <p className="picTag">{props.picture.props.alt.substring(0, 15)}</p>
    </div>
  )
}

export default Image;
