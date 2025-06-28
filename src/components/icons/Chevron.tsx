import { Colors } from "../../constants/colors"
import type { IconProps } from "./types"

const Chevron = ({
  width = '24px',
  height = '14px',
  color = Colors.WHITE
}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14L24 1.7193L22.32 0L12 10.5614L1.68 0L0 1.7193L12 14Z" fill={color} />
    </svg>
  )
}

export default Chevron