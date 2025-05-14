interface Props {
  className?: string
}

export const EmailIcon = (props: Props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z' />
    <path d='M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z' />
  </svg>
)

export const LockIcon = (props: Props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3' />
  </svg>
)

export const CrossIcon = (props: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M18 6l-12 12' />
    <path d='M6 6l12 12' />
  </svg>
)

export const LoadingIcon = (props: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M12 3a9 9 0 1 0 9 9' />
  </svg>
)

export const PowerIcon = (props: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M7 6a7.75 7.75 0 1 0 10 0' />
    <path d='M12 4l0 8' />
  </svg>
)

export const ToggleRightIcon = (props: Props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M16 9a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824' />
    <path d='M16 5a7 7 0 0 1 0 14h-8a7 7 0 0 1 0 -14zm0 2h-8a5 5 0 1 0 0 10h8a5 5 0 0 0 0 -10' />
  </svg>
)

export const GroupIcon = (props: Props) => (
  <svg
    width='46'
    height='46'
    viewBox='0 0 46 46'
    fill='none'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <rect width='46' height='46' fill='url(#pattern0_12_554)' />
    <defs>
      <pattern id='pattern0_12_554' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <use xlinkHref='#image0_12_554' transform='scale(0.0078125)' />
      </pattern>
      <image
        id='image0_12_554'
        width='128'
        height='128'
        preserveAspectRatio='none'
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
)
