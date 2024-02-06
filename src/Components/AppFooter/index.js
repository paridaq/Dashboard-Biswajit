import Typography from "antd/es/typography/Typography";

function AppFooter(){
    return <div className='AppFooter'>
        <Typography.Link href='tel:7608961919'> 7608961919</Typography.Link>
        <Typography.Link href='https://www.google.com' target={"_blank"}> Privecy Policy</Typography.Link>
        <Typography.Link href='https://www.google.com'target={"_blank"}> Terms of Use</Typography.Link>
    </div>
}
export default AppFooter;