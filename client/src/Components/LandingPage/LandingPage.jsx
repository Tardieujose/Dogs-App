import React from "react";
import s from "./LandingPage.module.css";
import {Link} from "react-router-dom";
import Footer from "../Footer/Footer";
import perro_front from "../../images/perro_front.jpg"

function LandingPage() {
  return(
    <div>
      {/* --- header --- */}
      <header>
        <nav>
          <span className={s.logo}>DOGS</span>
          <Link to="/home" className={s.acceder}>Acceder</Link>
        </nav>
      </header>
      {/* --- main --- */}
      <main>
        <div className={s.main_left}>
          <h1 className={s.titulo}>Todos necesitamos un mejor amigo <span className={s.titulo_perro}>Perruno</span></h1>
          <p className={s.sub_titulo}>Entra y descubre todo sobre tu mejor amigo o futuro mejor amigo.</p>
        </div>

        <div className={s.main_right}>
          <div className={s.div_hero}>
            <img className={s.hero} src={perro_front} alt="hero" />            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage;