import IconGitHub from './github';
import IconLinkedIn from './linkedin';

type IconProps = {
  name: string;
};

export default function Icon({ name }: IconProps) {
  console.log({ name })
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedIn />;
    default:
      return null;
  }
}
