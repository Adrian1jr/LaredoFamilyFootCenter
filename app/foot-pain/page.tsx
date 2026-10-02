'use client';

import { ArrowRight, Phone } from 'lucide-react';

export default function FootPainPage() {
  return (
    <main className="service-page">
      <section className="service-intro page-enter">
        <div className="shell">
          <p className="eyebrow eyebrow-dark">Specialized podiatric care</p>
          <h1 className="section-title mt-4">Foot pain specialist</h1>
          <div className="service-copy">
            <p>
              Getting you back on your feet and pain free is{' '}
              <strong>Laredo Family Foot Center&apos;s</strong> main goal. We
              specialize in diagnosing and treating a wide range of foot
              ailments. 25 years of treating <strong>Laredo</strong> makes us
              the best choice in the area for your foot needs. Dr. Bell stays up
              to date on the latest treatments to better serve our patients.
            </p>
            <p>
              We know your schedule can be busy, and we want to make care as
              easy as possible. For more information or to schedule an
              appointment, call us at{' '}
              <a href="tel:+19567123338">(956) 712-FEET (3338)</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="service-feature page-enter delay-1">
        <div className="shell service-feature-inner">
          <div className="service-feature-copy">
            <p className="eyebrow">Personalized treatment</p>
            <h2>Foot pain</h2>
            <p>
              Laredo Family Foot Center has the experience to effectively
              diagnose your foot pain. We will recommend our best course of
              action to treat your pain. What we can guarantee and give you
              peace of mind, is that we will look and try every option that is
              non-surgical first. If that does not do the trick, then we can
              look at surgical options to best correct the pain.
            </p>
            <a href="tel:+19567123338" className="button button-light mt-6">
              Talk with our team <ArrowRight size={16} />
            </a>
          </div>
          <img
            src="/foot-pain.png"
            alt="Patient receiving care for foot pain"
          />
        </div>
      </section>

      <section className="service-cta page-enter delay-3">
        <div className="shell flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Ready for relief?</p>
            <h2>Take your next step with confidence.</h2>
          </div>
          <a href="tel:+19567123338" className="button button-light">
            <Phone size={16} /> Call (956) 712-3338
          </a>
        </div>
      </section>

      <style jsx>{`
        .service-page {
          background: #faf9f8;
          color: #242022;
        }
        .service-page .nav-link.active {
          background: #f3d2d4;
          color: #880303;
        }
        .service-intro {
          background: #fff;
          padding: 88px 0 78px;
        }
        .service-intro .section-title {
          max-width: 700px;
          text-transform: capitalize;
        }
        .service-copy {
          max-width: 1000px;
          margin-top: 28px;
          color: #242022;
          font-size: 17px;
          line-height: 1.7;
        }
        .service-copy p + p {
          margin-top: 18px;
        }
        .service-copy a {
          color: #880303;
          font-weight: 700;
          text-decoration: underline;
        }
        .service-feature {
          position: relative;
          overflow: hidden;
          background: #163d1d;
          color: white;
        }
        .service-feature::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, #092712e8, #092712a8),
            url('/foot-care-hero.png') center/cover;
          opacity: 0.85;
        }
        .service-feature-inner {
          position: relative;
          display: grid;
          gap: 42px;
          align-items: center;
          padding: 76px 0;
        }
        .service-feature-copy {
          max-width: 620px;
        }
        .service-feature h2,
        .service-cta h2 {
          margin-top: 12px;
          font:
            400 clamp(2.5rem, 5vw, 4rem)/1 Georgia,
            serif;
        }
        .service-feature-copy > p:last-of-type {
          margin-top: 20px;
          color: #fffdfd;
          font-size: 17px;
          line-height: 1.7;
        }
        .service-feature img {
          width: min(100%, 440px);
          justify-self: end;
          aspect-ratio: 1.35;
          object-fit: cover;
          box-shadow: 18px 18px 0 #880303;
        }
        .conditions-section {
          background: #f5e8e8;
          padding: 84px 0 92px;
        }
        .conditions-section .section-title {
          max-width: 760px;
          font-size: clamp(3.5rem, 7vw, 5.8rem);
          line-height: 0.95;
        }
        .conditions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          margin-top: 42px;
        }
        .condition-column {
          min-width: 0;
          padding: 0 36px 0 0;
        }
        .condition-column + .condition-column {
          padding-left: 36px;
          border-left: 1px solid #ddc4c4;
        }
        .condition-label {
          margin: 0 0 8px;
          color: #242022;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0;
        }
        .condition-column ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .condition-column li {
          color: #242022;
          font-size: 16px;
          line-height: 1.5;
        }
        .condition-column li::before {
          content: '+';
          margin-right: 3px;
        }
        .service-cta {
          background: #662d2e;
          color: white;
          padding: 64px 0;
        }
        .service-cta h2 {
          max-width: 620px;
        }
        @media (min-width: 760px) {
          .service-feature-inner {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        @media (max-width: 760px) {
          .service-intro {
            padding: 64px 0 54px;
          }
          .service-feature-inner {
            padding: 56px 0;
          }
          .service-feature img {
            justify-self: start;
            width: 100%;
            box-shadow: 10px 10px 0 #880303;
          }
          .conditions-section {
            padding: 62px 0 70px;
          }
          .conditions-section .section-title {
            font-size: clamp(3rem, 13vw, 4.5rem);
          }
          .conditions-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-top: 32px;
          }
          .condition-column,
          .condition-column + .condition-column {
            padding: 0 0 28px;
            border-left: 0;
            border-bottom: 1px solid #ddc4c4;
          }
          .condition-column:last-child {
            padding-bottom: 0;
            border-bottom: 0;
          }
          .condition-column li {
            font-size: 15px;
          }
        }
        @media (max-width: 520px) {
          .conditions-grid {
            margin-top: 30px;
          }
          .conditions-grid ul,
          .conditions-grid ul + ul {
            padding: 22px 0 14px;
          }
        }
        @media (max-width: 520px) {
          .conditions-grid {
            grid-template-columns: 1fr !important;
          }
          .condition-column,
          .condition-column + .condition-column {
            padding: 22px 0 14px;
            border-left: 0;
          }
          .service-copy {
            font-size: 16px;
          }
          .service-feature img {
            box-shadow: 10px 10px 0 #880303;
          }
        }
      `}</style>
    </main>
  );
}
