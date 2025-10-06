import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { Briefcase, CheckCircle2, GraduationCap, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/85 backdrop-blur-xl border-b border-slate-400/12">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Logo size="sm" variant="image" />
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <Link href="#program" className="hover:text-accent transition">Program</Link>
            <Link href="#support" className="hover:text-accent transition">Support</Link>
            <Link href="#success" className="hover:text-accent transition">Success Stories</Link>
            <Link href="#pricing" className="hover:text-accent transition">Pricing</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="outline" className="text-sm px-4 py-2">Sign In</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="primary" className="text-sm px-4 py-2">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main id="program" className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="subscription" className="mb-6 uppercase tracking-widest">
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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button variant="primary" className="text-lg px-8 py-4 w-full">
                  Start Learning Today
                </Button>
              </Link>
              <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
                <Button variant="outline" className="text-base px-7 py-3 shadow-none w-full sm:w-auto">
                  Explore the Course Catalog
                </Button>
                <p className="text-sm text-slate-400 max-w-[220px] text-center sm:text-left">
                  Preview syllabi, lesson samples, and project briefs before you enroll.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="surface-card p-6 text-left">
                <p className="text-4xl font-bold text-accent mb-2">₦9,000</p>
                <p className="text-slate-300">Flexible monthly plans—pause anytime.</p>
              </div>
              <div className="surface-card p-6 text-left">
                <p className="text-4xl font-bold text-accent mb-2">92%</p>
                <p className="text-slate-300">Learners complete their first capstone within 6 weeks.</p>
              </div>
              <div className="surface-card p-6 text-left">
                <p className="text-4xl font-bold text-accent mb-2">Live</p>
                <p className="text-slate-300">Weekly office hours & accountability standups.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section id="support" className="py-20 px-6 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Built for African Learners Who Need <span className="text-accent">Real Support</span>
              </h2>
              <p className="text-xl text-slate-300">We solve the gaps that make self-teaching frustrating and expensive.</p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Problems */}
              <div className="space-y-6">
                <div className="surface-card--muted p-6 border-l-4 border-red-500/60">
                  <h3 className="text-xl font-semibold mb-2 text-red-300">Scattered Resources</h3>
                  <p className="text-slate-300">Endless playlists with no roadmap, making it hard to know what to learn next.</p>
                </div>
                <div className="surface-card--muted p-6 border-l-4 border-red-500/60">
                  <h3 className="text-xl font-semibold mb-2 text-red-300">Upfront Tuition Fees</h3>
                  <p className="text-slate-300">₦200k-500k bootcamps force you to commit before you're sure the program is a fit.</p>
                </div>
                <div className="surface-card--muted p-6 border-l-4 border-red-500/60">
                  <h3 className="text-xl font-semibold mb-2 text-red-300">No Human Support</h3>
                  <p className="text-slate-300">Learning alone means no timely feedback, accountability, or tailored advice.</p>
                </div>
              </div>

              {/* Solutions */}
              <div className="space-y-6">
                <div className="surface-card p-6 border-l-4 border-success/60">
                  <h3 className="text-xl font-semibold mb-2 text-success">Guided Learning Paths</h3>
                  <p className="text-slate-200">Structured tracks curated by African experts, with weekly checkpoints and project briefs.</p>
                </div>
                <div className="surface-card p-6 border-l-4 border-success/60">
                  <h3 className="text-xl font-semibold mb-2 text-success">Pay-As-You-Grow Pricing</h3>
                  <p className="text-slate-200">Monthly memberships with pause or upgrade flexibility—start for the cost of a weekend data plan.</p>
                </div>
                <div className="surface-card p-6 border-l-4 border-success/60">
                  <h3 className="text-xl font-semibold mb-2 text-success">Mentors in Your Time Zone</h3>
                  <p className="text-slate-200">Live office hours, 1:1 coaching, and community circles led by senior African professionals.</p>
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
              <p className="text-xl text-slate-300">Your path from beginner to hired in three guided milestones.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="surface-card--muted p-8 text-left">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <GraduationCap className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Choose Your Track</h3>
                <p className="text-slate-300">
                  Start with Data Analytics and unlock advanced paths in product, business intelligence, and data science as you progress.
                </p>
              </div>

              <div className="surface-card--muted p-8 text-left">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Sparkles className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Learn &amp; Build</h3>
                <p className="text-slate-300">
                  Bite-sized videos, interactive quizzes, and briefs that mirror real roles. Weekly mentor hours keep you accountable.
                </p>
              </div>

              <div className="surface-card--muted p-8 text-left">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-success/15 text-success">
                  <Briefcase className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Launch Your Career</h3>
                <p className="text-slate-300">
                  Portfolio reviews, interview coaching, and referrals with hiring partners help you transition into paid roles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section id="success" className="py-20 px-6 bg-slate-900/25">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <Badge variant="success" className="mb-5 uppercase tracking-widest text-xs text-success">
                Proven outcomes
              </Badge>
              <h2 className="text-4xl font-bold mb-5 leading-tight">
                Learners across Nigeria, Ghana, and Kenya are shipping portfolio-ready projects within 8 weeks.
              </h2>
              <p className="text-lg text-slate-300">
                Join a community of peers that stay on track with weekly accountability circles and mentor feedback on every deliverable.
              </p>
              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-accent mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-100">2,300+ community members</p>
                    <p className="text-slate-400 text-sm">Daily standups, study groups, and hiring partner introductions keep momentum high.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-success mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-100">86% interview-ready in 3 months</p>
                    <p className="text-slate-400 text-sm">Our mentors review your projects and mock interviews before you apply.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <article className="surface-card p-6 flex flex-col gap-5">
                <p className="text-slate-200 italic">
                  “Algora made the transition from accounting to data analytics realistic. The weekly critiques on my dashboards gave me confidence to apply for roles.”
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/15 text-accent flex items-center justify-center font-semibold">
                    OA
                  </div>
                  <div>
                    <p className="font-semibold">Olayemi A.</p>
                    <p className="text-slate-400 text-sm">Data Analyst · Lagos</p>
                  </div>
                </div>
              </article>
              <article className="surface-card p-6 flex flex-col gap-5">
                <p className="text-slate-200 italic">
                  “The capstone portfolio review and mock interviews helped me land my first BI internship in Nairobi after just 10 weeks.”
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-success/15 text-success flex items-center justify-center font-semibold">
                    KM
                  </div>
                  <div>
                    <p className="font-semibold">Kwame M.</p>
                    <p className="text-slate-400 text-sm">Business Intelligence Intern · Nairobi</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6 bg-slate-900/35">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Simple, <span className="text-accent">Affordable</span> Pricing
              </h2>
            <p className="text-xl text-slate-300">Choose the plan that fits your learning style</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <article className="surface-card--muted p-8 flex flex-col gap-6">
              <div>
                <Badge variant="default" className="mb-3 uppercase tracking-[0.2em] text-[11px] text-primary-100">
                  Starter
                </Badge>
                <h3 className="text-2xl font-semibold mb-2">Explorer</h3>
                <p className="text-slate-400 text-sm">For self-starters validating a new career path.</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary-100">₦9,000</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-100">All core content &amp; quizzes</p>
                    <p className="text-slate-400">Self-paced modules, practice datasets, and progress dashboards.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-100">Weekly community review</p>
                    <p className="text-slate-400">Async peer feedback on submitted assignments.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-auto space-y-4">
                <Link href="/dashboard">
                  <Button variant="secondary" className="w-full">Start with Explorer</Button>
                </Link>
                <p className="text-xs text-slate-500 text-center">Pause anytime. No setup fees.</p>
              </div>
            </article>

            {/* Pro Lite - Featured */}
            <article className="surface-card p-8 flex flex-col gap-6 border-2 border-accent">
              <div>
                <Badge variant="subscription" className="mb-3 uppercase tracking-[0.2em] text-[11px]">
                  Most Popular
                </Badge>
                <h3 className="text-2xl font-semibold mb-2">Mentor Lite</h3>
                <p className="text-slate-300 text-sm">Best for learners who need guidance and accountability.</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accent">₦12,000</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-100">Everything in Explorer</p>
                    <p className="text-slate-400">Plus curated capstone briefs and solution walkthroughs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-100">Weekly mentor drop-ins</p>
                    <p className="text-slate-400">Live office hours with senior analysts in your time zone.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-100">1:1 coaching session</p>
                    <p className="text-slate-400">Monthly personalised feedback on your portfolio progress.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-auto space-y-4">
                <Link href="/dashboard">
                  <Button variant="primary" className="w-full">Enroll in Mentor Lite</Button>
                </Link>
                <p className="text-xs text-slate-500 text-center">Upgrade or pause whenever you need.</p>
              </div>
            </article>

            {/* Pro Plus */}
            <article className="surface-card--muted p-8 flex flex-col gap-6">
              <div>
                <Badge variant="default" className="mb-3 uppercase tracking-[0.2em] text-[11px] text-primary-100">
                  Career
                </Badge>
                <h3 className="text-2xl font-semibold mb-2">Career Studio</h3>
                <p className="text-slate-400 text-sm">For job seekers preparing to interview and negotiate offers.</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary-100">₦18,000</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-100">Unlimited interview coaching</p>
                    <p className="text-slate-400">Role-play sessions and recruiter feedback until you land an offer.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-100">Career accelerator labs</p>
                    <p className="text-slate-400">Collaborate on industry briefs with hiring partners.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-100">Portfolio polish sessions</p>
                    <p className="text-slate-400">UX reviews, storytelling workshops, and salary negotiation support.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-auto space-y-4">
                <Link href="/dashboard">
                  <Button variant="success" className="w-full">Join Career Studio</Button>
                </Link>
                <p className="text-xs text-slate-500 text-center">Includes hiring partner referrals when you're ready.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center surface-card p-12">
            <Badge variant="subscription" className="mb-4 uppercase tracking-[0.25em] text-[11px]">
              Join the movement
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-accent">Tech Career</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Build job-ready projects with African mentors who understand the local market and hiring expectations.
            </p>
            <Link href="/dashboard">
              <Button variant="primary" className="text-lg px-10 py-4">
                Get Started Today — From ₦9,000/month
              </Button>
            </Link>
            <p className="text-sm text-slate-400 mt-4">No credit card required to explore the platform.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900/55 border-t border-slate-400/12">
        <div className="max-w-6xl mx-auto text-center">
          <Logo size="md" variant="image" className="mx-auto mb-6" />
          <p className="text-slate-400 mb-6">
            Democratizing access to quality tech education in Africa
          </p>
          <div className="flex justify-center gap-8 mb-6 flex-wrap text-sm">
            <Link href="#program" className="text-slate-300 hover:text-accent transition">Program</Link>
            <Link href="#support" className="text-slate-300 hover:text-accent transition">Support</Link>
            <Link href="#success" className="text-slate-300 hover:text-accent transition">Success Stories</Link>
            <Link href="#pricing" className="text-slate-300 hover:text-accent transition">Pricing</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-accent transition">Learner Portal</Link>
          </div>
          <p className="text-sm text-slate-500">
            Built with ❤️ for the next generation of African tech talent
          </p>
        </div>
      </footer>
    </div>
  );
}
