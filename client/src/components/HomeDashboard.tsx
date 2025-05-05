import React, { useEffect, useState } from 'react';

export default function HomeDashboard() {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (loggedInUser && loggedInUser.name) {
      setUserName(loggedInUser.name);
    }
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container-fluid flex-grow-1 p-4">
        <h2>Hello, {userName || 'User'}</h2>
        <p>Welcome to the admin dashboard. Here you can manage everything related to your employees and your company.</p>

        <div className="row mt-4">
          
          <div className="col-md-6">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title">To Approve</h5>
                <p>5 absence requests</p>
                <p>6 expense reimbursement requests</p>
                <a href="#" className="btn btn-primary">Go to requests</a>
              </div>
            </div>
          </div>

        
          <div className="col-md-6">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title">Upcoming Events</h5>
                <ul>
                  <li>INPS and IRPEF contribution payment deadline: 16/09/2024</li>
                  <li>End of probation period for Luca Monti: 01/12/2024</li>
                  <li>Birthday of Valeria Biondi: 01/01/2025</li>
                  <li>Birthday of Mirco Rossi: 01/02/2025</li>
                </ul>
                <a href="#" className="btn btn-primary">See all</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title">Payroll Overview</h5>

                <h6 className="mt-3">June 2024</h6>
                <p>Employee cash flow: 72,777€</p>
                <p>Total personnel cost: 53,674€</p>

                <h6 className="mt-4">May 2024</h6>
                <p>Employee cash flow: 70,100€</p>
                <p>Total personnel cost: 52,200€</p>
              </div>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title">Who is on vacation today?</h5>
                <p>No one, everyone is present!</p>
                <a href="#" className="btn btn-primary">View the calendar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
