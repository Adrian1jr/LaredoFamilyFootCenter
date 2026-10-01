import type { Metadata } from 'next'
import { Check, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wound Care Specialist | Laredo Family Foot Center',
  description: 'Care for diabetic wounds and ulcers, infected wounds, pressure ulcers, and arterial ulcers in Laredo, TX.',
}

const woundTypes = [
  { id: 'diabetic', label: 'Diabetic Wounds and Ulcers' },
  { id: 'infected', label: 'Infected Wounds' },
  { id: 'pressure', label: 'Pressure Ulcers' },
  { id: 'arterial', label: 'Arterial Ulcers' },
]

const diabeticFactors = [
  { title: 'Poor Circulation', copy: 'Restricts the body to healing itself' },
  { title: 'Reduced Sensation', copy: 'Reduces the ability to feel that there is an injury' },
  { title: 'Nerve Damage', copy: 'Reduces the ability to feel that there is an injury' },
]
const diabeticFootCare = ['Check for wounds', 'Wash feet daily', 'Wear socks to bed', 'Check shoes', 'Never walk barefoot', 'Do not smoke']
const diabeticTreatments = ['Compression Therapy', 'Skin Grafts', 'Debridement', 'Pressure-Off Loading', 'Amputation – Extreme Cases']

const pressureStages = ['Area is red', 'Skin is broken', 'Ulcer is deep and the tissue becomes yellowish', 'The ulcer has reached the bone']
const pressureTreatments = [
  'Relieve pressure by elevating the foot',
  'Stage 1 – wash area gently with mild soap and water',
  'Stage 2 – Ulcers should be cleaned with a salt water rinse to remove loose, dead tissue.',
  'Keep the sore covered with dressing',
  'Stage 3 & 4 – will need to be treated by a doctor',
]

const arterialSymptoms = ['Ulcers found on the tip of toes, heels, or the outer ankle', 'Can move to the tendon and cause pain', 'Color of skin can change to yellow, black, or brown']
const arterialTreatments = ['Clean wound thoroughly to prevent infection', 'Regain proper blood flow']

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="wound-checklist">
      {items.map((item) => (
        <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
      ))}
    </ul>
  )
}

function WoundHeader({ index, title }: { index: number; title: string }) {
  return (
    <header className="wound-type-header">
      <span aria-hidden="true">{String(index).padStart(2, '0')}</span>
      <h3>{title}</h3>
    </header>
  )
}

export default function WoundCarePage() {
  return (
    <main className="service-page">
      <section className="wound-hero page-enter">
        <div className="shell wound-hero-inner">
          <div>
            <p className="eyebrow eyebrow-dark">Wound care in Laredo</p>
            <h1 className="section-title mt-4">Wound care specialist</h1>
            <div className="service-copy">
              <p><strong>Laredo Family Foot Center</strong> knows how important it is to treat wounds as early as possible. If wounds or ulcers are left untreated they can lead to more serious complications. When you visit us you will know right away that you are in good hands. We make sure to give our full attention to each patient and make sure your questions are answered and your treatment is handled properly.</p>
            </div>
          </div>
          <figure className="wound-hero-media">
            <img src="/wound-care.png" alt="Gloved hands applying a bandage to a patient's foot" />
          </figure>
        </div>
      </section>

      <section className="wound-types page-enter delay-1" aria-labelledby="wound-types-title">
        <div className="shell">
          <p className="eyebrow eyebrow-dark">What we treat</p>
          <h2 id="wound-types-title" className="section-title mt-3">Types of wounds and ulcers</h2>

          <nav className="wound-jump" aria-label="Wound types">
            {woundTypes.map((type, index) => (
              <a key={type.id} href={`#${type.id}`}><span>{String(index + 1).padStart(2, '0')}</span>{type.label}</a>
            ))}
          </nav>

          <div className="wound-type-list">
            <article id="diabetic" className="wound-type">
              <WoundHeader index={1} title="Diabetic Wounds and Ulcers" />
              <p className="wound-lead">If a person who is diabetic gets cut or scratched, the wound itself may take longer to heal due to</p>
              <ul className="wound-factors">
                {diabeticFactors.map((factor) => (
                  <li key={factor.title}><strong>{factor.title}</strong><span>{factor.copy}</span></li>
                ))}
              </ul>
              <p className="wound-warning">The result of a wound can easily lead to infection, if not treated promptly and thoroughly.</p>
              <div className="wound-columns">
                <div><h4>Diabetic Foot Care</h4><CheckList items={diabeticFootCare} /></div>
                <div><h4>Treatments</h4><CheckList items={diabeticTreatments} /></div>
              </div>
            </article>

            <article id="infected" className="wound-type">
              <WoundHeader index={2} title="Infected Wounds" />
              <div className="wound-columns">
                <p className="wound-paragraph">Infected wounds are simply the outcome of bacteria taking over the wound after the body was unable to heal itself. If left untreated or if the person has a weak immune system can result in the wound to not heal properly and leading to infection.</p>
                <div className="wound-callout">
                  <h4>Treatment</h4>
                  <p>The treatment of infected wounds is to be properly cleaned and dressed to help the body combat the bacteria. In some cases medication may be taken to help fight the bacteria. If left untreated the bacteria can deteriorate the muscle, bone, and surrounding skin.</p>
                </div>
              </div>
            </article>

            <article id="pressure" className="wound-type">
              <WoundHeader index={3} title="Pressure Ulcers" />
              <p className="wound-paragraph">Pressure Ulcers usually occur in the foot when there is constant pressure or friction. It can be a red spot or in some severe cases affect the tissue. This is the most common type of ulcer because the constant pressure that is placed on the foot with walking. Blood circulation lessens and causes damage to the skin. Other factors could include poor nutrition, health, and excessive moisture for long periods of time.</p>
              <h4 className="mt-8">Stages of Pressure Ulcers</h4>
              <ol className="wound-stages">
                {pressureStages.map((stage, index) => (
                  <li key={stage}><span>Stage {index + 1}</span><p>{stage}</p></li>
                ))}
              </ol>
              <h4 className="mt-8">Treatments</h4>
              <CheckList items={pressureTreatments} />
            </article>

            <article id="arterial" className="wound-type">
              <WoundHeader index={4} title="Arterial Ulcers" />
              <p className="wound-lead">When there is a lack of proper blood flow to the foot, heel, or ankle an Arterial Ulcer can occur.</p>
              <div className="wound-columns">
                <div><h4>Symptoms</h4><CheckList items={arterialSymptoms} /></div>
                <div><h4>Treatments</h4><CheckList items={arterialTreatments} /></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="service-cta page-enter delay-3"><div className="shell flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><p className="eyebrow">For more information or to schedule an appointment</p><h2>Do not hesitate and give us a call today.</h2></div><a href="tel:+19567123338" className="button button-light"><Phone size={16} /> Call (956) 712-FEET (3338)</a></div></section>
    </main>
  )
}
