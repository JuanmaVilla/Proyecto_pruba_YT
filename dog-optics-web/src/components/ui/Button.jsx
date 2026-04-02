export function Button({ children, href, variant = 'primary', size = 'md', className = '' }) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pawpurple focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-pawpurple text-white hover:bg-pawpurple-dark shadow-lg hover:shadow-pawpurple/40 hover:scale-105 active:scale-100',
    outline:
      'border-2 border-pawpurple text-pawpurple hover:bg-pawpurple hover:text-white hover:scale-105',
    ghost: 'text-pawpurple hover:bg-pawlavender',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return <button className={classes}>{children}</button>
}
