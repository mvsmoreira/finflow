import styled from 'styled-components'
import * as Avatar from '@radix-ui/react-avatar'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  margin-left: auto;
`
ProfileContainer.displayName = 'ProfileContainer'

export const TextContainer = styled.div`
  text-align: right;
  margin-right: 1rem;

  @media (max-width: 1024px) {
    display: none;
  }
`
TextContainer.displayName = 'TextContainer'

export const Title = styled.p`
  color: ${(props) => props.theme['gray-800']};
`
Title.displayName = 'Title'

export const Subtitle = styled.div`
  color: ${(props) => props.theme['gray-500']};
  font-size: 0.8rem;
`
Subtitle.displayName = 'Subtitle'

export const AvatarContainer = styled(Avatar.Root)`
  border-radius: 9999px;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  overflow: hidden;
`
AvatarContainer.displayName = 'AvatarContainer'

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`
AvatarImage.displayName = 'AvatarImage'

export const AvatarFallback = styled(Avatar.Fallback)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-800']};

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
AvatarFallback.displayName = 'AvatarFallback'
