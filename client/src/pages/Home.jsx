import "../style/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faMagnifyingGlass,
  faPhoneVolume,
  faPeopleGroup,
  faUsersViewfinder,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <>
      <div className="home-hero">
        <div className="cover"></div>
        <img
          className="hero"
          src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero"
        ></img>
        <div className="text">
          <h1>We help reunite lost pets with their families</h1>
          <p>
            Enter a photo of your missing pet and search aout national lost and
            found pet database to found them
          </p>
        </div>
      </div>
      <section className="services">
        <div>
          <p>
            To report your lost pet, place a free advert by clicking the link
            below.
          </p>
          <button className="lost">I lost animal</button>
        </div>
        <div>
          <p>
            To report a found pet, place a free advert by clicking the link
            below.
          </p>
          <button className="found">I found animal</button>
        </div>
        <div>
          <p>
            View our map of Indonesia showing all our reported lost and found
            pets.
          </p>
          <button className="map">Pet map</button>
        </div>
      </section>
      <section className="whoweare">
        <h2>Who we are?</h2>
        <div className="container">
          <div>
            <FontAwesomeIcon icon={faCat} size="2xl" />
            <h3>Our website is completely free</h3>
            <p>
              The most advance, free online missingpet matching service in
              Indonesia
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
            <h3>Our website is completely free</h3>
            <p>
              The most advance, free online missingpet matching service in
              Indonesia
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhoneVolume} size="2xl" />
            <h3>Our website is completely free</h3>
            <p>
              The most advance, free online missingpet matching service in
              Indonesia
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPeopleGroup} size="2xl" />
            <h3>Our website is completely free</h3>
            <p>
              The most advance, free online missingpet matching service in
              Indonesia
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUsersViewfinder} size="2xl" />
            <h3>Our website is completely free</h3>
            <p>
              The most advance, free online missingpet matching service in
              Indonesia
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHandshakeAngle} size="2xl" />
            <h3>Our website is completely free</h3>
            <p>
              The most advance, free online missingpet matching service in
              Indonesia
            </p>
          </div>
        </div>
      </section>
      <section className="article">
        <div className="image"></div>
        <div className="content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem sapiente, id facere atque veniam doloribus at autem!
            Nostrum officiis, ea natus, debitis voluptatem tempore incidunt
            consequatur, aspernatur rerum architecto aut!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem sapiente, id facere atque veniam doloribus at autem!
            Nostrum officiis, ea natus, debitis voluptatem tempore incidunt
            consequatur, aspernatur rerum architecto aut!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem sapiente, id facere atque veniam doloribus at autem!
            Nostrum officiis, ea natus, debitis voluptatem tempore incidunt
            consequatur, aspernatur rerum architecto aut!
          </p>
          <a>read more</a>
        </div>
      </section>
    </>
  );
}
