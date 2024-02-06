import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";


import { Menu } from "antd";
import { useNavigate } from "react-router";

function SideMenu(){
    const navigate= useNavigate()
    return <div className='SideMenu'>
        <Menu 
        onClick={(items)=>{
            //item.key
            navigate(items.key);
        }}
        items={[
            {
                label:"Dashboard",
                icon:<AppstoreOutlined/>,
                key:"/",
            },
            {
                label:"Inventory",
                key:"/inventory",
                icon:<ShopOutlined/>
            },
            {
                label:"Orders",
                key:"/orders",
                icon:<ShoppingCartOutlined/>
            },{
                label:"Customers",
                key:"/customers",
                icons:<UserOutlined/>
            }
        ]}>

        </Menu>
    </div>;
}
export default SideMenu;