import * as React from "react";
import { Omit, tuple } from '../_util/type';

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple('circle', 'circle-outline', 'round');
export type ButtonShape = typeof ButtonShapes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
   type?: ButtonType;
   icon?: React.ReactNode;
   shape?: ButtonShape;
   // size?: SizeType;
   loading?: boolean | { delay?: number };
   prefixCls?: string;
   className?: string;
   ghost?: boolean;
   danger?: boolean;
   block?: boolean;
   children?: React.ReactNode;
 }

export type AnchorButtonProps = {
   href: string;
   target?: string;
   onClick?: React.MouseEventHandler<HTMLElement>;
 } & BaseButtonProps &
   Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;
 
 export type NativeButtonProps = {
   htmlType?: ButtonHTMLType;
   onClick?: React.MouseEventHandler<HTMLElement>;
 } & BaseButtonProps &
   Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
 
 export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
 interface ButtonState {
   loading?: boolean | { delay?: number };
   hasTwoCNChar: boolean;
 }
 
class Button extends React.Component<ButtonProps, ButtonState> {
   static defaultProps = {
     loading: false,
     ghost: false,
     block: false,
     htmlType: 'button',
   };

   render() {
    const { children } = this.props;
      return (
         <button>
           { children }
         </button>
      )
   }
};

export default Button;
