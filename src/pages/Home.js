import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <Container className='py-5'>
                <Row>
                    <Col lg={6} className='p-lg-5 p-3 pb-0'>
                        <h1>Video Stack</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae sed praesentium dicta, odit nihil. Eligendi quibusdam tempora molestiae placeat officiis sunt cum nostrum explicabo repellendus, eveniet illum, enim minima.
                           <br /><Link to={'/main'} style={{textDecoration:'none'}}><button className='btnglow'>Get Started!</button></Link>

                        </p>
                    </Col >
                    <Col lg={6} className='p-3'>
                        <img src="https://i.postimg.cc/CLTJ3Chz/cat.gif" alt="" style={{ width: '95%', margin: '10px' }} />

                    </Col>
                </Row>
                <hr className='lighthr'/>
                <Row>
                    <Col md={4}>
                        <Link   to={"/main"} style={{textDecoration:'none',color:'rgb(119, 137, 157)'}}>
                            <div className='box p-lg-3 my-2'>
                                <h3 className='text-center'>Manage Videos</h3>
                                <img src="https://i.postimg.cc/D0dskX6X/yt-2.gif" alt="" className='width95' />
                                <p className='p-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis, eveniet natus voluptates odit suscipit animi temporibus ratione illo reprehenderit expedita magnam unde aspernatur atque. Ipsum eligendi quam enim commodi!</p>
                                
                            </div>
                        </Link>
                        
                    </Col>
                   
                    <Col md={4}>
                        <Link  to={"/main"} style={{textDecoration:'none',color:'rgb(119, 137, 157)'}}>
                            <div className='box p-lg-3 py-0'>
                                <h3 className='text-center'>Categorize Videos</h3>
                                <img src="https://i.postimg.cc/J010Xd3s/yt3.gif" alt="" className='width95' />
                                <p className='p-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatibus quisquam vitae cupiditate obcaecati ut expedita, corporis modi adipisci, tempora quidem. Nemo sint dicta, numquam ut labore corporis ad officiis.</p>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link  to={"/history"} style={{textDecoration:'none',color:'rgb(119, 137, 157)'}}>
                            <div className='box p-lg-3 py-0'>
                                <h3 className='text-center'>Watch History</h3>
                                <img src="https://i.postimg.cc/VNpXj15d/yt1.gif" alt="" className='width95' />
                                <p className='p-4 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolore unde nemo sed voluptas nisi quis, hic optio ipsum eligendi sequi? Totam soluta minima amet consequatur perferendis nulla eveniet eum.</p>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home