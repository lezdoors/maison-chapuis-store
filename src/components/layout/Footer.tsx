import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

interface Group {
  title: string
  links: { label: string; to?: string; href?: string }[]
}

const GROUPS: Group[] = [
  {
    title: 'Maison',
    links: [
      { label: 'Shop All', to: '/shop' },
      { label: 'Lighting', to: '/lighting' },
      { label: 'Ceramics', to: '/ceramics' },
      { label: 'Our Story', to: '/story' },
      { label: 'Journal', to: '/journal' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Shipping & Returns', to: '/shipping' },
      { label: 'Care & Maintenance', to: '/care' },
      { label: 'Trade Program', to: '/trade' },
      { label: 'Press Enquiries', to: '/press' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Contact', to: '/contact' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Order Status', to: '/orders' },
      { label: 'hello@maison-chapuis.com', href: 'mailto:hello@maison-chapuis.com' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Privacy Policy', to: '/terms#privacy' },
      { label: 'Cookie Settings', to: '/terms#cookies' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-charcoal)', color: 'rgba(240,235,227,0.85)' }}>
      <div className="container" style={{ paddingTop: 80, paddingBottom: 64 }}>
        {/* Brand block */}
        <div className="footer-brand-block">
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
              maxWidth: 460,
              color: 'rgba(240,235,227,0.7)',
              margin: '0 0 64px 0',
            }}
          >
            Brass lighting and stoneware ceramics, handcrafted in Marrakech and Fes.
            A family-run atelier, three generations of metalwork, brought direct to the United States.
          </p>
        </div>

        {/* Accordion groups — open on desktop, collapsible on mobile */}
        <div className="footer-groups">
          {GROUPS.map((g) => (
            <details key={g.title} className="footer-group">
              <summary>
                <span className="eyebrow" style={{ color: '#ffffff' }}>{g.title}</span>
                <ChevronDown size={14} strokeWidth={1.5} className="footer-chevron" />
              </summary>
              <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {g.links.map((l) =>
                  l.to ? (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        style={{
                          fontSize: 14,
                          color: 'rgba(240,235,227,0.78)',
                          textDecoration: 'none',
                          transition: 'color .2s ease',
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')}
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,235,227,0.78)')
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        style={{
                          fontSize: 14,
                          color: 'rgba(240,235,227,0.78)',
                          textDecoration: 'none',
                          transition: 'color .2s ease',
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')}
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,235,227,0.78)')
                        }
                      >
                        {l.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </details>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="footer-bottom">
          <span style={{ fontSize: 12, color: 'rgba(240,235,227,0.55)' }}>
            &copy; {new Date().getFullYear()} Maison Chapuis · Akal Ltd. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            <FooterSocial href="https://instagram.com/maisonchapuis">Instagram</FooterSocial>
            <FooterSocial href="https://pinterest.com/maisonchapuis">Pinterest</FooterSocial>
          </div>
        </div>
      </div>

      <style>{`
        .footer-groups {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        .footer-group {
          border-top: 1px solid rgba(240,235,227,0.12);
          padding: 18px 0;
        }
        .footer-group:last-of-type {
          border-bottom: 1px solid rgba(240,235,227,0.12);
        }
        .footer-group > summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          list-style: none;
        }
        .footer-group > summary::-webkit-details-marker {
          display: none;
        }
        .footer-chevron {
          color: rgba(240,235,227,0.7);
          transition: transform 0.3s ease;
        }
        .footer-group[open] .footer-chevron {
          transform: rotate(180deg);
        }
        .footer-bottom {
          margin-top: 64px;
          padding-top: 28px;
          border-top: 1px solid rgba(240,235,227,0.15);
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: space-between;
          align-items: flex-start;
        }

        @media (min-width: 768px) {
          .footer-groups {
            grid-template-columns: repeat(4, 1fr);
            gap: 48px;
          }
          .footer-group {
            border: 0 !important;
            padding: 0;
          }
          .footer-group > summary {
            cursor: default;
            pointer-events: none;
            margin-bottom: 4px;
          }
          .footer-chevron {
            display: none !important;
          }
          /* Force open on desktop */
          .footer-group:not([open]) > ul {
            display: flex !important;
          }
          .footer-bottom {
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>
    </footer>
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
