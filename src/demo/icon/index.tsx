
import * as React from "react";
import { Button as ComButton, Icon as ComIcon } from '../../components/index'

const Icon = () => {
   return (
      <div>
         <div className="pb15">
            <p>按钮组合</p>
            <h4>Basic</h4>
            <h4>With Icon</h4>
            <ComButton.Group className="mr15">
               <ComButton type="primary">
               <ComIcon type="left" />
               Go back
               </ComButton>
               <ComButton type="primary" className="mr15">
               Go forward
               <ComIcon type="right" />
               </ComButton>
            </ComButton.Group>
            <ComButton.Group className="mr15">
               <ComButton type="primary" icon="cloud" />
               <ComButton type="primary" icon="cloud-download" />
            </ComButton.Group>
            <ComButton.Group className="mr15">
               <ComButton type="primary" size="small" icon="cloud" />
               <ComButton type="primary" size="small" icon="cloud-download" />
            </ComButton.Group>
         </div>
      </div>
   )
}
export default Icon