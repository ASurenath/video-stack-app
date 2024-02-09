import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Add from '../components/Add'
import Videolist from '../components/Videolist'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';



function Mainpage() {
  const [addUpdate, setaddUpdate] = useState({})
  return (
    <div>
        <Container className='py-5'>
            <Row className='p-lg-4 p-2'>
                <Col  lg={6} className='p-lg-5 p-3 pb-0 mb-0'>
                <h3 className=''>Start Uploading Videos for Free!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias sequi repellat tenetur culpa. Voluptatum cumque quo quod distinctio, iste itaque iure iusto voluptatem vel exercitationem, sapiente rerum, soluta consectetur?</p>
                <Add setaddUpdate={setaddUpdate} addUpdate={addUpdate}></Add>
              

                
                </Col>
                <Col  md={6} className='text-center'>
                <Link to={"/history"}><i class="fa-solid fa-clock-rotate-left"></i> View Watch history</Link>
    <br />
                <img src="https://i.postimg.cc/Dy20JHxX/outline.gif" className='pb-0' alt="" style={{width:'60%',borderRadius:'10%'}}/>
              
                
                </Col>
            </Row>
            <Row>
                <Col  lg={8} className='text-center'>
                <Videolist addUpdate={addUpdate}></Videolist>
                </Col>
                
                <Col  lg={4} className='text-center'>
                <Categories></Categories>

                </Col>
            </Row>
        </Container>
        <ToastContainer />
    </div>
  )
}

export default Mainpage