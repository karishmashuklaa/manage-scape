import {useState, useEffect} from "react"
import Link from "next/link"
import axios from "axios"
import moment from "moment"

const ActiveResource = () => {

  const [resource,setResource] = useState({})
  const [secondsLeft, setSecondsLeft] = useState()
  
  useEffect(() => {
    async function fetchResource(){
      const axiosRes = await axios.get("/api/activeresource")
      const resource = axiosRes.data 
      const timeToFinish = parseInt(resource.timeToFinish, 10) // this will be in minutes
      const elapsedTime = moment().diff(moment(resource.activationTime), "seconds") // difference between current time and activation time
      const updatedTimeToFinish = (timeToFinish * 60) - elapsedTime // this will be in seconds
      
      if(updatedTimeToFinish >=0) {
        resource.timeToFinish = updatedTimeToFinish
        setSecondsLeft(updatedTimeToFinish)
      }

      setResource(resource)
    }
    fetchResource()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(secondsLeft - 1)
    }, 1000) 

    if(secondsLeft < 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval) // cleanup

  }, [secondsLeft])

  return (
    <div className="active-resource">
      <h1 className="resource-name">Active Resource: {resource.title}</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">
          {secondsLeft} secs left
        </h2>
      </div>
      <Link href="/">
        <a className="button">
          Go to resource
        </a>
      </Link>
    </div>
  )
}

export default ActiveResource