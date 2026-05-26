import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Warm Educational Aesthetic
 * - Color Palette: Warm Green (#6ca85c), Soft Purple (#b48cbe), Warm Yellow (#ffb852)
 * - Typography: Poppins (headers), Open Sans (body)
 * - Layout: Organic, flowing, with generous whitespace
 * - Interaction: Smooth transitions, warm hover effects
 */

const colors = {
  warmGreen: "#6ca85c",
  softPurple: "#b48cbe",
  warmYellow: "#ffb852",
  cream: "#faf8f5",
  darkBrown: "#463c37",
  white: "#ffffff",
  lightGray: "#e8dcd6",
};

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    alert("感謝您的訊息！我們會盡快回覆您。");
    setContactForm({ name: "", email: "", message: "" });
  };

  const galleryItems = [
    {
      id: 1,
      title: "創意壁畫計畫",
      category: "學生作品",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663643036699/iUuGP2oxnci8fFuZcwY6Rx/gallery-sample-Ycv58wFU2cNGZpNiKLT.webp",
    },
    {
      id: 2,
      title: "互動教具設計",
      category: "教具開發",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663643036699/iUuGP2oxnci8fFuZcwY6Rx/service-card-2-LRVGGGwqNWvkEeMvpKnnTL.webp",
    },
    {
      id: 3,
      title: "課堂創意工作坊",
      category: "教育服務",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663643036699/iUuGP2oxnci8fFuZcwY6Rx/service-card-1-jx8ur7sAJRXsWmQ7kAAAUY.webp",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(to bottom right, ${colors.warmGreen}, ${colors.softPurple})`,
              }}
            >
              <span className="text-white font-bold text-lg">✨</span>
            </div>
            <h1 className="text-xl font-bold" style={{ color: colors.darkBrown }}>
              Luxs Arts
            </h1>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#services"
              className="transition-colors"
              style={{ color: colors.darkBrown }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.warmGreen)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.darkBrown)}
            >
              服務介紹
            </a>
            <a
              href="#gallery"
              className="transition-colors"
              style={{ color: colors.darkBrown }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.warmGreen)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.darkBrown)}
            >
              過往作品
            </a>
            <a
              href="#contact"
              className="transition-colors"
              style={{ color: colors.darkBrown }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.warmGreen)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.darkBrown)}
            >
              聯絡我們
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663643036699/iUuGP2oxnci8fFuZcwY6Rx/hero-background-dYvn6D77i4PCTuZvTruGfE.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <div
              className="inline-block mb-4 px-4 py-2 rounded-full"
              style={{
                backgroundColor: `${colors.warmYellow}33`,
              }}
            >
              <span
                className="font-semibold text-sm"
                style={{ color: colors.warmGreen }}
              >
                🎨 教育創新
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: colors.darkBrown }}
            >
              光賞藝術
              <br />
              <span
                style={{
                  background: `linear-gradient(to right, ${colors.warmGreen}, ${colors.softPurple}, ${colors.warmYellow})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                啟發創意之光
              </span>
            </h1>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: `${colors.darkBrown}cc` }}
            >
              我們致力於為學校帶來創新的藝術教育服務與精心設計的教具，幫助每位學生發現自己的創意潛能，在藝術中成長、探索與綻放。
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                className="px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 text-base"
                style={{
                  backgroundColor: colors.warmGreen,
                  color: colors.white,
                }}
              >
                了解更多
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                className="px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 text-base"
                style={{
                  backgroundColor: colors.softPurple,
                  color: colors.white,
                }}
              >
                聯絡我們
              </Button>
            </div>
          </div>
          <div className="flex-1 z-10">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{
                  background: `linear-gradient(to right, ${colors.warmGreen}, ${colors.softPurple}, ${colors.warmYellow})`,
                }}
              />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663643036699/iUuGP2oxnci8fFuZcwY6Rx/service-card-1-jx8ur7sAJRXsWmQ7kAAAUY.webp"
                alt="教育服務"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.darkBrown }}
            >
              我們的服務
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: `${colors.darkBrown}b3` }}
            >
              透過創新的教育方式與精心設計的教具，為學校帶來完整的藝術教育解決方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Service 1 */}
            <Card
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: colors.white }}
            >
              <div className="mb-6">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663643036699/iUuGP2oxnci8fFuZcwY6Rx/service-card-1-jx8ur7sAJRXsWmQ7kAAAUY.webp"
                  alt="入校教育服務"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: colors.darkBrown }}
              >
                入校教育服務
              </h3>
              <p
                className="mb-4 leading-relaxed"
                style={{ color: `${colors.darkBrown}b3` }}
              >
                我們為各級學校設計與執行創意藝術課程，包括工作坊、特色課程與主題教學，幫助學生在實踐中學習、在創作中成長。
              </p>
              <ul className="space-y-2" style={{ color: `${colors.darkBrown}b3` }}>
                <li className="flex items-center gap-2">
                  <Star
                    className="w-4 h-4 fill-current"
                    style={{ color: colors.warmGreen }}
                  />
                  客製化課程設計
                </li>
                <li className="flex items-center gap-2">
                  <Star
                    className="w-4 h-4 fill-current"
                    style={{ color: colors.warmGreen }}
                  />
                  專業講師團隊
                </li>
                <li className="flex items-center gap-2">
                  <Star
                    className="w-4 h-4 fill-current"
                    style={{ color: colors.warmGreen }}
                  />
                  完整教學支援
                </li>
              </ul>
            </Card>

            {/* Service 2 */}
            <Card
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: colors.white }}
            >
              <div className="mb-6">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663643036699/iUuGP2oxnci8fFuZcwY6Rx/service-card-2-LRVGGGwqNWvkEeMvpKnnTL.webp"
                  alt="教具設計"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: colors.darkBrown }}
              >
                教具設計與開發
              </h3>
              <p
                className="mb-4 leading-relaxed"
                style={{ color: `${colors.darkBrown}b3` }}
              >
                我們設計與開發符合教學需求的創新教具，結合美學與功能性，讓學習變得更有趣、更有效果。
              </p>
              <ul className="space-y-2" style={{ color: `${colors.darkBrown}b3` }}>
                <li className="flex items-center gap-2">
                  <Star
                    className="w-4 h-4 fill-current"
                    style={{ color: colors.softPurple }}
                  />
                  創意教材開發
                </li>
                <li className="flex items-center gap-2">
                  <Star
                    className="w-4 h-4 fill-current"
                    style={{ color: colors.softPurple }}
                  />
                  互動式學習工具
                </li>
                <li className="flex items-center gap-2">
                  <Star
                    className="w-4 h-4 fill-current"
                    style={{ color: colors.softPurple }}
                  />
                  永續教育資源
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32" style={{ backgroundColor: colors.cream }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.darkBrown }}
            >
              過往作品
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: `${colors.darkBrown}b3` }}
            >
              看看我們與學校合作的精彩成果與學生創意展現
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                    style={{
                      background: `linear-gradient(to top, ${colors.darkBrown}, transparent)`,
                    }}
                  >
                    <h3 className="text-white font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white text-opacity-90">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 text-base"
              style={{
                backgroundColor: colors.warmGreen,
                color: colors.white,
              }}
            >
              查看更多作品
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{ color: colors.darkBrown }}
              >
                聯絡我們
              </h2>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: `${colors.darkBrown}b3` }}
              >
                對我們的服務感興趣？歡迎與我們聯繫，我們很樂意為您的學校帶來創意藝術教育的可能性。
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${colors.warmGreen}33`,
                    }}
                  >
                    <Phone
                      className="w-6 h-6"
                      style={{ color: colors.warmGreen }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ color: colors.darkBrown }}
                    >
                      電話
                    </h3>
                    <p style={{ color: `${colors.darkBrown}b3` }}>
                      +852 6888 2405
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${colors.softPurple}33`,
                    }}
                  >
                    <Mail
                      className="w-6 h-6"
                      style={{ color: colors.softPurple }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ color: colors.darkBrown }}
                    >
                      電子郵件
                    </h3>
                    <p style={{ color: `${colors.darkBrown}b3` }}>
                      info@luxsarts.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: colors.cream }}
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label
                    className="block font-semibold mb-2"
                    style={{ color: colors.darkBrown }}
                  >
                    姓名
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: colors.lightGray,
                      backgroundColor: colors.white,
                      color: colors.darkBrown,
                      "--tw-ring-color": colors.warmGreen,
                    } as any}
                    placeholder="您的姓名"
                  />
                </div>

                <div>
                  <label
                    className="block font-semibold mb-2"
                    style={{ color: colors.darkBrown }}
                  >
                    電子郵件
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: colors.lightGray,
                      backgroundColor: colors.white,
                      color: colors.darkBrown,
                      "--tw-ring-color": colors.warmGreen,
                    } as any}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    className="block font-semibold mb-2"
                    style={{ color: colors.darkBrown }}
                  >
                    訊息
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{
                      borderColor: colors.lightGray,
                      backgroundColor: colors.white,
                      color: colors.darkBrown,
                      "--tw-ring-color": colors.warmGreen,
                    } as any}
                    placeholder="請告訴我們您的需求..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 text-base"
                  style={{
                    backgroundColor: colors.warmGreen,
                    color: colors.white,
                  }}
                >
                  發送訊息
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.darkBrown }} className="text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(to bottom right, ${colors.warmGreen}, ${colors.softPurple})`,
                  }}
                >
                  <span className="text-white font-bold">✨</span>
                </div>
                <span className="font-bold">Luxs Arts</span>
              </div>
              <p className="text-white text-opacity-70 text-sm">
                光賞藝術 - 啟發創意之光
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm text-white text-opacity-70">
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    服務介紹
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white transition-colors">
                    過往作品
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    聯絡我們
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">服務</h4>
              <ul className="space-y-2 text-sm text-white text-opacity-70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    入校教育服務
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    教具設計
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    工作坊
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">聯絡方式</h4>
              <ul className="space-y-2 text-sm text-white text-opacity-70">
                <li>info@luxsarts.com</li>
                <li>+852 6888 2405</li>
              </ul>
            </div>
          </div>

          <div
            className="border-t pt-8 text-center text-sm text-white text-opacity-70"
            style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <p>&copy; 2026 Luxs Arts 光賞藝術. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
