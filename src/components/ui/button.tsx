import React from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: 'default' | 'secondary'
  size?: 'sm' | 'icon' | 'default'
  className?: string
}

export function Button({ asChild, variant='default', size='default', className, ...props }: Props) {
  const classes = clsx(
    'inline-flex items-center justify-center font-medium rounded-2xl transition',
    variant === 'default' && 'bg-sky-500 text-white hover:bg-sky-400',
    variant === 'secondary' && 'bg-slate-800 text-slate-200 hover:bg-slate-700',
    size === 'sm' && 'h-8 px-3 text-sm',
    size === 'icon' && 'h-9 w-9',
    size === 'default' && 'h-10 px-4',
    className
  )
  if (asChild) return <a className={classes} {...(props as any)} />
  return <button className={classes} {...props} />
}
