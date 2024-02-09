import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategApi, updateCategApi, getCategsApi, getVideoApi } from '../apiService/allApi';
import Deletecateg from './Deletecateg';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';






function Categories() {
    const [show, setShow] = useState(false);
    const [categs,setcategs]=useState([])
    const [inputDataC,setinputDataC]=useState({id:"",title:"",videos:[]})
    const [categDeleteUpdate,setcategDeleteUpdate]=useState({})
    const [loaded,setloaded]=useState(false)

    const handleClose = () => {
        setShow(false);
        setinputDataC({ ...inputDataC, title:"",id:"",videos:[] })
    }
    const handleShow = () => setShow(true);
    
    const dragOver=(e)=>{
        e.preventDefault()
        //console.log("Dragging over")
    }
    const dropping=async(e,id)=>{
        const videoId=e.dataTransfer.getData("videoId")
        //console.log("Dropped. Cat id:", id,"Videio Id",videoId)
        const result=await getVideoApi(videoId)
        //console.log("Api request (GET)",result);
        const video=result.data
        ///selecting category
        const categ=categs.find(i=>i.id==id)
        categ.videos.push(video)
        //console.log(categ);
        updateCategApi(id,categ)
        getCategInfo()


    }

    const getCategInfo=async()=>{
        const result=await getCategsApi()
        //console.log("Api call result(GET)",result)          //////console.log()
        if(result.status>=200 && result.status<300){
          setcategs(result.data)
          setloaded(true)
        }
      }
    useEffect(()=>{getCategInfo()},[categDeleteUpdate])

    const handleAdd = async (e) => {
        //to prevent the event from working repeatedly,
        e.preventDefault()
        const { title } = inputDataC

        if (!title) {
            toast.error('Please give a title', {
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
            const result = await addCategApi(inputDataC)
            //console.log("Api call result(POST)",result)          //////console.log()
            if(result.status>=200 && result.status<300){
                await getCategInfo()

                ///toast is synchronous
                toast.info('Category Added Successfully', {
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
  return (
    <div className='p-5 pt-1'>
        <h1>Categories</h1>
        <hr />
        <div className='catcontainer'>
        {loaded?categs?.length>0?categs.map(i=>
        <Link to={`/category/${i?.id}`}>
            <div onDrop={(e)=>{dropping(e,i?.id)}} onDragOver={(e)=>dragOver(e)} droppable className='catchild p-4 my-3 rounded-3'><h4 className='d-inline-block'>{i.title}</h4> 
            <marquee scrollamount="3">
                <div>
                    {i?.videos?.length>0?i.videos.map(j=>
                    <img src={j.coverImgUrl} alt="" style={{height:"50px",borderRadius:"50px"}} className='px-1'/>
                    ):""}
                </div>
            </marquee>
            <Deletecateg setcategDeleteUpdate={setcategDeleteUpdate} categ={i}></Deletecateg>
            </div>
        </Link> 
        )
        :<h3>No Categoreies added yet!</h3>
        :<div className='d-flex justify-content-center'><Spinner animation="grow" /></div>
        }
        </div>
        
        <button className='btnglow' onClick={handleShow}>Create Category</button>
        <Modal show={show} onHide={handleClose} className="" data-bs-theme="dark">
                <Modal.Header closeButton className="bg-dark" style={{ border: "solid rgba(255, 255, 255, 0.050) 1px" }}>
                    <Modal.Title bg='primary' className='text-light'>Create Category</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark" style={{ border: "solid rgba(255, 255, 255, 0.050) 1px" }}>

                    <FloatingLabel controlId="floatingInput" label="Category name">
                        <Form.Control type="text" placeholder="Category name" name="title" onChange={(e)=>setinputDataC({ ...inputDataC, title: e.target.value })}/>
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer className="bg-dark" style={{ border: "solid rgba(255, 255, 255, 0.050) 1px" }}>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="light" className='btnglow' onClick={(e)=>handleAdd(e)}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
  )
}

export default Categories