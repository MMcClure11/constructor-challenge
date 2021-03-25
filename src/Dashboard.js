import React, { useState } from 'react'

import customer1Events from "./fake-charts/events-1.png";
import customer1Performance from "./fake-charts/perf-1.png";
import customer2Ftp from "./fake-charts/ftp-2.png";
import customer2Performance from "./fake-charts/perf-2.png";

import "./styles.css";

const Dashboard = () => {

  const [customer1, setCustomer1] = useState('customer1Events')
  const [customer2, setCustomer2] = useState('customer2FTP')

  const onClickHandler = (selection) => {
    switch(selection) {
      case 'customer1Events':
        setCustomer1('customer1Events')
        break;
      case 'customer1Performance':
        setCustomer1('customer1Performance')
        break;
      case 'customer2FTP':
        setCustomer2('customer2FTP')
        break;
      case 'customer2Performance':
        setCustomer2('customer2Performance')
        break;
      default:
        setCustomer1('customer1Events')
        setCustomer2('customer2FTP')
    }
  }

  return (
    <div>
      {/* Placeholder, feel free to edit the structure below */}
      <div className="box">
        <h1>Customer 1</h1>

        <div className="tabs">
          <div className={ customer1 === 'customer1Events' ? "tab selected" : "tab"} onClick={ () => onClickHandler('customer1Events') }>
            Search events
          </div>
          <div className={ customer1 === 'customer1Performance' ? "tab selected" : "tab"} onClick={ () => onClickHandler('customer1Performance') }>
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
          <div className={ customer2 === 'customer2FTP' ? "tab selected" : "tab"} onClick={ () => onClickHandler('customer2FTP') }>
            FTP Usage
          </div>
          <div className={ customer2 === 'customer2Performance' ? "tab selected" : "tab"} onClick={ () => onClickHandler('customer2Performance') }>
            Performance
          </div>
        </div>

        <div>
          { customer2 === 'customer2FTP' ?
            <img src={customer2Ftp} alt="FTP usage" />
            :
            <img src={customer2Performance} alt="FTP usage" />
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard
