import LegalLayout from '../components/LegalLayout'

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

const Callout = ({ children }) => (
  <div className="border-l-2 border-gold bg-gold/[0.06] px-5 py-4 mb-5 rounded-r-sm">
    <p className="text-charcoal/70 text-[0.93rem] leading-[1.8]">{children}</p>
  </div>
)

export default function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="7 June 2026">

      <P>
        Please read these Terms and Conditions carefully before using this website or engaging the services of SonKhoz Advisory (Pty) Ltd. By accessing this website or entering into an engagement with us, you agree to be bound by these terms.
      </P>

      <S title="1. Acceptance of Terms">
        <P>
          These Terms and Conditions govern your use of the SonKhoz Advisory website (sonkhoz.co.za) and any advisory services provided by SonKhoz Advisory (Pty) Ltd ("SonKhoz Advisory", "we", "us", "our"). By using this website or commissioning any of our services, you confirm that you accept these terms in full.
        </P>
        <P>
          If you do not agree with any part of these terms, you must not use this website or our services.
        </P>
      </S>

      <S title="2. Who We Serve">
        <P>
          SonKhoz Advisory provides advisory and consulting services primarily to:
        </P>
        <Ul items={[
          'Start-ups and early-stage ventures seeking financial structure and strategic guidance',
          'Small and medium enterprises (SMEs) looking to optimise financial performance and business growth',
          'Service businesses requiring commercial strategy, pricing models, or operational financial support',
          'Financial services firms needing specialist advisory on business development, compliance readiness, or performance improvement',
        ]} />
        <P>
          We reserve the right to decline any engagement that falls outside our areas of expertise or that presents a conflict of interest.
        </P>
      </S>

      <S title="3. Regulatory Disclaimer — FAIS Act">
        <Callout>
          SonKhoz Advisory (Pty) Ltd is NOT a registered Financial Services Provider (FSP) under the Financial Advisory and Intermediary Services Act 37 of 2002 ("FAIS Act"). We do not provide financial product advice, intermediary services, or any services that constitute regulated financial advice as defined under the FAIS Act. Nothing on this website or communicated by us should be construed as financial product advice or as a solicitation to purchase or invest in any financial product.
        </Callout>
        <P>
          Our services are management consulting and business advisory in nature. For regulated financial advice, you should consult a licensed FSP registered with the Financial Sector Conduct Authority (FSCA).
        </P>
      </S>

      <S title="4. Our Services">
        <P>
          SonKhoz Advisory provides services including but not limited to financial modelling, business strategy, management accounting, and data-driven business advisory. The full scope, deliverables, fees, and timeline for each engagement are agreed in a written Engagement Letter or Statement of Work ("SOW") signed by both parties prior to commencement of work.
        </P>
        <P>
          We reserve the right to modify, suspend, or discontinue any service at any time upon reasonable notice.
        </P>
      </S>

      <S title="5. Fees and Payment">
        <P>Fees for our services are as follows:</P>
        <Ul items={[
          'All fees are agreed in writing before work begins and set out in the relevant Engagement Letter or SOW',
          'Invoices are payable within the period stated on the invoice unless otherwise agreed',
          'All amounts are quoted exclusive of VAT, where applicable',
          'We reserve the right to suspend work if payment is not received by the due date',
          'All fees are quoted and payable in South African Rand (ZAR) unless otherwise agreed in writing',
        ]} />
      </S>

      <S title="6. Confidentiality">
        <P>
          Both parties agree to keep confidential any proprietary, financial, or commercially sensitive information shared during an engagement. This obligation survives the termination of any engagement for a period of three (3) years.
        </P>
        <P>
          This obligation does not apply to information that is publicly available, was already known to the receiving party, or is required to be disclosed by law or a court order.
        </P>
      </S>

      <S title="7. Intellectual Property">
        <P>
          Unless otherwise agreed in writing, all intellectual property in work products, reports, models, frameworks, and deliverables created by SonKhoz Advisory during an engagement remains the property of SonKhoz Advisory until full payment has been received, at which point ownership transfers to the client as specified in the Engagement Letter.
        </P>
        <P>
          All content on this website — including text, graphics, logos, and design — is the property of SonKhoz Advisory and may not be reproduced, distributed, or used without prior written permission.
        </P>
      </S>

      <S title="8. Limitation of Liability">
        <P>
          To the fullest extent permitted by South African law, SonKhoz Advisory shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or this website.
        </P>
        <P>
          Our total liability to you for any claim arising out of or in connection with a specific engagement shall not exceed the total fees paid by you for that engagement during the three (3) months preceding the event giving rise to the claim.
        </P>
        <P>
          We make no warranty that any advice, model, or deliverable will produce a specific financial result. Business outcomes depend on many factors outside our control, and all recommendations are made in good faith based on information provided to us.
        </P>
      </S>

      <S title="9. Website Disclaimer">
        <P>
          The content on this website is provided for general information purposes only. It does not constitute professional advice and should not be relied on as such. While we take care to keep the information accurate and up to date, we make no representations or warranties as to its completeness or accuracy.
        </P>
        <P>
          Links to third-party websites are provided for convenience only. We do not endorse or take responsibility for the content of any linked websites.
        </P>
      </S>

      <S title="10. Termination">
        <P>
          Either party may terminate an engagement by giving written notice as specified in the relevant Engagement Letter. In the event of termination, the client shall pay for all work completed up to and including the date of termination.
        </P>
        <P>
          We reserve the right to terminate your access to this website if you breach these Terms and Conditions.
        </P>
      </S>

      <S title="11. Governing Law">
        <P>
          These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising out of or in connection with these terms shall be subject to the jurisdiction of the South African courts.
        </P>
      </S>

      <S title="12. Changes to These Terms">
        <P>
          We may update these Terms and Conditions from time to time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of this website or our services after changes have been posted constitutes your acceptance of the updated terms.
        </P>
      </S>

      <S title="13. Contact Us">
        <P>If you have any questions about these Terms and Conditions, please contact us:</P>
        <Ul items={[
          'Email: Info@sonkhozadvisory.co.za',
          'Phone: 074 339 0890',
          'Address: Sandton, Johannesburg, Gauteng, South Africa',
        ]} />
      </S>

    </LegalLayout>
  )
}
