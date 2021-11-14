import { Colors } from "@app/types";
export interface ButtonProps {
  block?: boolean;
  color?: Colors;
  disabled?: boolean;
  icon?: boolean;
  link?: boolean | 'underline';
  loading?: boolean;
  outlined?: boolean;
  params?: object;
  size?: 'sm' | 'md' | 'lg';
  target?: string;
  text?: boolean;
  title?: string;
  to?: string;
  onClick?: any;
}