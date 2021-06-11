import Layout from "../../../components/Layout"
import ResourceForm from "../../../components/ResourceForm"
import axios from "axios"
import {useRouter} from "next/router"

const EditResource = ({ resource }) => {

    const router = useRouter()
    const updateResource = (formData) => {
       axios.patch("/api/resources", formData)
       .then( _ => alert(JSON.stringify(formData)))
       .catch( error => alert(error?.response?.data))
    }
  
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm
            initialFormData={resource} 
            onFormSubmit={updateResource} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const resData = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await resData.json()

  return {
    props: {
      resource: data
    }
  }
}

export default EditResource
