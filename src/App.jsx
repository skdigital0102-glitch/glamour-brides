import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Safe Icon Helper Component
  const Icon = ({ name, className = "w-5 h-5" }) => {
    const Component = Icons[name] || Icons.Sparkles;
    return <Component className={className} />;
  };

  const packages = [
    {
      id: 1,
      title: 'Royal South Indian Bridal Makeup',
      price: '₹25,000',
      duration: '4 - 5 Hours',
      features: [
        'HD / 3D Waterproof Makeup',
        'Traditional Saree Draping',
        'Real Flower Gajra & Hair Styling',
        'Premium Lashes & Lenses',
        'Pre-Bridal Skin Care Consultation'
      ],
      image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=800',
      popular: true
    },
    {
      id: 2,
      title: 'Celebrity Airbrush Engagement Look',
      price: '₹18,000',
      duration: '3 Hours',
      features: [
        'Ultra HD Airbrush Finish',
        'Modern Indo-Western Hair Design',
        'Jewelry & Outfit Fixation',
        '16-Hour Long-Lasting Stay'
      ],
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
      popular: false
    },
    {
      id: 3,
      title: 'Reception Glam & Party Makeup',
      price: '₹15,000',
      duration: '2.5 Hours',
      features: [
        'Smokey / Shimmer Eye Look',
        'Contour & Highlight Glow',
        'Messy Bun or Hollywood Waves',
        'Touch-up Kit Included'
      ],
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
      popular: false
    }
  ];

  const gallery = [
    { title: 'Kanchipuram Silk Bridal Look', image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=600' },
    { title: 'Haldi & Muhurtham Look', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600' },
    { title: 'Cocktail Party Glam', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600' },
    { title: 'Royal North Indian Bride', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600' }
  ];

  const handleWhatsAppBooking = (packageName = 'Bridal Makeup Session') => {
    const phoneNumber = "919999999999";
    const msg = `Hello Ma'am! Nenu website dwara "${packageName}" booking / dates inquiry kosam message chestunnanu.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-rose-50 font-sans selection:bg-rose-400 selection:text-neutral-950 overflow-x-hidden">
      
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 text-rose-100 text-xs py-2 px-4 text-center font-medium tracking-widest uppercase">
        ✨ Wedding Season Bookings Open! Book Your Slot Early ✨
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 w-full bg-neutral-950/90 backdrop-blur-md border-b border-rose-950 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="h-7 w-7 text-rose-400 animate-pulse" />
              <span className="text-2xl font-serif font-bold tracking-wider text-white">
                GLAMOUR <span className="text-rose-400">BRIDES</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold">
              <a href="#home" className="hover:text-rose-400 transition">Home</a>
              <a href="#services" className="hover:text-rose-400 transition">Packages</a>
              <a href="#gallery" className="hover:text-rose-400 transition">Portfolio</a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppBooking('Instant Slot Check')}
                className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2.5 rounded-full font-bold transition flex items-center gap-2 shadow-lg shadow-rose-950"
              >
                <Icon name="Phone" className="w-4 h-4" /> Book Appointment
              </motion.button>
            </div>

            <button className="md:hidden text-rose-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-7 w-7" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-6 pt-4 pb-6 space-y-4 text-sm font-semibold">
            <a href="#home" className="block text-rose-100 hover:text-rose-400" onClick={()=>setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="block text-rose-100 hover:text-rose-400" onClick={()=>setIsMenuOpen(false)}>Packages</a>
            <a href="#gallery" className="block text-rose-100 hover:text-rose-400" onClick={()=>setIsMenuOpen(false)}>Portfolio</a>
            <button 
              onClick={() => { setIsMenuOpen(false); handleWhatsAppBooking('Mobile Menu'); }}
              className="w-full bg-rose-500 text-white py-3 rounded-full font-bold mt-2"
            >
              Book Date on WhatsApp
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section with Smooth Fade In */}
      <section id="home" className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1920" 
            alt="Bridal Makeup Hero" 
            className="w-full h-full object-cover opacity-20 scale-105 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 bg-rose-950/80 border border-rose-800/50 text-rose-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <Icon name="Award" className="w-4 h-4 text-rose-400" /> Celebrity Certified Makeup Artist
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Unveil Your Royal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-400 to-amber-200">
                Bridal Perfection
              </span>
            </h1>
            <p className="text-rose-200/80 text-base md:text-lg mb-8 font-light leading-relaxed">
              Transforming brides into timeless royalty with HD & Airbrush Waterproof Makeup. Customized drapes, exquisite hair styling & personal attention for your big day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppBooking('Hero Bridal Slot')}
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-full transition shadow-xl shadow-rose-950 flex items-center justify-center gap-3 text-sm tracking-wider uppercase"
              >
                Check Date Availability <Icon name="ChevronRight" className="w-5 h-5" />
              </motion.button>
              <a 
                href="#gallery" 
                className="border border-rose-800 hover:border-rose-400 text-rose-200 px-8 py-4 rounded-full transition flex items-center justify-center text-sm font-semibold"
              >
                View Bridal Gallery
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section with Scroll Animation */}
      <section id="services" className="py-24 bg-neutral-900 border-y border-rose-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">Our Packages</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">Curated Bridal Experiences</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div 
                key={pkg.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-neutral-950 border border-rose-900/40 rounded-3xl overflow-hidden hover:border-rose-500 transition duration-300 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="h-64 overflow-hidden relative">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover hover:scale-110 transition duration-700" />
                    {pkg.popular && (
                      <span className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md">
                        Most Booked
                      </span>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{pkg.title}</h3>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-3xl font-bold text-rose-400">{pkg.price}</span>
                      <span className="text-xs text-rose-200/60">/ per event</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="text-rose-100/80 text-xs flex items-center gap-2">
                          <Icon name="CheckCircle2" className="w-4 h-4 text-rose-400 shrink-0" /> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleWhatsAppBooking(pkg.title)}
                    className="w-full bg-neutral-900 border border-rose-800 hover:bg-rose-500 hover:border-rose-500 text-white font-bold py-3.5 rounded-full transition text-xs uppercase tracking-wider"
                  >
                    Book This Package
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery with Staggered Scale Animation */}
      <section id="gallery" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">Real Brides</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">Bridal Look Transformation</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-2xl overflow-hidden border border-rose-950 h-80 cursor-pointer"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-serif font-bold text-lg">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-rose-950 py-12 text-center text-rose-200/60 text-xs">
        <p className="font-serif text-lg text-white font-bold mb-2">GLAMOUR BRIDES STUDIO</p>
        <p className="mb-4">Hyderabad | Vijayawada | Visakhapatnam | Tirupati</p>
        <p>© 2026 Glamour Brides. Designed & Maintained by Sunil Digital Academy.</p>
      </footer>
    </div>
  );
}