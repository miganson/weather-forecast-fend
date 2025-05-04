import React, { useState } from 'react'
import './Rates.css'
import classBg from '../assets/Class.png'
import logo2 from '../assets/Logo2.svg'

const packs = [
  { title: 'ONE CLASS', price: '₱1,000', desc: '' },
  { title: '6-PACK', price: '₱5,000', desc: '6 Classes, 1-Month Validity' },
  { title: '12-PACK', price: '₱7,500', desc: '12 Classes, 3-Month Validity' },
  { title: 'MONTHLY', price: '₱6,000', desc: 'Unlimited, 1 month' },
  { title: 'ANNUAL', price: '₱65,000', desc: 'Unlimited, 1 year' },
  { title: 'INTRO', price: '₱2,500', desc: '4 Classes, 1-Month Validity\nOne-time Only' },
]

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'program', label: 'Program' },
  { id: 'rates', label: 'Rates' },
  { id: 'coaches', label: 'Coaches' },
]

export default function Rates({ id }: { id?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="classpacks-bg" id={id} style={{ backgroundImage: `url(${classBg})` }}>
      <div className="classpacks-overlay">
        {/* Header */}
        <div className="rates-header-row">
          <img src={logo2} alt="Logo" className="rates-logo" />
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
        <h1 className="classpacks-title">
          MEMBERSHIP & <br /> CLASS PACKS
        </h1>
        <div className="classpacks-cards">
          {packs.map((pack) => (
            <div className="classpacks-card" key={pack.title}>
              <div className="classpacks-card-title">{pack.title}</div>
              <div className="classpacks-card-price">{pack.price}</div>
              {pack.desc && (
                <div className="classpacks-card-desc">
                  {pack.desc.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="classpacks-actions">
          <button
            className="classpacks-btn classpacks-btn--red"
            onClick={() =>
              window.open(
                'https://prettyform.addxt.com/a/form/vf/1FAIpQLScOT38dfczSagkZELuYpFHSbLY99n6Lh4IEpF6Ps5C1JE_6bw',
                '_blank'
              )
            }
          >
            MEMBERSHIP
          </button>
          <button className="classpacks-btn classpacks-btn--red" onClick={() => setShowModal(true)}>
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
