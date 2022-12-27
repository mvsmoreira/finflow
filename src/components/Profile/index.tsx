import {
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
  ProfileContainer,
  Subtitle,
  TextContainer,
  Title,
} from './styles'

interface ProfileProps {
  name: string
  email: string
  src: string
}

export const Profile = ({ name, email, src }: ProfileProps) => {
  return (
    <ProfileContainer>
      <TextContainer>
        <Title>{name}</Title>
        <Subtitle>{email}</Subtitle>
      </TextContainer>
      <AvatarContainer>
        <AvatarImage src={src} alt={name} />
        <AvatarFallback delayMs={600} />
      </AvatarContainer>
    </ProfileContainer>
  )
}
