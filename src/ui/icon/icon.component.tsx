import { FC, lazy, Suspense } from 'react';

import { Name } from 'ui/icon/icon.types';

interface Props extends React.SVGAttributes<SVGElement> {
  name: Name;
}

const Icon: FC<Props> = ({ name, ...svgProps }) => {
  const LazyIcon = lazy(
    () => import(`!!@svgr/webpack?-svgo,+titleProp,+ref!./svgs/${name}.svg`)
  );

  return (
    <Suspense fallback={<span className={svgProps.className} />}>
      <LazyIcon {...svgProps} />
    </Suspense>
  );
};

export { Icon, Name as IconName };
