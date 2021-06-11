import { useRouter } from 'next/router'
import axios from 'axios'
import Layout from '../../components/Layout'
import ResourceForm from '../../components/ResourceForm'


const CreateResource = () => {

    const router = useRouter()

    const resourceCreate = (formData) => {
       axios.post("/api/resources", formData)
       .then( _ => router.push("/") )
       .catch( error => alert(error?.response?.data))
    }
    // Use of ? - It helps to handle undefined values. It is optional to use.

    return (
       <Layout>
        <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
           <ResourceForm onFormSubmit={resourceCreate} />
          </div>
        </div>
      </div>
      </Layout>
    )
}

export default CreateResource
