import {Space} from "antd"
import './App.css';
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import AppFooter from "./Components/AppFooter";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Space className="SideMenuandPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter/>
      
    </div>
  );
};

export default App;
