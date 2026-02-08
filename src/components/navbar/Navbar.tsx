import { useTheme } from "../theme-provider"

export const NavigationMenu = () => {

  const { theme } = useTheme()

  const isDarkMode = ['system', 'dark'].includes(theme)

  return (
    <nav>
      <ul className={`${isDarkMode ? 'text-white' : 'text-black'} flex items-center gap-6`}>
        <li className="flex items-center gap-1.5">
          <a href="/">
            <img src={`src/assets/svg/${isDarkMode ? 'Portfolio_Logo_Dark_Mode.svg': 'Portfolio_Logo_Light_Mode.svg'}`} alt="Logo" className="w-10 h-10" />
          </a>
          <a href="/" className="hover:text-gray-400">Cedric Castro</a>
        </li>
      </ul>
    </nav>
  )
}
