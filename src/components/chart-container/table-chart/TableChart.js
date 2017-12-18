import React, { Component } from "react";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./table-chart-custom.scss";

class TableChart extends Component {
  render() {
    return (
      <div>
        <h2>Table chart</h2>
        <table>
          <thead>
            <tr>
              <th className="first-column">Indikaattori</th>
              <th className="header-rotate-90">
                <p className="header-label">Mustikkasato</p>
              </th>
              <th className="header-rotate-90">
                <p className="header-label">Hiilinielu</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hakkuukertymä</td>
              <td>0.58</td>
              <td>0.58</td>
            </tr>
            <tr>
              <td>Lahopuu</td>
              <td>0.58</td>
              <td>0.58</td>
            </tr>
            <tr>
              <td>Mustikkasato</td>
              <td>0.58</td>
              <td>0.58</td>
            </tr>
            <tr>
              <td>Putkilokasvit</td>
              <td>0.58</td>
              <td>0.58</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableChart;
