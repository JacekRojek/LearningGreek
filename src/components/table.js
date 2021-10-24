import _ from "lodash";
import React from "react";
import { useTable } from "react-table";

const DATA = [
  ["Α", "α", "alpha", "ā", "ǎ"],
  ["Β", "β", "beta", "b"],
  ["Γ", "γ", "gamma", "g"],
  ["Δ", "δ", "delta", "d"],
  ["Ε", "ε", "epsilon", "ēě"],
  ["Ζ", "ζ", "zeta", "dz"],
  ["Η", "η", "eta", "ē"],
  ["Θ", "θ", "theta", "th"],
  ["Ι", "ι", "iota", "ǐ, ī"],
  ["Κ", "κ", "kappa", "k"],
  ["Λ", "λ", "lambda", "l"],
  ["Μ", "μ", "mu", "m"],
  ["Ν", "ν", "nu", "n"],
  ["Ξ", "ξ", "xi", "k"],
  ["Ο", "ο", "omicron", "ǒ"],
  ["Π", "π", "pi", "p"],
  ["Ρ", "ρ", "rho", "r"],
  ["Σ", "σ, ς", "s"],
  ["Τ", "τ", "tau", "t"],
  ["Υ", "υ", "upsilon", "y"],
  ["Φ", "φ", "phi", "fi"],
  ["Χ", "χ", "chi", "x"],
  ["Ψ", "ψ", "psi", "f"],
  ["Ω", "ω", "omega", "ō"],
];

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
    const visibleRowIndex = _.random(0,3)
    console.log(visibleRowIndex)
    return {
        c1: visibleRowIndex === 0 ? d[0] : '',
        c2: visibleRowIndex === 1 ? d[1] : '',
        c3: visibleRowIndex === 2 ? d[2] : '',
        c4: visibleRowIndex === 3 ? d[3] : '',
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
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
