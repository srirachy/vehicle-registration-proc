import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const UserPreferences = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   

  return (
    <>
     <main className="container">

      <h3 align="center">User Account</h3>
     

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Preferences</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
        <h4>Overview</h4>
        
        <h4>User Account</h4>

        <h4>Privacy</h4>
          
          
        </Offcanvas.Body>
      </Offcanvas>
     
    <div class="card text-bg-secondary w-75 mb-3">
    <div class="card-body">
    
    <Button variant="btn-secondary" className="btn" onClick={handleShow}>
      Preferences
      </Button>

    <h5 class="card-title">User Account Info</h5>
    <p class="card-text">Update your user information.</p>
    <div className="mb-2 d-flex justify-content-center">
        <form>
            <div className="mb-3">
                <label for="name" className="form-label">Name: </label>
                <input type="text" className="form-control" name="name" id="name" rows="9" required/>
            </div>

            <div className="mb-3">
                <label for="address" className="form-label">Address: </label>
                <input type="text" className="form-control" name="address" id="address" rows="9" required/>
            </div>

            <div className="mb-3">
                <label for="phone" className="form-label">Contact Number: </label>
                <input type="text" className="form-control" name="phone" id="phone" rows="9" required/>
            </div>
    
            <div className="mb-3">
                <label for="email" className="form-label">Email: </label>
                <input type="email" className="form-control" name="email" id="email" rows="9" required/>
           
                </div>
                <div className="mb-3">
                      <button type="submit" className="btn btn-primary">Update Info</button>
                  </div>
               
            </form>
      </div>
  </div>
  </div>
  <div class="card text-bg-secondary w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">Username and Password Reset:</h5>
    <div className="mb-3 d-flex justify-content-center">
    <form>
            <div className="mb-3">
                <label for="name" className="form-label">Username: </label>
                <input type="text" className="form-control" name="name" id="name" rows="9"/>
            </div>

            <div className="mb-3">
                <label for="name" className="form-label">Password: </label>
                <input type="text" className="form-control" name="name" id="name" rows="9" required/>
            </div>

            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>

      </form>
      </div>
   </div>
    </div>
      </main>

    </>
  );
}
 
export default UserPreferences;