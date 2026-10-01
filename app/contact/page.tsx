'use client'

import Link from 'next/link'
import { ArrowRight, CircleCheck, Clock3, Mail, MapPin, Phone } from 'lucide-react'

const services = [
  { href: '/foot-pain', label: 'Diagnose and treat foot pain and foot ailments' },
  { href: '/heel-pain', label: 'Relieve heel pain like plantar fasciitis and heel spurs' },
  { href: '/ankle-pain', label: 'Treat ankle pain, sprains, and limited mobility' },
  { href: '/wound-care', label: 'Care for diabetic wounds and ulcers early' },
]

export default function ContactPage() {
  return (
    <>
      <main className="cx-page">
        <div className="cx-shell">
          <header className="cx-intro">
            <p className="cx-eyebrow">Contact us</p>
            <h1 className="cx-title">Get in touch with us</h1>
            <p className="cx-lede">
              Fill out the form below or give us a call. We accept walk-ins as well as scheduled appointments.
            </p>
          </header>

          <div className="cx-grid">
            <section aria-labelledby="cx-form-title">
              <h2 id="cx-form-title" className="sr-only">Send us a message</h2>
              <form className="cx-form" onSubmit={(event) => { event.preventDefault(); event.currentTarget.reset() }}>
                <div className="cx-row">
                  <label className="cx-field">
                    <span>First name</span>
                    <input name="firstName" autoComplete="given-name" placeholder="Your first name" required />
                  </label>
                  <label className="cx-field">
                    <span>Last name</span>
                    <input name="lastName" autoComplete="family-name" placeholder="Your last name" required />
                  </label>
                </div>
                <label className="cx-field">
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" placeholder="Enter your email" required />
                </label>
                <label className="cx-field">
                  <span>Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone" required />
                </label>
                <label className="cx-field">
                  <span>Message</span>
                  <textarea name="message" rows={5} placeholder="Tell us how we can help" required />
                </label>
                <button type="submit" className="cx-submit">
                  Send your request <ArrowRight size={16} aria-hidden="true" />
                </button>
              </form>

              <div className="cx-direct">
                <p className="cx-subhead">You can also contact us via</p>
                <div className="cx-direct-links">
                  <a href="mailto:lffc@yahoo.com">
                    <span className="cx-circle"><Mail size={16} aria-hidden="true" /></span>
                    lffc@yahoo.com
                  </a>
                  <a href="tel:+19567123338">
                    <span className="cx-circle"><Phone size={16} aria-hidden="true" /></span>
                    (956) 712-FEET (3338)
                  </a>
                </div>
              </div>
            </section>

            <aside className="cx-aside" aria-label="Clinic information">
              <p className="cx-subhead">With our services you can</p>
              <ul className="cx-checks">
                {services.map((service) => (
                  <li key={service.href}>
                    <CircleCheck size={18} aria-hidden="true" />
                    <Link href={service.href}>{service.label}</Link>
                  </li>
                ))}
              </ul>

              <div className="cx-details">
                <div>
                  <p className="cx-detail-title"><MapPin size={16} aria-hidden="true" /> Visit us</p>
                  <p>604 Shiloh Dr., Ste. #1<br />Laredo, TX 78045</p>
                  <a
                    className="cx-detail-link"
                    href="https://www.google.com/maps/dir/?api=1&destination=604+Shiloh+Dr,+Laredo,+TX+78045"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions
                  </a>
                </div>
                <div>
                  <p className="cx-detail-title"><Clock3 size={16} aria-hidden="true" /> Office hours</p>
                  <p>
                    Mon–Wed: 9:00 am–3:30 pm<br />
                    Thursday: 9:00 am–5:30 pm<br />
                    Friday: 9:00 am–12:00 pm
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
