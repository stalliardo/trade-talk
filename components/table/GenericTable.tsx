import React from 'react';

interface TableProps<T> {
  data: T[];
  headers: string[];
  renderRow: (item: T, index: number) => React.ReactNode;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onView?: (item: T) => void;
}

function GenericTable<T>({ data, headers, renderRow, onEdit, onDelete, onView }: TableProps<T>) {
  return (
    <table className="min-w-full divide-y divide-gray-800">
    <thead className="bg-slate-800 border-b border-custom_border">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            scope="col"
            className="py-3 pl-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {header}
          </th>
        ))}
        {onEdit && (
          <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Edit
          </th>
        )}
        {onDelete && (
          <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Delete
          </th>
        )}
        {onView && (
          <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            View
          </th>
        )}
      </tr>
    </thead>
    <tbody className="bg-custom_secondary">
      {data.map((item, index) => (
        <tr key={index} className='border-b border-custom_border'>
          {renderRow(item, index)}
          {onEdit && (
            <td className="py-4 whitespace-nowrap text-sm font-medium">
              <button
                onClick={() => onEdit(item)}
                className="text-indigo-600 hover:text-indigo-900"
              >
                Edit
              </button>
            </td>
          )}
          {onDelete && (
            <td className="py-4 whitespace-nowrap text-sm font-medium">
              <button
                onClick={() => onDelete(item)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          )}
          {onView && (
            <td className="py-4 whitespace-nowrap text-sm font-medium">
              <button
                onClick={() => onView(item)}
                className="text-blue-600 hover:text-blue-900"
              >
                View
              </button>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
  );
}

export default GenericTable;
