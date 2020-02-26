
import * as React from "react";
import { Button as ComButton } from '../../components/index'

class Button extends React.Component<any> {

	public render() {
      return (
         <div>
            <div className="pb15">
               <p>按钮类型</p>
               <ComButton className="mr15" onClick={ () => console.log('btn-test') } >Default</ComButton>
               <ComButton className="mr15" type="primary">Primary</ComButton>
               <ComButton className="mr15" type="dashed">Dashed</ComButton>
               <ComButton className="mr15" type="danger">Danger</ComButton>
               <ComButton className="mr15" type="link">Link</ComButton>
            </div>
            <div>
               <p>图标按钮</p>
               <ComButton className="mr15" type="primary" shape="circle" icon="search" />
               <ComButton className="mr15" type="primary" shape="circle">
               A
               </ComButton>
               <ComButton className="mr15" type="primary" icon="search">
               Search
               </ComButton>
               <ComButton className="mr15" shape="circle" icon="search" />
               <ComButton className="mr15" icon="search">Search</ComButton>
               <br />
               <ComButton className="mr15" shape="circle" icon="search" />
               <ComButton className="mr15" icon="search">Search</ComButton>
               <ComButton className="mr15" type="dashed" shape="circle" icon="search" />
               <ComButton className="mr15" type="dashed" icon="search">Search</ComButton>
            </div>
         </div>
      )
   }
}
export default Button