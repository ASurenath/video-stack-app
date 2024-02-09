import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { deleteHistoryApi, getHistoriesApi } from '../apiService/allApi';
import Spinner from 'react-bootstrap/Spinner';




function History() {
    const [histories, sethistories] = useState([])
    const [loaded, setloaded] = useState(false)

    const getHistoryInfo = async () => {
        const result = await getHistoriesApi()
        ////console.log("Api call result(GET)",result)          //////console.log()
        if (result.status >= 200 && result.status < 300) {
            sethistories(result.data)
            setloaded(true)
        }
    }
    const deleteHistory = async (e, id) => {
        e.preventDefault();
        const result = await deleteHistoryApi(id);
        //console.log("API call (DELETE)",result);
        getHistoryInfo()
    }
    useEffect(() => { getHistoryInfo() }, [])

    return (
        <Container className='py-5'>
            <Row className='text-center mx-1'>
                <h1>Watch history</h1>
                <hr />


                {loaded ? histories?.length > 0 ?
                <div  className='p-0 m-0' 
                // style={{overflowY:'scroll',height:'65vh',display:'block'}}
                >
                    <Table striped bordered hover variant="dark" className='fs-6'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            {/* <th>Video Url</th> */}
                            <th>Time</th>
                            <th>  </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                                    {histories?.map((i, index) =>
        
                                        
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td><a href={i.videoUrl} target='_blank'>{i.title}</a></td>
                                            {/* <td>{i.videoUrl}</td> */}
                                            <td>{i.time}</td>
                                            <td>
                                                <span onClick={(e) => deleteHistory(e, i.id)} className='a' ><i class="fa-solid fa-trash-can"></i></span>
                                            </td>
                                        </tr>
                                                            
                        )}
                        </tbody>
                                        </Table>
                </div>
                    :<div className='d-flex justify-content-center'><h3>No watch history to show!</h3></div>
                    : <div className='d-flex justify-content-center'><Spinner animation="grow" /></div>
                    }





            </Row>
        </Container>
    )
}

export default History