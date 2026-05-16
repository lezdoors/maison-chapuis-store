import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-charcoal)', color: 'rgba(240,235,227,0.85)' }}>
      <div className="container" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 40,
          }}
          className="footer-grid"
        >
          {/* Brand — col-span-2 on desktop */}
          <div className="footer-brand">
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                fontSize: 22,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#ffffff',
                margin: '0 0 18px 0',
              }}
            >
              Maison Chapuis
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.65,
                maxWidth: 420,
                color: 'rgba(240,235,227,0.7)',
                margin: 0,
              }}
            >
              Brass lighting and stoneware ceramics, handcrafted in Marrakech.
              A family-run atelier, three generations of metalwork, brought direct to the United States.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="eyebrow" style={{ color: '#ffffff', marginBottom: 18 }}>
              Explore
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FooterLink to="/shop">Shop All</FooterLink>
              <FooterLink to="/lighting">Lighting</FooterLink>
              <FooterLink to="/ceramics">Ceramics</FooterLink>
              <FooterLink to="/story">Story</FooterLink>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="eyebrow" style={{ color: '#ffffff', marginBottom: 18 }}>
              Information
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FooterLink to="/shipping">Shipping &amp; Returns</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/terms#privacy">Privacy Policy</FooterLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow" style={{ color: '#ffffff', marginBottom: 18 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href="mailto:hello@maison-chapuis.com"
                style={{
                  fontSize: 14,
                  color: 'rgba(240,235,227,0.85)',
                  textDecoration: 'none',
                }}
              >
                hello@maison-chapuis.com
              </a>
              <span style={{ fontSize: 14, color: 'rgba(240,235,227,0.6)' }}>
                By appointment only
              </span>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 28,
            borderTop: '1px solid rgba(240,235,227,0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
          className="footer-bottom"
        >
          <span style={{ fontSize: 12, color: 'rgba(240,235,227,0.55)' }}>
            &copy; {new Date().getFullYear()} Maison Chapuis. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            <FooterSocial href="https://instagram.com/maisonchapuis">Instagram</FooterSocial>
            <FooterSocial href="https://pinterest.com/maisonchapuis">Pinterest</FooterSocial>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr !important;
          }
          .footer-bottom {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  )
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      style={{
        fontSize: 14,
        color: 'rgba(240,235,227,0.85)',
        textDecoration: 'none',
        transition: 'color .2s ease',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')}
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,235,227,0.85)')
      }
    >
      {children}
    </Link>
  )
}

function FooterSocial({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: 12,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'rgba(240,235,227,0.7)',
        textDecoration: 'none',
        transition: 'color .2s ease',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')}
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,235,227,0.7)')
      }
    >
      {children}
    </a>
  )
}
