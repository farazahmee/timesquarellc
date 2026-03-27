export function TermsOfService() {
  return (
    <main id="main-content">
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        <h1>Terms of Service</h1>
        <p><strong>Last updated: {new Date().toLocaleDateString('en-GB')}</strong></p>
        <section style={{ marginTop: '2rem' }}>
          <h2>1. Agreement to Terms</h2>
          <p>By accessing and using timesquarellc.com, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on timesquarellc.com for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            <li>Use the materials for illegal purposes or in violation of any rules or regulations</li>
          </ul>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>3. Disclaimer</h2>
          <p>The materials on timesquarellc.com are provided on an "as is" basis.</p>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>4. Limitations</h2>
          <p>In no event shall TimeSquare LLC be liable for any damages, including loss of data, profit, or business interruption.</p>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>5. Accuracy of Materials</h2>
          <p>Materials on timesquarellc.com may include technical, typographical, or photographic errors and may change at any time.</p>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>6. Links</h2>
          <p>TimeSquare LLC is not responsible for the contents of linked third-party sites and use of linked websites is at your own risk.</p>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>7. Modifications</h2>
          <p>TimeSquare LLC may revise these terms of service at any time without notice. Continued use means you accept the current version.</p>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>8. Governing Law</h2>
          <p>These terms are governed by and construed in accordance with the laws of the United Kingdom.</p>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>9. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p>
            <strong>Email:</strong> contact@timesquarellc.com<br />
            <strong>Website:</strong> https://timesquarellc.com
          </p>
        </section>
        <section style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            These Terms of Service were last updated on {new Date().toLocaleDateString('en-GB')}.
          </p>
        </section>
      </div>
    </main>
  )
}

export default TermsOfService;
