import React from "react";
import { getPrefixCls, classNames } from "../../assets/js/com";
import './index.scss'

export interface IconProps {
   type: string,
	className?: string;
   spin?: false,
	prefixCls?: string;
}

class Icon extends React.Component<IconProps> {
   
   constructor(props: IconProps) {
      super(props);
      this.state = {};
    }

   render () {
      const { type, className, spin, prefixCls: customizePrefixCls } = this.props;
      const prefixCls = getPrefixCls('icon', customizePrefixCls);
      const classes = classNames(prefixCls, className, 'iconfont', ({
         [`poi-${type}`]: type,
         [`${prefixCls}-spin`]: spin || type === 'loading'
      } as Record<string, any>));

      return (
         <i className={ classes } />
      )
   }
}
export default Icon;
