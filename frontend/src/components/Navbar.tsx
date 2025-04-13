import { Car } from "lucide-react"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur bg-white/70">
      <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-emerald-500" />
          <span className="text-xl font-bold">RideShare</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-emerald-500 transition-colors">
            How It Works
          </a>
          <a href="/allRides" className="text-sm font-medium hover:text-emerald-500 transition-colors">
            Rides 
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-emerald-500 transition-colors">
            Testimonials
          </a>
          <a href="#about" className="text-sm font-medium hover:text-emerald-500 transition-colors">
            About Us
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden sm:inline-flex text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            Sign In
          </a>
          <button className="px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
