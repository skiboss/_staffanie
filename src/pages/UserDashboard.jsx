import React from 'react'

function UserDashboard() {
  return (
    <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                      <svg className="bi"><use xlink:href="#house-fill"></use></svg>
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#file-earmark"></use></svg>
                      Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#cart"></use></svg>
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#people"></use></svg>
                      Customers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#graph-up"></use></svg>
                      Reports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#puzzle"></use></svg>
                      Integrations
                    </a>
                  </li>
                </ul>
      
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                  <span>Saved reports</span>
                  <a className="link-secondary" href="#" aria-label="Add a new report">
                    <svg className="bi"><use xlink:href="#plus-circle"></use></svg>
                  </a>
                </h6>
                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#file-earmark-text"></use></svg>
                      Current month
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#file-earmark-text"></use></svg>
                      Last quarter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#file-earmark-text"></use></svg>
                      Social engagement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#file-earmark-text"></use></svg>
                      Year-end sale
                    </a>
                  </li>
                </ul>
      
                <hr className="my-3" />
      
                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#gear-wide-connected"></use></svg>
                      Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlink:href="#door-closed"></use></svg>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      
          {/* <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                  <svg className="bi"><use xlink:href="#calendar3"></use></svg>
                  This week
                </button>
              </div>
            </div>
      
            <canvas className="my-4 w-100" id="myChart" width="2647" height="1117"></canvas>
          </main> */}
        </div>
      </div>
  )
}

export default UserDashboard