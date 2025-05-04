import { useRef, useState } from 'react'
import './Home.css'
import cornerArt from '../assets/Corner_Art.png'
import logo2 from '../assets/Logo2.svg'
import instagramIcon from '../assets/instagram-svgrepo-com.svg'
import maleFemaleKicking from '../assets/Male and Female Kicking Same Bag_Zoomed No Text.svg'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'program', label: 'Program' },
  { id: 'rates', label: 'Rates' },
  { id: 'coaches', label: 'Coaches' },
]

function Home({ id }: { id?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="landing-bg" id={id}>
      {/* Corner Art SVG */}
      <img src={cornerArt} alt="Corner Art" className="corner-art-svg" />
      <div
        className="main-card"
        ref={(el) => {
          sectionRefs.current.home = el
        }}
      >
        <nav className="burger-nav">
          <button className="burger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="burger-icon" />
          </button>
          {menuOpen && (
            <div className="burger-dropdown">
              {sections.map((s) => (
                <button key={s.id} onClick={() => scrollToSection(s.id)}>
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </nav>
        <div className="logo-row">
          <img src={logo2} alt="Art of Eight Logo" className="logo2-svg" />
        </div>
        <h1 className="main-header">BANG MUAY THAI</h1>
        <h2 className="main-subheader">WORLD‑CLASS STRIKING</h2>
        <p className="main-desc">
          <b>Art of Eight</b> is the sole affiliate of Bang Muay Thai in the Philippines.
          <br />
          Our system blends Dutch‑style and Muay Thai kickboxing—refined through top‑level global
          competition. Classes offer a solid workout while teaching practical striking
          techniques—effective for both self‑defense and the ring for beginners and enthusiasts
          alike.
        </p>
        <div className="cta-row">
          <button
            className="cta-btn membership-btn"
            onClick={() =>
              window.open(
                'https://prettyform.addxt.com/a/form/vf/1FAIpQLScOT38dfczSagkZELuYpFHSbLY99n6Lh4IEpF6Ps5C1JE_6bw',
                '_blank'
              )
            }
          >
            MEMBERSHIP
          </button>
          <button className="cta-btn membership-btn" onClick={() => setShowModal(true)}>
            BOOK A CLASS
          </button>
        </div>
        <div
          className="location-row"
          ref={(el) => {
            sectionRefs.current.location = el
          }}
        >
          <span className="location">ROCKWELL ATLETICA</span>
          <span className="insta">
            <img src={instagramIcon} alt="Instagram" className="insta-icon" />
            @artofeightph
          </span>
        </div>
      </div>
      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-popup" onClick={(e) => e.stopPropagation()}>
            <div className="modal-question">
              Do you have an <u>active</u>
              <br />
              Membership / Class Pack?
            </div>
            <div className="modal-btn-row">
              <button
                className="modal-btn modal-btn--red"
                onClick={() =>
                  (window.location.href =
                    'https://www.supersaas.com/schedule/Art_of_Eight/Art_of_Eight')
                }
              >
                YES
              </button>
              <button
                className="modal-btn modal-btn--red"
                onClick={() =>
                  (window.location.href =
                    'https://prettyform.addxt.com/a/form/vf/1FAIpQLScOT38dfczSagkZELuYpFHSbLY99n6Lh4IEpF6Ps5C1JE_6bw')
                }
              >
                NO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
