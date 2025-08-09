"use client";
// --- ChatBox Component ---
import React, { useRef } from "react";
type ChatMessage = { sender: "user" | "support"; text: string };
function ChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: "support", text: "سلام! چطور می‌تونم کمکتون کنم؟" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  React.useEffect(scrollToBottom, [messages]);
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { sender: "support", text: "پاسخ پشتیبانی: پیام شما دریافت شد." }]);
    }, 1000);
  };
  return (
    <>
      <button
        className="fixed bottom-6 left-6 z-50 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg p-4 flex items-center gap-2"
        onClick={() => setOpen((o) => !o)}
        aria-label="پشتیبانی آنلاین"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4A8.5 8.5 0 0 1 3 12c0-4.7 3.8-8.5 8.5-8.5S20 7.3 20 12c0 1.1-.2 2.1-.5 3.1L21 21l-3.9-1.5"/></svg>
        <span className="hidden sm:inline">پشتیبانی</span>
      </button>
      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-80 max-w-[95vw] bg-white rounded-xl shadow-2xl flex flex-col border border-pink-200 animate-fadeIn">
          <div className="flex items-center justify-between p-3 border-b bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-xl">
            <span className="font-bold">پشتیبانی آنلاین</span>
            <button onClick={() => setOpen(false)} className="text-white hover:text-gray-200">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2 h-64 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.sender === "user"
                    ? "text-right"
                    : "text-left"
                }
              >
                <span
                  className={
                    msg.sender === "user"
                      ? "inline-block bg-pink-100 text-pink-800 rounded-lg px-3 py-1 my-1 ml-8"
                      : "inline-block bg-gray-200 text-gray-800 rounded-lg px-3 py-1 my-1 mr-8"
                  }
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} className="flex border-t bg-white rounded-b-xl">
            <input
              className="flex-1 p-2 rounded-bl-xl focus:outline-none"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              autoFocus
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-br-xl"
            >
              ارسال
            </button>
          </form>
        </div>
      )}
    </>
  );
}
import { useState } from "react";
import { ShoppingCart, Heart, User, Star, Menu } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainPage() {
  const [cartCount, setCartCount] = useState(0);
  const [showCategories, setShowCategories] = useState(false);

  const products = [
    { id: 1, title: "کفش ورزشی نایک", price: 2200000, img: "/shoes.png", discount: 20, rating: 4.5 },
    { id: 2, title: "عینک آفتابی ری‌بن", price: 1500000, img: "/sunglasses.png", discount: 10, rating: 4.2 },
    { id: 3, title: "کوله‌پشتی مسافرتی", price: 890000, img: "/bag.png", discount: 15, rating: 4.7 },
    { id: 4, title: "ساعت مچی کلاسیک", price: 3500000, img: "/watch.png", discount: 5, rating: 4.9 },
  ];

  const bestSellers = [
    { id: 5, title: "گوشی موبایل سامسونگ S24", price: 30000000, img: "/phone.png", rating: 4.8 },
    { id: 6, title: "هدفون بی‌سیم سونی", price: 5000000, img: "/headphone.png", rating: 4.6 },
    { id: 7, title: "لپ‌تاپ اپل مک‌بوک", price: 65000000, img: "/macbook.png", rating: 4.9 },
  ];

  const brands = [
    { name: "Nike", logo: "/brand-nike.png" },
    { name: "Apple", logo: "/brand-apple.png" },
    { name: "Samsung", logo: "/brand-samsung.png" },
    { name: "Sony", logo: "/brand-sony.png" },
    { name: "Adidas", logo: "/brand-adidas.png" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="p-2 rounded hover:bg-gray-100"
            title="نمایش دسته‌بندی‌ها"
            aria-label="نمایش دسته‌بندی‌ها"
          >
            <Menu className="text-pink-600" />
          </button>
          <img src="/logo.svg" alt="Logo" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Trendify
          </span>
        </div>
        <input
          type="text"
          placeholder="چی میخوای پیدا کنی؟"
          className="w-1/2 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <div className="flex items-center gap-6">
          <User className="cursor-pointer text-pink-600" />
          <div className="relative cursor-pointer">
            <ShoppingCart className="text-pink-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full px-1 text-xs">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Category Drawer */}
      {showCategories && (
        <div className="bg-white shadow-lg absolute top-16 left-0 right-0 z-40 p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-fadeIn">
          {[
            "موبایل و تبلت", "لپ‌تاپ و کامپیوتر", "پوشاک مردانه", "پوشاک زنانه",
            "کفش و کتانی", "ساعت و جواهرات", "لوازم خانگی", "ورزشی و سفر",
            "کتاب و لوازم تحریر", "سوپرمارکت"
          ].map((cat) => (
            <div
              key={cat}
              className="p-3 rounded hover:bg-pink-50 cursor-pointer transition"
            >
              {cat}
            </div>
          ))}
        </div>
      )}

      {/* Categories Nav */}
      <nav className="bg-white shadow mt-2 p-3 flex gap-6 justify-center text-sm font-medium">
        {["مد و پوشاک", "اکسسوری", "کفش", "کیف", "ساعت", "عینک"].map((cat) => (
          <span key={cat} className="text-gray-600 hover:text-pink-600 cursor-pointer transition-colors">
            {cat}
          </span>
        ))}
      </nav>

      {/* Brand Filter */}
      <section className="max-w-6xl mx-auto py-6">
        <h2 className="text-lg font-bold mb-4 text-gray-700">برندها</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center bg-white p-3 rounded-lg shadow hover:shadow-md transition cursor-pointer"
            >
              <img src={b.logo} alt={b.name} className="h-12 w-12 object-contain" />
              <span className="mt-2 text-sm">{b.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Slider - Today's Offers */}
      <section className="max-w-6xl mx-auto py-8">
        <h2 className="text-xl font-bold mb-6 text-gray-700 text-center">پیشنهادهای امروز</h2>
        <Slider {...sliderSettings}>
          {products.map((p) => (
            <div key={p.id} className="px-2">
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center relative overflow-hidden">
                {p.discount && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
                    %{p.discount} تخفیف
                  </span>
                )}
                <img src={p.img} alt={p.title} className="h-28 object-contain mb-3 hover:scale-105 transition" />
                <h3 className="font-semibold text-gray-800 text-center">{p.title}</h3>
                <div className="flex items-center gap-1 mt-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < Math.floor(p.rating) ? "gold" : "none"}
                      stroke="gold"
                    />
                  ))}
                  <span className="text-xs text-gray-500">({p.rating})</span>
                </div>
                <span className="text-pink-600 font-bold mt-2">
                  {p.price.toLocaleString()} تومان
                </span>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 text-sm transition"
                  >
                    افزودن به سبد
                  </button>
                  <Heart className="cursor-pointer text-gray-400 hover:text-pink-600 transition" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Best Sellers */}
      <section className="max-w-6xl mx-auto py-8">
        <h2 className="text-xl font-bold mb-6 text-gray-700">پرفروش‌ترین‌های هفته</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bestSellers.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img src={p.img} alt={p.title} className="h-28 object-contain mb-3" />
              <h3 className="font-semibold text-gray-800">{p.title}</h3>
              <div className="flex items-center gap-1 mt-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(p.rating) ? "gold" : "none"}
                    stroke="gold"
                  />
                ))}
                <span className="text-xs text-gray-500">({p.rating})</span>
              </div>
              <span className="text-pink-600 font-bold mt-2">{p.price.toLocaleString()} تومان</span>
              <button
                onClick={() => setCartCount(cartCount + 1)}
                className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 text-sm"
              >
                افزودن به سبد
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white mt-10 p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="font-bold mb-3">Trendify</h4>
            <p className="text-sm opacity-90">
              فروشگاه آنلاین پوشاک و اکسسوری با جدیدترین ترندهای مد
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">لینک‌ها</h4>
            <ul className="text-sm opacity-90 space-y-1">
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>قوانین و مقررات</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">دنبال کنید</h4>
            <div className="flex gap-3">
              <img src="/telegram.svg" alt="تلگرام" className="h-6 cursor-pointer" />
              <img src="/instagram.svg" alt="اینستاگرام" className="h-6 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm opacity-80">
          © 2025 Trendify - تمامی حقوق محفوظ است
        </div>
      </footer>
      <ChatBox />
    </div>
  );
}
