import React from 'react';

interface TableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  title?: string;
}

export default function Table({ headers, rows, title }: TableProps) {
  return (
    <div className="my-8 table-scroll overflow-x-auto rounded-[12px] border border-[var(--border)]">
      {title && <h4 className="text-lg font-semibold mb-2 text-[var(--text-primary)] px-4 pt-4">{title}</h4>}
      <table className="w-full border-separate border-spacing-0 text-sm text-left">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="bg-[var(--primary-dark)] px-4 py-3 font-semibold text-white whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-[var(--bg-light)]'}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-[var(--text-secondary)]">
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
