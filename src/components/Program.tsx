import React, { useRef, useState } from 'react'
import './Program.css'
import logo2 from '../assets/Logo2.svg'
import programImg from '../assets/cropped-kick-pads.png'
import programImgDesktop from '../assets/Male Holding Kickpad for Female.png'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'program', label: 'Program' },
  { id: 'rates', label: 'Rates' },
  { id: 'coaches', label: 'Coaches' },
]

export default function Program({ id }: { id?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const sectionRefs = useRef({})

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="program-bg" id={id}>
      <div className="program-card">
        {/* Mobile: programImg as overlay */}
        <img src={programImg} alt="Program" className="program-img-mobile" />
        {/* Header stays fixed */}
        <div className="program-header-row">
          <img src={logo2} alt="Art of Eight Logo" className="program-logo" />
          <nav className="burger-nav">
            <button className="burger-btn" onClick={() => setMenuOpen((o) => !o)}>
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
        </div>

        {/* Scrollable content */}
        <div className="program-content">
          <div ref={(el) => (sectionRefs.current.home = el)}>
            <h1 className="program-title">DYNAMIC</h1>
            <h2 className="program-subtitle">STRIKING SYSTEM</h2>
            <p className="program-desc">
              Learn a system that blends offense and defense—ideal for beginners and enthusiasts
              alike. Classes emphasize striking form, footwork patterns, combinations unique to the
              system, and how it all ties together through instruction, repetitive drilling, bag
              work, partner pad work, and more.
            </p>
            <button
              className="program-cta-btn"
              onClick={() =>
                window.open(
                  'https://prettyform.addxt.com/a/form/vf/1FAIpQLScOT38dfczSagkZELuYpFHSbLY99n6Lh4IEpF6Ps5C1JE_6bw',
                  '_blank'
                )
              }
            >
              MEMBERSHIP
            </button>
          </div>

          <div className="program-section--right">
            <h1 className="program-title">ACTION-PACKED</h1>
            <h2 className="program-subtitle">50-MINUTE CLASSES</h2>
            <p className="program-desc">
              Prepare for an up-tempo and rewarding 50 minutes. Our classes condense the power and
              precision of Bang Muay Thai into a dynamic, high-energy format. From focused warm-ups
              to explosive striking drills, every minute is designed to challenge you, build your
              skills, and deliver an invigorating full-body workout. It's the perfect way to inject
              effective martial arts training and performance fitness into your demanding schedule.
            </p>
            <button className="program-cta-btn" onClick={() => setShowModal(true)}>
              BOOK A CLASS
            </button>
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
                    window.open(
                      'https://prettyform.addxt.com/a/form/vf/1FAIpQLScOT38dfczSagkZELuYpFHSbLY99n6Lh4IEpF6Ps5C1JE_6bw',
                      '_blank'
                    )
                  }
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="program-image-col">
        <img src={programImgDesktop} alt="Program" className="program-image" />
      </div>
    </div>
  )
}
