import { useSEO } from "@/hooks/useSEO";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";

export function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy | TimeSquare LLC",
    description:
      "How TimeSquare LLC collects, uses, and protects your information when you use timesquarellc.com.",
    canonical: "https://timesquarellc.com/privacy-policy",
  });

  const lastUpdated = new Date().toLocaleDateString("en-GB");

  return (
    <div className="relative">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead={`How we collect, use, and protect your information. Last updated ${lastUpdated}.`}
      />

      <section className="pb-24">
        <Container>
          <div className="prose-site mx-auto max-w-[780px] border-t border-white/10 pt-10">
            <p>
              TimeSquare LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;) operates the timesquarellc.com website. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information you voluntarily provide through our
              contact forms and inquiries:
            </p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Phone number (optional)</li>
              <li>Message content</li>
            </ul>
            <p>
              We also automatically collect certain information about your
              device and browsing behaviour through Google Analytics,
              including:
            </p>
            <ul>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referral source</li>
              <li>Device type and operating system</li>
              <li>Browser type</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested information</li>
              <li>Send you information about our services</li>
              <li>Improve and optimise our website</li>
              <li>Understand how visitors use our website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Google Analytics</h2>
            <p>
              We use Google Analytics to understand how visitors use our
              website. Google Analytics uses cookies and similar technologies
              to collect and analyse information about your use of the website.
              The information generated is transmitted to Google servers.
            </p>
            <p>
              Google Analytics data is anonymised and does not identify you
              personally. You can opt out of Google Analytics by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>

            <h2>4. Cookies</h2>
            <p>
              Our website uses cookies to enhance your experience. Cookies are
              small files stored on your device. You can control cookie
              settings through your browser preferences. Disabling cookies may
              affect some website functionality.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of external sites. We
              encourage you to review the privacy policies of any third-party
              websites before providing personal information.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to
              protect your personal data against unauthorised access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary to fulfil
              the purposes for which it was collected, or as required by law.
              Contact form submissions are typically retained for 12 months.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal data, including the right to access, correct, or
              delete your information. To exercise these rights, please contact
              us at contact@timesquarellc.com.
            </p>

            <h2>9. GDPR Compliance (UK &amp; EU)</h2>
            <p>
              If you are located in the United Kingdom or European Union, our
              processing of your data complies with the General Data Protection
              Regulation (GDPR). We have a legitimate interest in processing
              your information to provide our services and improve our website.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> contact@timesquarellc.com
              <br />
              <strong>Website:</strong> https://timesquarellc.com
            </p>

            <hr />
            <p>
              This Privacy Policy was last updated on {lastUpdated} and may be
              updated periodically. We will notify you of any material changes
              by updating the date on this page.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
