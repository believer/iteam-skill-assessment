import React from 'react'

export const Table: React.FC = ({ children }) => {
  return <table className="w-full">{children}</table>
}

export const TableBody: React.FC = ({ children }) => {
  return <tbody>{children}</tbody>
}

export const TableRow: React.FC = ({ children }) => {
  return <tr className="even:bg-gray-100">{children}</tr>
}

export const TableCell: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <td className={className}>{children}</td>
}
