import React from 'react'
import classNames from 'classnames'

export const LoadingBlock: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames('rounded bg-gray-200', className)}>
      {children}
    </div>
  )
}
