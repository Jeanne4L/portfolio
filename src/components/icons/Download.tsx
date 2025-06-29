import { Colors } from '../../constants/colors'
import type { IconProps } from './types'

const DownloadIcon = ({
  width = '24px',
  height = '24px'
}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24Z" fill={Colors.BLACK} />
      <path d="M11.9998 6V12.6M9.59982 10.8L11.1514 12.3516C11.551 12.7512 11.7514 12.9516 11.9998 12.9516C12.2482 12.9516 12.4486 12.7512 12.8482 12.3516L14.3998 10.8M8.38782 16.8H15.5878" stroke={Colors.WHITE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default DownloadIcon