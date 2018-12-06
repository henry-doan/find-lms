import React, { Component} from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { Link, Route } from 'react-router-dom';
import Lesson from './Lesson';
    
class CodingI extends Component {
  
  componentDidMount() {
    this.lessonsList()
  }

  lessonsList = () => {
    const lessons = [
      { title: 'Intro to Coding', subtopic: 'Why do we code?', content: 'because we do', id: 1 },
      { title: 'Computer Setup', subtopic: 'Tools', content: 'com content', id: 2 },
      { title: 'HTML5 Intro', subtopic: 'Web Structure', content: 'html stuff', id: 3 },
    ]
    
    return lessons.map(l => (
      <Route 
        exact
        path={`/codingI-lessons/${l.id}`}
        render={ (props) => {
          <Lesson title={l.title} subtopic={l.subtopic} content={l.content} key={l.id} />
        }}
      />
    ))
  }

  render() {
    return(
      <div className='container'>
        <h1>Coding I Lessons</h1>
        <hr />
        <Collection header='Week 1'>
          <CollectionItem>
            <Link to='codingI-lessons/1'>Lesson 1</Link>
          </CollectionItem>
          <CollectionItem>
            <Link to='codingI-lessons/2'>Lesson 2</Link>
          </CollectionItem>
          <CollectionItem>
            <Link to='codingI-lessons/3'>Lesson 3</Link>
          </CollectionItem>
        </Collection>
      </div>
    )
  }
}

export default CodingI;