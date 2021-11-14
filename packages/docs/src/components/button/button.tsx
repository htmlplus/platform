import React, { useMemo } from 'react';
import NextLink from 'next/link';
import { PlusSpinner } from '@app/components';
import { router } from '@app/services';
import * as Utils from '@app/utils';
import { ButtonProps } from './button.types';

const Anchor: React.FC<any> = React.forwardRef((props, ref) => {

  const { children, ...args } = props;

  return (
    <a ref={ref} {...args}>
      {children}
    </a>
  )
});

const Link: React.FC<any> = (props) => {

  const { children, params, to, ...attributes } = props;

  const path = useMemo(() => router.path(to, params), [to, params]);

  if (attributes.target === '_blank' && !attributes.rel) {

    attributes.rel = 'noopener noreferrer';
  }

  if (!path) return <Anchor href={to} {...attributes}>{children}</Anchor>;

  return (
    <NextLink href={path} passHref>
      <Anchor {...attributes}>{children}</Anchor>
    </NextLink>
  )
};

export const Button: React.FC<ButtonProps> = (props) => {

  const { block, children, color, disabled, icon, link, loading, outlined, size = 'md', text, ...args } = props;

  const classes = Utils.classes(
    'button',
    { block, color, disabled, icon, link, loading, outlined, size, text }
  );

  const Tag = args.to ? Link : 'button' as any;

  return (
    <Tag className={classes} disabled={disabled} {...args}>
      {!loading && children}
      {loading && (
        <>
          <span>{children}</span>
          <PlusSpinner className="loading" type="dual-ring" size="sm" /> 
        </>
      )}
    </Tag>
  )
};