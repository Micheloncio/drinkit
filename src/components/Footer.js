import React from 'react'
import './Footer.css'

const Footer= ()=>(
      <footer className="page-footer indigo center-on-small-only pt-0">
          <div className="container">
            <div className="row rowMargin">
              <div className="col-md-5 col-md-offset-1">
                   © 2017 Copyright  <a className="aColor" href="http://www.alcoholicos-anonimos.org/v_portal/apartados/apartado.asp" target="_blank"> Alcholicos Anonimos </a>
              </div>
              <div className="col-md-4 col-md-offset-2">
                   Created by  <a className="aColor" href="https://github.com/GemmaGarcias" target="_blank"> Gemma, </a>
                   <a className="aColor" href="https://github.com/codeshakti" target="_blank"> Victor, </a>
                   <a className="aColor" href="https://github.com/Micheloncio" target="_blank"> Michel </a>
              </div>
            </div>
          </div>
      </footer>
)

export default Footer