import React from 'react'

const Footer= ()=>(
<footer className="page-footer indigo center-on-small-only pt-0">
        {/*Footer Links*/}
        <div className="container">
          {/*First row*/}
          <div className="row">
            {/*First column*/}
            <div className="col-md-12">
              <div className="footer-socials mb-5 flex-center">
                {/*Facebook*/}
                <a className="icons-sm fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-4"> </i></a>
                {/*Twitter*/}
                <a className="icons-sm tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
                {/*Instagram*/}
                <a className="icons-sm ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-4"> </i></a>
                {/*Pinterest*/}
                <a className="icons-sm pin-ic"><i className="fa fa-pinterest fa-lg white-text"> </i></a>
              </div>
              <div className="container-fluid">
            © 2017 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </div>
            </div>
            {/*/First column*/}
          </div>
          {/*/First row*/}
        </div>
      </footer>
)

export default Footer