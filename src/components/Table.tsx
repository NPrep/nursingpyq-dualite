import React from 'react';

interface TableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  title?: string;
}

export default function Table({ headers, rows, title }: TableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      {title && <h4 className="text-lg font-semibold mb-2 text-gray-800">{title}</h4>}
      <table className="w-full border-collapse text-sm text-left border border-gray-300">
        <thead className="bg-primary text-white">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="px-4 py-3 font-semibold border-r border-yellow-600 last:border-r-0 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-gray-200 hover:bg-gray-50">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 border-r border-gray-200 last:border-r-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
