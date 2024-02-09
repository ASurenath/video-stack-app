import React, { useEffect, useState } from 'react'
import VideocardC from './VideocardC'
import { Col, Row } from 'react-bootstrap'
import { getCategApi, updateCategApi } from '../apiService/allApi'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';



function VideolistC({ addUpdate, id }) {

    const [videos2, setvideos2] = useState([])
    const [deleteUpdate, setdeleteUpdate] = useState({})
    const [categ, setcateg] = useState({})
    const [loaded,setloaded]=useState(false)

    const getVideoInfo = async () => {
        const result = await getCategApi(id)
        //console.log("Api call result(GET)", result)          //////console.log()
        if (result.status >= 200 && result.status < 300) {
            setcateg(result.data)
            setloaded(true)

        }
    }
    const updateVideos = () => {
        setvideos2(categ.videos)
    }
    //console.log(categ);
    //console.log("id",id);
    useEffect(() => { updateVideos() }, [categ])
    useEffect(() => { getVideoInfo() }, [addUpdate, deleteUpdate,id])
    //console.log("videos2", videos2)
    const remove=async(e,i)=>{
        e.preventDefault()
        let v=videos2
        v.pop(i)
        let c=categ
        c.videos=v
        // setvideos2(v)
        const result=await updateCategApi(id,c)
        //console.log("update category",result);
        getVideoInfo()
    }
    return (
        <div className='p-5 pt-1'>
            <Row>
            
                <div className='text-start'>
                <Link to={'/main'}><span className='fs-4 ms-0'>All videos</span></Link><span className='fs-4'> {">"} Category:</span> <h1 className='d-inline-block'>{categ.title}</h1>
                </div>
           
                <hr />
                {loaded?videos2?.length > 0 ? videos2.map(i =>
                    <Col lg={4} md={6} className='mb-3'>
                        <VideocardC video={i} setdeleteUpdate={setdeleteUpdate}></VideocardC>
                        <p onClick={(e,i)=>remove(e,i)}  className='a'>Remove</p>
                    </Col>
                )
                    : <h3>No videos in this category</h3>
                    :
                    <div className='d-flex justify-content-center'><Spinner animation="grow" /></div>
                }
            </Row>

        </div>
    )
}

export default VideolistC