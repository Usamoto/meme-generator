import React from 'react';

function Gallery(props) {
  return (
    <div className="gallery-item">
      <img src={props.imgFile} alt="" />
    </div>
  )
}


export default Gallery;