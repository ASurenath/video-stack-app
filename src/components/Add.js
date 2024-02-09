import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoApi } from '../apiService/allApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setaddUpdate}) {
    //state to store input data
    const [inputData, setinputData] = useState({ "id": "", "title": "", "videoUrl": "", "coverImgUrl": "" })
    const setData = (e) => {
        let { value, name } = e.target
        setinputData({ ...inputData, [name]: value })

    }
    //extract url
    const extractUrl = (e) => {
        const { value, name } = e.target
        let urlCode = value.slice(-11,)
        const finalUrl = `https://www.youtube.com/embed/${urlCode}?autoplay=1`
        setinputData({ ...inputData, [name]: finalUrl })
    }

    ////////console.log(inputData);                                       //////////console.log()

    const handleAdd = async (e) => {
        //to prevent the event from working repeatedly,
        e.preventDefault()
        const { title, videoUrl, coverImgUrl } = inputData

        if (!title ||!videoUrl || !coverImgUrl) {
            toast.error('Please fill all the fields', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        
        else{
            const result = await addVideoApi(inputData)
            //////console.log("Api call result(POST)",result)          //////////console.log()
            if(result.status>=200 && result.status<300){
                // set add updtate is synchronous so give that first
                setaddUpdate(result.data)
                  /// delay                            ////change it before hosting
                // setTimeout(() => {
                //     setaddUpdate(result.data)
                // }, 1000)

                ///toast is synchronous
                toast.info('Video Added Successfully', {
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
    }

    const [show, setShow] = useState(false);
    const handleClose = () =>{ 
        setShow(false);
        //reset inputdata
        setinputData({...inputData, id:"",title:"",videoUrl:"",coverImgUrl:"" })

    }
    const handleShow = () => setShow(true);
    return (
        <div className='text-center p-0 m-0'>
            <button className='btnglow' onClick={handleShow}>Add Video</button>

            <Modal show={show} onHide={handleClose} className="" data-bs-theme="dark">
                <Modal.Header closeButton className="bg-dark" style={{ border: "solid rgba(255, 255, 255, 0.050) 1px" }}>
                    <Modal.Title bg='primary' className='text-light'>Add Video</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark" style={{ border: "solid rgba(255, 255, 255, 0.050) 1px" }}>

                    <FloatingLabel label="Video url ( from YouTube )" className="mb-3">
                        <Form.Control type="text" placeholder="Video url from YouTube" name='videoUrl' onChange={(e) => { extractUrl(e) }} />
                    </FloatingLabel>

                    <FloatingLabel label="Caption" className="mb-3">
                        <Form.Control type="text" placeholder="Caption" name='title' onChange={(e) => { setData(e) }} />
                    </FloatingLabel>

                    <FloatingLabel label="Cover image url">
                        <Form.Control type="text" placeholder="Cover image url" name='coverImgUrl' onChange={(e) => { setData(e) }} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer className="bg-dark" style={{ border: "solid rgba(255, 255, 255, 0.050) 1px" }}>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="light" className='btnglow' onClick={(e) => handleAdd(e)}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>


    )
}

export default Add