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
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
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
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
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
    <path d='M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
    <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
    <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    <path d='M21 21v-2a4 4 0 0 0 -3 -3.85' />
  </svg>
)

export const BellIcon = (props: Props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z' />
    <path d='M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z' />
  </svg>
)

export const ChatBubbleIcon = (props: Props) => (
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
    <path d='M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1' />
  </svg>
)

export const HomeIcon = (props: Props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z' />
  </svg>
)

export const PCIcon = (props: Props) => (
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
    <path d='M3 5h6v14h-6z' />
    <path d='M12 9h10v7h-10z' />
    <path d='M14 19h6' />
    <path d='M17 16v3' />
    <path d='M6 13v.01' />
    <path d='M6 16v.01' />
  </svg>
)

export const PlusIcon = (props: Props) => (
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
    <path d='M12 5l0 14' />
    <path d='M5 12l14 0' />
  </svg>
)

export const ChevronIcon = (props: Props) => (
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
    <path d='M15 6l-6 6l6 6' />
  </svg>
)

export const CalendarIcon = (props: Props) => (
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
    <path d='M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
    <path d='M16 3l0 4' />
    <path d='M8 3l0 4' />
    <path d='M4 11l16 0' />
    <path d='M8 15h2v2h-2z' />
  </svg>
)

export const InfoIcon = (props: Props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z' />
  </svg>
)

export const UserIcon = (props: Props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z' />
    <path d='M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z' />
  </svg>
)

export const SpeakerIcon = (props: Props) => (
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
    <path d='M18 8a3 3 0 0 1 0 6' />
    <path d='M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5' />
    <path d='M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8' />
  </svg>
)

export const TrashIcon = (props: Props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z' />
    <path d='M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z' />
  </svg>
)
