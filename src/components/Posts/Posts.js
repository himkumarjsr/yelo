import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./Posts.css'); // eslint-disable-line global-require
}
const Posts = props => (
  <ul className="Posts">
    {props.posts.map((post, i) =>
      <li key={i} className="Posts-post">
        <span>{post.name}</span>
        <span>{post.corporateCode}</span>
        <span>{post.companyType}</span>
        {post.isActive === 'false' ? <span>In Active</span> : <span>Active</span>}
        {/* <span>{post.document.map((doc, j) => (
          <span key={j}>{doc.type}</span>))}
        </span> */}
        <span><Link to="/addBranch">add Branch</Link></span>
      </li>
)}
  </ul >
  // <table>
  //   <thead>
  //     <tr>
  //       <th>Name</th>
  //       <th>Corporate Code</th>
  //       <th>Company type</th>
  //       <th>Status</th>
  //       <th>Document</th>
  //       <th>Branch</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {props.posts.map((post, i) => (
  //       <tr key={i}>
  //         <td>{post.name}</td>
  //         <td>{post.corporateCode}</td>
  //         <td>{post.companyType}</td>
  //         {post.isActive === 'false' && <td>In Active</td>}
  //         {post.isActive === 'true' && <td>Active</td>}
  //         <td>{post.document.map((doc, j) => (
  //           <tr key={j}>{doc.type}</tr>))}
  //         </td>
  //         <td><a>add branch</a></td>
  //       </tr>
  //     ))}
  //   </tbody>
  // </table >
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
