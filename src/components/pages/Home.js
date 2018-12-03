import React from 'react';
import { Collapsible, CollapsibleItem, Row, Col} from 'react-materialize';

const Home = () => (
  <div>
    <Collapsible popout>
      <CollapsibleItem header='Course Description'>
        This course is designed to help students learn the 
        foundations of computer programming as well as basic to 
        advance web development techiques, languages and design. 
        The coding portion is divided into two phases, <b>Foundations
        of Web Developement</b> and <b>Advance Web Developement</b>.  
      </CollapsibleItem>
      <CollapsibleItem header='Goals'>
        <p>These goals listed are in addition to the overall goals of the FIND
        program and is currated to the coding portion of the program.</p>
        <p>Upon completing the Foundations of Web Developement students will be able to:</p>
        <Row>
          <Col>
            <li>• Create Website Structures</li>
            <li>• Website Styling</li>
            <li>• Website Behaviors</li>
          </Col>
          <Col>
            <li>• Basic Debugging</li>
            <li>• Working in Groups</li>
            <li>• Read Documentations</li>
          </Col>
          <Col>
            <li>• OOP</li>
            <li>• Create Function Apps</li>
            <li>• Recognize Data Structures</li>
          </Col>
          <Col>
            <li>• Project Management</li>
            <li>• Make API Calls</li>
          </Col>
        </Row>
        <p>
          After completing the Foundations of Web Developement the the Advance
          Web Developement courses, graduates will have foundational skills as well 
          as:
        </p>
        <Row>
          <Col>
            <li>• Make SQL Queries</li>
            <li>• Models</li>
            <li>• Views</li>
          </Col>
          <Col>
            <li>• Controllers</li>
            <li>• Routing</li>
            <li>• Testing</li>
          </Col>
          <Col>
            <li>• Create a App with a Backend</li>
            <li>• Database Management</li>
            <li>• Use the Newest Languages</li>
          </Col>
        </Row>
      </CollapsibleItem>
      <CollapsibleItem header='What You Will Learn'>
        <p>
          Besides the computer science and programing topics listed in the
          goals and concept covered tabs, the students will be well versed in the following coding
          languages:
        </p>
        <Row>
          <Col>
            <li>• HTML5</li>
            <li>• CSS3</li>
            <li>• JavaScript</li>
          </Col>
          <Col>
            <li>• Command Line</li>
            <li>• Git</li>
            <li>• JQuery</li>
          </Col>
          <Col>
            <li>• Ruby</li>
            <li>• Ruby on Rails</li>
            <li>• React</li>
          </Col>
          <Col>
            <li>• SQL</li>
            <li>• Rspec</li>
            <li>• React Router</li>
          </Col>
        </Row>
      </CollapsibleItem>
      <CollapsibleItem header='Concepts Covered'>
        <Row>
          <Col>
            <li>• Basic Web Dev</li>
            <li>• Website Structures</li>
            <li>• Styling</li>
          </Col>
          <Col>
            <li>• Debugging</li>
            <li>• Utilizing Libraries</li>
            <li>• Media Intergration</li>
          </Col>
          <Col>
            <li>• OOP</li>
            <li>• Loops</li>
            <li>• Data Structures</li>
          </Col>
          <Col>
            <li>• Backend</li>
            <li>• Testing</li>
            <li>• MVC</li>
          </Col>
          <Col>
            <li>• Production</li>
            <li>• Repositories</li>
            <li>• Routing</li>
          </Col>
        </Row>
      </CollapsibleItem>
      <CollapsibleItem header='What You Will Learn'>
        <p>
          Besides the computer science and programing topics listed in the 
          goals and concept covered tabs, the students will be well versed in the following coding
          languages:
        </p>
          <Row>
            <Col>
              <li>• HTML5</li>
              <li>• CSS3</li>
              <li>• JavaScript</li>
            </Col>
            <Col>
              <li>• Command Line</li>
              <li>• Git</li>
              <li>• JQuery</li>
            </Col>
            <Col>
              <li>• Ruby</li>
              <li>• Ruby on Rails</li>
              <li>• React</li>
            </Col>
            <Col>
              <li>• SQL</li>
              <li>• Rspec</li>
              <li>• React Router</li>
            </Col>
          </Row>
      </CollapsibleItem>
      <CollapsibleItem header='Course Syllabus'>
        TODO have the doc of all listed points here with a link and download
      </CollapsibleItem>
      <CollapsibleItem header='How to Use This Site'>
        You are currently at the <b>Home</b> page, where it lists all the details of the coding program.
        Navagation through the site will be to your left, and each tab will lead you to different 
        areas of the site.

        <p>
          The <b>Lessons</b> page is where all of the lectures 
          documations will be for reference. Each lesson will 
          have example code and text on the topic with occisionally 
          powerpoints and extra resources embedded in the material.
        </p>
        <p>
          The <b>Assignments</b> page houses all of the required and bonus
          assignments of the course. Each assignment will have basic objectives,
          bonus items, and points associated to each assignments.
        </p>
        <p>
          The <b>Resources</b> page is a growing page of coding resources 
          all assembled in one place!
        </p>
        <p>
          Lastly the <b>Calendar</b> page is a weekly breakdown of what is
          covered on a weekly basis. The Calendar is not set in stone and will
          be change accordingly to meet the class needs and concerns.
        </p>
      </CollapsibleItem>
    </Collapsible>
  </div>
)

export default Home;