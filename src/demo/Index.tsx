import React from 'react';
import * as Comp from '../components/index'

const { Button } = Comp;
console.log(Object.keys(Comp));

const Demo = () => {
  return (
    <div className="Demo">
      {
        Object.keys(Comp).map((key: string) => (
          <React.Fragment key={ `Comp-${key}` }>
            { key !== 'default' && (
              <p >{ `组件-${key}` }</p>
            )  }
          </React.Fragment>
        ))
      }
      <Button type="primary">Primary</Button>
    <Button type="link">Link</Button>
    </div>
  );
}



export default Demo;
