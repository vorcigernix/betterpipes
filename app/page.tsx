import { ArrowRight, Code, DollarSign, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            The Modern Data Pipeline for Developers
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Route, transform, and enrich your event data with JavaScript lambdas. Powerful, flexible, and cost-effective.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition"
            >
              Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-24">
        <section className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why BetterPipes?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-8 rounded-lg">
              <Code className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">Transform with JavaScript</h3>
              <p className="text-gray-400">
                Write custom JavaScript functions to modify, enrich, and reshape your events on the fly. No new DSL to learn.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">Unified Customer Profiles</h3>
              <p className="text-gray-400">
                Automatically merge user identities from different sources into a single, unified profile. Understand your users like never before.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">Affordable at Scale</h3>
              <p className="text-gray-400">
                Our efficient architecture and pay-as-you-go pricing make us the most cost-effective solution for high-volume event streaming.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center py-24">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1">
              <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
              <h3 className="text-2xl font-bold mb-2">Connect Sources</h3>
              <p className="text-gray-400">
                Point your event sources to our secure and scalable endpoint.
              </p>
            </div>
            <div className="text-gray-500 text-4xl">&rarr;</div>
            <div className="flex-1">
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <h3 className="text-2xl font-bold mb-2">Transform with Code</h3>
              <p className="text-gray-400">
                Apply your custom JavaScript transformations in our editor.
              </p>
            </div>
            <div className="text-gray-500 text-4xl">&rarr;</div>
            <div className="flex-1">
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
              <h3 className="text-2xl font-bold mb-2">Deliver Destinations</h3>
              <p className="text-gray-400">
                Route the transformed events to your analytics tools, webhooks, or data warehouses.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-12">
           <h2 className="text-4xl font-bold mb-6">Ready to build better data pipelines?</h2>
           <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full inline-flex items-center transition text-lg"
            >
              Sign Up Now <ArrowRight className="ml-2 h-6 w-6" />
            </a>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; 2025 BetterPipes. All rights reserved.</p>
      </footer>
    </div>
  );
}