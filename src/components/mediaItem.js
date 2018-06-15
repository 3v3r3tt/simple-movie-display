import React, { Component } from 'react'

class MediaItem extends Component {
  render() {
    const {
      title,
      artistName,
      artKey
    } = this.props.item

    const imageSource = `https://d2snwnmzyr8jue.cloudfront.net/${artKey}_270.jpeg`
    const placeholderImage = 'http://via.placeholder.com/269x385'

    return (
      <div className='gallery--item'>
        <img src={imageSource} alt={placeholderImage}/>
        <h1 className='gallery--item--title'>
          {title}
        </h1>

        <h1 className='gallery--item--artist'>
          by {artistName || 'N/A'}
        </h1>
      </div>
    )
  }
}

export default MediaItem
