import {useState, useEffect} from "react"
import Link from "next/link"
import axios from "axios"

const ActiveResource = () => {

  const [resource,setResource] = useState({})
  
  useEffect(() => {
    async function fetchResource(){
      const axiosRes = await axios.get("/api/activeresource")
      const resource = axiosRes.data 
      setResource(resource)
    }
    fetchResource()
  }, [])

  return (
    <div className="active-resource">
      <h1 className="resource-name">Active Resource</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">
          1400
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