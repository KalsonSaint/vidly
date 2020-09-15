import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ columns, sortColumn, handleSort, data }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
