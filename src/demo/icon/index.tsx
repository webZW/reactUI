
import * as React from "react";
import { Icon as ComIcon } from '../../components/index'

const Icon = () => {
   return (
      <div>
         <div className="icons-list">
            <p>基本用法</p>
               <ComIcon className='mr15' type="home" />
               <ComIcon className='mr15' type="user" />
               <ComIcon className='mr15' type="user" spin />
               <ComIcon className='mr15' type="user" rotate={180} />
               <ComIcon className='mr15' type="loading" style={{ fontSize: 28 }} />
         </div>
      </div>
   )
}
export default Icon