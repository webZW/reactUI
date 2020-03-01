import React from "react";
import { getPrefixCls, classNames } from "../../assets/js/com";
import './index.scss'

export interface BaseIconProps {
   type: string,
	className?: string;
   spin?: boolean,
   rotate?: number;
   prefixCls?: string;
}

export type IconProps = Partial<BaseIconProps & React.HTMLAttributes<any>>;

class Icon extends React.Component<IconProps> {
   
   constructor(props: IconProps) {
      super(props);
      this.state = {};
    }

   render () {
      const { type, className, spin, rotate = 0, style, prefixCls: customizePrefixCls } = this.props;
      const prefixCls = getPrefixCls('icon', customizePrefixCls);
      const classes = classNames(prefixCls, className, 'iconfont', ({
         [`poi-${type}`]: type,
         [`${prefixCls}-spin`]: spin || type === 'loading'
      } as Record<string, any>));

      return (
         <i className={ classes } style={{ transform: `rotate(${rotate}deg)`, ...style }} />
      )
   }
}
export default Icon;
