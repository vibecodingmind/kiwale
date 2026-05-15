'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => {
          setVisible(false)
        }, 500)
      }, 800)
    }

    // If the page is already loaded (e.g. client navigation), dismiss quickly
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  if (!visible) return null

  return (
    <div id="preloader" className={fadeOut ? 'fade-out' : ''}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="preloader-ring" />
        <img
          src="/favicon-64.png"
          alt="Loading..."
          width={64}
          height={64}
        />
      </div>
    </div>
  )
}
