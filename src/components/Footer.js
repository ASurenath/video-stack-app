import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Footer() {
  return (
        <div className="bg-body-tertiary py-3 w-100 text-secondary" data-bs-theme="dark">
          <Container>
            <Row>
  
              <Col lg={3} md={6}>
              <img
                alt=""
                src="https://i.postimg.cc/zG9f7fSZ/Logo.png"
                width="150"
                height="30"
                className="d-inline-block align-top"/>
                <p>
                  Lorem ipsum dolor sit amet consectetur, eos rem ipsum dolor sit amet
                </p>
             </Col>
  
             <Col  lg={3} md={6}>
              <h5 className='px-5'>
                Links
              </h5>
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/main'}>Create videos</Link></li>
                <li><Link to={'/main'}>Playlists</Link></li>
              </ul>
             </Col>
             <Col lg={3} md={6}>
             <h5 className='px-5'>
                Guides
              </h5>
              <ul>
                <li><Link to={'/main'}>Help</Link></li>
                <li><Link to={'/main'}>FAQ</Link></li>
                <li><Link to={'/main'}>Community</Link></li>
              </ul>
             </Col>
             <Col lg={3} md={6}>
             <h5 className='px-5'>
                Contact Us
              </h5>
              <form action="">
                <input type="email" name="" id="" placeholder='Your email id' className='form-control'/>
                <button className='btn btn-secondary mt-2 ms-5'>Send an E-mail</button>
              </form>
             </Col>
             </Row> 
          </Container>
        </div>
  )
}

export default Footer