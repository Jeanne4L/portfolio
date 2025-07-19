import { useEffect } from "react"
import { useLocation } from "react-router"

const ScrollToAnchor = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }, [hash])

  return null
}

export default ScrollToAnchor