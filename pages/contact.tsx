import Footer from "@/components/Footer";
import Head from "next/head";
import Layout from "@/components/Layout";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contacts</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=DM+Sans:400,400i,500,500i,700,700i&display=swap"
        />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/fonts.css" />
        <link rel="stylesheet" href="css/style.css" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".ie-panel{display: none;background: #212121;padding: 10px 0;box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3);clear: both;text-align:center;position: relative;z-index: 1;} html.ie-10 .ie-panel, html.lt-ie-10 .ie-panel {display: block;}"
          }}
        />
      </Head>

      <header className="section page-header">
        {/*RD Navbar*/}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {/*RD Navbar Panel*/}
                <div className="rd-navbar-panel">
                  {/*RD Navbar Toggle*/}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {/*RD Navbar Brand*/}
                  <div className="rd-navbar-brand">
                    {/*Brand*/}
                    <a className="brand" href="/">
                      <img
                        className="brand-logo-dark"
                        src="images/logo-default-428x112.png"
                        alt=""
                        width={214}
                        height={56}
                      />
                      <img
                        className="brand-logo-light"
                        src="images/logo-inverse-430x112.png"
                        alt=""
                        width={215}
                        height={56}
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item ">
                        <a className="rd-nav-link" href="index">
                          Inicio
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about">
                          Sobre
                        </a>
                      </li>
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="contact">
                          Contato
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rd-nav-item">
                  <div className="btn-wrap">
                    <a className="button button-secondary button-sm" href="#">
                      Acessar App
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <Layout>

        <section className="section-lg bg-secondary">
          <div className="container wide">
            <div className="text-center">
              <h1>Contato</h1>
              <div className="subtitle-2">
                Dúvidas ou sugestões, entre em contato conosco
              </div>
            </div>
          </div>
        </section>
        {/*Mailform*/}
        <section className="section section-xl">
          <div className="container wide">
            <div className="row row-50">
              <div className="col-lg-12">
                <h3>Contato</h3>
                <form
                  className="rd-form rd-form-2 rd-mailform"
                  data-form-output="form-output-global"
                  data-form-type="contact"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div className="row row-40 row-md-60">
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="contact-name"
                          type="text"
                          name="name"
                          data-constraints="@Required"
                        />
                        <label className="form-label" htmlFor="contact-name">
                          Seu nome completo:
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="contact-phone"
                          type="text"
                          name="phone"
                          data-constraints="@Numeric"
                        />
                        <label className="form-label" htmlFor="contact-phone">
                          Telefone:
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap form-wrap-select">
                        <select
                          className="form-input select"
                          name="find-job-location"
                          data-minimum-results-for-search="Infinity"
                        >
                          <option value={1}>Opção</option>
                          <option value={2}>Dúvida</option>
                          <option value={3}>Sugestão</option>
                          <option value={4}>Reclamação</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="message-name"
                          type="text"
                          name="name"
                          data-constraints="@Required"
                        />
                        <label className="form-label" htmlFor="message-name">
                          Mensagem:
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <button
                        className="button button-secondary button-md"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
          <Script src="js/core.min.js" strategy="afterInteractive" />
          <Script src="js/script.js" strategy="afterInteractive" />
    </>

  );
}
