import React from "react";
import "./table.css";

const Table = ({ rows, data }) => {

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
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
            {data.map((dataItem) => (
              <tr key={dataItem?.id}>
                {rows.map((row) => (
                  <td key={row.index}>{row.render(dataItem)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;