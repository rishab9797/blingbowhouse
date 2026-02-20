{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red202\green202\blue202;\red23\green23\blue23;\red194\green126\blue101;
\red70\green137\blue204;\red140\green211\blue254;\red109\green109\blue109;\red79\green123\blue61;}
{\*\expandedcolortbl;;\cssrgb\c83137\c83137\c83137;\cssrgb\c11765\c11765\c11765;\cssrgb\c80784\c56863\c47059;
\cssrgb\c33725\c61176\c83922;\cssrgb\c61176\c86275\c99608;\cssrgb\c50196\c50196\c50196;\cssrgb\c37647\c54510\c30588;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import \cf4 \strokec4 \{ useState \}\cf2 \strokec2  from "react";\cb1 \
\cb3 import "@/App.css";\cb1 \
\cb3 import \cf4 \strokec4 \{ Instagram, Menu, X \}\cf2 \strokec2  from "lucide-react";\cb1 \
\cb3 import \cf4 \strokec4 \{ Button \}\cf2 \strokec2  from "@/components/ui/button";\cb1 \
\cb3 import \cf4 \strokec4 \{ Input \}\cf2 \strokec2  from "@/components/ui/input";\cb1 \
\cb3 import \cf4 \strokec4 \{ Textarea \}\cf2 \strokec2  from "@/components/ui/textarea";\cb1 \
\cb3 import \cf4 \strokec4 \{ toast \}\cf2 \strokec2  from "sonner";\cb1 \
\
\cb3 // Static product data\cb1 \
\cb3 const PRODUCTS_DATA = [\cb1 \
\cb3   \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     id: "1",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     name: "Velvet Rose Bow",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     description: "Elegant velvet bow with rose gold clip. Perfect for special occasions.",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     price: 299.00,\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     image_url: "https://images.pexels.com/photos/30056547/pexels-photo-30056547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     category: "bows",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     featured: true\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \},\cb1 \
\cb3   \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     id: "2",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     name: "Pearl Flower Clip",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     description: "Delicate pearl-embellished flower clip. Adds elegance to any hairstyle.",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     price: 249.00,\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     image_url: "https://images.pexels.com/photos/20588093/pexels-photo-20588093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     category: "clips",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     featured: true\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \},\cb1 \
\cb3   \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     id: "3",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     name: "Satin Hair Band",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     description: "Soft satin headband with elegant knot detail. Comfortable all-day wear.",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     price: 199.00,\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     image_url: "https://images.unsplash.com/photo-1748785944341-8ca18262bd34?crop=entropy&cs=srgb&fm=jpg&q=85",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     category: "bands",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     featured: false\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \},\cb1 \
\cb3   \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     id: "4",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     name: "Crystal Bow Set",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     description: "Set of 3 crystal-adorned mini bows. Perfect for braids and updos.",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     price: 349.00,\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     image_url: "https://images.pexels.com/photos/19590837/pexels-photo-19590837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     category: "bows",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     featured: false\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \},\cb1 \
\cb3   \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     id: "5",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     name: "Metallic Hair Clips",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     description: "Set of 5 metallic clips in assorted colors. Modern and versatile.",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     price: 279.00,\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     image_url: "https://images.pexels.com/photos/33269485/pexels-photo-33269485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     category: "clips",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     featured: true\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \},\cb1 \
\cb3   \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     id: "6",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     name: "Organza Scrunchie Set",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     description: "Delicate organza scrunchies in pastel shades. Gentle on hair.",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     price: 229.00,\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     image_url: "https://images.unsplash.com/photo-1743664594400-aac1aa57e37a?crop=entropy&cs=srgb&fm=jpg&q=85",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     category: "bands",\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     featured: false\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \}\cb1 \
\cb3 ];\cb1 \
\
\cb3 function App() \{\cb1 \
\cb3   const \cf4 \strokec4 [selectedCategory, setSelectedCategory]\cf2 \strokec2  = useState("all");\cb1 \
\cb3   const \cf4 \strokec4 [mobileMenuOpen, setMobileMenuOpen]\cf2 \strokec2  = useState(false);\cb1 \
\cb3   const \cf4 \strokec4 [formData, setFormData]\cf2 \strokec2  = useState(\cf4 \strokec4 \{ name: "", email: "", message: "" \}\cf2 \strokec2 );\cb1 \
\cb3   const \cf4 \strokec4 [submitting, setSubmitting]\cf2 \strokec2  = useState(false);\cb1 \
\
\cb3   const categories = \cf4 \strokec4 ["all", "bands", "bows", "clips"]\cf2 \strokec2 ;\cb1 \
\
\cb3   const filteredProducts = selectedCategory === "all" \cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     ? PRODUCTS_DATA \cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5     : \cf2 \strokec2 PRODUCTS_DATA.filter(p => p.category === selectedCategory);\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   const handleContactSubmit = async (e) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     e.preventDefault();\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     setSubmitting(true);\cf2 \cb1 \strokec2 \
\
\cf4 \cb3 \strokec4     // Simulate form submission\cf2 \cb1 \strokec2 \
\cf4 \cb3 \strokec4     setTimeout(() => \{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3       toast.success("Thank you! We'll get back to you soon via email.");\cb1 \
\cb3       setFormData(\cf4 \strokec4 \{ name: "", email: "", message: "" \}\cf2 \strokec2 );\cb1 \
\cb3       setSubmitting(false);\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     \}, 1000);\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   \};\cb1 \
\
\cb3   return (\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     <div className="app-container">\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3       \cf4 \strokec4 \{/* Navigation */\}\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 <nav\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "nav-bar"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "main-navigation"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "nav-content"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "brand-logo"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "brand-logo"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <span\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "brand-text"\cf5 \strokec5 >\cf2 \strokec2 Bling Bow House\cf5 \strokec5 </span>\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3           \cb1 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "nav-links"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "nav-links"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <a\cf2 \strokec2  \cf6 \strokec6 href\cf7 \strokec7 =\cf4 \strokec4 "#home"\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "nav-link"\cf5 \strokec5 >\cf2 \strokec2 Home\cf5 \strokec5 </a>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <a\cf2 \strokec2  \cf6 \strokec6 href\cf7 \strokec7 =\cf4 \strokec4 "#catalog"\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "nav-link"\cf5 \strokec5 >\cf2 \strokec2 Catalog\cf5 \strokec5 </a>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <a\cf2 \strokec2  \cf6 \strokec6 href\cf7 \strokec7 =\cf4 \strokec4 "#about"\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "nav-link"\cf5 \strokec5 >\cf2 \strokec2 About\cf5 \strokec5 </a>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <a\cf2 \strokec2  \cf6 \strokec6 href\cf7 \strokec7 =\cf4 \strokec4 "#contact"\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "nav-link"\cf5 \strokec5 >\cf2 \strokec2 Contact\cf5 \strokec5 </a>\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\
\cb3           \cf5 \strokec5 <button\cf2 \strokec2  \cb1 \
\cb3             \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "mobile-menu-btn"\cf2 \strokec2  \cb1 \
\cb3             \cf6 \strokec6 onClick\cf2 \strokec2 =\{() =\cf5 \strokec5 >\cf2 \strokec2  setMobileMenuOpen(!mobileMenuOpen)\}\cb1 \
\cb3             data-testid="mobile-menu-toggle"\cb1 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8           >\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3             \cf4 \strokec4 \{mobileMenuOpen ? <X size=\{24\}\cf2 \strokec2  /> : \cf5 \strokec5 <Menu\cf2 \strokec2  \cf6 \strokec6 size\cf2 \strokec2 =\{\cf6 \strokec6 24\cf2 \strokec2 \} \cf5 \strokec5 />\cf2 \strokec2 \}\cb1 \
\cb3           \cf5 \strokec5 </button>\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\
\cb3         \{mobileMenuOpen && (\cb1 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "mobile-menu"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "mobile-menu"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <a\cf2 \strokec2  \cf6 \strokec6 href\cf7 \strokec7 =\cf4 \strokec4 "#home"\cf2 \strokec2  \cf6 \strokec6 onClick\cf2 \strokec2 =\{() =\cf5 \strokec5 >\cf2 \strokec2  setMobileMenuOpen(false)\}>Home\cf5 \strokec5 </a>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <a\cf2 \strokec2  \cf6 \strokec6 href\cf7 \strokec7 =\cf4 \strokec4 "#catalog"\cf2 \strokec2  \cf6 \strokec6 onClick\cf2 \strokec2 =\{() =\cf5 \strokec5 >\cf2 \strokec2  setMobileMenuOpen(false)\}>Catalog\cf5 \strokec5 </a>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <a\cf2 \strokec2  \cf6 \strokec6 href\cf7 \strokec7 =\cf4 \strokec4 "#about"\cf2 \strokec2  \cf6 \strokec6 onClick\cf2 \strokec2 =\{() =\cf5 \strokec5 >\cf2 \strokec2  setMobileMenuOpen(false)\}>About\cf5 \strokec5 </a>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <a\cf2 \strokec2  \cf6 \strokec6 href\cf7 \strokec7 =\cf4 \strokec4 "#contact"\cf2 \strokec2  \cf6 \strokec6 onClick\cf2 \strokec2 =\{() =\cf5 \strokec5 >\cf2 \strokec2  setMobileMenuOpen(false)\}>Contact\cf5 \strokec5 </a>\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3         )\}\cb1 \
\cb3       \cf5 \strokec5 </nav>\cf2 \cb1 \strokec2 \
\
\cb3       \cf4 \strokec4 \{/* Hero Section */\}\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 <section\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "hero-section"\cf2 \strokec2  \cf6 \strokec6 id\cf7 \strokec7 =\cf4 \strokec4 "home"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "hero-section"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "hero-container"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "hero-content"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "hero-badge"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "hero-badge"\cf5 \strokec5 >\cf2 \strokec2 New Collection 2026\cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <h1\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "hero-title"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "hero-title"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3               Where Style Meets\cb1 \
\cb3               \cf5 \strokec5 <span\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "hero-accent"\cf5 \strokec5 >\cf2 \strokec2 Elegance\cf5 \strokec5 </span>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 </h1>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <p\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "hero-subtitle"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "hero-subtitle"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3               Handcrafted hair accessories designed to make every moment special.\cb1 \
\cb3               Discover our curated collection of bows, clips, and bands.\cb1 \
\cb3             \cf5 \strokec5 </p>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <Button\cf2 \strokec2  \cb1 \
\cb3               \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "hero-cta"\cf2 \strokec2  \cb1 \
\cb3               \cf6 \strokec6 onClick\cf2 \strokec2 =\{() =\cf5 \strokec5 >\cf2 \strokec2  document.getElementById('catalog').scrollIntoView(\cf4 \strokec4 \{ behavior: 'smooth' \}\cf2 \strokec2 )\}\cb1 \
\cb3               data-testid="explore-collection-btn"\cb1 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8             >\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3               Explore Collection\cb1 \
\cb3             \cf5 \strokec5 </Button>\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "hero-image"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "hero-image"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <img\cf2 \strokec2  \cb1 \
\cb3               \cf6 \strokec6 src\cf7 \strokec7 =\cf4 \strokec4 "https://images.unsplash.com/photo-1708121222833-ab69133b14bc?crop=entropy&cs=srgb&fm=jpg&q=85"\cf2 \strokec2  \cb1 \
\cb3               \cf6 \strokec6 alt\cf7 \strokec7 =\cf4 \strokec4 "Hair accessories collection"\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 />\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 </section>\cf2 \cb1 \strokec2 \
\
\cb3       \cf4 \strokec4 \{/* Catalog Section */\}\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 <section\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "catalog-section"\cf2 \strokec2  \cf6 \strokec6 id\cf7 \strokec7 =\cf4 \strokec4 "catalog"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "catalog-section"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "catalog-container"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "catalog-header"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <h2\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "section-title"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "catalog-title"\cf5 \strokec5 >\cf2 \strokec2 Our Collection\cf5 \strokec5 </h2>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <p\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "section-subtitle"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "catalog-subtitle"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3               Each piece is carefully crafted with love and attention to detail\cb1 \
\cb3             \cf5 \strokec5 </p>\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\
\cb3           \cf4 \strokec4 \{/* Category Filters */\}\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "category-filters"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "category-filters"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \{categories.map((category) => (\cb1 \
\cb3               \cf5 \strokec5 <button\cf2 \cb1 \strokec2 \
\cb3                 \cf6 \strokec6 key\cf2 \strokec2 =\{\cf6 \strokec6 category\cf2 \strokec2 \}\cb1 \
\cb3                 \cf6 \strokec6 onClick\cf2 \strokec2 =\{() =\cf5 \strokec5 >\cf2 \strokec2  setSelectedCategory(category)\}\cb1 \
\cb3                 className=\cf4 \strokec4 \{`filter-pill $\{selectedCategory === category ? 'active' : ''\}\cf2 \strokec2 `\}\cb1 \
\cb3                 data-testid=\cf4 \strokec4 \{`category-filter-$\{category\}\cf2 \strokec2 `\}\cb1 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8               >\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3                 \cf4 \strokec4 \{category.charAt(0).toUpperCase() + category.slice(1)\}\cf2 \cb1 \strokec2 \
\cb3               \cf5 \strokec5 </button>\cf2 \cb1 \strokec2 \
\cb3             ))\}\cb1 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\
\cb3           \cf4 \strokec4 \{/* Product Grid */\}\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "product-grid"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "product-grid"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \{filteredProducts.map((product) => (\cb1 \
\cb3               \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 key\cf2 \strokec2 =\{\cf6 \strokec6 product\cf2 \strokec2 .\cf6 \strokec6 id\cf2 \strokec2 \} \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "product-card"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf2 \strokec2 =\{`\cf6 \strokec6 product\cf2 \strokec2 -\cf6 \strokec6 card\cf2 \strokec2 -$\{\cf6 \strokec6 product\cf2 \strokec2 .\cf6 \strokec6 id\cf2 \strokec2 \}`\}\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3                 \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "product-image-wrapper"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3                   \cf5 \strokec5 <img\cf2 \strokec2  \cb1 \
\cb3                     \cf6 \strokec6 src\cf2 \strokec2 =\{\cf6 \strokec6 product\cf2 \strokec2 .\cf6 \strokec6 image_url\cf2 \strokec2 \} \cb1 \
\cb3                     \cf6 \strokec6 alt\cf2 \strokec2 =\{\cf6 \strokec6 product\cf2 \strokec2 .\cf6 \strokec6 name\cf2 \strokec2 \}\cb1 \
\cb3                     \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "product-image"\cf2 \cb1 \strokec2 \
\cb3                   \cf5 \strokec5 />\cf2 \cb1 \strokec2 \
\cb3                   \{product.featured && (\cb1 \
\cb3                     \cf5 \strokec5 <span\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "featured-badge"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "featured-badge"\cf5 \strokec5 >\cf2 \strokec2 Featured\cf5 \strokec5 </span>\cf2 \cb1 \strokec2 \
\cb3                   )\}\cb1 \
\cb3                 \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3                 \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "product-info"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3                   \cf5 \strokec5 <h3\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "product-name"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "product-name"\cf5 \strokec5 >\cf4 \strokec4 \{product.name\}\cf5 \strokec5 </h3>\cf2 \cb1 \strokec2 \
\cb3                   \cf5 \strokec5 <p\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "product-description"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "product-description"\cf5 \strokec5 >\cf4 \strokec4 \{product.description\}\cf5 \strokec5 </p>\cf2 \cb1 \strokec2 \
\cb3                   \cf5 \strokec5 <p\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "product-price"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "product-price"\cf5 \strokec5 >\cf2 \strokec2 \uc0\u8377 \cf4 \strokec4 \{product.price.toFixed(2)\}\cf5 \strokec5 </p>\cf2 \cb1 \strokec2 \
\cb3                 \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3               \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3             ))\}\cb1 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 </section>\cf2 \cb1 \strokec2 \
\
\cb3       \cf4 \strokec4 \{/* About Section */\}\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 <section\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "about-section"\cf2 \strokec2  \cf6 \strokec6 id\cf7 \strokec7 =\cf4 \strokec4 "about"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "about-section"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "about-container"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "about-image"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "about-image"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <img\cf2 \strokec2  \cb1 \
\cb3               \cf6 \strokec6 src\cf7 \strokec7 =\cf4 \strokec4 "https://images.unsplash.com/photo-1762803841119-7adc4b402370?crop=entropy&cs=srgb&fm=jpg&q=85"\cf2 \strokec2  \cb1 \
\cb3               \cf6 \strokec6 alt\cf7 \strokec7 =\cf4 \strokec4 "Prithi Jain"\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 />\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "about-content"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <h2\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "section-title"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "about-title"\cf5 \strokec5 >\cf2 \strokec2 About Bling Bow House\cf5 \strokec5 </h2>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <p\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "about-text"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "about-text"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3               Founded by \cf5 \strokec5 <span\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "founder-name"\cf5 \strokec5 >\cf2 \strokec2 Prithi Jain\cf5 \strokec5 </span>\cf2 \strokec2 , Bling Bow House was born from a passion \cb1 \
\cb3               for creating beautiful, handcrafted hair accessories that combine elegance with everyday wearability.\cb1 \
\cb3             \cf5 \strokec5 </p>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <p\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "about-text"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3               Every piece in our collection is thoughtfully designed and carefully crafted to add that perfect \cb1 \
\cb3               touch of style to your look. From delicate bows to statement clips, each accessory tells its own story.\cb1 \
\cb3             \cf5 \strokec5 </p>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <p\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "about-text"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3               We believe that beauty lies in the details, and every woman deserves accessories that make her feel special.\cb1 \
\cb3             \cf5 \strokec5 </p>\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 </section>\cf2 \cb1 \strokec2 \
\
\cb3       \cf4 \strokec4 \{/* Contact Section */\}\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 <section\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "contact-section"\cf2 \strokec2  \cf6 \strokec6 id\cf7 \strokec7 =\cf4 \strokec4 "contact"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "contact-section"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "contact-container"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "contact-header"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <h2\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "section-title"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "contact-title"\cf5 \strokec5 >\cf2 \strokec2 Get in Touch\cf5 \strokec5 </h2>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <p\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "section-subtitle"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "contact-subtitle"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3               Have questions or want to place a custom order? We'd love to hear from you!\cb1 \
\cb3             \cf5 \strokec5 </p>\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\
\cb3           \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "contact-content"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 <form\cf2 \strokec2  \cf6 \strokec6 onSubmit\cf2 \strokec2 =\{\cf6 \strokec6 handleContactSubmit\cf2 \strokec2 \} \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "contact-form"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "contact-form"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3               \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "form-group"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3                 \cf5 \strokec5 <Input\cf2 \cb1 \strokec2 \
\cb3                   \cf6 \strokec6 type\cf7 \strokec7 =\cf4 \strokec4 "text"\cf2 \cb1 \strokec2 \
\cb3                   \cf6 \strokec6 placeholder\cf7 \strokec7 =\cf4 \strokec4 "Your Name"\cf2 \cb1 \strokec2 \
\cb3                   \cf6 \strokec6 value\cf2 \strokec2 =\{\cf6 \strokec6 formData\cf2 \strokec2 .\cf6 \strokec6 name\cf2 \strokec2 \}\cb1 \
\cb3                   \cf6 \strokec6 onChange\cf2 \strokec2 =\{(\cf6 \strokec6 e\cf2 \strokec2 ) =\cf5 \strokec5 >\cf2 \strokec2  setFormData(\cf4 \strokec4 \{ ...formData, name: e.target.value \}\cf2 \strokec2 )\}\cb1 \
\cb3                   required\cb1 \
\cb3                   className="form-input"\cb1 \
\cb3                   data-testid="contact-name-input"\cb1 \
\cb3                 />\cb1 \
\cb3               \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3               \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "form-group"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3                 \cf5 \strokec5 <Input\cf2 \cb1 \strokec2 \
\cb3                   \cf6 \strokec6 type\cf7 \strokec7 =\cf4 \strokec4 "email"\cf2 \cb1 \strokec2 \
\cb3                   \cf6 \strokec6 placeholder\cf7 \strokec7 =\cf4 \strokec4 "Your Email"\cf2 \cb1 \strokec2 \
\cb3                   \cf6 \strokec6 value\cf2 \strokec2 =\{\cf6 \strokec6 formData\cf2 \strokec2 .\cf6 \strokec6 email\cf2 \strokec2 \}\cb1 \
\cb3                   \cf6 \strokec6 onChange\cf2 \strokec2 =\{(\cf6 \strokec6 e\cf2 \strokec2 ) =\cf5 \strokec5 >\cf2 \strokec2  setFormData(\cf4 \strokec4 \{ ...formData, email: e.target.value \}\cf2 \strokec2 )\}\cb1 \
\cb3                   required\cb1 \
\cb3                   className="form-input"\cb1 \
\cb3                   data-testid="contact-email-input"\cb1 \
\cb3                 />\cb1 \
\cb3               \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3               \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "form-group"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3                 \cf5 \strokec5 <Textarea\cf2 \cb1 \strokec2 \
\cb3                   \cf6 \strokec6 placeholder\cf7 \strokec7 =\cf4 \strokec4 "Your Message"\cf2 \cb1 \strokec2 \
\cb3                   \cf6 \strokec6 value\cf2 \strokec2 =\{\cf6 \strokec6 formData\cf2 \strokec2 .\cf6 \strokec6 message\cf2 \strokec2 \}\cb1 \
\cb3                   \cf6 \strokec6 onChange\cf2 \strokec2 =\{(\cf6 \strokec6 e\cf2 \strokec2 ) =\cf5 \strokec5 >\cf2 \strokec2  setFormData(\cf4 \strokec4 \{ ...formData, message: e.target.value \}\cf2 \strokec2 )\}\cb1 \
\cb3                   required\cb1 \
\cb3                   rows=\cf4 \strokec4 \{5\}\cf2 \cb1 \strokec2 \
\cb3                   className="form-input"\cb1 \
\cb3                   data-testid="contact-message-input"\cb1 \
\cb3                 />\cb1 \
\cb3               \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3               \cf5 \strokec5 <Button\cf2 \strokec2  \cb1 \
\cb3                 \cf6 \strokec6 type\cf7 \strokec7 =\cf4 \strokec4 "submit"\cf2 \strokec2  \cb1 \
\cb3                 \cf6 \strokec6 disabled\cf2 \strokec2 =\{\cf6 \strokec6 submitting\cf2 \strokec2 \} \cb1 \
\cb3                 \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "submit-btn"\cf2 \cb1 \strokec2 \
\cb3                 \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "contact-submit-btn"\cf2 \cb1 \strokec2 \
\cb3               \cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3                 \cf4 \strokec4 \{submitting ? "Sending..." : "Send Message"\}\cf2 \cb1 \strokec2 \
\cb3               \cf5 \strokec5 </Button>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 </form>\cf2 \cb1 \strokec2 \
\
\cb3             \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "contact-info"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3               \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "info-card"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3                 \cf5 \strokec5 <h3\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "info-title"\cf5 \strokec5 >\cf2 \strokec2 Connect With Us\cf5 \strokec5 </h3>\cf2 \cb1 \strokec2 \
\cb3                 \cf5 \strokec5 <a\cf2 \strokec2  \cb1 \
\cb3                   \cf6 \strokec6 href\cf7 \strokec7 =\cf4 \strokec4 "https://instagram.com/blingbowhouse"\cf2 \strokec2  \cb1 \
\cb3                   \cf6 \strokec6 target\cf7 \strokec7 =\cf4 \strokec4 "_blank"\cf2 \strokec2  \cb1 \
\cb3                   \cf6 \strokec6 rel\cf7 \strokec7 =\cf4 \strokec4 "noopener noreferrer"\cf2 \strokec2  \cb1 \
\cb3                   \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "social-link"\cf2 \cb1 \strokec2 \
\cb3                   \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "instagram-link"\cf2 \cb1 \strokec2 \
\cb3                 \cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3                   \cf5 \strokec5 <Instagram\cf2 \strokec2  \cf6 \strokec6 size\cf2 \strokec2 =\{\cf6 \strokec6 24\cf2 \strokec2 \} \cf5 \strokec5 />\cf2 \cb1 \strokec2 \
\cb3                   \cf5 \strokec5 <span>\cf2 \strokec2 @blingbowhouse\cf5 \strokec5 </span>\cf2 \cb1 \strokec2 \
\cb3                 \cf5 \strokec5 </a>\cf2 \cb1 \strokec2 \
\cb3               \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3             \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 </section>\cf2 \cb1 \strokec2 \
\
\cb3       \cf4 \strokec4 \{/* Footer */\}\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 <footer\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "footer"\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2 -\cf6 \strokec6 testid\cf7 \strokec7 =\cf4 \strokec4 "footer"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 <div\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "footer-content"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3           \cf5 \strokec5 <p\cf2 \strokec2  \cf6 \strokec6 className\cf7 \strokec7 =\cf4 \strokec4 "footer-text"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\cb3             \'a9 2026 Bling Bow House. Created with love by Prithi Jain.\cb1 \
\cb3           \cf5 \strokec5 </p>\cf2 \cb1 \strokec2 \
\cb3         \cf5 \strokec5 </div>\cf2 \cb1 \strokec2 \
\cb3       \cf5 \strokec5 </footer>\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4     </div>\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3   );\cb1 \
\cb3 \}\cb1 \
\
\cb3 export default App;\cb1 \
\
}