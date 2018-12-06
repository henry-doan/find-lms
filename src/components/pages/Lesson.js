import React, { Component } from 'react';

class Lesson extends Component {
  
  
  render() {
    const { id } = this.props.match.params
    const { title, subtopic, content } = this.props
    return(
      <div className='container'>
        <h1>{title} Lesson Page</h1>
        <h3>{subtopic}</h3>
        <p>{content}</p>
      </div>
    )
  }

}


export default Lesson;