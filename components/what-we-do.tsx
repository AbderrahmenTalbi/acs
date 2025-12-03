"use client";

import { Code, Rocket, GraduationCap, Network } from "lucide-react"

export function HowWeGrow() {
  const growthActivities = [
    {
      icon: Code,
      title: "Workshops & Tutorials",
      description:
        "Regular hands-on sessions covering programming languages, frameworks, and cutting-edge technologies to help members grow their skills.",
    },
    {
      icon: Rocket,
      title: "Hackathons",
      description:
        "Participate in competitive coding events where teams build innovative solutions in limited time, fostering creativity and growth.",
    },
    {
      icon: GraduationCap,
      title: "Guest Lectures",
      description:
        "Host industry professionals and researchers to share insights on latest trends and career opportunities, expanding knowledge and perspectives.",
    },
    {
      icon: Network,
      title: "Networking Events",
      description:
        "Connect with peers, alumni, and industry partners to build lasting professional relationships and grow your network.",
    },
    {
      icon: Code,
      title: "Peer Learning",
      description:
        "We learn by teaching each other. Seniors mentor juniors in a cycle of continuous growth.",
    },
    {
      icon: Network,
      title: "Open Access",
      description:
        "As part of the Youth House, our resources are open to all members, supporting learning and growth for everyone.",
    },
  ]

  return (
    <section id="how-we-grow" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">How We Grow</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            We foster growth through diverse activities and events that enhance technical skills, encourage collaboration,
            and prepare members for successful careers in technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {growthActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4">
                <activity.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{activity.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
