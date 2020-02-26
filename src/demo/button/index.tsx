
import * as React from "react";
import { Button as ComButton } from '../../components/index'

const Button = () => {
   const [ size, setSize ] = React.useState(('large' as "large" | "small" | "default" | "middle" | undefined));
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
         <div className="pb15">
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
            <br />
            <ComButton className="mr15" shape="circle" icon="search" />
            <ComButton className="mr15" icon="search">Search</ComButton>
            <ComButton className="mr15" type="dashed" shape="circle" icon="search" />
            <ComButton className="mr15" type="dashed" icon="search">Search</ComButton>
         </div>

         <div className="pb15">
            <p>按钮尺寸</p>
            <div>
               <ComButton className="mr15" type="primary" onClick={ () => setSize('large') }>large</ComButton>
               <ComButton className="mr15" type="primary" onClick={ () => setSize('default') }>default</ComButton>
               <ComButton className="mr15" type="primary" onClick={ () => setSize('small') }>small</ComButton>
            </div>
            <br />
            {/* <Radio.Group value={size} onChange={this.handleSizeChange}>
               <Radio.Button value="large">Large</Radio.Button>
               <Radio.Button value="default">Default</Radio.Button>
               <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <br /> */}
            <ComButton className="mr15" type="primary" size={size}>Primary </ComButton>
            <ComButton className="mr15" size={size}>Normal</ComButton>
            <ComButton className="mr15" type="dashed" size={size}> Dashed </ComButton>
            <ComButton className="mr15" type="danger" size={size}> Danger</ComButton>
            <ComButton className="mr15" type="link" size={size}>Link </ComButton>
            <br />
            <br />
            <ComButton className="mr15" type="primary" icon="download" size={size} />
            <ComButton className="mr15" type="primary" shape="circle" icon="download" size={size} />
            <ComButton className="mr15" type="primary" shape="round" icon="download" size={size} />
            <ComButton className="mr15" type="primary" shape="round" icon="download" size={size}> Download </ComButton>
            <ComButton className="mr15" type="primary" icon="download" size={size}> Download </ComButton>
         </div>
      </div>
   )
}
export default Button