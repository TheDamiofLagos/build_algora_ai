import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { ProgressBar } from "@/components/common/ProgressBar";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="glass-card p-8 mb-7">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-wider text-slate-400 mb-3">
              Personalized learning journey
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Hi <span className="text-accent">Tola</span>, let's build your tech career today.
            </h1>
            <p className="text-slate-200 max-w-2xl">
              Keep momentum with curated lessons, office hours, and human support designed to help you finish job-ready projects.
            </p>
          </div>

          {/* Progress Bar */}
          <ProgressBar value={35} showLabel label="Excel Foundations path" />

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Button variant="primary">Resume Excel lesson</Button>
            <Button variant="outline">Book a 1:1 session</Button>
            <Button variant="subtle">Join upcoming office hours</Button>
          </div>

          {/* Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
            <div className="p-5 rounded-2xl bg-slate-400/8 border border-slate-400/14">
              <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-3">Active streak</h3>
              <p className="text-3xl font-bold mb-1">5 days</p>
              <p className="text-sm text-accent/72 font-semibold">+2 vs last week</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-400/8 border border-slate-400/14">
              <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-3">Lessons completed</h3>
              <p className="text-3xl font-bold mb-1">7</p>
              <p className="text-sm text-accent/72 font-semibold">3 remaining in module</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-400/8 border border-slate-400/14">
              <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-3">Office hours</h3>
              <p className="text-3xl font-bold mb-1">3 booked</p>
              <p className="text-sm text-accent/72 font-semibold">Next: Friday, 3 PM</p>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Learning Path */}
          <div className="lg:col-span-2 glass-card p-7">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Learning path</h2>
                <p className="text-slate-300">Pick up where you left off and unlock completion badges along the way.</p>
              </div>
              <Button variant="outline" className="text-sm">View syllabus</Button>
            </div>

            {/* Module Cards */}
            <div className="space-y-4">
              {/* Module 1 - Completed */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-success/15 to-success/12 border border-success/35 cursor-pointer transition-all hover:-translate-y-1.5 hover:shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold">Module 1 · Getting Started</h3>
                  <Badge variant="success">Completed</Badge>
                </div>
                <p className="text-slate-200 mb-4">Lay foundations in Excel navigation, formatting, and working with tables.</p>
                <div className="flex flex-wrap gap-3 text-sm mb-4">
                  <span className="px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-400/12">🕒 45 mins</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-400/12">🎯 3 quizzes</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-400/12">📁 2 templates</span>
                </div>
                <ProgressBar value={100} />
                <div className="flex justify-between text-sm text-slate-300 mt-3">
                  <span>Last activity: 2 days ago</span>
                  <span>Badge earned</span>
                </div>
              </div>

              {/* Module 2 - In Progress */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/8 to-accent/5 border border-accent/15 cursor-pointer transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-accent/30">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold">Module 2 · Working with Formulas</h3>
                  <Badge>In progress</Badge>
                </div>
                <p className="text-slate-200 mb-4">Master essential formulas, cell references, and error handling with guided practice.</p>
                <div className="flex flex-wrap gap-3 text-sm mb-4">
                  <span className="px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-400/12">🧠 Skill focus: Analysis</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-400/12">💡 Mentor tips</span>
                </div>
                <ProgressBar value={50} />
                <div className="flex justify-between text-sm text-slate-300 mt-3">
                  <span>Lesson 3 of 6</span>
                  <span>Next up: Absolute references</span>
                </div>
              </div>

              {/* Module 3 - Locked */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-400/5 to-slate-400/3 border border-slate-400/15 opacity-60 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold">Module 3 · Dashboards &amp; Insights</h3>
                  <Badge variant="warning">Unlocks soon</Badge>
                </div>
                <p className="text-slate-200 mb-4">Design professional dashboards, build formulas-driven visuals, and share insights.</p>
                <div className="flex flex-wrap gap-3 text-sm mb-4">
                  <span className="px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-400/12">📊 Portfolio project</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-400/12">🤝 Peer review</span>
                </div>
                <ProgressBar value={0} />
                <div className="flex justify-between text-sm text-slate-300 mt-3">
                  <span>Starts after Module 2</span>
                  <span>Project mentor: Sarah</span>
                </div>
              </div>
            </div>

            {/* Coach Message */}
            <div className="mt-6 p-5 rounded-2xl bg-accent/12 border border-accent/35 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex-shrink-0"></div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Need direction?</p>
                <p className="text-sm text-slate-300">Your coach can review your portfolio and suggest the next session tailored to your goals.</p>
              </div>
              <Button variant="secondary">Message coach</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Next Session */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4">Next live support</h3>
              <p className="text-sm text-slate-300 mb-4">Stay accountable with live check-ins.</p>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-400/15 mb-4">
                <p className="font-semibold mb-1">Excel Help</p>
                <p className="text-sm text-slate-400 mb-1">Friday · 3:00 PM</p>
                <p className="text-sm text-slate-400">Mentor: Sarah Johnson</p>
                <Button variant="subtle" className="w-full mt-3">Join room</Button>
              </div>
              <Button variant="primary" className="w-full">Book more time</Button>
            </div>

            {/* Subscription */}
            <div className="glass-card p-6 text-center">
              <h3 className="text-lg font-bold mb-4">Your subscription</h3>
              <Badge variant="subscription" className="mb-4">Pro Lite</Badge>
              <p className="text-sm text-slate-300 mb-4">1 one-on-one session remaining</p>
              <Button variant="outline" className="w-full">Manage plan</Button>
            </div>

            {/* Group Office Hours */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4">Group office hours</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-400/15">
                  <p className="font-semibold text-sm mb-1">Data Analytics Q&A</p>
                  <p className="text-xs text-slate-400">Tuesday · 7:00 PM</p>
                  <Button variant="secondary" className="w-full mt-2 text-sm py-2">Join</Button>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-400/15">
                  <p className="font-semibold text-sm mb-1">Excel Workshop</p>
                  <p className="text-xs text-slate-400">Saturday · 2:00 PM</p>
                  <Button variant="secondary" className="w-full mt-2 text-sm py-2">Join</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
