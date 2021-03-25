import React, { useState } from 'react'

import customer1Events from "./fake-charts/events-1.png";
import customer1Performance from "./fake-charts/perf-1.png";
import customer2Ftp from "./fake-charts/ftp-2.png";
// import customer2Performance from "./fake-charts/perf-2.png";

import "./styles.css";

const Dashboard = () => {

  const [customer1, setCustomer1] = useState('customer1Events')

  const onClickHandler = () => {
    setCustomer1('customer1Events')
  }

  const onClickHandler2 = () => {
    setCustomer1('customer1Performance')
  }

  return (
    <div>
      {/* Placeholder, feel free to edit the structure below */}
      <div className="box">
        <h1>Customer 1</h1>

        <div className="tabs">
          <div className={ customer1 === 'customer1Events' ? "tab selected" : "tab"} onClick={ onClickHandler }>
            Search events
          </div>
          <div className={ customer1 === 'customer1Performance' ? "tab selected" : "tab"} onClick={ onClickHandler2 }>
            Performance
          </div>
        </div>

        <div>
          { customer1 === 'customer1Events' ?
            <img src={customer1Events} alt="Search events over time" />
            :
            <img src={customer1Performance} alt="Performance over time" />
          }
        </div>
      </div>

      <div className="box">
        <h1>Customer 2</h1>

        <div className="tabs">
          <div className="tab selected">
            FTP Usage
          </div>
          <div className="tab">
            Performance
          </div>
        </div>

        <div>
            <img src={customer2Ftp} alt="FTP usage" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
