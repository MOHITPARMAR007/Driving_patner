import React from "react"
import { MapPin, Calendar, Users, Car, Shield, Star } from "lucide-react"
import { Button } from "../components/Button";  // Assuming Button is a custom component
import { Link } from "react-router-dom" // or just 'a' if not using router
//import heroImage from "/public/placeholder.svg"

const Home = () => {
  return (
      <div>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Share Your Journey, <span className="text-emerald-500">Save Together</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Connect with travelers heading your way. Post a ride or join one - making travel more affordable, social, and sustainable.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-3 text-lg rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition">
                    Post a Ride
                  </button>
                  <button className="px-6 py-3 text-lg rounded-md border border-emerald-500 text-emerald-500 hover:bg-emerald-50 transition">
                    Find Rides
                  </button>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <img src={""} alt="People sharing a ride" className="mx-auto rounded-lg object-cover w-full max-w-[600px]" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Sharing rides has never been easier. Follow these simple steps to get started.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-12">
              {[ 
                { icon: <Car className="h-8 w-8 text-emerald-500" />, title: "Post a Ride", desc: "Share your journey details including vehicle, route, date, and available seats." },
                { icon: <MapPin className="h-8 w-8 text-emerald-500" />, title: "Discover Rides", desc: "Browse available rides that match your destination and schedule." },
                { icon: <Users className="h-8 w-8 text-emerald-500" />, title: "Join & Travel", desc: "Connect with the driver, confirm your spot, and enjoy the journey together." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose RideShare</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Our platform offers unique benefits that make ride sharing safe, convenient, and enjoyable.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3 lg:gap-12">
              {[ 
                { icon: <Shield className="h-6 w-6 text-emerald-500" />, title: "Safe & Secure", desc: "Verified users, ratings, and reviews ensure a safe experience for everyone." },
                { icon: <Calendar className="h-6 w-6 text-emerald-500" />, title: "Flexible Scheduling", desc: "Find rides that fit your timetable or set your own schedule as a driver." },
                { icon: <Users className="h-6 w-6 text-emerald-500" />, title: "Community Driven", desc: "Connect with like-minded travelers and build a network of trusted ride partners." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col space-y-3 rounded-lg border p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-100">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Hear from people who have transformed their travel experience with RideShare.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
              {[ 
                { name: "Sarah Johnson", quote: "I've been using RideShare for my daily commute for 3 months now. Not only am I saving money, but I've made some great friends along the way. The platform is so easy to use!" },
                { name: "Michael Chen", quote: "As a driver, I can offset my travel costs while helping others get to their destination. The verification process made me feel secure about who I'm sharing my car with." }
              ].map((user, i) => (
                <div key={i} className="flex flex-col space-y-4 rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <img src="/placeholder.svg" alt="User avatar" width={60} height={60} className="rounded-full" />
                    <div>
                      <h4 className="text-lg font-bold">{user.name}</h4>
                      <div className="flex items-center">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current text-yellow-400" />)}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">"{user.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 md:py-24 bg-emerald-500">
          <div className="container px-4 md:px-6 mx-auto text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Sharing?</h2>
              <p className="max-w-[700px] mx-auto md:text-xl">
                Join thousands of users who are already saving money and reducing their carbon footprint.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <button className="px-6 py-3 text-lg rounded-md bg-white text-emerald-500 hover:bg-slate-100 transition">
                Sign Up Now
              </button>
              <button className="px-6 py-3 text-lg rounded-md border border-white text-white hover:bg-emerald-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RideShare. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Home;
