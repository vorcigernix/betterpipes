import { Shield, Server, CheckCircle } from "lucide-react";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { features } from "@/lib/features";
import { ContactForm } from "@/components/form";

export default function Home() {
  return (
    <>
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
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Rounded Frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 backdrop-blur-sm rounded-3xl border border-gray-600/30 -m-8"></div>
              
              <svg width="1200" height="500" viewBox="0 0 1200 500" className="w-full max-w-5xl relative z-10">
                {/* Input Dots */}
                <circle cx="150" cy="100" r="6" fill="#3b82f6"/>
                <circle cx="150" cy="150" r="6" fill="#3b82f6"/>
                <circle cx="150" cy="200" r="6" fill="#3b82f6"/>
                <circle cx="150" cy="250" r="6" fill="#3b82f6"/>
                <circle cx="150" cy="300" r="6" fill="#3b82f6"/>
                <circle cx="150" cy="350" r="6" fill="#3b82f6"/>
                <circle cx="150" cy="400" r="6" fill="#3b82f6"/>
                
                {/* Curved Input Lines to BetterPipes */}
                <path d="M 156 100 Q 350 100 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 156 150 Q 350 150 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 156 200 Q 350 200 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 156 250 Q 350 250 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 156 300 Q 350 300 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 156 350 Q 350 350 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 156 400 Q 350 400 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
                

                
                {/* Curved Output Lines from BetterPipes */}
                <path d="M 650 250 Q 850 100 1044 100" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 650 250 Q 850 150 1044 150" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 650 250 Q 850 200 1044 200" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 650 250 Q 850 250 1044 250" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 650 250 Q 850 300 1044 300" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 650 250 Q 850 350 1044 350" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M 650 250 Q 850 400 1044 400" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
                
                {/* Output Dots */}
                <circle cx="1050" cy="100" r="6" fill="#10b981"/>
                <circle cx="1050" cy="150" r="6" fill="#10b981"/>
                <circle cx="1050" cy="200" r="6" fill="#10b981"/>
                <circle cx="1050" cy="250" r="6" fill="#10b981"/>
                <circle cx="1050" cy="300" r="6" fill="#10b981"/>
                <circle cx="1050" cy="350" r="6" fill="#10b981"/>
                <circle cx="1050" cy="400" r="6" fill="#10b981"/>
                
                {/* Animated Data Flow Dots */}
                {/* Input to BetterPipes */}
                <circle r="4" fill="#60a5fa">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="0s">
                    <mpath href="#input1"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#60a5fa">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
                    <mpath href="#input2"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#60a5fa">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                    <mpath href="#input3"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#60a5fa">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                    <mpath href="#input4"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#60a5fa">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="2s">
                    <mpath href="#input5"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#60a5fa">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="2.5s">
                    <mpath href="#input6"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#60a5fa">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="3s">
                    <mpath href="#input7"/>
                  </animateMotion>
                </circle>
                
                {/* BetterPipes to Output */}
                <circle r="4" fill="#34d399">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
                    <mpath href="#output1"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#34d399">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                    <mpath href="#output2"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#34d399">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                    <mpath href="#output3"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#34d399">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="2s">
                    <mpath href="#output4"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#34d399">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="2.5s">
                    <mpath href="#output5"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#34d399">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="3s">
                    <mpath href="#output6"/>
                  </animateMotion>
                </circle>
                <circle r="4" fill="#34d399">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="3.5s">
                    <mpath href="#output7"/>
                  </animateMotion>
                </circle>
                
                {/* Motion Paths for Input Animation */}
                <defs>
                  <path id="input1" d="M 156 100 Q 350 100 600 250" fill="none"/>
                  <path id="input2" d="M 156 150 Q 350 150 600 250" fill="none"/>
                  <path id="input3" d="M 156 200 Q 350 200 600 250" fill="none"/>
                  <path id="input4" d="M 156 250 Q 350 250 600 250" fill="none"/>
                  <path id="input5" d="M 156 300 Q 350 300 600 250" fill="none"/>
                  <path id="input6" d="M 156 350 Q 350 350 600 250" fill="none"/>
                  <path id="input7" d="M 156 400 Q 350 400 600 250" fill="none"/>
                  
                  {/* Motion Paths for Output Animation */}
                  <path id="output1" d="M 650 250 Q 850 100 1044 100" fill="none"/>
                  <path id="output2" d="M 650 250 Q 850 150 1044 150" fill="none"/>
                  <path id="output3" d="M 650 250 Q 850 200 1044 200" fill="none"/>
                  <path id="output4" d="M 650 250 Q 850 250 1044 250" fill="none"/>
                  <path id="output5" d="M 650 250 Q 850 300 1044 300" fill="none"/>
                  <path id="output6" d="M 650 250 Q 850 350 1044 350" fill="none"/>
                  <path id="output7" d="M 650 250 Q 850 400 1044 400" fill="none"/>
                </defs>
                
                {/* Input Labels */}
                <text x="80" y="105" textAnchor="end" fill="white" fontSize="14" fontWeight="500">Web Apps</text>
                <text x="80" y="155" textAnchor="end" fill="white" fontSize="14" fontWeight="500">APIs</text>
                <text x="80" y="205" textAnchor="end" fill="white" fontSize="14" fontWeight="500">Services</text>
                <text x="80" y="255" textAnchor="end" fill="white" fontSize="14" fontWeight="500">SDKs</text>
                <text x="80" y="305" textAnchor="end" fill="white" fontSize="14" fontWeight="500">Mobile</text>
                <text x="80" y="355" textAnchor="end" fill="white" fontSize="14" fontWeight="500">IoT</text>
                <text x="80" y="405" textAnchor="end" fill="white" fontSize="14" fontWeight="500">Legacy</text>
                
                {/* BetterPipes Label */}
                <text x="600" y="300" textAnchor="middle" fill="white" fontSize="12" fontWeight="500" style={{textTransform: "lowercase"}}>betterpipes</text>
                
                {/* Output Labels */}
                <text x="1100" y="105" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Warehouses</text>
                <text x="1100" y="155" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Analytics</text>
                <text x="1100" y="205" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Ad Platforms</text>
                <text x="1100" y="255" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Marketing</text>
                <text x="1100" y="305" textAnchor="start" fill="white" fontSize="14" fontWeight="500">CRM</text>
                <text x="1100" y="355" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Webhooks</text>
                <text x="1100" y="405" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Custom</text>
                
                {/* Section Headers */}
                <text x="150" y="50" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Input Sources</text>
                <text x="1050" y="50" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Output Destinations</text>
                
                {/* BetterPipes Central Box with Functionalities - Top Layer */}
                <rect x="520" y="180" width="160" height="120" rx="16" fill="#8b5cf6" stroke="#a78bfa" strokeWidth="3"/>
                
                {/* Individual Functionality Boxes - Stacked Vertically */}
                <rect x="540" y="200" width="120" height="25" rx="6" fill="#6d28d9" stroke="#7c3aed" strokeWidth="1"/>
                <text x="600" y="215" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">FILTER</text>
                
                <rect x="540" y="230" width="120" height="25" rx="6" fill="#6d28d9" stroke="#7c3aed" strokeWidth="1"/>
                <text x="600" y="245" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">ENRICH</text>
                
                <rect x="540" y="260" width="120" height="25" rx="6" fill="#6d28d9" stroke="#7c3aed" strokeWidth="1"/>
                <text x="600" y="275" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">ROUTE</text>
              </svg>
            </div>
          </div>
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
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border border-gray-700 rounded-lg p-8 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Open Source</h3>
              <p className="text-neutral-400 mb-6 flex-grow">The core routing engine, basic connectors, and transformation logic. Self-host for free, forever.</p>
              <div className="text-4xl font-bold mb-6">$0</div>
              <button disabled className="mt-auto bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-center transition opacity-50 cursor-not-allowed">Coming Soon</button>
            </div>
            <div className="border border-purple-500 rounded-lg p-8 flex flex-col relative">
              <div className="absolute top-0 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <h3 className="text-2xl font-semibold mb-4">Cloud</h3>
              <p className="text-neutral-400 mb-6 flex-grow">A generous free tier and simple pay-as-you-go pricing for our hosted solution. Includes a 14-day trial of all Pro features.</p>
              <div className="text-4xl font-bold mb-6">Free <span className="text-lg text-neutral-400">up to 1M events/mo</span></div>
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
