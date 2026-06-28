import LegalLayout from '../components/LegalLayout'
import useDocumentMeta from '../hooks/useDocumentMeta'

// ── Shared helpers ────────────────────────────────────────────────────────────
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

export default function PrivacyPolicy() {
  useDocumentMeta({
    title: 'Privacy Policy | SonKhoz Advisory',
    description: 'How SonKhoz Advisory collects, uses, and protects your personal information in compliance with POPIA.',
    canonical: 'https://www.sonkhozadvisory.co.za/privacy-policy',
  })

  return (
    <LegalLayout title="Privacy Policy" lastUpdated="7 June 2026">

      <P>
        SonKhoz Advisory (Pty) Ltd ("SonKhoz Advisory", "we", "us", "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your information in compliance with the Protection of Personal Information Act 4 of 2013 ("POPIA") and applicable South African law.
      </P>

      <S title="1. Who We Are">
        <P>SonKhoz Advisory (Pty) Ltd is the responsible party for personal information collected through this website and during our advisory engagements. You can reach us at:</P>
        <Ul items={[
          'Email: Info@sonkhozadvisory.co.za',
          'Phone: 074 339 0890',
          'Address: Midrand, Johannesburg, Gauteng, South Africa',
        ]} />
      </S>

      <S title="2. What Information We Collect">
        <P>We may collect the following personal information from you:</P>
        <Ul items={[
          'Your full name and professional title',
          'Company or organisation name',
          'Email address and telephone number',
          'Details about your business, financial situation, and advisory requirements (submitted via our contact form)',
          'Website usage data, including IP address, browser type, and pages visited',
        ]} />
      </S>

      <S title="3. How We Collect Your Information">
        <P>Your information is collected:</P>
        <Ul items={[
          'Directly from you when you submit an inquiry through our website contact form',
          'When you communicate with us by email or phone',
          'Automatically through cookies and similar tracking technologies when you visit our website — see our Cookie Policy for full details',
        ]} />
      </S>

      <S title="4. Why We Use Your Information">
        <P>We use your personal information to:</P>
        <Ul items={[
          'Respond to your inquiry and understand your advisory needs',
          'Prepare and deliver engagement proposals and financial advisory services',
          'Manage our relationship with you throughout and after an engagement',
          'Meet any legal or regulatory obligations that apply to us',
          'Keep you informed about our services where you have given us permission to do so',
        ]} />
      </S>

      <S title="5. Legal Grounds for Processing">
        <P>Under POPIA, we process your personal information based on the following grounds:</P>
        <Ul items={[
          'Contractual necessity — to deliver the advisory services agreed between us',
          'Legitimate interest — to respond to inquiries and manage client relationships effectively',
          'Consent — for any marketing communications, which you may withdraw at any time',
          'Legal obligation — where required by South African law or regulation',
        ]} />
      </S>

      <S title="6. Who We Share Your Information With">
        <P>
          We do not sell, rent, or trade your personal information. We may share information only in the following limited circumstances:
        </P>
        <Ul items={[
          'Trusted service providers who help us run our business, bound by confidentiality obligations',
          'Professional advisors such as legal counsel or auditors, as required',
          'Regulatory authorities, law enforcement, or courts where we are legally required to do so',
        ]} />
      </S>

      <S title="7. How Long We Keep Your Information">
        <P>
          We keep your personal information only for as long as needed for the purpose it was collected, or as required by law. Engagement records are generally kept for five (5) years after the end of an engagement in line with South African accounting requirements. Inquiry information that does not lead to an engagement is deleted after twelve (12) months.
        </P>
      </S>

      <S title="8. How We Protect Your Information">
        <P>
          We use appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, misuse, or disclosure. Access is limited to authorised staff only. While we take reasonable steps to secure your data, no method of internet transmission is fully secure and we cannot guarantee absolute security.
        </P>
      </S>

      <S title="9. Your Rights Under POPIA">
        <P>You have the following rights regarding your personal information:</P>
        <Ul items={[
          'Access — request a copy of the personal information we hold about you',
          'Correction — ask us to correct or update inaccurate information',
          'Deletion — request that we delete your information, subject to any legal retention obligations',
          'Objection — object to certain types of processing',
          'Withdrawal of consent — withdraw consent for marketing at any time',
          'Lodge a complaint — contact the Information Regulator if you believe your rights have been violated',
        ]} />
        <P>To exercise any of these rights, please contact us at Info@sonkhozadvisory.co.za. We will respond within a reasonable time as required by POPIA.</P>
      </S>

      <S title="10. The Information Regulator">
        <P>If you feel we have not handled your personal information correctly, you can contact the Information Regulator of South Africa:</P>
        <Ul items={[
          'Website: www.inforegulator.org.za',
          'General enquiries: inforeg@justice.gov.za',
          'Complaints: complaints.IR@justice.gov.za',
        ]} />
      </S>

      <S title="11. Cookies">
        <P>
          This website uses cookies to improve your experience. Please read our Cookie Policy for a full explanation of the cookies we use and how you can manage them.
        </P>
      </S>

      <S title="12. Changes to This Policy">
        <P>
          We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this page periodically to stay informed about how we protect your information.
        </P>
      </S>

      <S title="13. Contact Us">
        <P>For any questions about this Privacy Policy or how we handle your personal information, please get in touch:</P>
        <Ul items={[
          'Email: Info@sonkhozadvisory.co.za',
          'Phone: 074 339 0890',
          'Address: Midrand, Johannesburg, Gauteng, South Africa',
        ]} />
      </S>

    </LegalLayout>
  )
}
