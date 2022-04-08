import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Details({data}) {
  const {deviceName} = useParams()
  const navigate = useNavigate()
  return (
    <div className='container my-5' style={{width: '50em'}}>
      <div className='card shadow p-2'>
        <div className='card-body'>
          <div className='d-flex'>
            <h2>{deviceName}</h2>
            <button type="button" onClick={() => navigate(-1)}
              className="btn btn-primary ms-auto">Go Back</button>
          </div>
          <hr />
          <ul>
            <li>
              <strong>Display : </strong>
              <span>{data.display}</span>
            </li>
            {
              data.chipset &&
              <li>
                <strong>Chipset : </strong>
                <span>{data.chipset}</span>
              </li>
            }
            {
              data.cpu &&
              <li>
                <strong>CPU : </strong>
                <span>{data.cpu}</span>
              </li>
            }
            {
              data.graphic &&
              <li>
                <strong>Graphic : </strong>
                <span>{data.graphic}</span>
              </li>
            }
            <li>
              <strong>Ram : </strong>
              <span>{data.ram}</span>
            </li>
            <li>
              <strong>Storage : </strong>
              <span>{data.storage}</span>
            </li>
            {
              data.rearCam && 
              <li>
                <strong>Rear Camera : </strong>
                <span>{data.rearCam}</span>
              </li>
            }
            {
              data.frontCam &&
              <li>
                <strong>Front Camera : </strong>
                <span>{data.frontCam}</span>
              </li>
            }
            {
              data.battery &&
              <li>
                <strong>Battery : </strong>
                <span>{data.battery}</span>
              </li>
            }
            {
              data.os &&
              <li>
                <strong>Operating System : </strong>
                <span>{data.os}</span>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details