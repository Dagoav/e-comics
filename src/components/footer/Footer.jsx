import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Sergio from '../../assets/devs/SergioFoto.jpeg'
import Daniel from '../../assets/devs/Daniel.jpeg'
import Logo from '../../assets/LogoRed2.png'
import "./footer.css"

const Footer = () => {
  return (
    <div className="containerFooter">
      <footer
        className="text-center text-lg-start text-white footerPage"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="p-4 pb-0">

          <div className="sectionFooter">

            <div className="row">

              <div className="col-md-3 col-lg-3 col-xl-3">
                <h5 className="text-uppercase font-weight-bold">
                  E- Comics
                </h5>
                <p>
                  Proyecto grupal final del bootcamp Soy Henry
                </p>
                <img src={Logo} alt="logo" width={200} height={100} className="mt-5" />
              </div>

              <div className="col-md-9 col-lg-9 col-xl-9">
                <h5 className="text-uppercase mb-4 font-weight-bold">Developers Team</h5>
                <div className="containerDevs">
                  <div className="containerDev">
                    <h6>Daniel Gonzalez Avila</h6>
                    <img src={Daniel} className="imgRedonda mt-1" alt='' />
                    <div className="containerIcons">
                      <a className="github" href='https://www.google.com.ar'>
                        <BsGithub />
                      </a>
                      <a href='https://www.linkedin.com/in/sergio-moyano-a-1425b6a/'>
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>

                  <div className="containerDev">
                    <h6>Jorge Alejandro Gonzales Firigua</h6>
                    <img src={Sergio} className="imgRedonda mt-1" alt='' />
                    <div className="containerIcons">
                      <a className="github" href='https://www.google.com.ar'>
                        <BsGithub />
                      </a>
                      <a href='https://www.linkedin.com/in/sergio-moyano-a-1425b6a/'>
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>

                  <div className="containerDev">
                    <h6>Juan Carlos Ramirez Pinilla</h6>
                    <img src={Sergio} className="imgRedonda mt-1" alt='' />
                    <div className="containerIcons">
                      <a className="github" href='https://www.google.com.ar'>
                        <BsGithub />
                      </a>
                      <a href='https://www.linkedin.com/in/sergio-moyano-a-1425b6a/'>
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>

                  <div className="containerDev">
                    <h6>Antonella Sol Román</h6>
                    <img src={Sergio} className="imgRedonda mt-1" alt='' />
                    <div className="containerIcons">
                      <a className="github" href='https://www.google.com.ar'>
                        <BsGithub />
                      </a>
                      <a href='https://www.linkedin.com/in/sergio-moyano-a-1425b6a/'>
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>

                  <div className="containerDev">
                    <h6>Johan Stiven Turmeque</h6>
                    <img src={Sergio} className="imgRedonda mt-1" alt='' />
                    <div className="containerIcons">
                      <a className="github" href='https://www.google.com.ar'>
                        <BsGithub />
                      </a>
                      <a href='https://www.linkedin.com/in/sergio-moyano-a-1425b6a/'>
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>

                  <div className="containerDev">
                    <h6>Sergio Daniel Moyano</h6>
                    <img src={Sergio} className="imgRedonda mt-1" alt='' />
                    <div className="containerIcons">
                      <a className="github" href='https://www.google.com.ar'>
                        <BsGithub />
                      </a>
                      <a href='https://www.linkedin.com/in/sergio-moyano-a-1425b6a/'>
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div
          className="text-center p-3 footerCopyR"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="/home"
          > E- Comics </a
          >
        </div>

      </footer>
    </div>
  )
}


export default Footer