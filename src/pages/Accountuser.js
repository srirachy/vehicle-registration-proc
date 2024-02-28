const Accountuser = () => {
    return ( 
     <div className="container-fluid">

       <main className="container">
        <div className="deflex align-items-center p-3 my-3 text-black bg-purple rounded shadow-sm">
        <img className="img-fluid rounded mx-auto  d-block" src="img/Mercedes_comm_veh.jpg" alt="cars" width="750" height="255"/>
      
      </div>
      <div className="my-3 p-3 bg-body rounded shadow bg-light">
        <h5 className="border-bottom pb-2 mb-0 text-secondary text-italic">Status Updates</h5>
        <div className="d-flex text-body-secondary pt-3">
          <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
          <p className="pb-3 mb-0 medium lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@user Edward</strong>
             A type of status update. Some registration content, has been updated about their application. The full message is in Notifications.
          </p>
        </div>
        <div className="d-flex text-body-secondary pt-3">
          <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"/><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
          <p className="pb-3 mb-0 medium lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@user Edward</strong>
            Another type of status update. Some registration content, has been updated about their account details. The full message is in Notifications.
          </p>
        </div>
        <medium className="d-block text-left mt-3">
          <a href="#">All updates</a>
        </medium>
       </div>
      </main>
     
    </div>
    
     );
}
 
export default Accountuser;