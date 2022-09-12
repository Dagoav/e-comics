import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from '../login/login';
import Register from '../../components/login/Register';




function Tabslogin() {
  return (
    <div className='tabs-login'>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 "
      >
        <Tab eventKey="home" title="Home">
          <Login />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Register />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Tabslogin;