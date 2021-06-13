
const ResourceTag = ({status}) => {
    return(
        <span className={`tag is-medium ml-4 resource-${status}`}>
        {status}
      </span>
    )
}

export default ResourceTag