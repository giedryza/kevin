import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  id: string;
}

export const Portal: FC<Props> = ({ id, children }) => {
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    const el = document.getElementById(id);

    setElement(el);
  }, [id]);

  return element ? createPortal(children, element) : null;
};
