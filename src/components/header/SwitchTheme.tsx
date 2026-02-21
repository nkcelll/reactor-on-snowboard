import icons from "@/assets/icons"
import { useState, useEffect } from "react"

export default function SwitchTheme() {
  const IconSun = icons.IconSun
  const IconDarkMoon = icons.IconDarkMoon

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  },[darkMode])

  return (
    <button onClick={() => setDarkMode(prev => !prev)}>
      {darkMode ? <IconSun /> : <IconDarkMoon/>}
    </button>
  )
}