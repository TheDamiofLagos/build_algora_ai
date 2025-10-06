import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-400/12">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Logo size="sm" variant="image" />
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" className="text-sm">Sign In</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="primary" className="text-sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="subscription" className="mb-6">
            🚀 Launching Soon · Join the Waitlist
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Learn Tech Skills That<br />
            Actually <span className="text-accent">Land Jobs</span> in Africa
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Affordable, structured learning paths with live support from real African tech professionals. 
            No more scattered YouTube tutorials or expensive bootcamps.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/dashboard">
              <Button variant="primary" className="text-lg px-8 py-4">
                Start Learning Today
              </Button>
            </Link>
            <Button variant="outline" className="text-lg px-8 py-4">
              View Course Catalog
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6">
              <p className="text-4xl font-bold text-accent mb-2">₦9,000</p>
              <p className="text-slate-300">Starting price/month</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-4xl font-bold text-accent mb-2">100%</p>
              <p className="text-slate-300">Job-ready curriculum</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-4xl font-bold text-accent mb-2">Live</p>
              <p className="text-slate-300">Weekly office hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Traditional Learning <span className="text-accent">Doesn't Work</span>
            </h2>
            <p className="text-xl text-slate-300">The problems we're solving for African tech learners</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Problems */}
            <div className="space-y-6">
              <div className="glass-card p-6 border-l-4 border-red-500/50">
                <h3 className="text-xl font-bold mb-2 text-red-400">❌ Scattered Resources</h3>
                <p className="text-slate-300">Jumping between random YouTube videos and PDFs without structure or direction.</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-red-500/50">
                <h3 className="text-xl font-bold mb-2 text-red-400">❌ Expensive Bootcamps</h3>
                <p className="text-slate-300">₦200k-500k upfront costs that most people can't afford.</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-red-500/50">
                <h3 className="text-xl font-bold mb-2 text-red-400">❌ No Human Support</h3>
                <p className="text-slate-300">Getting stuck with no one to ask for help or accountability.</p>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <div className="glass-card p-6 border-l-4 border-success/50">
                <h3 className="text-xl font-bold mb-2 text-success">✅ Structured Tracks</h3>
                <p className="text-slate-300">Clear, step-by-step learning paths from beginner to job-ready professional.</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-success/50">
                <h3 className="text-xl font-bold mb-2 text-success">✅ Affordable Monthly Plans</h3>
                <p className="text-slate-300">From ₦9,000/month - less than a week's worth of lunch money.</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-success/50">
                <h3 className="text-xl font-bold mb-2 text-success">✅ Live Tutor Support</h3>
                <p className="text-slate-300">Weekly office hours and 1:1 sessions with real African tech professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How <span className="text-accent">Algora</span> Works
            </h2>
            <p className="text-xl text-slate-300">Your path from beginner to hired in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-slate-900">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Choose Your Track</h3>
              <p className="text-slate-300">
                Start with Data Analytics, then expand to Data Science, Business Intelligence, and more.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-slate-900">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Learn & Build</h3>
              <p className="text-slate-300">
                Self-paced lessons with videos, quizzes, and real projects. Join weekly office hours for support.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-slate-900">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Hired</h3>
              <p className="text-slate-300">
                Complete with portfolio projects, interview prep, and career guidance from mentors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Simple, <span className="text-accent">Affordable</span> Pricing
            </h2>
            <p className="text-xl text-slate-300">Choose the plan that fits your learning style</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="glass-card p-8 hover:scale-105 transition-transform">
              <Badge variant="default" className="mb-4">Starter</Badge>
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary-100">₦9,000</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">All learning content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">Group office hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">Progress tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">Quiz assessments</span>
                </li>
              </ul>
              <Link href="/dashboard">
                <Button variant="secondary" className="w-full">Get Started</Button>
              </Link>
            </div>

            {/* Pro Lite - Featured */}
            <div className="glass-card p-8 border-2 border-accent relative hover:scale-105 transition-transform">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="subscription">Most Popular</Badge>
              </div>
              <Badge variant="default" className="mb-4">Best Value</Badge>
              <h3 className="text-2xl font-bold mb-2">Pro Lite</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">₦12,000</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">Everything in Basic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">1 one-on-one session/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">Priority mentor support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">Session recordings</span>
                </li>
              </ul>
              <Link href="/dashboard">
                <Button variant="primary" className="w-full">Get Started</Button>
              </Link>
            </div>

            {/* Pro Plus */}
            <div className="glass-card p-8 hover:scale-105 transition-transform">
              <Badge variant="default" className="mb-4">Career</Badge>
              <h3 className="text-2xl font-bold mb-2">Pro Plus</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary-100">₦18,000</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">Everything in Pro Lite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">4 one-on-one sessions/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">Career guidance sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">✓</span>
                  <span className="text-slate-300">Portfolio review</span>
                </li>
              </ul>
              <Link href="/dashboard">
                <Button variant="success" className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-card p-12">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-accent">Tech Career</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of African learners building real skills with affordable education and live support.
          </p>
          <Link href="/dashboard">
            <Button variant="primary" className="text-lg px-10 py-4">
              Get Started Today - From ₦9,000/month
            </Button>
          </Link>
          <p className="text-sm text-slate-400 mt-4">No credit card required to explore</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900/50 border-t border-slate-400/12">
        <div className="max-w-6xl mx-auto text-center">
          <Logo size="md" variant="image" className="mx-auto mb-6" />
          <p className="text-slate-400 mb-6">
            Democratizing access to quality tech education in Africa
          </p>
          <div className="flex justify-center gap-8 mb-6 flex-wrap">
            <Link href="/dashboard" className="text-slate-300 hover:text-accent transition">Dashboard</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-accent transition">Courses</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-accent transition">Pricing</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-accent transition">About</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-accent transition">Contact</Link>
          </div>
          <p className="text-sm text-slate-500">
            Built with ❤️ for the next generation of African tech talent
          </p>
        </div>
      </footer>
    </div>
  );
}
