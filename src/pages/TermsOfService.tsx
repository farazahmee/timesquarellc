import { useSEO } from "@/hooks/useSEO";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";

export function TermsOfService() {
  useSEO({
    title: "Terms of Service | TimeSquare LLC",
    description:
      "The terms and conditions governing your use of the TimeSquare LLC website and services.",
    canonical: "https://timesquarellc.com/terms-of-service",
  });

  const lastUpdated = new Date().toLocaleDateString("en-GB");

  return (
    <div className="relative">
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lead={`The terms that govern your use of this website and our services. Last updated ${lastUpdated}.`}
      />

      <section className="pb-24">
        <Container>
          <div className="prose-site mx-auto max-w-[780px] border-t border-white/10 pt-10">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using timesquarellc.com, you accept and agree to
              be bound by the terms and provision of this agreement. If you do
              not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on timesquarellc.com for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on the website
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or &ldquo;mirror&rdquo;
                the materials on any other server
              </li>
              <li>
                Use the materials for illegal purposes or in violation of any
                rules or regulations
              </li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on timesquarellc.com are provided on an &ldquo;as
              is&rdquo; basis.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall TimeSquare LLC be liable for any damages,
              including loss of data, profit, or business interruption.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              Materials on timesquarellc.com may include technical,
              typographical, or photographic errors and may change at any time.
            </p>

            <h2>6. Links</h2>
            <p>
              TimeSquare LLC is not responsible for the contents of linked
              third-party sites and use of linked websites is at your own risk.
            </p>

            <h2>7. Modifications</h2>
            <p>
              TimeSquare LLC may revise these terms of service at any time
              without notice. Continued use means you accept the current
              version.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the
              laws of the United Kingdom.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p>
              <strong>Email:</strong> contact@timesquarellc.com
              <br />
              <strong>Website:</strong> https://timesquarellc.com
            </p>

            <hr />
            <p>
              These Terms of Service were last updated on {lastUpdated}.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default TermsOfService;
