import React, { Component } from 'react';
import { Tabs, Tab } from 'react-materialize';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import myEventsList from './events';

BigCalendar.momentLocalizer(moment)

class Calendar extends Component {

  formatEvents = (events) => {
    return events.map(event => {
      return {
        start: moment(`${event.date}`).format(),
        end: moment(`${event.date}`).add(1, "days").format(),
        title: event.title
      }
    })
  }

  render() {
    return(
    <div className="rbc-calendar">
      <h1>Calendar Component</h1>
      <hr />
      <Tabs className='tab-demo z-depth-1'>
        <Tab title="Junior Year" active>
          <br />
          <BigCalendar
            events={myEventsList}
            startAccessor="startDate"
            endAccessor="endDate"
          />
        </Tab>
        <Tab title="Senior Year">
          <br />
          <BigCalendar
            events={myEventsList}
            startAccessor='startDate'
            endAccessor='endDate'
          />
        </Tab>
      </Tabs>
    </div>
    )
  }
}

export default Calendar;