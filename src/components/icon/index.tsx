import React from "react";

export interface IconProps {
   type: string,
}

class Icon extends React.Component<IconProps> {
   
   constructor(props: IconProps) {
      super(props);
      this.state = {};
    }

   render () {
      const { type } = this.props;
      return (
         <i className={ `iconfont poi-${type}` } />
      )
   }
}
export default Icon;
