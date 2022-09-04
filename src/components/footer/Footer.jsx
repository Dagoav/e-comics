import React from 'react';
import "./footer.css"
import { BsLinkedin, BsGithub } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className="mt-5">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#000000" }}
      >

        <div className="container p-4 pb-0">

          <section className="">

            <div className="row">

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  E- Comics
                </h6>
                <p>
                  Proyecto grupal final del bootcamp Soy Henry
                </p>
              </div>

              <div className="col-md-7 col-lg-7 col-xl-7 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Developers Team</h6>
                <div className="containerDevs">
                  <div className="containerDev">
                    <h7>Sergio Moyano</h7>
                    <img />
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
                    <h7>Sergio Moyano</h7>
                    <img />
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
                    <h7>Sergio Moyano</h7>
                    <img />
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
                    <h7>Sergio Moyano</h7>
                    <img />
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
                    <h7>Sergio Moyano</h7>
                    <img />
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
                    <h7>Sergio Moyano</h7>
                    <img />
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
                    <h7>Sergio Moyano</h7>
                    <img />
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