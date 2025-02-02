const TermsConditions = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>By accessing our website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and software, is the property of Luminious and is protected by intellectual property laws.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Use License</h2>
          <p>Permission is granted to temporarily view the materials on Luminious's website for personal, non-commercial use only.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions; 