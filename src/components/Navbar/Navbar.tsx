import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [servicesArrow, setServicesArrow] = useState(false);
  const [blogsArrow, setBlogsArrow] = useState(false);

  const toggleAccordion = (key: string) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  const isActive = (href: string) => pathname === href;

  const isServicesActive =
    pathname.startsWith('/partnership') ||
    pathname.startsWith('/managementconsulting') ||
    pathname.startsWith('/corporateservices') ||
    pathname.startsWith('/businesssetup') ||
    pathname.startsWith('/companyformation') ||
    pathname.startsWith('/accountingfinancialservices') ||
    pathname.startsWith('/financialplanninginvestorservices') ||
    pathname.startsWith('/technologyconsulting') ||
    pathname.startsWith('/audit') ||
    pathname.startsWith('/accountingbookkeeping') ||
    pathname.startsWith('/cmolanding') ||
    pathname.startsWith('/insolvencyliquidation') ||
    pathname.startsWith('/bankingservices');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <img src="/logo.svg" alt="Dillon & Bird" width={28} height={28} />
            <span>Dillon & Bird</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className={styles.desktopNav}>
            <Link
              to="/about"
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
            >
              Who We Are
            </Link>

            {/* WHAT WE DO */}
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => setServicesArrow(true)}
              onMouseLeave={() => setServicesArrow(false)}
            >
              <button className={`${styles.trigger} ${isServicesActive ? styles.active : ''}`}>
                <span>What We Do</span>
                <svg className={servicesArrow ? styles.rotate : ''} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              <div className={styles.menu}>
                <Link to="/companyformation" className={styles.menuItem}>Company Formation</Link>
                <Link to="/audit" className={styles.menuItem}>Audit Services</Link>
                <Link to="/accountingbookkeeping" className={styles.menuItem}>Accounting & Book Keeping</Link>
                <Link to="/cmolanding" className={styles.menuItem}>CMO Services</Link>
                <Link to="/insolvencyliquidation" className={styles.menuItem}>Insolvency Liquidation</Link>
                <Link to="/bankingservices" className={styles.menuItem}>Banking Services</Link>
                <Link to="/partnership" className={styles.menuItem}>Partnerships</Link>
                <Link to="/managementconsulting" className={styles.menuItem}>Management Consulting</Link>
                <Link to="/corporateservices" className={styles.menuItem}>Corporate Services</Link>
                <Link to="/businesssetup" className={styles.menuItem}>Business Setup</Link>
                <Link to="/accountingfinancialservices" className={styles.menuItem}>Accounting & Financial Services</Link>
                <Link to="/financialplanninginvestorservices" className={styles.menuItem}>Financial Planning & Investor Services</Link>
                <Link to="/technologyconsulting" className={styles.menuItem}>Technology Consulting</Link>
              </div>
            </div>

            {/* CASE STUDIES */}
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => setBlogsArrow(true)}
              onMouseLeave={() => setBlogsArrow(false)}
            >
              <button
                className={`${styles.trigger} ${pathname.startsWith('/casestudies') ? styles.active : ''}`}
              >
                <span>Case Studies</span>
                <svg className={blogsArrow ? styles.rotate : ''} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              <div className={styles.menu}>
                <Link to="/casestudies/technologystartup" className={styles.menuItem}>Technology Startup</Link>
                <Link to="/casestudies/retailbusiness" className={styles.menuItem}>Retail Business</Link>
              </div>
            </div>

            <Link
              to="/contact"
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
            >
              Let's Connect
            </Link>
          </nav>

          {/* PHONE */}
          <div className={styles.phone}>
            <img src="/uae-flag.svg" alt="UAE Flag" width={22} height={14} />
            <span className={styles.divider}></span>
            <span className={styles.phoneText}>+971 585 570 593</span>
          </div>

          {/* HAMBURGER */}
          <button className={styles.hamburger} onClick={() => setMobileOpen(true)}>☰</button>
        </div>
      </header>

      {/* MOBILE */}
      {mobileOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobilePanel}>
            <div className={styles.mobileHeader}>
              <Link to="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
                <img src="/logo.svg" alt="Dillon & Bird" width={24} height={24} />
                <span>Dillon & Bird</span>
              </Link>
              <button className={styles.closeBtn} onClick={() => setMobileOpen(false)}>✕</button>
            </div>

            <nav className={styles.mobileNav}>
              <Link
                to="/about"
                className={`${styles.mobileLink} ${isActive('/about') ? styles.active : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Who We Are
              </Link>

              <div
                className={`${styles.mobileItem} ${isServicesActive ? styles.active : ''}`}
                onClick={() => toggleAccordion('services')}
              >
                <span>What We Do</span>
                <svg
                  className={`${styles.mobileArrow} ${mobileAccordion === 'services' ? styles.rotate : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>

              {mobileAccordion === 'services' && (
                <div className={styles.mobileSubmenu}>
                  <Link to="/companyformation" onClick={() => setMobileOpen(false)}>Company Formation</Link>
                  <Link to="/audit" onClick={() => setMobileOpen(false)}>Audit Services</Link>
                  <Link to="/accountingbookkeeping" onClick={() => setMobileOpen(false)}>Accounting & Book Keeping</Link>
                  <Link to="/cmolanding" onClick={() => setMobileOpen(false)}>CMO Services</Link>
                  <Link to="/insolvencyliquidation" onClick={() => setMobileOpen(false)}>Insolvency Liquidation</Link>
                  <Link to="/bankingservices" onClick={() => setMobileOpen(false)}>Banking Services</Link>
                  <Link to="/partnership" onClick={() => setMobileOpen(false)}>Partnerships</Link>
                  <Link to="/managementconsulting" onClick={() => setMobileOpen(false)}>Management Consulting</Link>
                  <Link to="/corporateservices" onClick={() => setMobileOpen(false)}>Corporate Services</Link>
                  <Link to="/businesssetup" onClick={() => setMobileOpen(false)}>Business Setup</Link>
                  <Link to="/accountingfinancialservices" onClick={() => setMobileOpen(false)}>Accounting & Financial Services</Link>
                  <Link to="/financialplanninginvestorservices" onClick={() => setMobileOpen(false)}>Financial Planning & Investor Services</Link>
                  <Link to="/technologyconsulting" onClick={() => setMobileOpen(false)}>Technology Consulting</Link>
                </div>
              )}

              <div
                className={`${styles.mobileItem} ${pathname.startsWith('/casestudies') ? styles.active : ''}`}
                onClick={() => toggleAccordion('blogs')}
              >
                <span>Case Studies</span>
                <svg
                  className={`${styles.mobileArrow} ${mobileAccordion === 'blogs' ? styles.rotate : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>

              {mobileAccordion === 'blogs' && (
                <div className={styles.mobileSubmenu}>
                  <Link to="/casestudies/technologystartup" onClick={() => setMobileOpen(false)}>Technology Startup</Link>
                  <Link to="/casestudies/retailbusiness" onClick={() => setMobileOpen(false)}>Retail Business</Link>
                </div>
              )}

              <Link
                to="/contact"
                className={`${styles.mobileLink} ${isActive('/contact') ? styles.active : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Let's Connect
              </Link>
            </nav>

            <div className={styles.mobilePhone}>
              <img src="/uae-flag.svg" alt="UAE Flag" width={26} height={18} />
              <span className={styles.divider}></span>
              <span className={styles.phoneText}>+971 585 570 593</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;