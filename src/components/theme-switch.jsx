import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from '../context/themeContext'
import { Button } from '../components/ui/button'
import { useEffect } from 'react'

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        const themeColor = theme === 'dark' ? '#020817' : '#EBEBEB'
        const metaThemeColor = document.querySelector("meta[name='theme-color']")
        metaThemeColor && metaThemeColor.setAttribute('content', themeColor)
    }, [theme])

    return (
        <Button
            size='icon'
            variant='ghost'
            className='rounded-full'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? <FaMoon size={20} color='blue' /> : <FaSun size={20} color='gold' />}
        </Button>
    )
}