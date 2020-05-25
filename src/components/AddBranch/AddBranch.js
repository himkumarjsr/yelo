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

const AddBranch = () => (
  <div className="header">
    <h1 className="header-title">Add Branch</h1>
    <ul className="header-menu">
      <Link to="/">Home</Link>
    </ul>
  </div>
);

export default AddBranch;
