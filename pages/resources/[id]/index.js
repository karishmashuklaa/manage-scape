import Layout from '../../../components/Layout'
import ResourceTag from '../../../components/ResourceTag'
import Link from 'next/link'
import axios from "axios"
import moment from "moment"

const ResourceDetail = ({resource}) => {

    const activateResource = () => {
        axios.patch("/api/resources", {...resource, status: "active"})
        .then(_ => location.reload()) // reload the page everytime you activate a resource
        .catch(_ => alert("Failed to activate the resource"))
    }

    return (
        <Layout>
        <section className="hero">
        <div className="hero-body">
        <div className="container">
            <div className="columns">
            <div className="column is-8 is-offset-2">
            </div>
            </div>
                <section className="section">
                <div className="columns">
                <div className="column is-8 is-offset-2">
                    <div className="content is-medium">
                    <h2 className="subtitle is-4">
                        {moment(resource.createdAt).format("LL")}
                        <ResourceTag status={resource.status} />
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} mins</p>
                    { resource.status === "inactive" &&
                        <>
                        <Link href={`/resources/${resource.id}/edit`}>
                            <a className="button is-warning">
                                Update
                            </a>
                        </Link>

                        <button 
                        onClick={activateResource}
                        className="button is-success ml-3">
                            Activate
                        </button>
                        </>
                    }
                    </div>
                </div>
                </div>
            </section>
        </div>
        </div>
        </section>
        </Layout>
    )
}



export async function getServerSideProps({params}) {
 // destructed params from context
    const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`)
    const data = await dataRes.json()

    return {
        props: {
            resource: data
        }
   }
}

export default ResourceDetail
