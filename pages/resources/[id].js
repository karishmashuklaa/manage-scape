import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

const ResourceDetail = ({resource}) => {

    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading data...</div>
    }

    return (
        <Layout>
        <section className="hero ">
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
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
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

export async function getStaticPaths() {

    const dataRes = await fetch("http://localhost:3001/api/resources/")
    const data = await dataRes.json()
    const path = data.map(resource => {
        return {
            params: { id: resource.id}
        }
    })

    return {
        paths: path,
        fallback: true
    }
}

export async function getStaticProps({params}) {
 // destructed params from context
    const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`)
    const data = await dataRes.json()

    return {
        props: {
            resource: data
        },
        revalidate: 1
    }
}

export default ResourceDetail
