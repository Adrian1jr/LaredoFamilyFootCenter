'use client'

import Link from 'next/link'
import { ArrowRight, Clock3, MapPin, Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-001-910x694-270w-WQh8o2bS2kfSkC8PGiAoSxMP2fcl8Z.webp'

const conditions = [
  ['Bunions, Bunionette and Tailor’s Bunions', 'Hallux Limitus and Hallux Rigidus', 'Flat Feet (Fallen Arches)', 'High Arched Feet'],
  ['Hammertoe', 'Peripheral Neuropathy', 'Stress Fractures', 'Accessory Navicular Syndrome (Extra Bone/Cartilage)'],
  ['Ingrown Toenail', 'Athlete’s Foot', 'Neuromas', 'Charcot Neuroarthropathy'],
  ['Fungal Nail', 'Warts', 'Plantar Fibromas', 'PTTD or Progressive Flatfoot (Posterior Tibial Tendon Dysfunction)'],
  ['Metatarsal Fractures', 'Corns and Calluses', 'Gout', 'LisFranc Fractures'],
  ['Toe Fractures', 'Ganglion Cysts', 'Rheumatoid Arthritis'],
]

export default function FootPainPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="service-page">
      <div className="topbar"><div className="shell flex items-center justify-between gap-4"><span>Serving Laredo & South Texas since 1994</span><a href="tel:+19567123338">Call the office: (956) 712-3338</a></div></div>
      <header className="site-header">
        <div className="shell flex items-center justify-between gap-8 py-4 md:py-5">
          <Link href="/" className="flex items-center gap-3" aria-label="Laredo Family Foot Center home"><img src={logo} alt="Family Foot Center of Laredo logo" className="h-20 w-24 object-contain md:h-24 md:w-32" /><span className="hidden border-l border-[#cd9c9e] pl-4 text-sm leading-tight text-[#662d2e] sm:block">LAREDO FAMILY<br /><strong className="text-[#880303]">FOOT CENTER</strong></span></Link>
          <div className="hidden items-center gap-8 md:flex"><div className="text-right"><p className="font-display text-3xl text-[#880303]">Dr. Daniel Bell, DPM</p><p className="text-xs uppercase tracking-[0.2em] text-[#6d0b0c]">Board-certified podiatry</p></div><a href="tel:+19567123338" className="button button-primary"><Phone size={16} /> Call today</a></div>
          <button className="rounded-full border border-[#cd9c9e] p-3 text-[#880303] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <nav className={`${menuOpen ? 'block' : 'hidden'} border-t border-[#f3d2d4] bg-white md:block`}><div className="shell flex flex-col gap-1 py-3 md:flex-row md:items-center md:justify-between md:py-0"><div className="flex flex-col md:flex-row md:items-center"><Link className="nav-link" href="/#about-dr.-bell">About Dr. Bell</Link><Link className="nav-link" href="/#services">Services</Link><Link className="nav-link" href="/#why-choose-us">Why choose us</Link><Link className="nav-link" href="/#contact">Contact</Link></div><a href="https://www.google.com/maps/dir/?api=1&destination=604+Shiloh+Dr,+Laredo,+TX+78045" target="_blank" rel="noreferrer" className="nav-action"><MapPin size={15} /> Get directions</a></div></nav>
      </header>

      <section className="service-intro page-enter"><div className="shell"><p className="eyebrow eyebrow-dark">Specialized podiatric care</p><h1 className="section-title mt-4">Foot pain specialist</h1><div className="service-copy"><p>Getting you back on your feet and pain free is <strong>Laredo Family Foot Center&apos;s</strong> main goal. We specialize in diagnosing and treating a wide range of foot ailments. 25 years of treating <strong>Laredo</strong> makes us the best choice in the area for your foot needs. Dr. Bell is Board Certified and stays up to date on the latest treatments to better serve our patients.</p><p>We also want to make this process as easy for you as possible. We know your schedule can become very busy. That is why we accept walk-ins as well as scheduled appointments. Whenever you have free time, we are here to assist you. For more information or to schedule your appointment give us a call today at <a href="tel:+19567123338">(956) 712-FEET (3338)</a>.</p></div></div></section>

      <section className="service-feature page-enter delay-1"><div className="shell service-feature-inner"><div className="service-feature-copy"><p className="eyebrow">Personalized treatment</p><h2>Foot pain</h2><p>Laredo Family Foot Center has the experience to effectively diagnose your foot pain. We will recommend our best course of action to treat your pain. What we can guarantee and give you peace of mind, is that we will look and try every option that is non-surgical first. If that does not do the trick, then we can look at surgical options to best correct the pain.</p><a href="tel:+19567123338" className="button button-light mt-6">Talk with our team <ArrowRight size={16} /></a></div><img src="/foot-pain.png" alt="Patient receiving care for foot pain" /></div></section>

      <section className="conditions-section page-enter delay-2"><div className="shell"><p className="eyebrow eyebrow-dark">Comprehensive care</p><h2 className="section-title mt-4">Foot services we offer</h2><div className="conditions-grid grid grid-cols-1 md:grid-cols-3">{[['EVERYDAY CARE', ...conditions.slice(0, 2).flat()], ['INJURIES', ...conditions.slice(2, 4).flat()], ['SPECIALIZED CARE', ...conditions.slice(4, 6).flat()]].map(([label, ...items]) => <div className="condition-column" key={label}><p className="condition-label">{label}</p><ul>{items.map((condition) => <li key={condition}>{condition}</li>)}</ul></div>)}</div></div></section>

      <section className="service-cta page-enter delay-3"><div className="shell flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><p className="eyebrow">Ready for relief?</p><h2>Take your next step with confidence.</h2></div><a href="tel:+19567123338" className="button button-light"><Phone size={16} /> Call (956) 712-3338</a></div></section>

      <footer className="footer"><div className="shell footer-grid"><div className="footer-brand"><img src={logo} alt="Family Foot Center of Laredo logo" className="footer-logo" /><p>Professional foot and ankle care for Laredo families, since 1994.</p><a href="https://www.google.com/maps/dir/?api=1&destination=604+Shiloh+Dr,+Laredo,+TX+78045" target="_blank" rel="noreferrer" className="footer-directions"><MapPin size={16} /> Get directions to our office</a></div><div className="footer-column"><p className="footer-heading">Browse our website</p><Link href="/">Home</Link><Link href="/foot-pain">Services</Link><Link href="/#about-dr.-bell">About Dr. Bell</Link><Link href="/#contact">Contact us</Link></div><div className="footer-column footer-contact"><p className="footer-heading">Contact information</p><p><b>Address</b><br />604 Shiloh Dr., Ste. #1<br />Laredo, TX 78045</p><p><b>Phone</b><br /><a href="tel:+19567123338">(956) 712-3338</a> / <a href="tel:+19567123338">(956) 712-FEET</a></p><p><b>Email</b><br /><a href="mailto:lffc@yahoo.com">lffc@yahoo.com</a></p></div><div className="footer-column footer-hours"><p className="footer-heading">Business hours</p><p><span>Mon – Wed</span><strong>9:00 am – 3:30 pm</strong></p><p><span>Thursday</span><strong>9:00 am – 5:30 pm</strong></p><p><span>Friday</span><strong>9:00 am – 12:00 pm</strong></p><p><span>Sat – Sun</span><strong>Closed</strong></p></div></div><div className="shell footer-bottom"><p>© 2026 Laredo Family Foot Center.</p><p className="footer-credit">Created by <a href="https://laredowebdesigns.com" target="_blank" rel="noreferrer">Laredo Web Designs</a></p><div className="footer-legal"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms &amp; Conditions</a></div></div></footer>
    </main>
  )
}

<style jsx>{`
  .service-page { min-height: 100vh; background: #faf9f8; color: #242022; }
  .service-page .nav-link.active { background: #f3d2d4; color: #880303; }
  .service-intro { background: #fff; padding: 88px 0 78px; }
  .service-intro .section-title { max-width: 700px; text-transform: capitalize; }
  .service-copy { max-width: 1000px; margin-top: 28px; color: #242022; font-size: 17px; line-height: 1.7; }
  .service-copy p + p { margin-top: 18px; }
  .service-copy a { color: #880303; font-weight: 700; text-decoration: underline; }
  .service-feature { position: relative; overflow: hidden; background: #163d1d; color: white; }
  .service-feature::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, #092712e8, #092712a8), url('/foot-care-hero.png') center/cover; opacity: .85; }
  .service-feature-inner { position: relative; display: grid; gap: 42px; align-items: center; padding: 76px 0; }
  .service-feature-copy { max-width: 620px; }
  .service-feature h2, .service-cta h2 { margin-top: 12px; font: 400 clamp(2.5rem, 5vw, 4rem)/1 Georgia, serif; }
  .service-feature-copy > p:last-of-type { margin-top: 20px; color: #fffdfd; font-size: 17px; line-height: 1.7; }
  .service-feature img { width: min(100%, 440px); justify-self: end; aspect-ratio: 1.35; object-fit: cover; box-shadow: 18px 18px 0 #880303; }
  .conditions-section { background: #f5e8e8; padding: 84px 0 92px; }
  .conditions-section .section-title { max-width: 760px; font-size: clamp(3.5rem, 7vw, 5.8rem); line-height: .95; }
  .conditions-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; margin-top: 42px; }
  .condition-column { min-width: 0; padding: 0 36px 0 0; }
  .condition-column + .condition-column { padding-left: 36px; border-left: 1px solid #ddc4c4; }
  .condition-label { margin: 0 0 8px; color: #242022; font-size: 16px; font-weight: 500; letter-spacing: 0; }
  .condition-column ul { list-style: none; margin: 0; padding: 0; }
  .condition-column li { color: #242022; font-size: 16px; line-height: 1.5; }
  .condition-column li::before { content: '+'; margin-right: 3px; }
  .service-cta { background: #662d2e; color: white; padding: 64px 0; }
  .service-cta h2 { max-width: 620px; }
  @media (min-width: 760px) { .service-feature-inner { grid-template-columns: 1.1fr .9fr; } }
  @media (max-width: 760px) { .service-intro { padding: 64px 0 54px; } .service-feature-inner { padding: 56px 0; } .service-feature img { justify-self: start; width: 100%; box-shadow: 10px 10px 0 #880303; } .conditions-section { padding: 62px 0 70px; } .conditions-section .section-title { font-size: clamp(3rem, 13vw, 4.5rem); } .conditions-grid { grid-template-columns: 1fr; gap: 28px; margin-top: 32px; } .condition-column, .condition-column + .condition-column { padding: 0 0 28px; border-left: 0; border-bottom: 1px solid #ddc4c4; } .condition-column:last-child { padding-bottom: 0; border-bottom: 0; } .condition-column li { font-size: 15px; } }
  @media (max-width: 520px) { .conditions-grid { margin-top: 30px; } .conditions-grid ul, .conditions-grid ul + ul { padding: 22px 0 14px; } }
  @media (max-width: 520px) { .conditions-grid { grid-template-columns: 1fr !important; } .condition-column, .condition-column + .condition-column { padding: 22px 0 14px; border-left: 0; } .service-copy { font-size: 16px; } .service-feature img { box-shadow: 10px 10px 0 #880303; } }
`}</style>
