import React from 'react'

const Card = ({ data }) => {
  return (
    <div className='card my-3'>
      <div className='card-body'>
        <div className='table-responsive'>
          <table className='table table-striped'>
            <tbody>
              <tr>
                <th scope='row' style={{ width: '150px' }}>Name</th>
                <td>{data.name}</td>
              </tr>
              <tr>
                <th scope='row'>Username</th>
                <td>{data.username}</td>
              </tr>
              <tr>
                <th scope='row'>Email</th>
                <td>{data.email}</td>
              </tr>
              <tr>
                <th scope='row'>Address</th>
                <td style={{ whiteSpace: 'nowrap' }}>{data.address.street}, {data.address.suite}, {data.address.city}, {data.address.zipcode}</td>
              </tr>
              <tr>
                <th scope='row'>Phone</th>
                <td>{data.phone}</td>
              </tr>
              <tr>
                <th scope='row'>Website</th>
                <td>{data.website}</td>
              </tr>
              <tr>
                <th scope='row'>Company</th>
                <td>{data.company.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Card
