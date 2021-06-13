import ResourceTag from './ResourceTag'
import Link from 'next/link'

const ResourceHighlight = ({resources}) => {
    return (
    <section className="hero ">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
          </div>
        </div>

        { resources.map(resource => {
          return (
            <section key = {resource.id} className="section">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="content is-medium">
                  <h2 className="subtitle is-4">
                    {resource.createdAt}
                    <ResourceTag status={resource.status} />
                  </h2>
                  <h1 className="title"> {resource.title}</h1>
                  <p>{resource.description}</p>
                  <Link href={`/resources/${resource.id}`}>
                    <a className="button is-info">
                      Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          )
        } )
      }
      </div>
    </div>
  </section>
    )
}

export default ResourceHighlight
