import { useSEO } from "@/hooks/useSEO";

export default function TermsOfService() {
  useSEO({
    title: "Terms of Service | TimeSquare LLC",
    description:
      "Review TimeSquare LLC terms covering service scope, intellectual property, liability limits, and governing law.",
    canonical: "https://timesquarellc.com/terms-of-service",
  });

  return (
    <div className="relative py-24 lg:py-32">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-10 space-y-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground">
            These terms govern your use of TimeSquare LLC website and services.
          </p>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Service Description</h2>
            <p className="text-muted-foreground">
              TimeSquare LLC provides AI integration, automation engineering, data solutions, and
              software development services as agreed in project-specific contracts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Intellectual Property</h2>
            <p className="text-muted-foreground">
              Unless otherwise stated in a written agreement, all website content remains the
              property of TimeSquare LLC. Project IP ownership and licensing terms are defined in
              individual client agreements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by law, TimeSquare LLC is not liable for indirect,
              incidental, or consequential damages arising from use of this website or services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms are governed by the laws of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-2">Contact Information</h2>
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
