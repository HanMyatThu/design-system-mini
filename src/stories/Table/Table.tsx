import React, { useMemo, useState } from 'react'
import {CheckBox} from '../CheckBox/CheckBox'
import '../../tailwind.css';

interface TableProps {
  id?: string,
  selector: boolean,
  paginator: boolean,
  start? : number,
  count? : number,
  headers: string[],
  data: any[],
  dataKeys: string[]
}

export const Table: React.FC<TableProps> = ({ 
  id,
  selector = true,
  paginator = true,
  start,
  count = 0,
  headers = [],
  data = [],
  dataKeys = []
}) => {
  
  const totalRecords = data.length;  

  const [ pageIndex, setPageIndex] = useState<number>(1)

  const totalPages = useMemo((): number => {
    if(count) {
        return totalRecords / count
    } 
    return 0
  },[totalRecords,count])

  const pagelist = [];

  for (let index: number = 0; index <= totalPages; index++) {
    pagelist.push(<li onClick={() => setPageIndex(index + 1)} className="
        flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {index}
    </li>
    )
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table id={id || 'table'} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {
                        selector && (
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <CheckBox size='medium' color='default' defaultChecked={false} isDisabled={false}/>
                                </div>
                            </th>
                        )
                    }
                    {
                        headers.map((header : string , idx: number) : JSX.Element  => (
                            <th id={`table-header-${idx}`} key={idx} scope="col" className="px-6 py-3">
                                {header}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => {
                        return (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                {
                                    selector && (
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <CheckBox size='medium' color='default' defaultChecked={false} isDisabled={false}/>
                                            </div>
                                        </td>
                                    )
                                }
                                {
                                    dataKeys.map((key: string): JSX.Element => (
                                        <td className="px-6 py-4">
                                            {item[key]}
                                        </td>
                                    ))
                                }
                                { item.action &&(
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                )}
                            </tr>
                        )
                    })
                }
               
            </tbody>
        </table>
        {
            (paginator && start && count ) && (
                <nav className="flex items-center justify-between px-4 py-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing 
                        <span className="font-semibold text-gray-900 dark:text-white">{` ${start} - ${count} `}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalRecords}</span>
                    </span>
                    <ul className="inline-flex -space-x-px text-sm h-8">
                        <li className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Previous
                        </li>
                        {pagelist}
                        <li className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                        </li>
                    </ul>
                </nav>
            )
        }
    </div>

  )
}
