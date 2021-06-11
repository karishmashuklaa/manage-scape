import Layout from "../../../components/Layout"
import ResourceForm from "../../../components/ResourceForm"

const EditResource = ({ resource }) => {

    const updateResource = (formData) => {
        alert(JSON.stringify(formData))
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
