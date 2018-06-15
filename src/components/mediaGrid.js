import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
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
    requestData: () => {
      dispatch(requestMediaGrid())
    }
  }
}

class MediaGrid extends Component {
  componentDidMount () {
    this.props.requestData()
  }

  render() {
    console.log('----HOME render----')
    console.log('this.props.data: ', this.props.data)
    return (
      <div className='gallery'>
        {
          this.props.data.map(item => <MediaItem item={item} />)
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaGrid)
