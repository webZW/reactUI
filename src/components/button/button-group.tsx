import * as React from 'react';
import { SizeType } from '../../assets/js/SizeContext';
import { classNames, getPrefixCls } from '../../assets/js/com';

export interface ButtonGroupProps {
  size?: SizeType;
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
}

const ButtonGroup: React.SFC<ButtonGroupProps> = props => {
      const { prefixCls: customizePrefixCls, size, className, ...others } = props;
      const prefixCls = getPrefixCls('btn-group', customizePrefixCls);

      // large => lg
      // small => sm
      let sizeCls = '';
      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;
        case 'small':
          sizeCls = 'sm';
          break;
        default:
          break;
      }

      const classes = classNames(
        prefixCls,
        ({
          [`${prefixCls}-${sizeCls}`]: sizeCls
        } as Record<string, any>),
        className,
      );

      return <div {...others} className={classes} />;
};

export default ButtonGroup;
