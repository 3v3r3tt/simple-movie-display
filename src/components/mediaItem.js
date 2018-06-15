import React, { Component } from 'react'

class MediaItem extends Component {
  render() {
    console.log('----mediaImage render----')
    console.log('this.props.data: ', this.props.data)

    const {
      titleId,
      title,
      artistName,
      kind,
      artKey
    } = this.props.item

    const imageSource = `https://d2snwnmzyr8jue.cloudfront.net/${artKey}_270.jpeg`

    return (
      <div className='gallery--item' key={titleId}>
        <img src={imageSource} />
        <h1 className='gallery--item--title'>{title}</h1>
        <h1 className='gallery--item--artist'>by {artistName}</h1>
      </div>
    )
  }
}

export default MediaItem
