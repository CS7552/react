import React, { useMemo } from 'react';
import './App.css';
import { useTable,useGlobalFilter,useSortBy } from 'react-table';
import { COLUMNS } from './TableComponent/Column'
import MockData from './TableComponent/Tabledata.json'
import GlobalFilteringInput from './TableComponent/Globalfiltering'
export const App = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MockData, []);
    const {
        getTableProps, getTableBodyProps, headerGroups,footerGroups, rows, prepareRow,state,setGlobalFilter
    } = useTable({columns,data},useGlobalFilter,useSortBy);

    const {globalFilter} = state;
    return (
        <>
            <h1>React Table</h1>
            <GlobalFilteringInput filter={globalFilter} setFilter={setGlobalFilter} />
            <table id='customers' {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroups)=>(
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {headerGroups.headers.map((column)=>(
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                <span>{column.isSorted ? (column.isSortedDesc ? <span>&#8593;</span> : <span>&#8595;</span>) : ""}</span>
                            </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps}>
                    {rows.map((row)=>{
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                                })}
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    {footerGroups.map((footerGroup)=>(
                    <tr {...footerGroup.getFooterGroupProps()}>
                        {footerGroup.headers.map((column)=>(
                            <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                        ))}
                    </tr>
                    ))}
                </tfoot>
            </table>
        </>
    )
}

export default App;