import { forwardRef, ReactNode } from "react"
import { NavLinkProps as RouterNavLinkProps } from "react-router-dom"
import { Link } from "./styles"

type Ref = HTMLAnchorElement

interface NavLinkProps extends RouterNavLinkProps {
  children?: ReactNode,
}

export const NavLink = forwardRef<Ref, NavLinkProps>(({ to, title, children }, ref) => {
  return (
    <Link
      ref={ref}
      to={to}
      className={({ isActive }) => isActive ? "active" : ""}
    >
      {children}
      {title}
    </Link>
  )
})