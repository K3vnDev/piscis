interface Props {
  className?: string
}

export const EmailIcon = ({ className }: Props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z' />
    <path d='M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z' />
  </svg>
)

export const LockIcon = ({ className }: Props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3' />
  </svg>
)
