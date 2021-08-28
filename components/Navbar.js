import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
        <nav className="navbar is-fixed-top">
        <div className="container">

          <div className="navbar-brand">
            <Link href="/">
            <a className="navbar-item">
             Manage Scape
            </a>
            </Link>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className=" navbar-item">
                <div className="control has-icons-left">
                  <span className="icon is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>

              <Link href="/">
              <a className="navbar-item is-size-6 has-text-weight-semibold">
                Home
              </a>
              </Link>

              <Link href="/resources/new">
              <a className="navbar-item is-size-6 has-text-weight-semibold">
                Add Resource
              </a>
              </Link>

            </div>
          </div>
        </div>
      </nav>
      </div>
    )
}

export default Navbar
