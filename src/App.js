import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Remote from './images/undraw_working_remotely'

import {
  LogoDelivraide,
  PictureOne,
  PictureTwo,
  HeroBanner,
  InformaticOperation,
  LogoColored,
  StudentDiscord,
  Maraudes,
  Map,
} from "./images/index";

import {
  Franprix,
  Letudiant,
  FondationCarrefour,
  Mediavenir,
  Pepsico,
  Phenyx,
  Nexity,
  FondationBoulanger,
  BanqueDeFrance
} from "./images/media_logo/index";

import { photos } from "./images/photos";

import Brut from "./images/media_logo/Brut_logo";
import FranceInter from "./images/media_logo/France_Inter_logo";
import FranceTrois from "./images/media_logo/FranceTrois_logo";

import Opinion from "./Components/Opinion";
import ProjectCard from "./Components/ProjectCard";

import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  const [notif, setNotif] = useState(true);

  const handleDismiss = () => {
    setNotif(false);
  };

  useEffect(() => {
    const copyright = document.getElementById("currentYear");
    copyright.innerText = new Date().getFullYear();
  }, []);

  return (
    <div>
      {notif ? <header className="google_opinions" id="notification_opinion">
        <span>
          Que pensez-vous de l’Equipage Solidaire ?{" "}
          <a
            href="https://g.page/r/CZHYtPxGPXXNEBE/review"
            target="_blank"
            rel="noreferrer"
          >
            Je donne mon avis
          </a>
        </span>
        <button onClick={() => handleDismiss()}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </header> : null}
      <nav className="navbar">
        <img
          className="navbar__logo"
          src={LogoColored}
          alt="Logo équipage solidaire"
        />
        <ul className="navbar__link_container">
          <li className="navbar__link_item">
            <a href="#project">Accueil</a>
          </li>
          <li className="navbar__link_item">
            <a href="#section-id">À propos</a>
          </li>
          <li className="navbar__link_item">
            <a href="#project">Nos projets</a>
          </li>
          <li className="navbar__link_item">
            <a href="#join">Nous rejoindre</a>
          </li>
          <li className="navbar__link_item">
            <a href="#contact">Contact</a>
          </li>
          <li className="navbar__link_item">
            <a href="#partner">Nos partenaires</a>
          </li>
        </ul>
      </nav>
      <main>
        {/* Hero banner */}
        <section className="hero">
          <img className="hero__banner" src={HeroBanner} alt="team" />
          <div className="hero__center">
            <h1 className="hero__center_title">Notre mission</h1>
            <a
              className="hero__center_btn"
              href="https://youtu.be/huL2chtHwgI"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-magnifying-glass"></i> Découvrez notre
              vocation
            </a>
          </div>
        </section>
        {/* Who are we section */}
        <article className="presentation">
          <h1 className="presentation__title">Qui somme-nous ?</h1>
          <div className="presentation__subcontainer">
            <div className="presentation__subcontainer_left">
              <p className="presentation__subcontainer_paragraph">
                Née du travail et de l'enthousiasme de 5 jeunes, l'Équipage
                Solidaire est une association de 67 membres, à l’origine de la
                plateforme de livraison gratuite Delivr'aide, venant en aide aux
                étudiants en situation de précarité par la livraison de paniers
                repas constitués d’invendus alimentaires et de produits de
                premières nécessités. L'association poursuit chaque jour son
                objectif de mise en place d'un réseau d'entraide, physique et
                virtuel, au niveau national, entre tout type de personne dans le
                besoin. Notamment à travers le développement quotidien d'un Drive
                libre, regroupant des cours accessibles gratuitement et en
                permanence, mais aussi la livraison hebdomadaire d’invendus, de
                denrées alimentaires, et de produits de première nécessité toutes
                les semaines à travers la plateforme Delivr’aide, ou encore
                l'organisation de maraudes et d'action de sensibilisation
                environnementale tel que des clean-walks ou des interventions dans
                les collèges/lycées. Entraide, cohésion et fraternité sont autant
                de principes guidant, chaque jour, la réalisation de chacune de
                nos actions et nous permettant de croire en un avenir meilleur.
              </p>
              <div className="btn_container">
                <Link to="/presentationequipe" className="btn-primary">Découvrir l'équipe</Link>
                <a
                  className="btn-primary"
                  href="https://drive.google.com/file/d/1AkFPf-PFVvvNx8fJNPjsh3Ah77PHvOSr/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Découvrez notre rapport d'activité
                </a>
                <a
                  className="btn-primary"
                  href="https://deli-wiki.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Découvrez notre histoire
                </a>
              </div>
            </div>
            <div className="presentation__subcontainer_right">
              <img
                className="presentation__subcontainer_left_logo"
                src={LogoColored}
                alt="Logo equipage solidaire"
              />
            </div>
          </div>
        </article>
        {/* Current projects section */}
        <section className="projects" id="project">
          <div className="projects_container">
            <h1 className="projects__title">Nos projets en cours</h1>
            <div className="carousel__container">
              <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  1408: {
                    slidesPerView: 4,
                    spaceBetween: 100,
                  },
                }}
              >
                <SwiperSlide>
                  <ProjectCard
                    tags="SOLIDARITÉ ET INSERTION"
                    logo={LogoDelivraide}
                    name="Delivr'aide"
                    description="Plateforme de livraison gratuite de repas à destination
                        des étudiants en difficulté."
                    link="https://delivraide.org/"
                    cta="Nous rejoindre"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProjectCard
                    tags="ÉDUCATION POUR TOUS"
                    logo={InformaticOperation}
                    name="Opération informatique"
                    description="Distribution de kit informatique aux personnes isolées
                        et touchées par la fracture numérique."
                    link="https://delivraide.org/"
                    cta="Nous rejoindre"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProjectCard
                    tags="ÉDUCATION POUR TOUS"
                    logo={StudentDiscord}
                    name="Discord Étudiant"
                    description="Relai numériques au service de l’orientation et de la
                        formation pour jeunes."
                    link="https://delivraide.org/"
                    cta="Nous rejoindre"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProjectCard
                    tags="SOLIDARITÉ"
                    logo={Maraudes}
                    name="Maraudes"
                    description="Relai numériques au service de l’orientation et de la
                        formation pour jeunes."
                    link="https://delivraide.org/"
                    cta="Nous rejoindre"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* Map info. section */}
        <section className="map" id="join">
          <div className="map_container">
            <h1 className="map__title">
              <span className="map__title_first">Engagez vous </span>
              <span className="map__title_second">près de chez vous</span>
            </h1>
            <div className="map__subsection">
              <div className="map__left">
                <div className="map__left_city_tag_container">
                  <div>
                    <span className="map__left_city_tag">Paris</span>
                    <span className="map__left_city_tag">Valenciennes</span>
                    <span className="map__left_city_tag">Montreuil</span>
                  </div>
                  <div>
                    <span className="map__left_city_tag">Viroflay</span>
                    <span className="map__left_city_tag">
                      Vélizy-Villacoublay
                    </span>
                    <span className="map__left_city_tag">Lyon</span>
                  </div>
                  <div>
                    <span className="map__left_city_tag">Montpellier</span>
                    <span className="map__left_city_tag">Le Havre</span>
                  </div>
                </div>
                <div className="map__left_remote">
                  <Remote />
                  <div className="map__left_remote_subcontainer">
                    <h3 className="map__left_remote_title">
                      <span className="map__left_remote_title_first">Ou </span>
                      <span className="map__left_remote_title_second">
                        à distance
                      </span>
                    </h3>
                    <p className="map__left_remote_description">
                      Nous recherchons de nombreux bénévoles pour des missions
                      réalisables en autonomie
                    </p>
                    <a className="map__left_remote_link" href="/">
                      Rejoindre l'Équipage
                    </a>
                  </div>
                </div>
              </div>
              <div className="map__right">
                <img src={Map} alt='map' />
              </div>
            </div>
          </div>
        </section>
        {/* Media talking about us section */}
        <section className="media" id="partner">
          <div className="media__logo_container">
            {/* Partners */}
            <h1 className="media__title">Ils nous soutiennent</h1>
            <div className="media__logo_subcontainer">
              <img
                id="pepsico_logo"
                width='200'
                className="media__logo_item"
                src={Pepsico}
                alt="media logo"
              />
              <img
                id="nexity_logo"
                width='125'
                className="media__logo_item"
                src={Nexity}
                alt="media logo"
              />
              <img
                id="franprix_logo"
                width='200'
                className="media__logo_item"
                src={Franprix}
                alt="media logo"
              />
              <img
                id="fondation_logo"
                className="media__logo_item"
                src={FondationCarrefour}
                width='200'
                alt="media logo"
              />
            </div>
            {/* Medias */}
            <h1 className="media__title">Ils parlent de nous</h1>
            <div className="media__logo_subcontainer">
              <img
                id="phenyx_logo"
                width='200'
                className="media__logo_item"
                src={FondationBoulanger}
                alt="media logo"
              />
              <Brut />
              <FranceTrois />
              <img
                id="mediavenir_logo"
                width='250'
                className="media__logo_item"
                src={BanqueDeFrance}
                alt="media logo"
              />
              <img
                id="letudiant_logo"
                width='150'
                className="media__logo_item"
                src={Letudiant}
                alt="media logo"
              />
              <FranceInter />
            </div>
          </div>
        </section>
        {/* Beneficiaries opinions */}
        <section className="opinion">
          <div className="opinion-container">
            <span className="title"><h1 className="opinion__title">Parole de bénéficiaire</h1><a href="https://www.google.com/maps/place/Equipage+Solidaire/@48.8787571,2.3478811,17z/data=!4m7!3m6!1s0x47e66f1f40e138f7:0xcd753d46fcb4d891!8m2!3d48.8787571!4d2.3478811!9m1!1b1" target="_blank" rel="noreferrer">Découvrir tous les avis !</a></span>
            <div className="carousel__container">
              <Swiper
                modules={[Pagination, A11y, Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 10000 }}
                loop={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <Opinion
                    text="Équipe super sympa ! Livraison bien reçue avec pleins de produits !! Au top je recommande 🦾"
                    project="Delivr'aide"
                    role="Bénéficiaire du projet"
                    name="Jeanne Pcq"
                    profile={PictureOne}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Opinion
                    text="Bonjour, je viens de recevoir mon kit et franchement grand merci! Y' a tellement de trucs, je suis choqué, même des soins hygiène et tout 🙏🏻 Merci beaucoup pour tout ce que vous faites. J'espère pouvoir vous accompagner lors de prochaines actions."
                    project="Delivr'aide"
                    role="Bénéficiaire du projet"
                    name="Abdou Mrehouri"
                    profile={PictureTwo}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Opinion
                    text="Très belle initiative,  j'ai reçu un panier aujourd'hui bien rempli.  Je suis très heureuse ! Merci beaucoup à vous"
                    project="Delivr'aide"
                    role="Bénéficiaire du projet"
                    name="Sarr Stephanie Bohe"
                    profile={PictureTwo}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Opinion
                    text="Un grand merci à l’équipe . Une très chaleureuse équipe j’ai été accueillie afin de récupéré mon kit avec tellement de joie Merci pour tout ce que vous faites pour nous ❤️❤️❤️"
                    project="Delivr'aide"
                    role="Bénéficiaire du projet"
                    name="Fatim Soumahoro"
                    profile={PictureTwo}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Opinion
                    text="Merci pour votre générosité, équipe sympa, disponible, des colis  au top livrés avec amour merci je vais me régaler. "
                    project="Delivr'aide"
                    role="Bénéficiaire du projet"
                    name="Mbene Toure"
                    profile={PictureTwo}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* Donation */}
        <article className="help">
          <div className="help-container">
            <h1 className="help__title">Nous soutenir</h1>
            <div className="help__subcontainer">
              <p className="help__subcontainer_paragraph">
                Vos dons permettent l'achat de sacs, denrées alimentaires et
                produits hygiéniques par nos bénévoles pour compléter les kits
                distribués chaque semaine, mais aussi pour louer nos locaux, et
                payer l'hébergement ! Chaque geste compte !
              </p>
              <div className="help__btn_container">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfSWwXNUGmKPn1fJ3eAOqNP_JEVkoY-LezpyOLniUQLVMG9Rw/viewform"
                  rel="noreferrer"
                  className="btn-primary"
                  target="_blank"
                >
                  Don en nature
                </a>
                <a
                  href="https://www.helloasso.com/associations/l-equipage-solidaire/formulaires/2/widget"
                  rel="noreferrer"
                  className="btn-primary"
                  target="_blank"
                >
                  Don financier
                </a>
              </div>
            </div>
          </div>
        </article>
        {/* Images */}
        <article className="images">
          <div className="images-container">
            <h1 className="images__title">L'Equipage en images</h1>
            <div className="images__subcontainer">
              <Gallery photos={photos} />
            </div>
          </div>
        </article>
      </main>
      <footer id="contact">
        <div className="footer-content">
          <div className="subcontainer">
            <div className="left">
              <a
                href="https://linktr.ee/equipagesolidaire"
                rel="noreferrer"
                className="btn-primary"
                target="_blank"
              >
                <i className="fa-solid fa-link"></i> Linktree
              </a>
              <a
                href="https://linktr.ee/equipagesolidaire"
                rel="noreferrer"
                className="btn-primary"
                target="_blank"
              >
                <i className="fa-solid fa-link"></i> Nous contacter
              </a>
              <ul className="left-link-list">
                <li>
                  <a
                    href="https://www.instagram.com/equipagesolidaire/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram color="#00a6ff" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/equipagesolidaire"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin color="#00a6ff" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Equipagesolidaire/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook color="#00a6ff" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/equipagesolidr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle color="#00a6ff" />
                  </a>
                </li>
              </ul>
            </div>
            <hr className="separator" />
            <div className="right">
              <img
                className="logo"
                src={LogoColored}
                alt="logo equipage solidaire"
              />
            </div>
          </div>
        </div>
        <div className="ocean">
          <span className="copyright">
            Copyright ©<span id="currentYear"></span> L'équipage solidaire. All
            Rights Reserved
          </span>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
