import React, {useState} from 'react';
import {useTable, useFilters,useGlobalFilter, useAsyncDebounce,useSortBy} from 'react-table';

export default function Table({columns, data}) {
  const [filterInput, setFilterInput] = useState('');
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    setGlobalFilter,
    preGlobalFilteredRows,
    state,
    visibleColumns,
   
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    // hook for sorting
    useSortBy,
  );

 // Define a default UI for filtering globally
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 900)

  return (
    <span>
      Search:{' '}
      <input
        value={value  || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter('show.name', value);
    setFilter('show.status', value);
    setFilterInput(value);
  };

  // Render the UI for your table
  return (
    <>
      {/* <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={'Search name'}
      /> */}
      {/* <div
        className="p-1 border-0 d-flex justify-content-end"
      >
        
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }} */}
            {/* Input UI for global filter */}
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
           
    
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sort-desc'
                        : 'sort-asc'
                      : ''
                  }>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
