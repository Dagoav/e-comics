import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from '../login/login';
import Register from '../../components/login/Register';
//import './Tabslogin.css'



function Tabslogin() {
  return (
    <Tabs
      // defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="d-flex flex-row align-items-center mb-4 "
    >
    
      <Tab eventKey="Login" title="Login">
        <Login/>
      </Tab>
      <Tab eventKey="Registro" title="Registro">
        <Register />
      </Tab>

    </Tabs>
  );
}

export default Tabslogin;