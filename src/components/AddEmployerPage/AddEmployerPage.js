import React from 'react';
import { Link } from 'react-router';
// Import can't be in conditional so use require.
// if (process.env.WEBPACK) {
//     require('./AddEmployer.css'); // eslint-disable-line global-require
// }
// import './AddEmployer.css';

if (process.env.WEBPACK) {
  require('../Header/Header.css'); // eslint-disable-line global-require
}

const AddEmployer = () => (
  <div>
    <div className="header">
      <h1 className="header-title">Add Employer</h1>
      <ul className="header-menu">
        <Link to="/">Home</Link>
      </ul>
    </div>
    <div>
      <span>Name</span>
      <input />
    </div>
    <div>
      <span>Corporate Code</span>
      <input />
    </div>
    <div>
      <span>GSTIN</span>
      <input />
    </div>
    <div>
      <span>Pan</span>
      <input />
    </div>
    <div>
      <span>Logo(URL)</span>
      <input />
    </div>
    {/* <div>
      <span>Comapny type</span>
      <select />
    </div>
    <div>
      <span>Logo</span>
      <input><span>URL</span></input>
    </div> */}
  </div>
);

export default AddEmployer;
