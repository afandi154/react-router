import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/devices'

function Navbar({callback}) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {
              data.map(res => {
                return(
                  <li className="nav-item" key={res.id}>
                    <Link to={`/${res.name}`} onClick={() => callback(res.data)}
                      className="nav-link">{res.name.toUpperCase()}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar