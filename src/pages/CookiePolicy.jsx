import LegalLayout from '../components/LegalLayout'
import useDocumentMeta from '../hooks/useDocumentMeta'

const S = ({ title, children }) => (
  <section className="mb-2">
    <h2 className="font-serif text-charcoal text-2xl font-semibold mt-12 mb-5 leading-snug">{title}</h2>
    {children}
  </section>
)
const P = ({ children }) => (
  <p className="text-charcoal/65 text-[0.95rem] leading-[1.85] mb-4">{children}</p>
)
const Ul = ({ items }) => (
  <ul className="space-y-2.5 mb-5 ml-1">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="text-gold mt-[0.5rem] flex-shrink-0">
          <svg width="5" height="5" viewBox="0 0 5 5" fill="currentColor"><circle cx="2.5" cy="2.5" r="2.5"/></svg>
        </span>
        <span className="text-charcoal/65 text-[0.95rem] leading-[1.85]">{item}</span>
      </li>
    ))}
  </ul>
)

const CookieTable = ({ rows }) => (
  <div className="overflow-x-auto mb-6">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-charcoal/15">
          {['Cookie Type', 'Purpose', 'Duration'].map(h => (
            <th key={h} className="text-left py-3 pr-6 text-charcoal/50 text-[10px] tracking-[0.2em] uppercase font-medium">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-charcoal/8">
            <td className="py-3.5 pr-6 text-charcoal/80 font-medium text-[0.88rem] align-top">{r[0]}</td>
            <td className="py-3.5 pr-6 text-charcoal/55 text-[0.88rem] align-top leading-relaxed">{r[1]}</td>
            <td className="py-3.5 text-charcoal/55 text-[0.88rem] align-top whitespace-nowrap">{r[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default function CookiePolicy() {
  useDocumentMeta({
    title: 'Cookie Policy | SonKhoz Advisory',
    description: 'Learn what cookies SonKhoz Advisory uses on this website and how to manage your preferences.',
    canonical: 'https://www.sonkhozadvisory.co.za/cookie-policy',
  })

  return (
    <LegalLayout title="Cookie Policy" lastUpdated="7 June 2026">

      <P>
        This Cookie Policy explains what cookies are, how SonKhoz Advisory (Pty) Ltd uses them on this website, and the choices you have when it comes to managing them. By clicking "Accept All" on our cookie banner, you agree to our use of cookies as described in this policy.
      </P>

      <S title="1. What Are Cookies?">
        <P>
          Cookies are small text files that are placed on your device (computer, phone, or tablet) when you visit a website. They allow the website to recognise your device and remember certain information about your visit — such as your preferences or whether you have already been asked about cookies. Cookies are widely used to make websites work efficiently and to provide useful information to website owners.
        </P>
      </S>

      <S title="2. How We Use Cookies">
        <P>
          SonKhoz Advisory uses cookies to ensure our website works properly, to remember your preferences, and to understand how visitors use the site so we can keep improving it. We use only the categories of cookies described below.
        </P>
      </S>

      <S title="3. Types of Cookies We Use">

        <h3 className="font-semibold text-charcoal text-base mb-3 mt-7">Essential Cookies</h3>
        <P>
          These cookies are strictly necessary for the website to function. Without them, certain parts of the site may not work correctly. Because they are essential, they are placed without requiring your consent.
        </P>
        <CookieTable rows={[
          ['Session Cookie',  'Maintains your session as you navigate the site', 'Session'],
          ['Security Cookie', 'Helps protect the site from malicious activity',   'Session'],
        ]} />

        <h3 className="font-semibold text-charcoal text-base mb-3 mt-7">Functional Cookies</h3>
        <P>
          Functional cookies remember choices you make to improve your experience. They are not essential but make the site more useful and personalised for you.
        </P>
        <CookieTable rows={[
          ['Cookie Consent', 'Remembers whether you have accepted or declined cookies so you are not asked again on future visits', '1 year'],
        ]} />

        <h3 className="font-semibold text-charcoal text-base mb-3 mt-7">Analytics Cookies</h3>
        <P>
          Analytics cookies help us understand how visitors interact with our website — for example, which pages are visited most often and whether visitors receive error messages. All data collected is aggregated and anonymous. These cookies are only placed if you click "Accept All" on our cookie banner.
        </P>
        <CookieTable rows={[
          ['Analytics', 'Collects anonymous data about how users navigate the site to help us improve the experience', 'Up to 2 years'],
        ]} />
      </S>

      <S title="4. Cookies We Do Not Use">
        <P>We do not use:</P>
        <Ul items={[
          'Advertising or targeting cookies that track you across other websites',
          'Third-party social media tracking cookies',
          'Cookies that collect sensitive personal information',
        ]} />
      </S>

      <S title="5. How to Manage Your Cookie Preferences">
        <P>
          You can change your cookie preferences at any time. The easiest way is through your browser settings, which allow you to block, delete, or allow specific cookies. Here is how to manage cookies in the most popular browsers:
        </P>
        <Ul items={[
          'Google Chrome: Settings → Privacy and Security → Cookies and other site data',
          'Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data',
          'Safari: Preferences → Privacy → Manage Website Data',
          'Microsoft Edge: Settings → Cookies and site permissions → Cookies and site data',
        ]} />
        <P>
          Please note that blocking or deleting all cookies may affect the functionality of this website and other sites you visit. In particular, disabling functional cookies means you may be asked about cookie preferences on every visit.
        </P>
      </S>

      <S title="6. Third-Party Links">
        <P>
          Our website may contain links to external websites. This Cookie Policy only applies to our website. We are not responsible for the cookie practices of any third-party websites you visit through links on our site.
        </P>
      </S>

      <S title="7. Changes to This Policy">
        <P>
          We may update this Cookie Policy from time to time. The "Last Updated" date at the top of this page will reflect any changes. We encourage you to check this page periodically.
        </P>
      </S>

      <S title="8. Contact Us">
        <P>If you have any questions about our use of cookies, please contact us:</P>
        <Ul items={[
          'Email: Info@sonkhozadvisory.co.za',
          'Phone: 074 339 0890',
          'Address: Midrand, Johannesburg, Gauteng, South Africa',
        ]} />
      </S>

    </LegalLayout>
  )
}
