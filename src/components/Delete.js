import React from 'react'
import { deleteVideoApi } from '../apiService/allApi'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';

function Delete({video,setdeleteUpdate}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete=async(e)=>{
        e.preventDefault()
        const result = await deleteVideoApi(video?.id)
        setdeleteUpdate(result.data)
        ////delay                                           ///change it before hosting
                // setTimeout(() => {
                //     setdeleteUpdate(result.data)
                // }, 1000)
        //console.log("Api call result(DELETE)",result)          //////console.log()
            //console.log(result);
            if(result.status>=200 && result.status<300){
                
                toast.error('Video deleted successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });

                
                handleClose()
            }
    }
  return (
    <>
            <span className='a' onClick={handleShow}><i class="fa-solid fa-trash-can"></i></span>
            <Modal show={show} onHide={handleClose} className="" data-bs-theme="dark">
                <Modal.Header closeButton className="bg-dark" style={{ border: "solid rgba(255, 255, 255, 0.050) 1px" }}>
                    <Modal.Title bg='primary' className='text-light'>This can't be undone</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark" style={{ border: "solid rgba(255, 255, 255, 0.050) 1px" }}>
                    <h4>Are you sure that you want to delete {video.title}?</h4>
                </Modal.Body>
                <Modal.Footer className="bg-dark" style={{ border: "solid rgba(255, 255, 255, 0.050) 1px" }}>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        No, cancel.
                    </Button>
                    <Button variant="danger" className='' onClick={(e)=>handleDelete(e)}>
                        Yes, delete.
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default Delete