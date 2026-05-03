export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Ecommerce Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Record Why Users Abandon<br />
          <span className="text-[#58a6ff]">Your Checkout Forms</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste one script tag. Instantly capture screen recordings, mouse heatmaps, and field-level drop-off data — so you know exactly where customers leave and why.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Recording — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🎥', title: 'Session Recordings', desc: 'Watch real users fill out your checkout step by step.' },
            { icon: '🔥', title: 'Field Heatmaps', desc: 'See which fields cause hesitation, rage-clicks, or exits.' },
            { icon: '📉', title: 'Drop-off Funnels', desc: 'Pinpoint the exact step where revenue is leaking.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited session recordings',
              'Field-level heatmaps',
              'Drop-off funnel reports',
              'Up to 10,000 sessions/mo',
              'One-line JS install',
              'Email alerts on spike drop-offs',
              'Priority support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I install the tracking script?',
              a: 'Copy one line of JavaScript from your dashboard and paste it into your checkout page. Works with Shopify, WooCommerce, Magento, and any custom stack.'
            },
            {
              q: 'Is customer data stored securely?',
              a: 'Yes. All recordings are encrypted at rest and in transit. Sensitive fields like passwords and card numbers are automatically masked and never recorded.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Absolutely. Cancel from your dashboard with one click. You keep access until the end of your billing period with no questions asked.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} FormTrack. All rights reserved.
      </footer>
    </main>
  )
}
