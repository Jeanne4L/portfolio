import { Colors } from '../../constants/colors'
import type { IconProps } from './types'

const ArrowIcon = ({
  width = '11px',
  height = '11px',
  color = Colors.WHITE
}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.97899 2.4579L1.38612 2.44341L1.40449 0.780511L10.8229 0.801207L10.8022 10.2196L9.13922 10.2307L9.1537 3.63779L1.97115 10.7888L0.796435 9.60896L7.97899 2.4579Z" fill={color} />
    </svg>
  )
}

export default ArrowIcon