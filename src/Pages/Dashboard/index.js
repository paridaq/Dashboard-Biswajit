import{Typography,Space,Card, Statistic,Table} from 'antd';
import {ShoppingCartOutlined,DollarCircleOutlined,UserOutlined,ShoppingOutlined} from "@ant-design/icons"
import { icons } from 'antd/es/image/PreviewGroup';
import { useEffect,useState } from 'react';
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Dashboard(){
return(<Space size={20} direction='vertical'>
    <Typography.Title level={3}> Dashboard</Typography.Title>
    <Space direction='horizontal'>
        <Card>
            <Space direction='horizontal'>
            <DashboardCard icon={<ShoppingCartOutlined
             style={{color:'green',
             backgroundColor:'black',
             borderRadius:20,
             fontSize:24,
             padding:8,
            }}/>}
            title={"Orders"}
            value={12345}/>
            <DashboardCard  icon={<ShoppingOutlined style={{
            color:'green',
            backgroundColor:'black',
            borderRadius:20,
            fontSize:24,
            padding:8,
            }}
            />}
             title={"Inventory"}
             value={12345}/>
            <DashboardCard  icon={<UserOutlined style
            ={{color:'green',
            backgroundColor:'black',
            borderRadius:20,
            fontSize:24,
            padding:8,}}
            />}
            title={"Customer"}
            value={12345}/>
            <DashboardCard  icon={<DollarCircleOutlined style
            ={{color:'green',
            backgroundColor:'black',
            borderRadius:20,
            fontSize:24,
            padding:8,}}
            />}
            title={"Revenue"}
            value={12345}/>
            </Space>
        </Card>

    </Space>
    <Space>
        <RecentOrders/>
        <DashboardChart/>
    </Space>
</Space>);
}
function DashboardCard({title,value,icon}) {
    return (
        <Card>
        <Space direction='horizontal'>
        {icon}
        <Statistic title = {title} value={value}/>
        </Space>
    </Card>

    )
}
function RecentOrders(){
    const[dataSource,setDataSource,] = useState([])
    const[loading,setLoading,] = useState(false)
    useEffect(() => {
        setLoading(true);
        getOrders().then((res)=> {
          setDataSource(res.products.splice(0,3));
          setLoading(false);
        });
      }, []);
    
    return (
    <>
    <Typography.Text>Recent Orders </Typography.Text>
    <Table
    columns={[{
        title:'title',
        dataIndex:'title'
    },
     {
        title:'Quantity',
        dataIndex:'quantity'
    },
    {
        title:'Price',
        dataIndex:'discountedPrice',
    },]}
    loading={loading}
    dataSource={dataSource}
    pagination={false}
    >

    </Table>
    </>
    )
}

function DashboardChart() {
    const [reveneuData, setReveneuData] = useState({
      labels: [],
      datasets: [],
    });
  
    useEffect(() => {
      getRevenue().then((res) => {
        const labels = res.carts.map((cart) => {
          return `User-${cart.userId}`;
        });
        const data = res.carts.map((cart) => {
          return cart.discountedTotal;
        });
  
        const dataSource = {
          labels,
          datasets: [
            {
              label: "Revenue",
              data: data,
              backgroundColor: "rgba(255, 0, 0, 1)",
            },
          ],
        };
  
        setReveneuData(dataSource);
      });
    }, []);
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Order Revenue",
        },
      },
    };
  
    return (
      <Card style={{ width: 500, height: 250 }}>
        <Bar options={options} data={reveneuData} />
      </Card>
    );
  }
export default Dashboard;