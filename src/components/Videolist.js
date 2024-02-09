import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Row } from 'react-bootstrap'
import { getVideosApi } from '../apiService/allApi'
import Spinner from 'react-bootstrap/Spinner';


function Videolist({addUpdate}) {
  const [videos, setvideos] = useState([])
  const [deleteUpdate,setdeleteUpdate] =useState({})
  const [loaded,setloaded]=useState(false)

  const getVideoInfo=async()=>{
    const result=await getVideosApi()
    //console.log("Api call result(GET)",result)          //////console.log()
    if(result.status>=200 && result.status<300){
      setvideos(result.data)
      setloaded(true)
    }
  }

  useEffect(() =>{getVideoInfo()}, [addUpdate,deleteUpdate])
  //console.log("videos",videos)                            ////console.log()
  
  return ( 
    <div className='p-5 pt-1'>
      <Row>
        <h1>Videos</h1>
        <hr />
        {loaded?(videos?.length>0? videos.map(i=>
      <VideoCard video={i} setdeleteUpdate={setdeleteUpdate}></VideoCard>
      )
      :<h3>No videos in your collection</h3>)
      :      <div className='d-flex justify-content-center'><Spinner animation="grow" /></div>
    }
      </Row>
        
        </div>
  )
}

export default Videolist