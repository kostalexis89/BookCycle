import React, { useState, useContext, useEffect } from 'react'
import {AuthContext} from '../context/auth'
import axios from 'axios'
import RequestBookCard from '../components/RequestBookCard'


export default function OutboxRequests() {
    const {user} = useContext(AuthContext)
    const [requests, setRequests] = useState([])
    const [refresh, setRefresh] = useState(0)
    // console.log(user)
    useEffect(() => {
        console.log(user._id)
        axios.post('/messages/outbox', {sender: user._id})
        .then(response => {
            console.log('hello from response',response)
            setRequests(response.data)
        })

    },[refresh])
    console.log('THE EREQUESTS ARE',requests)
    
    const requestList = requests.map(request => {
        console.log('the proposal is',request)
        return (<div>
            <RequestBookCard request={request} refresh={refresh} setRefresh={setRefresh} proposal={request.proposal}/>
        </div>)
    })

    // if(requests!==[]){
    //     return <></>
    // }

    return (
        <div className='grid'>
            {requestList}
        </div>
    )
}