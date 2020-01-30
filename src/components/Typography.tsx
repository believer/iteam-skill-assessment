import React from 'react'
import classNames from 'classnames'

export const H1: React.FC = ({ children }) => {
  return <h1 className="font-header text-3xl">{children}</h1>
}

export const H2: React.FC = ({ children }) => {
  return <h2 className="font-header text-xl">{children}</h2>
}

export const Paragraph: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <p className={classNames('leading-loose', className)}>{children}</p>
}
