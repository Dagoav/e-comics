import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { getLogin, verifyToken } from "../../redux/actions";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginJWT() {
  const dispatch = useDispatch();
  const user = useRef()
  const password = useRef()

  const handleValues = () => {
    let body = {
      "email": user.current.value,
      "password": password.current.value
    }
    console.log(body);
    dispatch(getLogin(body))
  }

  return (
    <>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={user} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={password} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={handleValues} >
          Submit
        </Button>
      </Form>
      <button onClick={() => dispatch(verifyToken())}> headers</button>
    </>
  );
}

export default LoginJWT;