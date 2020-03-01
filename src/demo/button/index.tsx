
import * as React from "react";
import { Button as ComButton, Icon } from '../../components/index'

const Button = () => {
   const [ size, setSize ] = React.useState(('large' as "large" | "small" | "default" | "middle" | undefined));
   const [ loadingConfig, setLoadingConfig ] = React.useState({
      loading: false,
      iconLoading: false,
   })

   const changeLoading = (type: string) => {
      let config = JSON.parse(JSON.stringify(loadingConfig));
      config[type] = !(loadingConfig as Record<string, boolean>)[type];
      console.log(config);
      setLoadingConfig(config); 
   }
   
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
               
               <ComButton.Group size={size}>
                  <ComButton type="primary"  onClick={ () => setSize('large') }>
                     <Icon type="left" />
                     large
                  </ComButton>
                  <ComButton type="primary" onClick={ () => setSize('default') }>
                     default
                  </ComButton>
                  <ComButton type="primary" onClick={ () => setSize('small') }>
                     small
                     <Icon type="right" />
                  </ComButton>
               </ComButton.Group>
            </div>
            <br />
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

         <div className="pb15">
            <p>按钮组合</p>
            <h4>Basic</h4>
            <ComButton.Group className="mr15">
               <ComButton>Cancel</ComButton>
               <ComButton>OK</ComButton>
            </ComButton.Group>
            <ComButton.Group className="mr15">
               <ComButton disabled>L</ComButton>
               <ComButton disabled>M</ComButton>
               <ComButton disabled>R</ComButton>
            </ComButton.Group>
            <ComButton.Group className="mr15">
               <ComButton>L</ComButton>
               <ComButton>M</ComButton>
               <ComButton>R</ComButton>
            </ComButton.Group>

            <h4>With Icon</h4>
            <ComButton.Group className="mr15">
               <ComButton type="primary">
               <Icon type="left" />
               Go back
               </ComButton>
               <ComButton type="primary" className="mr15">
               Go forward
               <Icon type="right" />
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
         <div className="pb15">
            <p>不可用状态</p>
            <ComButton type="primary" className="mr15">Primary</ComButton>
            <ComButton type="primary" disabled>
               Primary(disabled)
            </ComButton>
            <br />
            <br />
            <ComButton className="mr15">Default</ComButton>
            <ComButton disabled>Default(disabled)</ComButton>
            <br />
            <br />
            <ComButton type="dashed" className="mr15">Dashed</ComButton>
            <ComButton type="dashed" disabled>
               Dashed(disabled)
            </ComButton>
            <br />
            <br />
            <ComButton type="link" className="mr15">Link</ComButton>
            <ComButton type="link" disabled>
               Link(disabled)
            </ComButton>
            <br />
            <br />
            <div style={{ padding: '8px', background: 'rgb(190, 200, 200)' }}>
               <ComButton ghost className="mr15">Ghost</ComButton>
               <ComButton ghost disabled>
               Ghost(disabled)
               </ComButton>
            </div>
         </div>

         <div className="pb15">
            <p>加载中状态</p>
            <ComButton className="mr15" type="primary" loading>
               Loading
            </ComButton>
            <ComButton type="primary" size="small" loading>
               Loading
            </ComButton>
            <br />
            <br />
            <ComButton className="mr15" type="primary" loading={loadingConfig.loading} onClick={() => changeLoading('loading')}>
               Click me!
            </ComButton>
            <ComButton
               type="primary"
               icon="poweroff"
               loading={loadingConfig.iconLoading}
               onClick={() => changeLoading('iconLoading')}
            >
               Click me!
            </ComButton>
            <br />
            <br />
            <ComButton className="mr15" type="primary" loading />
            <ComButton className="mr15" type="primary" shape="circle" loading />
            <ComButton type="danger" shape="round" loading />
            </div>
            <div style={{ background: 'rgb(190, 200, 200)', padding: '15px' }}>
               <p>幽灵按钮</p>
               <ComButton className="mr15" type="primary" ghost>
                  Primary
               </ComButton>
               <ComButton className="mr15" ghost>Default</ComButton>
               <ComButton className="mr15" type="dashed" ghost>
                  Dashed
               </ComButton>
               <ComButton className="mr15" type="danger" ghost>
                  danger
               </ComButton>
               <ComButton type="link" ghost>
                  link
               </ComButton>
            </div>

            <div>
               <p>block 按钮</p>
               <ComButton className="mb10" type="primary" block>
                  Primary
               </ComButton>
               <ComButton className="mb10" block>Default</ComButton>
               <ComButton className="mb10" type="dashed" block>
                  Dashed
               </ComButton>
               <ComButton className="mb10" type="danger" block>
                  Danger
               </ComButton>
               <ComButton className="mb10" type="link" block>
                  Link
               </ComButton>
            </div>
         </div> 
   )
}
export default Button