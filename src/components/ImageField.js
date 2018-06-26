import React, { Component } from 'react';
import Image from './Image';

const ImageField = (props) => {
  const imageItems = props.pictures.map((picture) => {
    return (
      <Image picture={picture} key={picture.props.alt} />
    )
  });

  return (
    <div className="imgList row">
    <p className="advisory">All of these images are hosted by Flickr and posted publicly.</p>
      {imageItems}

    </div>
  )

}

export default ImageField;
