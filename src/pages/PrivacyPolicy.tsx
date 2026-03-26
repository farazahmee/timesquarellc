import { useSEO } from "@/hooks/useSEO";

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy | TimeSquare LLC",
    description:
      "Read the TimeSquare LLC privacy policy covering data collection, usage, retention, and rights under UK GDPR.",
    canonical: "https://timesquarellc.com/privacy-policy",
  });

  return (
    <div className="relative py-24 lg:py-32">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-10 space-y-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: 26 March 2026. This policy explains how TimeSquare LLC collects,
            uses, and protects personal information in line with UK GDPR and the Data Protection
            Act 2018.
          </p>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Data We Collect</h2>
            <p className="text-muted-foreground">
              We collect contact form data such as name, email address, company details, and
              project information you choose to share.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">How We Use Data</h2>
            <p className="text-muted-foreground">
              We use this information to respond to inquiries, prepare proposals, and communicate
              about project delivery.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Third-Party Services</h2>
            <p className="text-muted-foreground">
              Our website may use EmailJS for form delivery and analytics platforms such as
              Vercel Analytics and Google Analytics for performance and usage insights.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Cookies</h2>
            <p className="text-muted-foreground">
              We may use cookies and related technologies to improve functionality and measure site
              usage. You can control cookies via your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Data Retention</h2>
            <p className="text-muted-foreground">
              Contact inquiry records are retained only as long as needed for communication,
              compliance, and legitimate business operations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Your Rights</h2>
            <p className="text-muted-foreground">
              You may request access, correction, deletion, or portability of your personal data.
              You may also object to processing where applicable by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Contact for Data Requests</h2>
            <p className="text-muted-foreground">
              Email: hello@timesquarellc.com
              <br />
              Location: Chafford Hundred, Grays, England
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
