import { Shield, Server, CheckCircle, ArrowRight } from "lucide-react";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { features } from "@/lib/features";
import { ContactForm } from "@/components/form";
import PipelineVisualization from "@/components/ui/pipeline-visualization";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BetterPipes",
    "description": "Route, transform, and enrich your event data with JavaScript lambdas. Connect to dozens of destinations like Snowflake, BigQuery, Mixpanel, and HubSpot in minutes.",
    "url": "https://betterpipes.com",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Trial available"
    },
    "creator": {
      "@type": "Organization",
      "name": "Meiro",
      "url": "https://meiro.io"
    },
    "featureList": [
      "JavaScript-native pipeline transformations",
      "Rich connector library",
      "Live event debugger",
      "Identity resolution",
      "Real-time data processing",
      "Cost optimization"
    ],
    "screenshot": "https://betterpipes.com/og-image.svg"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-6">
        <NeuralNetworkHero 
          title="Don&apos;t Just Capture Events. Control Them."
          description="Go beyond simple event collection. BetterPipes gives you a state-of-the-art JavaScript transformation engine, a rich connector library, and built-in identity resolution to unify, enrich, and control your entire event stream."
          ctaButtons={[
            { text: "Contact Us", href: "#contact-form", primary: true },
            { text: "View Docs", href: "/docs" },
          ]}
          badgeLabel="Beta"
          badgeText="Now available"
          microDetails={["JavaScript-native", "Identity Resolution", "Cost-effective"]}
        />

        {/* Code Example Section */}
        <section className="py-24 max-w-6xl mx-auto">
          <h2 className="text-4xl font-extralight tracking-tight text-center mb-8">Simple. Powerful. Developer-Friendly.</h2>
          <p className="text-lg text-neutral-400 text-center mb-12">Get started with just a few lines of code</p>
          
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-neutral-400">betterpipes-example.ts</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`import { BetterPipes } from '@betterpipes/sdk';

const betterpipes = new BetterPipes({
  apiKey: process.env.BETTERPIPES_API_KEY
});

// Track user events with rich context
await betterpipes.track('user_signup', {
  userId: user.id,
  email: user.email,
  plan: 'pro',
  source: 'organic_search'
});

// Route to multiple destinations with transformations
betterpipes.route()
  .transform(event => ({
    ...event,
    enriched: true,
    timestamp: new Date().toISOString()
  }))
  .to('analytics')
  .to('dataWarehouse')
  .to('marketing')
  .send();`}</code>
            </pre>
          </div>
        </section>

        {/* Pipeline Architecture Section */}
        <section className="py-24 max-w-6xl mx-auto">
          <h2 className="text-4xl font-extralight tracking-tight text-center mb-16">The Pipeline Architecture</h2>
          <PipelineVisualization />
        </section>

        {/* Features Section */}
        <section className="py-24">
          <h2 className="text-4xl font-extralight tracking-tight text-center mb-16">Built for Modern Development Teams</h2>
          <p className="text-lg text-neutral-400 text-center mb-16 max-w-3xl mx-auto">Everything you need to manage events at scale, with the developer experience you deserve.</p>
          <BentoGrid>
            {features.map(feature => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </section>



        {/* Pricing Tiers Section */}
        <section className="py-24">
          <h2 className="text-4xl font-extralight tracking-tight text-center mb-16">Find the Plan That&apos;s Right for You</h2>
          <div className="text-center mb-12">
            <a 
              href="/roi-calculator" 
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg"
            >
              Calculate your potential savings with our ROI calculator
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border border-gray-700 rounded-lg p-8 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Self-Hosted</h3>
              <p className="text-neutral-400 mb-6 flex-grow">Deploy BetterPipes on your own infrastructure. Full control over your data with enterprise-grade security and compliance.</p>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <a href="#" className="mt-auto bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full text-center transition">Contact Sales</a>
            </div>
            <div className="border border-purple-500 rounded-lg p-8 flex flex-col relative">
              <div className="absolute top-0 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <h3 className="text-2xl font-semibold mb-4">Cloud</h3>
              <p className="text-neutral-400 mb-6 flex-grow">Start with a generous trial and simple pay-as-you-go pricing for our hosted solution. Includes a 14-day trial of all Pro features.</p>
              <div className="text-4xl font-bold mb-6">Trial <span className="text-lg text-neutral-400">up to 1M events/mo</span></div>
              <a href="#" className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-center transition">Sign Up Now</a>
            </div>
            <div className="border border-gray-700 rounded-lg p-8 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-neutral-400 mb-6 flex-grow">For large-scale deployments. Includes BYOC, advanced security (RBAC, SSO, Audit Logs), and dedicated support.</p>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <a href="#" className="mt-auto bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full text-center transition">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Enterprise Ready Section */}
        <section className="py-24 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-extralight tracking-tight mb-4">Built for the Enterprise</h2>
            <p className="text-lg text-neutral-400 mb-12">Maximum control, security, and compliance for your most critical data.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="flex items-start gap-4">
                    <Server className="w-8 h-8 text-purple-400 shrink-0 mt-1"/>
                    <div>
                        <h3 className="font-semibold text-xl mb-2">Bring Your Own Cloud (BYOC)</h3>
                        <p className="text-neutral-400">Deploy our data plane in your own AWS, GCP, or Azure account for ultimate data residency and control.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-purple-400 shrink-0 mt-1"/>
                    <div>
                        <h3 className="font-semibold text-xl mb-2">Advanced Security</h3>
                        <p className="text-neutral-400">Enterprise-grade features like Role-Based Access Control (RBAC), SSO, and immutable audit logs.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-purple-400 shrink-0 mt-1"/>
                    <div>
                        <h3 className="font-semibold text-xl mb-2">Compliance Ready</h3>
                        <p className="text-neutral-400">Features like Data Masking and PII controls help you meet GDPR, CCPA, and HIPAA requirements.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 max-w-5xl mx-auto">
          <h2 className="text-4xl font-extralight tracking-tight text-center mb-12">From Chaos to Control in 3 Steps</h2>
          <div className="relative">
            <div className="relative flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
              <div className="text-center flex-1">
                <div className="bg-gray-800 border-2 border-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold">1</span></div>
                <h3 className="text-2xl font-semibold mb-2">Connect Anything</h3>
                <p className="text-neutral-400 px-4">Use our SDKs or universal API endpoint. Web, mobile, backend, CRM - we cover it all.</p>
              </div>
              <div className="text-center flex-1">
                <div className="bg-gray-800 border-2 border-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold">2</span></div>
                <h3 className="text-2xl font-semibold mb-2">Transform with Code</h3>
                <p className="text-neutral-400 px-4">Write, test, and deploy JavaScript functions to validate, enrich, and route your events.</p>
              </div>
              <div className="text-center flex-1">
                <div className="bg-gray-800 border-2 border-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold">3</span></div>
                <h3 className="text-2xl font-semibold mb-2">Deliver Anywhere</h3>
                <p className="text-neutral-400 px-4">Send clean, reliable data to any destination—data warehouses, analytics tools, or internal APIs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-form" className="text-center py-24">
           <h2 className="text-4xl font-extralight tracking-tight mb-6">Ready to build better data pipelines?</h2>
           <div className="max-w-md mx-auto">
             <ContactForm />
           </div>
        </section>
      </div>
    </>
  );
}
