import { DollarSign, TrendingUp, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/form";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";

export default function ROICalculator() {
  return (
    <div className="container mx-auto px-6">
      <NeuralNetworkHero 
        title="Stop Paying for Data Noise"
        description="Every analytics and advertising platform charges based on event volume. But here's the reality: only 30% of your events are actually valuable for decision-making. The rest is just expensive noise inflating your bills."
        ctaButtons={[
          { text: "Calculate Your Savings", href: "#contact-form", primary: true },
          { text: "View Pricing", href: "#cost-breakdown" },
        ]}
        badgeLabel="ROI Calculator"
        badgeText="Save up to 70%"
        microDetails={["70% Wasted Events", "$2,000+ Monthly Waste", "$24,000+ Annual Waste"]}
        colorTheme={1}
      />

      {/* Real Savings Examples */}
      <section className="py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extralight tracking-tight text-center mb-16">
          Real <span className="text-green-400">Savings</span> Examples
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* E-commerce Example */}
          <div className="bg-black/[.05] border border-white/10 rounded-xl p-8 shadow-sm hover:border-purple-500/50 transition-all duration-300 [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">E-commerce + Marketing</h3>
                  <p className="text-sm text-white/60">Mixpanel + Google Ads + Facebook Ads</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">Current events:</span>
                  <span className="font-mono text-lg">5M/month</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">Current costs:</span>
                  <span className="text-red-400 font-semibold">$685/month</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">After filtering:</span>
                  <span className="font-mono text-lg">1.5M events</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">New costs:</span>
                  <span className="text-green-400 font-semibold">$205/month</span>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Monthly savings:</span>
                  <span className="text-green-400 text-xl font-bold">$480</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Annual ROI:</span>
                  <span className="text-green-400 text-2xl font-bold">$5,760</span>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS Example */}
          <div className="bg-black/[.05] border border-white/10 rounded-xl p-8 shadow-sm hover:border-purple-500/50 transition-all duration-300 [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">SaaS Analytics</h3>
                  <p className="text-sm text-white/60">Mixpanel + Snowflake + Plausible</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">Current events:</span>
                  <span className="font-mono text-lg">15M/month</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">Current costs:</span>
                  <span className="text-red-400 font-semibold">$3,209/month</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">After filtering:</span>
                  <span className="font-mono text-lg">4.5M events</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">New costs:</span>
                  <span className="text-green-400 font-semibold">$986/month</span>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Monthly savings:</span>
                  <span className="text-green-400 text-xl font-bold">$2,223</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Annual ROI:</span>
                  <span className="text-green-400 text-2xl font-bold">$26,676</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App Example */}
          <div className="bg-black/[.05] border border-white/10 rounded-xl p-8 shadow-sm hover:border-green-500/50 transition-all duration-300 [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Mobile App Stack</h3>
                  <p className="text-sm text-white/60">Mixpanel + Google Ads + Facebook + Snowflake</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">Current events:</span>
                  <span className="font-mono text-lg">25M/month</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">Current costs:</span>
                  <span className="text-red-400 font-semibold">$4,200/month</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">After filtering:</span>
                  <span className="font-mono text-lg">7.5M events</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60">New costs:</span>
                  <span className="text-green-400 font-semibold">$1,260/month</span>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Monthly savings:</span>
                  <span className="text-green-400 text-xl font-bold">$2,940</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Annual ROI:</span>
                  <span className="text-green-400 text-2xl font-bold">$35,280</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <section id="cost-breakdown" className="py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extralight tracking-tight text-center mb-8">
          Platform <span className="text-purple-400">Cost Breakdown</span>
        </h2>
        <p className="text-white/60 text-center mb-16 text-lg">Based on 2025 pricing research</p>
        
        <div className="bg-black/[.05] border border-white/10 rounded-xl overflow-hidden shadow-sm [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black/20">
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 font-semibold text-lg">Platform</th>
                  <th className="text-left p-6 font-semibold text-lg">Cost Model</th>
                  <th className="text-left p-6 font-semibold text-lg">Typical Range</th>
                  <th className="text-left p-6 font-semibold text-lg text-green-400">Savings with 70% Reduction</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-black/20 transition-colors">
                  <td className="p-6 font-semibold text-lg">Mixpanel</td>
                  <td className="p-6 text-white/60">Events-based</td>
                  <td className="p-6 text-white/60">$140-$2,289/month (1.5M-20M events)</td>
                  <td className="p-6 text-green-400 font-semibold">$98-$1,600/month</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-black/20 transition-colors">
                  <td className="p-6 font-semibold text-lg">Google Ads</td>
                  <td className="p-6 text-white/60">CPC/Conversion tracking</td>
                  <td className="p-6 text-white/60">$70 avg cost per conversion</td>
                  <td className="p-6 text-green-400 font-semibold">70% fewer irrelevant conversions</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-black/20 transition-colors">
                  <td className="p-6 font-semibold text-lg">Facebook Ads</td>
                  <td className="p-6 text-white/60">Event-based tracking</td>
                  <td className="p-6 text-white/60">$0.35-$1.53 per event response</td>
                  <td className="p-6 text-green-400 font-semibold">$0.24-$1.07 savings per event</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-black/20 transition-colors">
                  <td className="p-6 font-semibold text-lg">Snowflake</td>
                  <td className="p-6 text-white/60">Storage + Compute</td>
                  <td className="p-6 text-white/60">$23-$40/TB + compute credits</td>
                  <td className="p-6 text-green-400 font-semibold">$16-$28/TB storage savings</td>
                </tr>
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-6 font-semibold text-lg">Plausible</td>
                  <td className="p-6 text-white/60">Event-based tiers</td>
                  <td className="p-6 text-white/60">€9-€69/month</td>
                  <td className="p-6 text-green-400 font-semibold">Significant tier reductions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The BetterPipes Advantage */}
      <section className="py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extralight tracking-tight text-center mb-16">
          The <span className="text-purple-400">BetterPipes</span> Advantage
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-black/[.05] border border-white/10 rounded-xl p-8 shadow-sm hover:border-purple-500/50 transition-all duration-300 [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Smart Filtering</h3>
              <ul className="text-white/60 space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>JavaScript-native transformations identify valuable events</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built-in identity resolution prevents duplicate counting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time filtering before data hits expensive destinations</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-black/[.05] border border-white/10 rounded-xl p-8 shadow-sm hover:border-green-500/50 transition-all duration-300 [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Cost Optimization</h3>
              <ul className="text-white/60 space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduce event volume by ~70% on average</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lower your tier/plan requirements across all platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Eliminate wasteful data transfer costs</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-black/[.05] border border-white/10 rounded-xl p-8 shadow-sm hover:border-purple-500/50 transition-all duration-300 [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Better Data Quality</h3>
              <ul className="text-white/60 space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Send only meaningful events that drive decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduce noise in your analytics dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Improve conversion tracking accuracy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Competitive Comparison */}
      <section className="py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extralight tracking-tight text-center mb-16">
          <span className="text-purple-400">Competitive</span> Comparison
        </h2>
        
        <div className="bg-black/[.05] border border-white/10 rounded-xl overflow-hidden shadow-sm [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black/20">
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 font-semibold text-lg">Solution</th>
                  <th className="text-left p-6 font-semibold text-lg">Cost</th>
                  <th className="text-left p-6 font-semibold text-lg">Event Filtering</th>
                  <th className="text-left p-6 font-semibold text-lg">Identity Resolution</th>
                  <th className="text-left p-6 font-semibold text-lg">JavaScript Native</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 bg-gradient-to-r from-purple-900/20 to-purple-800/10 hover:from-purple-900/30 transition-colors">
                  <td className="p-6 font-semibold text-lg text-purple-300">BetterPipes</td>
                  <td className="p-6 text-white/60">Usage-based</td>
                  <td className="p-6 text-green-400 font-semibold">✅ Smart filtering</td>
                  <td className="p-6 text-green-400 font-semibold">✅ Built-in</td>
                  <td className="p-6 text-green-400 font-semibold">✅ Native</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-black/20 transition-colors">
                  <td className="p-6 font-semibold text-lg">Segment</td>
                  <td className="p-6 text-white/60">$120+/month</td>
                  <td className="p-6 text-red-400 font-semibold">❌ None</td>
                  <td className="p-6 text-yellow-400 font-semibold">💰 Paid add-on</td>
                  <td className="p-6 text-red-400 font-semibold">❌ Limited</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-black/20 transition-colors">
                  <td className="p-6 font-semibold text-lg">RudderStack</td>
                  <td className="p-6 text-white/60">$0-$500+/month</td>
                  <td className="p-6 text-red-400 font-semibold">❌ Basic</td>
                  <td className="p-6 text-yellow-400 font-semibold">💰 Enterprise only</td>
                  <td className="p-6 text-red-400 font-semibold">❌ Limited</td>
                </tr>
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-6 font-semibold text-lg">Fivetran</td>
                  <td className="p-6 text-white/60">$120+/month</td>
                  <td className="p-6 text-red-400 font-semibold">❌ None</td>
                  <td className="p-6 text-red-400 font-semibold">❌ No</td>
                  <td className="p-6 text-red-400 font-semibold">❌ No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section id="contact-form" className="text-center py-24">
        <h2 className="text-4xl font-extralight tracking-tight mb-6">Ready to stop overpaying for analytics?</h2>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
