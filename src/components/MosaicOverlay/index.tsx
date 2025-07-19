import { Container, Pixel } from "./styles"

const MosaicOverlay = () => {
  const grid = Array.from({ length: 16 }, (_, i) => {
    const row = Math.floor(i / 4)
    const col = i % 4
    const isWhite = (row % 2 === 0 && col % 2 === 0) || (row % 2 === 1 && col % 2 === 1)
    return <Pixel isWhite={isWhite} key={`mosaic-pixel-${i}`} />
  })

  return <Container>{grid}</Container>
}

export default MosaicOverlay