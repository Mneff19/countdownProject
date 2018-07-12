import React, {Component} from 'react'

class Clock extends Component {
  render(){
    return (
      <div key={9} className="clock">
        <div key={10} className="clock_days clock_box">
          <label className='clock_title'>DAYS</label>
          <label className='clock_amount'>4</label>
        </div>
        <div key={11} className="clock_hours clock_box">
          <label className='clock_title'>HRS</label>
          <label className='clock_amount'>20</label>
        </div>
        <div key={12} className="clock_minutes clock_box">
          <label className='clock_title'>MINS</label>
          <label className='clock_amount'>420</label>
        </div>
        <div key={13} className="clock_seconds clock_box">
          <label className='clock_title'>SECS</label>
          <label className='clock_amount'>69</label>
        </div>
      </div>
    )
  }
}

export default Clock;
