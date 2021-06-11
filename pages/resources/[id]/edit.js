import Layout from "../../../components/Layout"

const EditResource = ({resource}) => {
    return (
        <Layout>
            I am edit page of {resource.title} 
        </Layout>
    )
}

export async function getServerSideProps({params}) {

    const resData = await fetch(`http://localhost:3001/api/resources/${params.id}`)
    const data = await resData.json()

    return {
        props: {
            resource: data
        }
    }
}

export default EditResource
