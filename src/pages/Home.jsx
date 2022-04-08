import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/devices'

function Home({callback}) {
  return (
    <div className='container py-4'>
      <h1>Categories</h1>
      <hr />
      <div className='row mb-5'>
        {
          data.map(res => {
            return (
              <div className='col-12 col-md-6' key={res.id} >
                <Link to={`./${res.name}`} onClick={() => callback(res.data)}
                  className='card my-2 shadow-sm mx-auto' style={{maxWidth: "80%"}}
                >
                  <img src={res.img} className="card-img" alt="Background"/>
                  <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <h1 className="card-title text-light" style={{textShadow: "0 0 5px black"}}>
                        {res.name.toUpperCase()}
                    </h1>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home