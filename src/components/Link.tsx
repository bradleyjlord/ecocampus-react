import React from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const isExternal = href.startsWith('http') || href.startsWith('https')

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

export default Link
