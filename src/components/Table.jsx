import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Free</th>
            <th>Basic</th>
            <th>Professional</th>
            <th>Corporate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Getting Access</td>
            <td>
              <button className="signup-btn">Sign Up</button>
            </td>
            <td>
              <button className="paid-btn">Paid</button>
            </td>
            <td>
              <button className="paid-btn">Paid</button>
            </td>
            <td>
              <button className="paid-btn">Paid</button>
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>Free</td>
            <td>USD $/month</td>
            <td>USD $/month</td>
            <td>USD $/month</td>
          </tr>
          <tr>
            <td>API Credits</td>
            <td>/day</td>
            <td>/month</td>
            <td>/month</td>
            <td>/month</td>
          </tr>
          <tr>
            <td>Articles per credit</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Latest News API</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Crypto News API</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>News Archive API</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Historical data</td>
            <td>No</td>
            <td>6 months</td>
            <td>1 Year</td>
            <td>2 Year</td>
          </tr>
          <tr>
            <td>AI Tags</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Sentiments Analysis</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>AI Region</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Real-time article availability</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Email Support</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
