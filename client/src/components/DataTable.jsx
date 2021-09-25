import React from "react";
import styled from "styled-components";
import { useTable, useSortBy, usePagination } from "react-table";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export function Table({ columns, data }) {
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable(
  //     {
  //       columns,
  //       data,
  //     },
  //     useSortBy
  //   );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  // const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <Styles>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaArrowDown />
                        ) : (
                          <FaArrowUp />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select>
        </div>
      </Styles>
      <br />
      {/* <div>Showing the first 20 results of {rows.length} rows</div> */}
    </>
  );
}

const Styles = styled.div`
  padding: 1rem;

  min-width: 100%;
  width: 100%;
  table {
    border-spacing: 0;
    background-color: #ffffff;
    border-radius: 15px;
    overflow: hidden;
    //shadow
    box-shadow: 0px 0px 20px #2020204c;
    thead {
      //center text
      transition: all 0.3s ease;
      text-align: center;
      background-color: #7597f5;
      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }
    }

    th {
      padding: 15px;
      color: white;
      //font poppins-regular
      font-family: "Poppins", sans-serif;
      font-size: 1.2rem;
    }
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #e0e0e0;

      color: #585858;
      font-family: sans-serif;
      :last-child {
        border-right: 0;
      }
    }
  }
  .pagination {
    padding: 0.5rem;
    button {
      background: none;
      border: none;
      padding: 0;

      font-size: 1.2rem;
      color: #5d76bb;
      cursor: pointer;
      margin: 0 0.2rem;
      :focus {
        outline: none;
      }
    }
    select {
      background: none;
      border: none;
      font-size: 1.2rem;
      color: #5d76bb;
      cursor: pointer;
      margin: 0 0.2rem;
      :focus {
        outline: none;
      }
    }
  }
`;
