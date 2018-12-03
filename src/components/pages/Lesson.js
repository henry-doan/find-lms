import React, { Component } from 'react';

class Lesson extends Component {
  
  
  render() {
    const { id } = this.props.match.params
    return(
      <div className='container'>
        <h1>Lesson page</h1>
        
      </div>
    )
  }

}


export default Lesson;