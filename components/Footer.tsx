import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="section footer-classic context-dark">
        <div className="container wide">
          <div className="list-wrapper">
            <div className="row row-sm-30">
              <div className="col-sm-4 col-md-4 col-lg-3">
                <p>Aplicativo</p>
                <ul className="list">
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Acessar App
                    </a>
                  </li>
                  <li>
                    <a href="personalize" data-waypoint-to="#">
                      Solicitar personalização
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-3">
                <p>Beautyrel</p>
                <ul className="list">
                  <li>
                    <a href="about" data-waypoint-to="#">
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a href="contact" data-waypoint-to="#">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-3">
                <p>Ajuda</p>
                <ul className="list">
                  <li>
                    <a href="terms" data-waypoint-to="#">
                      Termos
                    </a>
                  </li>
                  <li>
                    <a href="privacy-policy" data-waypoint-to="#">
                      Política de Privacidade
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-3">
                <Image
                  src="/images/footer-1-280x156.jpg"
                  alt=""
                  width={280}
                  height={156}
                />
                <p>Beautyrel</p>
                <div className="date"> Desde Janeiro de 2024</div>
              </div>
            </div>
          </div>
          <div className="row row-sm-30">
            <div className="col-lg-6">
              <div className="group-md group-middle">
                <p className="rights">
                  <span>©&nbsp; </span>
                  <span className="copyright-year" />
                  <span>&nbsp;</span>
                  <span>Beautyrel</span>
                  <span>.&nbsp;</span>
                  <a href="privacy-policy">Política de Privacidade</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-right">
                <ul className="group-xl group-middle">
                  <li>
                    <a
                      className="icon icon-default icon-sm mdi mdi-android"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-default icon-sm mdi mdi-apple"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-default icon-sm mdi mdi-instagram"
                      href="#"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
}
