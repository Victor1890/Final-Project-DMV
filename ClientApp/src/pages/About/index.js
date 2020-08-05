import React from "react";
import Team from "../Team/Team";

export default function () {
  return (
    <>
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Quienes Somos</h2>
              <h3 className="section-subheading text-muted">
                Nuestra Historia
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="subheading">Nuestro Comienzo</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                       Constrimos nuestro negocio despues de meses de trabajo forzado, arregalndo computadoras y creando paginas web
                       todo con el objetivo de hacer un sistema diferente.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Marzo 2011</h4>
                      <h4 className="subheading">Nacen la alianzas</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Debido al exito que habiamos cosechado, La nacional y el ccn nos llamaron para formar 
                        una alianza temporal que haria un antes y un despues a nuestra empresa
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Enero de  2020</h4>
                      <h4 className="subheading">Covid19 ataca</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                       Nuestra empresa crea mas exito a partir de la pandemia del Covid 19,
                       en este momento nos enmarcamos una meta de llegar al donativo de un millon de pesos para el 
                       desarrollo de una vacuna
                      </p>
                    </div>
                  </div>
                </li>
                
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Se Parte
                      <br />
                      de Nuestra
                      <br />
                      Historia!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Team/>
    </>
  );
}
