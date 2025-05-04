import React, { useState } from 'react'
import './Coaches.css'
import logo2 from '../assets/Logo2.svg'

const randomImg =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&facepad=2'

const coaches = [
  { name: 'COACH CHRIS', img: randomImg },
  { name: 'COACH RON', img: randomImg },
]

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'program', label: 'Program' },
  { id: 'rates', label: 'Rates' },
  { id: 'coaches', label: 'Coaches' },
]

export default function Coaches({ id }: { id?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="coaches-bg" id={id}>
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
      <div className="coaches-header">MEET THE TEAM</div>
      <div className="coaches-list">
        {coaches.map((coach) => (
          <div className="coach-card" key={coach.name}>
            <img src={coach.img} alt={coach.name} className="coach-img" />
            <div className="coach-name">{coach.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
