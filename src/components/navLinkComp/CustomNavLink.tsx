import { NavLink } from 'react-router-dom'
import type { Link } from '../layout/Layout'
interface CustomNavLinkProps {
    link: Link
    getClassName: (isActive: boolean) => string,
}

function CustomNavLink({ link, getClassName  }: CustomNavLinkProps) {
    return (
        <NavLink
            to={link.path}
            key={link.name}
            className={({ isActive }: { isActive: boolean }) =>
                getClassName(isActive)
            }
        >
            {link.icon}
            <p>{link.name}</p>
        </NavLink>
    )
}

export default CustomNavLink
