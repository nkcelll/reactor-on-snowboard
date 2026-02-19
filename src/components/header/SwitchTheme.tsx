import IconDarkMoon from "../../assets/icons/IconDarkMoon"
import IconSun from "../../assets/icons/IconSun"
import { useState, useEffect } from "react"

export default function SwitchTheme() {
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