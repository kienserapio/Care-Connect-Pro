import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";  
import { Textarea } from "@/components/ui/textarea";
import { Heart, PhoneCall, Activity, Star, ChevronLeft, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
import video from "@/assets/video2.mp4";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const testimonials = [
    { name: "Sarah Johnson", role: "Diabetes Patient", text: "Care Connect Pro has transformed how I manage my diabetes. The monthly check-ins and medication reminders have made a real difference.", avatar: "👩‍⚕️" },
    { name: "Michael Chen", role: "Heart Disease Patient", text: "The continuous care approach has helped me stay on top of my heart health. I feel supported every step of the way.", avatar: "👨‍💼" },
    { name: "Emily Rodriguez", role: "COPD Patient", text: "Thanks to Care Connect Pro, I'm breathing easier and living better. The remote monitoring is excellent.", avatar: "👩‍💻" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 
                      bg-[rgba(255,255,255,0.12)] 
                      backdrop-blur-md 
                      border-b border-white/10 
                      shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                      transition-all duration-300">
        <div className="container mx-auto px-8 py-1">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="Care Connect Pro" className="w-24 h-24 object-contain" />
            </button>

            <div className="hidden md:flex items-center gap-12">
              <button onClick={() => scrollToSection("home")} className="text-white/90 hover:text-white transition-colors font-regular">Home</button>
              <button onClick={() => scrollToSection("services")} className="text-white/90 hover:text-white transition-colors font-regular">Services</button>
              <button onClick={() => scrollToSection("programs")} className="text-white/90 hover:text-white transition-colors font-regular">Programs</button>
              <button onClick={() => scrollToSection("reviews")} className="text-white/90 hover:text-white transition-colors font-regular">Reviews</button>
              <button onClick={() => scrollToSection("contact")} className="text-white/90 hover:text-white transition-colors font-regular">Contact</button>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              className="text-white font-semibold px-8 rounded-full shadow-lg transition-all hover:scale-105 
                        bg-[linear-gradient(180deg,#5472FF_0%,#3F55BF_63%,#324499_100%)] 
                        hover:shadow-[#3F55BF]/50"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>


{/* Hero */}
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden z-[10]"
>
  {/* 🔹 Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src={video} type="video/mp4" />
  </video>

  {/* 🔹 Color Overlay (Gradient) */}
  <div className="absolute inset-0 bg-[linear-gradient(180deg,#5170FB_0%,#3549A4_100%)] opacity-70 z-[1] pointer-events-none"></div>

  {/* 🔹 Decorative Blobs */}
  <div className="absolute inset-0 overflow-hidden z-[2] pointer-events-none">
    <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
    <div
      className="absolute bottom-40 right-32 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "1s" }}
    ></div>
    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
  </div>

  {/* 🔹 Hero Content */}
  <div className="container mx-auto px-6 pt-20 pb-20 text-center relative z-10">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight py-2 animate-fade-in
      bg-[linear-gradient(180deg,#FFFFFF_0%,#D8DFFF_200%)]
      bg-clip-text text-transparent">
      Improving Healthcare Outcomes
      <br />
      Through Continuous Care
    </h1>
    <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-regular">
      Start your chronic care journey and find the support you need.
    </p>
    <Button
      onClick={() => scrollToSection("contact")}
      size="lg"
      className="text-white font-semibold px-12 py-7 text-lg rounded-full shadow-2xl transition-all hover:scale-105
                 bg-[linear-gradient(180deg,#5472FF_0%,#3F55BF_63%,#324499_100%)]
                 hover:shadow-[#3F55BF]/50"
    >
      Get Started Today
    </Button>
  </div>
</section>


    {/* Services */}
    <section id="services" className="relative -mt-32 pb-20 px-6 z-[20] overflow-hidden">
      <div className="container mx-auto relative">
        {/* 🔹 Blurred Blue Gradient Background (Right Side) */}
        <div className="absolute top-0 right-0 w-[40%] h-full 
                        bg-[radial-gradient(circle_at_center,#5472FF_0%,#3F55BF_40%,transparent_80%)] 
                        blur-3xl opacity-40 z-0 pointer-events-none"></div>

        <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#D8DFFF_200%)] 
                        rounded-[5rem] 
                        shadow-[inset_0_0_15px_rgba(50,68,153,0.35),_0_15px_50px_rgba(82,113,255,0.25)] 
                        px-8 md:px-24 py-24 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent font-bold text-black text-sm tracking-[0.3em] mb-4 uppercase">Our Services</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 
                      bg-[linear-gradient(180deg,#5472FF_0%,#3F55BF_63%,#324499_100%)] 
                      bg-clip-text text-transparent"
        >
          Why Consider Chronic Care Management?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive care coordination designed to improve your health outcomes and quality of life.
        </p>
      </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[linear-gradient(180deg,#5472FF_0%,#3F55BF_63%,#324499_100%)] mb-6 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/20">
                  <Heart className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Better Health Outcomes</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Ongoing care coordination helps reduce hospital visits and improves overall health results through personalized attention.</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[linear-gradient(180deg,#5472FF_0%,#3F55BF_63%,#324499_100%)] mb-6 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/20">
                  <PhoneCall className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Regular Check-ins</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Stay connected through monthly follow-ups, digital monitoring, and 24/7 access to your care team whenever you need support.</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[linear-gradient(180deg,#5472FF_0%,#3F55BF_63%,#324499_100%)] mb-6 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/20">
                  <Activity className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Medication Management</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Ensure proper adherence through organized medication tracking, timely reminders, and comprehensive medication reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="programs" className="py-24 px-6 bg-gradient-to-b from-white via-secondary/20 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-black text-sm tracking-[0.3em] mb-4 uppercase">
              Focus Areas
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight py-2 
                        bg-[linear-gradient(180deg,#5472FF_0%,#3F55BF_63%,#324499_100%)] 
                        bg-clip-text text-transparent"
            >
              Our Care Programs
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              We specialize in continuous support for a range of chronic health concerns with personalized care plans.
            </p>
          </div>

          {/* 🔹 Focus Area Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div
              className="relative p-8 rounded-[2rem] 
                        bg-[linear-gradient(180deg,#FFFFFF_0%,#D8DFFF_200%)] 
                        shadow-[inset_0_0_5px_rgba(50,68,153,0.35),_0_15px_50px_rgba(82,113,255,0.25)] 
                        backdrop-blur-xl transition-all 
                        hover:scale-105 hover:shadow-[inset_0_0_10px_rgba(50,68,153,0.45),_0_20px_60px_rgba(82,113,255,0.35)] 
                        group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Diabetes Management</h3>
              <p className="text-muted-foreground">
                Regular glucose monitoring and dietary guidance.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="relative p-8 rounded-[2rem] 
                        bg-[linear-gradient(180deg,#FFFFFF_0%,#D8DFFF_200%)] 
                        shadow-[inset_0_0_5px_rgba(50,68,153,0.35),_0_15px_50px_rgba(82,113,255,0.25)] 
                        backdrop-blur-xl transition-all 
                        hover:scale-105 hover:shadow-[inset_0_0_10px_rgba(50,68,153,0.45),_0_20px_60px_rgba(82,113,255,0.35)] 
                        group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Hypertension Support</h3>
              <p className="text-muted-foreground">
                Blood pressure monitoring and lifestyle coaching.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="relative p-8 rounded-[2rem] 
                        bg-[linear-gradient(180deg,#FFFFFF_0%,#D8DFFF_200%)] 
                        shadow-[inset_0_0_5px_rgba(50,68,153,0.35),_0_15px_50px_rgba(82,113,255,0.25)] 
                        backdrop-blur-xl transition-all 
                        hover:scale-105 hover:shadow-[inset_0_0_10px_rgba(50,68,153,0.45),_0_20px_60px_rgba(82,113,255,0.35)] 
                        group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Heart Disease Prevention</h3>
              <p className="text-muted-foreground">
                Comprehensive cardiovascular risk management.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="relative p-8 rounded-[2rem] 
                        bg-[linear-gradient(180deg,#FFFFFF_0%,#D8DFFF_200%)] 
                        shadow-[inset_0_0_5px_rgba(50,68,153,0.35),_0_15px_50px_rgba(82,113,255,0.25)] 
                        backdrop-blur-xl transition-all 
                        hover:scale-105 hover:shadow-[inset_0_0_10px_rgba(50,68,153,0.45),_0_20px_60px_rgba(82,113,255,0.35)] 
                        group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">COPD & Respiratory Care</h3>
              <p className="text-muted-foreground">
                Breathing exercises and pulmonary support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="reviews"
        className="relative py-24 px-6 bg-gradient-to-b from-white to-secondary/30 overflow-hidden"
      >
        {/* Blurred blue gradient on the right */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-300/30 to-transparent blur-3xl" />
        </div>

        <div className="relative container mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm tracking-[0.3em] mb-4 uppercase
            bg-[linear-gradient(180deg,#5472FF_0%,#3F55BF_63%,#324499_100%)] 
            bg-clip-text text-transparent">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Read the Reviews from our Patients
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real stories from people who've experienced better health with Care Connect.
            </p>
          </div>

          {/* Infinite Loop Container */}
          <div className="relative overflow-hidden">
            {/* Animation Wrapper */}
            <div className="flex gap-8 animate-scroll-slow">
              {/* Duplicate testimonials twice for infinite effect */}
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[300px] bg-white/70 backdrop-blur-md rounded-[2.5rem]
                            shadow-[0_0_40px_-10px_rgba(59,130,246,0.4),0_0_80px_-20px_rgba(96,165,250,0.3)]
                            p-8 text-center"
                >
                  <div className="flex gap-1 justify-center mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4 italic">
                    "{t.text}"
                  </p>
                  <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
                  <p className="text-primary font-semibold">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes scroll-slow {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll-slow {
            width: calc(300px * ${testimonials.length * 2} + 2rem * ${testimonials.length * 2});
            animation: scroll-slow 20s linear infinite;
          }
        `}</style>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 bg-[linear-gradient(180deg,#5472FF_0%,#3F55BF_63%,#324499_100%)] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm tracking-[0.3em] mb-4 uppercase text-white/90">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Start Your Care Journey?</h2>
            <p className="text-white/90 text-xl">Contact us today and take the first step toward better health outcomes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm mb-1">Call Us</p>
                      <p className="text-white font-semibold text-lg">1-800-CARE-PRO</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm mb-1">Email Us</p>
                      <p className="text-white font-semibold text-lg">info@careconnectpro.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm mb-1">Visit Us</p>
                      <p className="text-white font-semibold text-lg">123 Healthcare Blvd, Suite 100<br />Medical City, MC 12345</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-white/90 text-sm">
                    <span className="font-semibold">Hours:</span> Monday - Friday, 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-white/70 text-sm mt-2">24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 rounded-xl border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 rounded-xl border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 rounded-xl border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="rounded-xl border-2 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 rounded-xl shadow-lg hover:shadow-xl transition-all text-white font-semibold px-8 rounded-full shadow-lg transition-all hover:scale-105 
                        bg-[linear-gradient(180deg,#5472FF_0%,#3F55BF_63%,#324499_100%)] 
                        hover:shadow-[#3F55BF]/20"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Care Connect Pro" className="w-10 h-10 object-contain" />
                <span className="font-bold text-lg">Care Connect Pro</span>
              </div>
              <p className="text-white/70 text-sm">Improving healthcare outcomes through continuous care and compassionate support.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection("programs")} className="hover:text-white transition-colors">Programs</button></li>
                <li><button onClick={() => scrollToSection("reviews")} className="hover:text-white transition-colors">Reviews</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Our Programs</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Diabetes Management</li>
                <li>Hypertension Support</li>
                <li>Heart Disease Prevention</li>
                <li>Respiratory Care</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>1-800-CARE-PRO</li>
                <li>info@careconnectpro.com</li>
                <li>123 Healthcare Blvd</li>
                <li>Medical City, MC 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2025 Care Connect Pro. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
