import React, { useMemo } from 'react';
import './App.css';
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination, useRowSelect,useColumnOrder } from 'react-table';
import { COLUMNS } from './TableComponent/Column'
import MockData from './TableComponent/Tabledata.json'
import GlobalFilteringInput from './TableComponent/Globalfiltering'
import ColumnFilter from './TableComponent/Columnfiltering'
import Checkbox from './TableComponent/Checkbox';
export const App = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MockData, []);
    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, []);
    const {
        getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage,
        canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize, footerGroups, rows, prepareRow,
        state, setGlobalFilter, selectedFlatRows,setColumnOrder,allColumns,getToggleHideAllColumnsProps
    } = useTable({ 
        columns, data, defaultColumn, initialState: { pageIndex: 1 } }, useFilters, useGlobalFilter,
        useSortBy, usePagination, useRowSelect,useColumnOrder,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return  [
                    {
                        id: 'selection',
                        Header: ({ getToggleAllRowsSelectedProps }) => (
                            <Checkbox {...getToggleAllRowsSelectedProps()} />
                        ),
                        Cell: ({row}) => (
                            <Checkbox {...row.getToggleRowSelectedProps()} />
                        )
                    },
                    ...columns
                ]
            })
        }
    );

const { globalFilter } = state;
const { pageIndex, pageSize } = state;
const firstPageRows = rows.slice(0, 10);
const changeColumnOrder = () => {
    setColumnOrder(['id','title','albumId','thumbnailUrl','url'])
}

return (
    <>
        <h1>React Table</h1>
        <GlobalFilteringInput filter={globalFilter} setFilter={setGlobalFilter} />
        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
            {[10, 100, 500, 1000].map((pageSize) => (
                <option value={pageSize} key={pageSize}>Show {pageSize}</option>
            ))}
        </select>
        <button onClick={changeColumnOrder}>Changed column order</button>
        <div>
            <div><Checkbox {...getToggleHideAllColumnsProps()}/> Toggle All</div>
            {
                allColumns.map((column)=>{
                    <div key={column.id}>
                        <label>
                            <input type="checkbox" {...column.getToggleHiddenProps()} />
                            {column.Header}
                        </label>
                    </div>
                })
            }
        </div>
        <table id='customers' {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {headerGroups.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            <label><input type="checkbox" {...column.getToggleHiddenProps()} />{/* {column.Header} */}</label>{column.render('Header')}
                                <span>{column.isSorted ? (column.isSortedDesc ? <span>&#8593;</span> : <span>&#8595;</span>) : ""}</span>
                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps}>
                {firstPageRows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                {footerGroups.map((footerGroup) => (
                    <tr {...footerGroup.getFooterGroupProps()}>
                        {footerGroup.headers.map((column) => (
                            <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                        ))}
                    </tr>
                ))}
            </tfoot>
        </table>
        <div>
            <span>Page{' '} <strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</span>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <span>
                <input type="number" defaultValue={pageIndex + 1} onChange={(e) => { const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0; gotoPage(pageNumber) }} /></span>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
        <pre>
            <code>
                {JSON.stringify(
                    {
                        selectedFlatRows:selectedFlatRows.map((row)=>row.original),
                    },
                    null,
                    2
                )}
            </code>
        </pre>
    </>
)
}

export default App;