'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock3, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-page-shell">
        <Link href="/#contact" className="text-link inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <div className="contact-page-layout mt-8">
          <section className="contact-page-intro" aria-labelledby="contact-page-title">
            <p className="eyebrow eyebrow-dark">Let&apos;s get you moving</p>
            <h1 id="contact-page-title" className="section-title mt-4">Contact us.</h1>
            <p className="large-copy mt-6">Have a question about your feet or want to schedule a visit? Send us a message and our team will get back to you.</p>
            <div className="contact-details contact-info-card">
              <div className="contact-info-kicker">LAREDO FAMILY FOOT CENTER</div>
              <div className="contact-row"><MapPin /><div><strong>Visit us</strong><p>604 Shiloh Dr., Ste. #1<br />Laredo, TX 78045</p></div></div>
              <div className="contact-row"><Clock3 /><div><strong>Office hours</strong><p>Mon–Wed: 9:00 am–3:30 pm<br />Thursday: 9:00 am–5:30 pm<br />Friday: 9:00 am–12:00 pm</p></div></div>
              <div className="contact-row"><Mail /><div><strong>Email</strong><p><a href="mailto:lffc@yahoo.com">lffc@yahoo.com</a></p></div></div>
            </div>
          </section>
          <form className="contact-page-form contact-form" onSubmit={(event) => { event.preventDefault(); event.currentTarget.reset() }}>
            <div className="contact-form-heading"><p className="eyebrow eyebrow-dark">We&apos;re here to help</p><h2>Send us a message</h2></div>
            <div className="contact-fields">
              <label><span>First name</span><input name="firstName" autoComplete="given-name" required /></label>
              <label><span>Last name</span><input name="lastName" autoComplete="family-name" required /></label>
              <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required /></label>
              <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
              <label className="contact-message"><span>Message</span><textarea name="message" rows={7} required /></label>
            </div>
            <button type="submit" className="button button-primary contact-submit">Send message <ArrowRight size={16} /></button>
          </form>
        </div>
      </div>
    </main>
  )
}
