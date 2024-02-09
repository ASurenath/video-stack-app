import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Delete from './Delete';
import { format } from 'date-fns';
import { addHistoryApi } from '../apiService/allApi';





function VideoCard({video,setdeleteUpdate} ) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async() => {
        setShow(true);
        const title=video?.title
        const videoUrl=video?.videoUrl
        const time=format(new Date(),"yyyy-MM-dd hh:mm a")
        
        const reqBody={id:"",title,videoUrl,time}
        //console.log(reqBody);
        const result=await addHistoryApi(reqBody)
        //console.log("Api call (GET)",result);

    };
    const dragStart=(e,id)=>{
        //console.log("dragging started. id is",id);
        e.dataTransfer.setData("videoId",id)
    }
    return (
        <Col lg={4} md={6} className='mb-3'>
            <Card onDragStart={(e)=>dragStart(e,video?.id)} draggable variant="dark"  className='bg-dark text-light rounded-4 p-1'>
                
                    <Card.Img onClick={handleShow} variant="dark" src={video.coverImgUrl} style={{ width: "100%", aspectRatio: "1.33/1",cursor: "pointer"  }} className='rounded-4'>
                        
                        </Card.Img>

                <Card.Body variant="dark" className='bg-dark text-secondary rounded-1 p-1 m-0'>
                    <Card.Title className='p-1'><h6 className='p-0 m-0'>{video?.title?.length>35?video?.title.slice(0,35)+'...':video.title}</h6></Card.Title>
                </Card.Body>
                <div style={{display:"flex",justifyContent:"end",marginRight:"5px"}}>
                <Delete video={video} setdeleteUpdate={setdeleteUpdate}></Delete>
            </div>
                
            </Card>
            
            <Modal
                show={show}
                onHide={handleClose}
                centered
                size='lg'
                data-bs-theme='dark'
                className=''
                >

                <Modal.Header closeButton className='bg-dark text-light'>
                    <Modal.Title>{video?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-light'>
                    <iframe
                        style={{ width: "100%", aspectRatio: "1.777/1" }}
                        src={video?.videoUrl}
                        title={video?.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>

                    </iframe>
                </Modal.Body>
            </Modal>
        </Col>
    )
}

export default VideoCard