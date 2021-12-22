import _ from "lodash";
import React from "react";
import { useTable } from "react-table";
import Cell from "./cell";
import data from '../data/alphabet.json'

const DATA = data

const Table = ({isPracticing}) => {
  const fullTable = React.useMemo(
    () =>
      DATA.map((d) => ({
        c1: d[0],
        c2: d[1],
        c3: d[2],
        c4: d[3],
      })),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Capital",
        accessor: "c1",
      },
      {
        Header: "Lower",
        accessor: "c2",
      },
      {
        Header: "Name",
        accessor: "c3",
      },
      {
        Header: "Sound",
        accessor: "c4",
      },
    ],
    []
  );
  const getPracticeSet = () => _.shuffle(DATA).map((d) => {
    return {
        c1: d[0],
        c2: d[1],
        c3: d[2],
        c4: d[3],
      }})

  const data = isPracticing ? getPracticeSet() : fullTable;
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          let visibleRowIndex = _.random(0,3)
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id} >
              {row.cells.map((cell, i) => {
                const text = cell.render("Cell")
                return (
                  <Cell
                    text={text}
                    key={i}
                    isPracticing={isPracticing}
                    visibleIndex={visibleRowIndex}
                    index={i}
                    props={cell.getCellProps()}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
