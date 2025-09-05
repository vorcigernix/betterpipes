export default function DocsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-extralight tracking-tight text-center mb-12">
        Meiro Platform Features Documentation
      </h1>

      <p className="text-xl text-neutral-400 text-center mb-12">
        Powerful customer data platform with advanced event routing, real-time processing, and seamless integrations
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Table of Contents */}
        <aside className="lg:w-1/4 sticky top-24 h-fit p-4 border border-gray-700 rounded-lg bg-black z-10">
          <h3 className="text-2xl font-semibold mb-4">Contents</h3>
          <ul className="space-y-2">
            <li><a href="#core-platform-features" className="text-neutral-400 hover:text-white">Core Platform Features</a></li>
            <li><a href="#pricing-scaling" className="text-neutral-400 hover:text-white">Pricing & Scaling</a></li>
            <li><a href="#open-source-strategy" className="text-neutral-400 hover:text-white">Open Source Strategy</a></li>
            <li><a href="#technical-specifications" className="text-neutral-400 hover:text-white">Technical Specifications</a></li>
            <li><a href="#getting-started" className="text-neutral-400 hover:text-white">Getting Started</a></li>
            <li><a href="#support-resources" className="text-neutral-400 hover:text-white">Support & Resources</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4 space-y-12">
          <section id="core-platform-features">
            <h2 className="text-4xl font-extralight tracking-tight mb-4">Core Platform Features</h2>
            <p className="text-neutral-400 mb-8"><i>Production-ready capabilities that power modern data operations</i></p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2" id="advanced-sources-ingestion">📊 Advanced Sources & Ingestion</h3>
                <p className="text-neutral-400 mb-4"><b>✅ Core Strength</b></p>
                <p className="text-neutral-400 mb-4">Extremely powerful per-event-type configuration with <b>schema validation, custom handlers, and identity resolution</b>. This is our core differentiator in the market.</p>
                <h4 className="text-xl font-semibold mb-2">Ready Features:</h4>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Production SDKs ready and easy to deploy</li>
                  <li>Rich library of warehouse connectors (Snowflake, BigQuery)</li>
                  <li>Analytics integrations (Mixpanel, Amplitude)</li>
                  <li>Marketing tool connectors (HubSpot, Braze)</li>
                  <li>Simple Segment client migration path</li>
                </ul>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2" id="flexible-destination-system">🔗 Flexible Destination System</h3>
                <p className="text-neutral-400 mb-4"><b>✅ Flexible Architecture</b></p>
                <p className="text-neutral-400 mb-4">Every destination can have a <b>custom Lambda function</b> for maximum flexibility and customization of data routing logic.</p>
                <h4 className="text-xl font-semibold mb-2">Current Capabilities:</h4>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Custom Lambda functions per destination</li>
                  <li>Unlimited transformation possibilities</li>
                  <li>Event-specific routing logic</li>
                  <li>Real-time processing pipeline</li>
                </ul>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2" id="live-event-debugger">🔍 Live Event Debugger</h3>
                <p className="text-neutral-400 mb-4"><b>✅ Ready to Use</b></p>
                <p className="text-neutral-400 mb-4">Get <b>real-time visibility</b> into your event stream with our functional log viewer and comprehensive debugging tools.</p>
                <h4 className="text-xl font-semibold mb-2">Available Now:</h4>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Functional log viewer interface</li>
                  <li>Real-time event stream monitoring</li>
                  <li>Event payload inspection</li>
                  <li>Pipeline flow visualization</li>
                </ul>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2" id="clean-developer-ui">🎨 Clean Developer UI</h3>
                <p className="text-neutral-400 mb-4"><b>✅ Developer-Centric</b></p>
                <p className="text-neutral-400 mb-4">Built with developers in mind - <b>clean, logical, and intuitive</b> interface that makes complex data operations simple.</p>
                <h4 className="text-xl font-semibold mb-2">Current Interface:</h4>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Clean, logical navigation</li>
                  <li>Developer-centric design</li>
                  <li>Entity-based organization</li>
                  <li>Functional pipeline management</li>
                </ul>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2" id="sql-based-attribute-definition">🧠 SQL-Based Attribute Definition</h3>
                <p className="text-neutral-400 mb-4"><b>✅ Killer Feature</b></p>
                <p className="text-neutral-400 mb-4">Define custom attributes using <b>SQL queries</b> - a killer feature for advanced users who need precise control over data transformation.</p>
                <h4 className="text-xl font-semibold mb-2">Advanced Capabilities:</h4>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Full SQL support for attribute definition</li>
                  <li>Complex data transformation logic</li>
                  <li>Real-time attribute computation</li>
                  <li>Advanced user profiling</li>
                </ul>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2" id="segment-builder">🎯 Segment Builder</h3>
                <p className="text-neutral-400 mb-4"><b>✅ Production Ready</b></p>
                <p className="text-neutral-400 mb-4">Create and manage user segments with our <b>intuitive segment builder UI</b> - ready for production use.</p>
                <h4 className="text-xl font-semibold mb-2">Segmentation Features:</h4>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Visual segment builder interface</li>
                  <li>Complex condition logic</li>
                  <li>Real-time segment updates</li>
                  <li>Export capabilities</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="pricing-scaling">
            <h2 className="text-4xl font-extralight tracking-tight mb-4">Pricing & Scaling</h2>
            <p className="text-neutral-400 mb-8"><i>Transparent, usage-based pricing with generous free tier</i></p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">💰 Transparent Cost Structure</h3>
                <p className="text-neutral-400 mb-4">Our pricing is based on actual usage with clear, predictable scaling parameters.</p>
                <h4 className="text-xl font-semibold mb-2">Cost Drivers:</h4>
                <ol className="list-decimal list-inside text-neutral-400">
                  <li><b>Events and their size</b> (50% weight)</li>
                  <li><b>Number of attributes & dimensions</b> (15% weight)</li>
                  <li><b>Event parameters for segmentation</b> (20% weight)</li>
                  <li><b>Routing complexity</b> (5% weight)</li>
                  <li><b>Export volume to destinations</b> (10% weight)</li>
                </ol>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">🚀 Generous Free Tier</h3>
                <p className="text-neutral-400 mb-4">Get started with <b>1M events per month</b> at minimal cost with shared infrastructure.</p>
                <h4 className="text-xl font-semibold mb-2">Free Tier Includes:</h4>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Up to 1M events per month</li>
                  <li>Shared infrastructure on Hetzner</li>
                  <li>~$2/month operational cost</li>
                  <li>Real-time processing included</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="open-source-strategy">
            <h2 className="text-4xl font-extralight tracking-tight mb-4">Open Source Strategy</h2>
            <p className="text-neutral-400 mb-8"><i>Built on open source foundations with commercial enterprise features</i></p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">🔓 Open Source Core</h3>
                <p className="text-neutral-400 mb-4">The core event routing engine, basic connectors, and transformation logic are <b>completely open source</b>.</p>
                <h4 className="text-xl font-semibold mb-2">Open Source Components:</h4>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Core event routing engine</li>
                  <li>Basic connector library</li>
                  <li>Transformation logic framework</li>
                  <li>Community contributions welcome</li>
                </ul>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">🏢 Enterprise Commercial Features</h3>
                <p className="text-neutral-400 mb-4">Premium features including <b>hosted SaaS UI, BYOC deployment, and enterprise security</b> available as paid tiers.</p>
                <h4 className="text-xl font-semibold mb-2">Commercial Features:</h4>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Hosted SaaS user interface</li>
                  <li>Packaged BYOC deployment tools</li>
                  <li>RBAC, SSO, and audit logs</li>
                  <li>Premium connectors and support</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="technical-specifications">
            <h2 className="text-4xl font-extralight tracking-tight mb-4">Technical Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">Real-Time Processing</h3>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>✅ <b>Real-time event processing</b> - Yes, fully supported</li>
                  <li>Event streaming with minimal latency</li>
                  <li>Live data pipeline monitoring</li>
                </ul>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">Scalability Parameters</h3>
                <p className="text-neutral-400 mb-4">Default limits are established for all components to ensure predictable performance and cost management.</p>
                <h4 className="text-xl font-semibold mb-2">Trial Instance Scope:</h4>
                <ul className="list-disc list-inside text-neutral-400">
                  <li>Minimal cost up to 1M events/month</li>
                  <li>Single instance ~$2/month (shared Hetzner infrastructure)</li>
                  <li>Automatic scaling based on usage patterns</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="getting-started">
            <h2 className="text-4xl font-extralight tracking-tight mb-4">Getting Started</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">For Developers</h3>
                <ol className="list-decimal list-inside text-neutral-400">
                  <li><b>Deploy SDKs</b> - Production-ready SDKs available for immediate deployment</li>
                  <li><b>Configure Sources</b> - Set up per-event-type configuration with schema validation</li>
                  <li><b>Connect Destinations</b> - Use our rich connector library or create custom Lambda functions</li>
                  <li><b>Debug & Monitor</b> - Utilize live event debugger for real-time visibility</li>
                </ol>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">For Data Teams</h3>
                <ol className="list-decimal list-inside text-neutral-400">
                  <li><b>Define Attributes</b> - Use SQL-based attribute definition for advanced transformations</li>
                  <li><b>Build Segments</b> - Create user segments with our visual builder</li>
                  <li><b>Set Up Routing</b> - Configure event routing logic for your specific use cases</li>
                  <li><b>Monitor Performance</b> - Track pipeline health and event flow</li>
                </ol>
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-6 mt-8">
              <h3 className="text-2xl font-semibold mb-2">Migration from Segment</h3>
              <p className="text-neutral-400">Simple migration path available for existing Segment customers with minimal code changes required.</p>
            </div>
          </section>

          <section id="support-resources">
            <h2 className="text-4xl font-extralight tracking-tight mb-4">Support & Resources</h2>
            <ul className="list-disc list-inside text-neutral-400">
              <li><b>Documentation</b>: Comprehensive guides for all features</li>
              <li><b>Community</b>: Open source community support</li>
              <li><b>Enterprise Support</b>: Dedicated support and SLAs for commercial customers</li>
              <li><b>Professional Services</b>: Migration assistance and custom implementation support</li>
            </ul>

            <p className="text-neutral-400 mt-8"><i>Ready to get started? Contact us for a demo or begin with our generous free tier.</i></p>
          </section>
        </div>
      </div>
    </div>
  );
}