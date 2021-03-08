import { FC } from 'react';

import { Name } from 'ui/icon/icon.types';
import { ReactComponent as ILogo } from 'ui/icon/svgs/logo.svg';

interface Props extends React.SVGAttributes<SVGElement> {
  name: Name;
}

const Icon: FC<Props> = ({ name, ...svgProps }) => {
  switch (name) {
    case Name.Logo:
      return <ILogo {...svgProps} />;
    default:
      return null;
  }
};

export { Icon, Name as IconName };
