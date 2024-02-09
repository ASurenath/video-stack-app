import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Add from '../components/Add'
import VideolistC from '../components/VideolistC'
import Categories from '../components/Categories'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Catwise() {
    const {id}=useParams()
    // console.log("id",id);
    const [addUpdate, setaddUpdate] = useState({})
  return (
    <div>
    <Container className='py-5'>
        <Row className='p-lg-4 p-2'>
            <Col  lg={6} className='p-lg-5 p-3 pb-0 mb-0'>
            <h3 className=''>Start Uploading Videos for Free!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias sequi repellat tenetur culpa. Voluptatum cumque quo quod distinctio, iste itaque iure iusto voluptatem vel exercitationem, sapiente rerum, soluta consectetur?</p>
            <Add setaddUpdate={setaddUpdate} addUpdate={addUpdate}></Add>
            <br />
            
            </Col>
            <Col  md={6} className='text-center'>
            <img src="https://i.postimg.cc/Dy20JHxX/outline.gif" className='' alt="" style={{width:'60%',borderRadius:'10%'}}/>
            </Col>
        </Row>
        <Row>
            <Col  lg={8} className='text-center'>
            <VideolistC addUpdate={addUpdate} id={id}></VideolistC>
            </Col>
            
            <Col  lg={4} className='text-center'>
            <Categories></Categories>
            <Link to={"/history"}> <i class="fa-solid fa-clock-rotate-left"></i> View Watch history</Link>

            </Col>
        </Row>
    </Container>
    <ToastContainer />
</div>
  )
}

export default Catwise