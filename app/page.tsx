import { ArrowRight, Code, DollarSign, GitMerge, Zap, Library, Terminal, LayoutDashboard, Shield, Server, Cloud, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-6">
      <div className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Don't Just Capture Events. Control Them.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          Go beyond simple event collection. BetterPipes gives you a state-of-the-art JavaScript transformation engine, a rich connector library, and built-in identity resolution to unify, enrich, and control your entire event stream.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition">
            Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition">
            View Docs
          </a>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24">
        <h2 className="text-4xl font-bold text-center mb-16">A Toolkit for Modern Data Teams</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            icon: <Library className="h-8 w-8 mb-4 text-blue-400" />,
            title: "Rich Connector Library",
            description: "Connect to dozens of destinations like Snowflake, BigQuery, Mixpanel, and HubSpot in minutes with our pre-built connectors."
          }, {
            icon: <Terminal className="h-8 w-8 mb-4 text-green-400" />,
            title: "Live Event Debugger",
            description: "Get a real-time view of your event stream. Inspect payloads, debug transformations, and monitor data flow live before it hits your destination."
          }, {
            icon: <LayoutDashboard className="h-8 w-8 mb-4 text-purple-400" />,
            title: "Visual Pipeline Builder",
            description: "Map sources to destinations with an intuitive interface. Understand your data flow at a glance, no code required."
          }, {
            icon: <Code className="h-8 w-8 mb-4 text-yellow-400" />,
            title: "JavaScript-Native Pipeline",
            description: "Use the full power of JavaScript and the npm ecosystem to write sophisticated, real-time event transformations. If you can code it, you can ship it."
          }, {
            icon: <GitMerge className="h-8 w-8 mb-4 text-red-400" />,
            title: "Identity Resolution, Solved",
            description: "Forget complex SQL. Our platform automatically stitches together user journeys, creating a unified customer profile in real-time."
          }, {
            icon: <Zap className="h-8 w-8 mb-4 text-indigo-400" />,
            title: "Dashboards & Alerting",
            description: "Monitor pipeline health with built-in dashboards for volume and error rates. Get proactive alerts in Slack or via email on anomalies."
          }].map(feature => (
            <div key={feature.title} className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              {feature.icon}
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Find the Plan That's Right for You</h2>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border border-gray-700 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Open Source</h3>
            <p className="text-gray-400 mb-6 flex-grow">The core routing engine, basic connectors, and transformation logic. Self-host for free, forever.</p>
            <div className="text-4xl font-bold mb-6">$0</div>
            <button disabled className="mt-auto bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-center transition opacity-50 cursor-not-allowed">Coming Soon</button>
          </div>
          <div className="border border-blue-500 rounded-lg p-8 flex flex-col relative">
            <div className="absolute top-0 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
            <h3 className="text-2xl font-bold mb-4">Cloud</h3>
            <p className="text-gray-400 mb-6 flex-grow">A generous free tier and simple pay-as-you-go pricing for our hosted solution. Includes a 14-day trial of all Pro features.</p>
            <div className="text-4xl font-bold mb-6">Free <span className="text-lg text-gray-400">up to 1M events/mo</span></div>
            <a href="#" className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-center transition">Sign Up Now</a>
          </div>
          <div className="border border-gray-700 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-gray-400 mb-6 flex-grow">For large-scale deployments. Includes BYOC, advanced security (RBAC, SSO, Audit Logs), and dedicated support.</p>
            <div className="text-4xl font-bold mb-6">Custom</div>
            <a href="#" className="mt-auto bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full text-center transition">Contact Sales</a>
          </div>
        </div>
      </section>

      {/* Enterprise Ready Section */}
      <section className="py-24 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Built for the Enterprise</h2>
          <p className="text-gray-300 mb-12 text-lg">Maximum control, security, and compliance for your most critical data.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start gap-4">
                  <Server className="w-8 h-8 text-purple-400 shrink-0 mt-1"/>
                  <div>
                      <h3 className="font-bold text-xl mb-2">Bring Your Own Cloud (BYOC)</h3>
                      <p className="text-gray-400">Deploy our data plane in your own AWS, GCP, or Azure account for ultimate data residency and control.</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-purple-400 shrink-0 mt-1"/>
                  <div>
                      <h3 className="font-bold text-xl mb-2">Advanced Security</h3>
                      <p className="text-gray-400">Enterprise-grade features like Role-Based Access Control (RBAC), SSO, and immutable audit logs.</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-purple-400 shrink-0 mt-1"/>
                  <div>
                      <h3 className="font-bold text-xl mb-2">Compliance Ready</h3>
                      <p className="text-gray-400">Features like Data Masking and PII controls help you meet GDPR, CCPA, and HIPAA requirements.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">From Chaos to Control in 3 Steps</h2>
        <div className="relative">
         
          <div className="relative flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
            <div className="text-center flex-1">
              <div className="bg-gray-800 border-2 border-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold">1</span></div>
              <h3 className="text-2xl font-bold mb-2">Connect Anything</h3>
              <p className="text-gray-400 px-4">Use our SDKs or universal API endpoint. Web, mobile, backend, CRM - we cover it all.</p>
            </div>
            <div className="text-center flex-1">
              <div className="bg-gray-800 border-2 border-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold">2</span></div>
              <h3 className="text-2xl font-bold mb-2">Transform with Code</h3>
              <p className="text-gray-400 px-4">Write, test, and deploy JavaScript functions to validate, enrich, and route your events.</p>
            </div>
            <div className="text-center flex-1">
              <div className="bg-gray-800 border-2 border-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold">3</span></div>
              <h3 className="text-2xl font-bold mb-2">Deliver Anywhere</h3>
              <p className="text-gray-400 px-4">Send clean, reliable data to any destination—data warehouses, analytics tools, or internal APIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-24">
         <h2 className="text-4xl font-bold mb-6">Ready to build better data pipelines?</h2>
         <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full inline-flex items-center transition text-lg">
            Sign Up Now <ArrowRight className="ml-2 h-6 w-6" />
          </a>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; 2025 Meiro. All rights reserved.</p>
      </footer>
    </main>
  );
}
