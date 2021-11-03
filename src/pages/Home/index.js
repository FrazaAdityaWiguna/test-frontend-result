import axios from 'axios'
import httpBuildQuery from 'http-build-query'
import React, { Component } from 'react'
import Card from '../../components/Card'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dataResponse: '',
      valInputName: '',
      valInputUsername: '',
      valInputEmail: ''
    }

    this.loadData = this.loadData.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.loadData()
  }

  loadData (filter) {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}?${filter ? httpBuildQuery(filter) : ''}`)
      .then(res => {
        this.setState({ dataResponse: res.data })
      })
  }

  handleSubmit = (e) => {
    const s = this.state
    e.preventDefault()

    const filter = {}

    if(s.valInputName) {
      Object.assign(filter, {name: s.valInputName})
    }
    if(s.valInputUsername) {
      Object.assign(filter, {username: s.valInputUsername})
    }
    if(s.valInputEmail) {
      Object.assign(filter, {email: s.valInputEmail})
    }

    this.loadData(filter)
  }

  render () {
    const s = this.state
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <form className='d-flex' onSubmit={this.handleSubmit}>
              <div className='row'>
                <div className='col-12 col-sm-6 col-md my-2 my-md-0 mt-md-3'>
                  <input className='form-control me-2' type='search' placeholder='Search by name' aria-label='Search' onChange={(e) => this.setState({ valInputName: e.target.value })} />
                </div>
                <div className='col-12 col-sm-6 col-md my-2 my-md-0 mt-md-3'>
                  <input className='form-control me-2' type='search' placeholder='Search by username' aria-label='Search' onChange={(e) => this.setState({ valInputUsername: e.target.value })} />
                </div>
                <div className='col-12 col-sm-6 col-md my-2 my-md-0 mt-md-3'>
                  <input className='form-control me-2' type='search ' placeholder='Search by email' aria-label='Search' onChange={(e) => this.setState({ valInputEmail: e.target.value })} />
                </div>
                <div className='col-12 col-sm-6 col-md my-2 my-md-0 mt-md-3'>
                  <button className='btn btn-outline-success' type='submit'>Search</button>
                </div>
              </div>
            </form>
          </div>

          <div className='row'>
            {s.dataResponse &&
            s.dataResponse.map(data =>
              <div className='col-md-6' key={data.id}>
                <Card data={data} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
