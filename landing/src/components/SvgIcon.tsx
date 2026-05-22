import type { ComponentType, SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export function SvgIcon({ icon: Icon, ...props }: Props) {
  return <Icon {...props} />;
}
