import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from '../login/login';
import Register from '../../components/login/Register';




function Tabslogin() {
  return (
    <div className='tabs-login'>
      <Tabs
        defaultActiveKey="login"
        id="uncontrolled-tab-example"
        className="mb-3 "
      >
        <Tab eventKey="login" title="Login">
          <Login />
        </Tab>
        <Tab eventKey="signup" title="Signup">
          <Register />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Tabslogin;