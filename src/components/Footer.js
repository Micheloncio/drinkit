import React from 'react'
import './Footer.css'

const Footer= ()=>(
      <footer className="page-footer indigo center-on-small-only pt-0">
        {/*Footer Links*/}
        <div className="container">
          {/*First row*/}
          <div className="row">
            {/*First column*/}
            <div className="col-md-12">
              <div className="footer-socials flex-center">
                <a className="icons-sm fb-ic" href='https://www.facebook.com'><i className="fa fa-facebook fa-lg white-text mr-md-4"> </i></a>
                <a className="icons-sm tw-ic" href='https://twitter.com'><i className="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
                <a className="icons-sm ins-ic" href='https://www.instagram.com'><i className="fa fa-instagram fa-lg white-text mr-md-4"> </i></a>
                <a className="icons-sm pin-ic" href='https://www.pinterest.es'><i className="fa fa-pinterest fa-lg white-text"> </i></a>
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