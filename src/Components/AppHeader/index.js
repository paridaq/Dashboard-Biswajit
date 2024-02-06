import{Image, Typography,Space} from "antd";
import {BellFilled,MailOutlined} from "@ant-design/icons";

function AppHeader(){
    return <div className='AppHeader'>
     <Image
     width={40} 
     src="https://stock.adobe.com/in/images/black-b/76297516">
     
     </Image>
     <Typography.Title> Biswajit's Dashboard</Typography.Title>
     <Space>
        <MailOutlined style ={{ fontsize:24}}/>
        <BellFilled style={{fontsize:24}}/>
     </Space>
    </div>
}
export default AppHeader;