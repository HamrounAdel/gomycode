import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className=''>
   <footer className="footer">
  <div className="container row">
    <div className="footer-col">
      <h4>A propos de nous</h4>
      <ul>
        <li>
          <a href="#">Qui sommes-nous ?</a>
        </li>
        <li>
          <a href="#">Mentions légales et CGU</a>
        </li>
        <li>
          <a href="#">Gestions des cookies</a>
        </li>
        <li>
          <a href="#">visit website</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Trouvez votre specialite</h4>
      <ul>
        <li>
          <a href="#">Médecin généraliste</a>
        </li>
        <li>
          <a href="#">Pédiatre</a>
        </li>
        <li>
          <a href="#">Chirurgien dentiste</a>
        </li>
        <li>
          <a href="#">Sage-femme</a>
        </li>
        <li>
          <a href="#">Cardiologue</a>
        </li>
        <li>
          <a href="#">Pédicure-podologue</a>
        </li>
        <li>
          <a href="#">Ophtalmologue</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>informations et Articles</h4>
      <ul>
        <li>
          <a href="#">Nos articles pharmacie</a>
        </li>
        <li>
          <a href="#">Nos articles kiné</a>
        </li>
        <li>
          <a href="#">Nos articles médecin généraliste</a>
        </li>
        <li>
          <a href="#">Presse</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Contact</h4>
      <div className="social-links">
        <a href="#">
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a href="#">
          <i className="fa-brands fa-x-twitter" />
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin-in" />
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
