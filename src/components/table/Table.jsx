import React from "react";
import "./table.css";

const Table = ({ rows, data }) => {
  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            {rows.map((rowHeaderItems) => (
              <th key={rowHeaderItems?.index}>
                <div>{rowHeaderItems?.title}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataItem, index) => (
            <tr key={dataItem?.id}>
              {rows.map((row) => (
                <td key={row.index}>{row.render(dataItem)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
