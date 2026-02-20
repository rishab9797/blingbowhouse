import { useState } from "react";
import "@/App.css";
import { Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Static product data
const PRODUCTS_DATA = [
  {
    id: "1",
    name: "Velvet Rose Bow",
    description: "Elegant velvet bow with rose gold clip. Perfect for special occasions.",
    price: 299.00,
    image_url: "https://images.pexels.com/photos/30056547/pexels-photo-30056547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "bows",
    featured: true
  },
  {
    id: "2",
    name: "Pearl Flower Clip",
    description: "Delicate pearl-embellished flower clip. Adds elegance to any hairstyle.",
    price: 249.00,
    image_url: "https://images.pexels.com/photos/20588093/pexels-photo-20588093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "clips",
    featured: true
  },
  {
    id: "3",
    name: "Satin Hair Band",
    description: "Soft satin headband with elegant knot detail. Comfortable all-day wear.",
    price: 199.00,
    image_url: "https://images.unsplash.com/photo-1748785944341-8ca18262bd34?crop=entropy&cs=srgb&fm=jpg&q=85",
    category: "bands",
    featured: false
  },
  {
    id: "4",
    name: "Crystal Bow Set",
    description: "Set of 3 crystal-adorned mini bows. Perfect for braids and updos.",
    price: 349.00,
    image_url: "https://images.pexels.com/photos/19590837/pexels-photo-19590837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "bows",
    featured: false
  },
  {
    id: "5",
    name: "Metallic Hair Clips",
    description: "Set of 5 metallic clips in assorted colors. Modern and versatile.",
    price: 279.00,
    image_url: "https://images.pexels.com/photos/33269485/pexels-photo-33269485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "clips",
    featured: true
  },
  {
    id: "6",
    name: "Organza Scrunchie Set",
    description: "Delicate organza scrunchies in pastel shades. Gentle on hair.",
    price: 229.00,
    image_url: "https://images.unsplash.com/photo-1743664594400-aac1aa57e37a?crop=entropy&cs=srgb&fm=jpg&q=85",
    category: "bands",
    featured: false
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const categories = ["all", "bands", "bows", "clips"];

  const filteredProducts = selectedCategory === "all" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="nav-bar" data-testid="main-navigation">
        <div className="nav-content">
          <div className="brand-logo" data-testid="brand-logo">
            <span className="brand-text">Bling Bow House</span>
          </div>
          
          <div className="nav-links" data-testid="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#catalog" className="nav-link">Catalog</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu" data-testid="mobile-menu">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#catalog" onClick={() => setMobileMenuOpen(false)}>Catalog</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home" data-testid="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge" data-testid="hero-badge">New Collection 2026</div>
            <h1 className="hero-title" data-testid="hero-title">
              Where Style Meets
              <span className="hero-accent">Elegance</span>
            </h1>
            <p className="hero-subtitle" data-testid="hero-subtitle">
              Handcrafted hair accessories designed to make every moment special.
              Discover our curated collection of bows, clips, and bands.
            </p>
            <Button 
              className="hero-cta" 
              onClick={() => document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' })}
              data-testid="explore-collection-btn"
            >
              Explore Collection
            </Button>
          </div>
          <div className="hero-image" data-testid="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1708121222833-ab69133b14bc?crop=entropy&cs=srgb&fm=jpg&q=85" 
              alt="Hair accessories collection"
            />
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="catalog-section" id="catalog" data-testid="catalog-section">
        <div className="catalog-container">
          <div className="catalog-header">
            <h2 className="section-title" data-testid="catalog-title">Our Collection</h2>
            <p className="section-subtitle" data-testid="catalog-subtitle">
              Each piece is carefully crafted with love and attention to detail
            </p>
          </div>

          {/* Category Filters */}
          <div className="category-filters" data-testid="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                data-testid={`category-filter-${category}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="product-grid" data-testid="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card" data-testid={`product-card-${product.id}`}>
                <div className="product-image-wrapper">
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className="product-image"
                  />
                  {product.featured && (
                    <span className="featured-badge" data-testid="featured-badge">Featured</span>
                  )}
                </div>
                <div className="product-info">
                  <h3 className="product-name" data-testid="product-name">{product.name}</h3>
                  <p className="product-description" data-testid="product-description">{product.description}</p>
                  <p className="product-price" data-testid="product-price">₹{product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about" data-testid="about-section">
        <div className="about-container">
          <div className="about-image" data-testid="about-image">
            <img 
              src="https://images.unsplash.com/photo-1762803841119-7adc4b402370?crop=entropy&cs=srgb&fm=jpg&q=85" 
              alt="Prithi Jain"
            />
          </div>
          <div className="about-content">
            <h2 className="section-title" data-testid="about-title">About Bling Bow House</h2>
            <p className="about-text" data-testid="about-text">
              Founded by <span className="founder-name">Prithi Jain</span>, Bling Bow House was born from a passion 
              for creating beautiful, handcrafted hair accessories that combine elegance with everyday wearability.
            </p>
            <p className="about-text">
              Every piece in our collection is thoughtfully designed and carefully crafted to add that perfect 
              touch of style to your look. From delicate bows to statement clips, each accessory tells its own story.
            </p>
            <p className="about-text">
              We believe that beauty lies in the details, and every woman deserves accessories that make her feel special.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact" data-testid="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="section-title" data-testid="contact-title">Get in Touch</h2>
            <p className="section-subtitle" data-testid="contact-subtitle">
              Have questions or want to place a custom order? We'd love to hear from you!
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <h3 className="info-title">Connect With Us</h3>
                <a 
                  href="https://instagram.com/blingbowhouse" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  data-testid="instagram-link"
                >
                  <Instagram size={24} />
                  <span>@blingbowhouse</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2026 Bling Bow House. Created with love by Prithi Jain.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
