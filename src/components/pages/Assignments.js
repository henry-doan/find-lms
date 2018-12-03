import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

const Assignments = () => (
  <div className="container">
    <h1>Assignments</h1>
    <hr />
    <h4>Week 1</h4>
    <Collapsible accordion>
      <CollapsibleItem header='Website Breakdown'>
        <h5>Objectives</h5>
        <ul className="objectives">
          <li>• Search up a website, ex. (facebook, amazon, yelp etc.) </li>
          <li>• Break the website into smaller components, ex. (Navbar, ads, tables)</li>
          <li>• List those components you found on a document or sheet of paper</li>
          <li>• Continue doing that for at least 5 websites</li>
          <li>• Circle or highlight the main things all of the sites have</li> 
        </ul> 
      </CollapsibleItem>
      <CollapsibleItem header='Second'>
        Lorem ipsum dolor sit amet.
      </CollapsibleItem>
      <CollapsibleItem header='Third'>
        Lorem ipsum dolor sit amet.
      </CollapsibleItem>
    </Collapsible>
  </div>
)

export default Assignments;