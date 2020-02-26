import React from 'react';
import ReactDOM from 'react-dom';
import * as Comp from './components'
import * as DemoComp from './demo'
import './main.scss'

const { Button } = Comp;

const DemoCompConfig: Record<string, React.ReactNode> = {
   'Button': <DemoComp.Button />
}

const Demo = () => {
   const [ selectCom, setSelectCom ] = React.useState('Button');
 
   return (
     <div className="React-Demo">
       {
         Object.keys(Comp).map((key: string) => (
           <React.Fragment key={`Comp-${key}`}>
             {key !== 'default' && (
               <Button className="mr15" type="link" onClick={ () => setSelectCom(key) }>{`组件-${key}`}</Button>
             )}
           </React.Fragment>
         ))
       }
       {
          selectCom !== '' && DemoCompConfig[selectCom]
       }
     </div>
   );
 }


ReactDOM.render(<Demo />, document.getElementById('root'));