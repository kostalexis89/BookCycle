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

        axios.post('/messages/outbox', {sender: user._id})
        .then(response => {
            console.log(response)
            setRequests(response.data)
        })

    },[refresh])

    const requestList = requests.map(request => {
        console.log('the proposal is',request.proposal)
        return (<div key={request.book._id}>
            <RequestBookCard request={request} refresh={refresh} setRefresh={setRefresh} proposal={request.proposal}/>
        </div>)
    })

    return (
        <div className='grid'>
            {requestList}
        </div>
    )
}