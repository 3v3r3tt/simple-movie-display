import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestMediaGrid } from '../actions'

import MediaItem from './mediaItem'

function mapStateToProps (state) {
  return {
    data: state.data
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestData: (payload) => {
      dispatch(requestMediaGrid(payload))
    }
  }
}

class MediaGrid extends Component {
  constructor (props) {
    super(props)

    this.pageBackward = this.pageBackward.bind(this)
    this.pageForward = this.pageForward.bind(this)

    this.pageSize = 51
    this.offset = 0
    this.limit = this.pageSize
  }

  componentDidMount () {
    this.getData()
  }

  pageBackward () {
    this.offset = this.offset - this.pageSize
    this.getData()
    this.scrollTop()
  }

  pageForward () {
    this.offset = this.offset + this.pageSize
    this.getData()
    this.scrollTop()
  }

  scrollTop () {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }

  getData () {
    const payload = {
      offset: this.offset,
      limit: this.limit
    }
    this.props.requestData(payload)
  }

  render() {
    return (
      <div className='container'>
        <div className='container--header'>
          <h1 className='container--title'>Movies</h1>
          <div className='container--pagination'>
            {
              this.offset === 0
              ? null
              : <span className='container--prev' onClick={this.pageBackward}>
                &lt;&lt; Prev
              </span>
            }
            {
              this.props.data.length !== this.pageSize
              ? null
              : <span className='container--next' onClick={this.pageForward}>
                Next &gt;&gt;
              </span>
            }
            <p>
              Currently showing Movies {this.offset + 1} to {this.offset + this.props.data.length}
            </p>
          </div>
        </div>

        <div className='gallery'>
          {
            this.props.data.map(item => <MediaItem item={item} key={item.titleId}/>)
          }
        </div>
      </div>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaGrid)
