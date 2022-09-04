import React from 'react';
import "./footer.css"
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Sergio from '../../assets/SergioFoto.jpeg'
import Logo from '../../assets/LogoRed2.png'


const Footer = () => {
  return (
    <div className="mt-5 containerFooter">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#000000", height: "20" }}
      >

        <div className="container p-4 pb-0">

          <section className="">

            <div className="row">

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  E- Comics
                </h5>
                <p>
                  Proyecto grupal final del bootcamp Soy Henry
                </p>
                <img src={Logo} alt="logo" width={270} height={180} className="mt-5" />
              </div>

              <div className="col-md-9 col-lg-9 col-xl-9 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">Developers Team</h5>
                <div className="containerDevs">
                  <div className="containerDev">
                    <h6>Daniel Gonzalez Avila</h6>
                    <img src={Sergio} className="imgRedonda mt-3" />
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
                    <img src={Sergio} className="imgRedonda mt-3" />
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
                    <img src={Sergio} className="imgRedonda mt-3" />
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
                    <img src={Sergio} className="imgRedonda mt-3" />
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
                    <img src={Sergio} className="imgRedonda mt-3" />
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
                    <img src={Sergio} className="imgRedonda mt-3" />
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
                    <h6>Nathalia Setefania Beleño</h6>
                    <img src={Sergio} className="imgRedonda mt-3" />
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
          </section>

        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="#"
          >E- Comics </a
          >
        </div>
      </footer>

    </div>
  )
}


export default Footer