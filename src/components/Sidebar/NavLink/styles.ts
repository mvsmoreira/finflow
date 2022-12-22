import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink) <NavLinkProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme['gray-800']};
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['gray-300']};
  }

  &.active {
    background: ${(props) => props.theme['$main']};
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem;
  }
`
Link.displayName = 'Link'