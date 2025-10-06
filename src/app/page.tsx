"use client";

import { useEffect, useState } from "react";

// SVG 파일을 React 컴포넌트처럼 import
// import ArrowIcon from "/public/icons/arrow.svg";

export default function HomePage() {
  const [showIframe, setShowIframe] = useState(false);
  const [showPosterModal, setShowPosterModal] = useState(false);

  useEffect(() => {
    // 1초 후에 iframe 표시
    const timer = setTimeout(() => {
      setShowIframe(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const tourDates = [
    { date: "NOV 14, 2025", venue: "Queen Elizabeth Theatre (Toronto)" },
    { date: "NOV 16, 2025", venue: "Terminal 5 (New York)" },
    { date: "NOV 18, 2025", venue: "Warner Theatre (Washington, D.C.)" },
    { date: "NOV 20, 2025", venue: "Copernicus Center (Chicago)" },
    { date: "NOV 21, 2025", venue: "Variety Playhouse (Atlanta)" },
    { date: "NOV 24, 2025", venue: "Miami Beach Bandshell (Miami)" },
    { date: "NOV 26, 2025", venue: "Warehouse Live Midtown (Houston)" },
    { date: "NOV 28, 2025", venue: "The Bomb Factory (Dallas)" },
    { date: "NOV 30, 2025", venue: "The Warfield (San Francisco)" },
    { date: "DEC 02, 2025", venue: "The Novo (Los Angeles)" },
    { date: "DEC 04, 2025", venue: "Showbox Sodo (Seattle)" },
  ];

  const cityBanners = [
    {
      url: "https://admitone.com/events/wonho-toronto-132856",
      img_src: "/images/city-banner/01_toronto_BK.png",
      alt: "Buy Tickets Toronto",
    },
    {
      url: "https://www.axs.com/events/1150096/2025-wonho-world-tour-stay-awake-in-north-america-tickets?skin=terminal5",
      img_src: "/images/city-banner/02_newyork_BK.png",
      alt: "Buy Tickets New York",
    },
    {
      url: "https://www.ticketmaster.com/event/150063421BD69A21",
      img_src: "/images/city-banner/03_washington_BK.png",
      alt: "Buy Tickets Washington",
    },
    {
      url: "https://www.etix.com/ticket/p/67239596/2025-wonho-world-tour-chicago-copernicus-center",
      img_src: "/images/city-banner/04_chicago_BK.png",
      alt: "Buy Tickets Chicago",
    },
    {
      url: "https://www.axs.com/events/1150426/2025-wonho-world-tour-stay-awake-in-north-america-tickets",
      img_src: "/images/city-banner/05_atlanta_BK.png",
      alt: "Buy Tickets Atlanta",
    },
    {
      url: "https://link.dice.fm/Qc9a20173efa",
      img_src: "/images/city-banner/06_miami_BK.png",
      alt: "Buy Tickets Miami",
    },
    {
      url: "https://wl.eventim.us/event/won-ho/665973?afflky=RiseRooftop",
      img_src: "/images/city-banner/07_houston_BK.png",
      alt: "Buy Tickets Houston",
    },
    {
      url: "https://www.axs.com/events/1152526/wonho-tickets",
      img_src: "/images/city-banner/08_dallas_BK.png",
      alt: "Buy Tickets Dallas",
    },
    {
      url: "https://www.axs.com/events/1160280/wonho-tickets",
      img_src: "/images/city-banner/09_sf_BK.png",
      alt: "Buy Tickets San Francisco",
    },
    {
      url: "https://www.axs.com/events/1160112/wonho-tickets",
      img_src: "/images/city-banner/10_la_BK.png",
      alt: "Buy Tickets Los Angeles",
    },
    {
      url: "https://www.axs.com/events/1159641/wonho-tickets?skin=showboxpresents",
      img_src: "/images/city-banner/11_seattle_BK.png",
      alt: "Buy Tickets Seattle",
    },
  ];

  const faqItems = [
    {
      question: "When do tickets go on sale?",
      answer:
        "Artist presale begins on October 6 at 10AM local venue time. General on-sale begins on October 8 at 10AM local venue time.",
    },
    {
      question: "How do I access the presale?",
      answer:
        "Fans must sign up through the official presale form. You’ll receive a unique presale code via email before presale opens.",
    },
    {
      question: "Is there a ticket limit per person?",
      answer:
        "Yes, presale and general on-sale tickets are limited to 6 tickets per person to ensure fair access.",
    },
    {
      question: "Are VIP packages available?",
      answer:
        "Yes. VIP packages include exclusive benefits such as early entry, premium seating, and limited-edition merchandise. Full details will be available at checkout.",
    },
    {
      question: "What if the show I want is sold out?",
      answer:
        "If tickets are sold out, please check back for official updates. Avoid third-party resellers as we cannot guarantee entry with unofficial tickets.",
    },
    {
      question: "Will more cities be added?",
      answer:
        "At this time, only the listed cities are confirmed. If additional dates are announced, they will be posted first on WONHO’s official channels.",
    },
    {
      question: "When will I receive my tickets?",
      answer:
        "Tickets will be delivered digitally through the ticketing platform you purchased from. Delivery methods may vary by venue.",
    },
    {
      question: "Is there an age restriction?",
      answer:
        "Most shows are all ages, but some venues may have age restrictions. Please check your specific venue’s policy before purchasing.",
    },
    {
      question: "Can I get a refund or exchange my ticket?",
      answer:
        "All sales are final. Refunds and exchanges are not available unless the event is canceled or rescheduled.",
    },
    {
      question: "Where can I buy official merchandise?",
      answer:
        "Tour merchandise will be available at each venue and select items may be available online through the official store in the US and Canada.",
    },
    {
      question: "Who do I contact for ticketing questions?",
      answer:
        "For ticket-related inquiries, please contact the venue’s box office or the official ticketing provider listed on your confirmation email.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Poster Modal */}
      {showPosterModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPosterModal(false)}
        >
          <img
            src="/images/poster/wonho-poster.png"
            alt="WONHO World Tour Poster"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setShowPosterModal(false)}
          >
            ×
          </button>
        </div>
      )}

      {/* Header with Logo */}
      <header className="p-5 sm:p-8 bg-black">
        <div className="text-left">
          <img
            src="/stageslash_logo.png"
            alt="Logo"
            className="w-[120px] sm:w-[180px] h-auto"
          />
        </div>
      </header>

      {/* Main Content - All Centered */}
      <main className="flex flex-col items-center">
        {/* Hero Section with Poster and Tour Dates */}
        <section className="w-full px-5 py-10 sm:px-10 sm:py-16">
          <div className="max-w-[860px] mx-auto">
            {/* Title - Hidden on mobile, shown on desktop */}
            <h1 className="hidden sm:block text-2xl sm:text-5xl font-bold leading-tight sm:leading-[60px] mb-8 text-center">
              2025 WONHO WORLD TOUR
              <br />
              &lt;STAY AWAKE&gt;: North America
            </h1>

            {/* Poster and Tour Dates Container - Side by side on desktop, stacked on mobile */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-10 sm:items-start">
              {/* Poster Image - Full width on mobile, 50% on desktop */}
              <div className="mb-8 sm:mb-0">
                <img
                  src="/images/poster/wonho-poster.png"
                  alt="WONHO World Tour Poster"
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setShowPosterModal(true)}
                />
              </div>

              {/* Tour Dates - 50% on desktop */}
              <div>
                {/* Title - Shown on mobile after poster, hidden on desktop */}
                <h1 className="block sm:hidden text-2xl font-bold leading-tight mb-8 text-center">
                  2025 WONHO WORLD TOUR
                  <br />
                  &lt;STAY AWAKE&gt;: North America
                </h1>
                <div className="flex flex-col">
                  {tourDates.map((show, index) => (
                    <div
                      key={index}
                      className={`bg-black px-4 py-3 flex justify-between text-xs sm:text-sm ${
                        index < tourDates.length - 1
                          ? "border-b border-white/50"
                          : ""
                      }`}
                    >
                      <span className="text-white font-bold text-base">
                        {show.date}
                      </span>
                      <span className="text-right text-white text-base">
                        {show.venue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Laylo Embed - 최상단 */}
        <section className="w-full px-5 py-10">
          <div className="max-w-[860px] mx-auto">
            {/* 디버깅용 배경 */}
            <div className="relative bg-black-300 rounded-lg overflow-hidden">
              {showIframe ? (
                <iframe
                  id="laylo-drop-fcb044de-0458-4401-ad98-ebce78b190b9"
                  frameBorder="0"
                  scrolling="no"
                  allow="web-share; encrypted-media"
                  allowTransparency={true}
                  style={{
                    width: "1px",
                    minWidth: "100%",
                    maxWidth: "1000px",
                    minHeight: "400px",
                  }}
                  src="https://embed.laylo.com?dropId=fcb044de-0458-4401-ad98-ebce78b190b9&color=2c63ff&minimal=false&theme=dark"
                />
              ) : (
                <div className="flex items-center justify-center h-[400px] text-gray-500">
                  <p>Loading...</p>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* Ticket Buttons */}
        <section className="w-full px-5 py-8 sm:px-10 sm:py-12">
          <div className="max-w-[860px] mx-auto text-center">
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">
              TICKETS AVAILABLE ON OCT 8TH @10 AM LOCAL TIME
            </h2>
            <div className="flex flex-col gap-4">
              {cityBanners.map((banner, index) => (
                <a
                  key={index}
                  href={banner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={banner.img_src}
                    alt={banner.alt}
                    className="w-full hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Large Content Block */}
        <section className="w-full px-5 py-5 mb-10">
          <div className="max-w-[860px] mx-auto">
            <img
              src="/images/price-banner/detail-price.png"
              alt="Detail Price"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Goods Section */}
        <section className="w-full px-5 py-5">
          <div className="max-w-[860px] mx-auto">
            <a
              href="https://wonho.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center hover:text-gray-300 transition-colors cursor-pointer">
                SHOP FOR MERCH
              </h2>
            </a>
            <a
              href="https://wonho.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/images/poster/goods.png"
                alt="Detail Price"
                className="w-full h-auto hover:opacity-90 transition-opacity cursor-pointer"
              />
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-5 py-10 sm:px-10 sm:py-16 bg-black">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              FAQ
            </h2>
            <p className="text-xl sm:text-2xl font-bold mb-5 text-center border-b border-white/50 pb-10">
              2025 WONHO WORLD TOUR: &lt;STAY AWAKE&gt;
            </p>

            <div className="flex flex-col gap-3">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className={`${
                    index === faqItems.length - 1
                      ? ""
                      : "border-b border-gray-800"
                  } pb-4 text-left group`}
                >
                  <summary className="text-xl sm:text-2xl font-bold cursor-pointer list-none relative py-1 pr-6">
                    {item.question}
                    {/* <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#3349a8] text-6xl font-light group-open:-rotate-90 transition-transform inline-block rotate-90"> */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 group-open:-rotate-180 transition-transform">
                      <img
                        src="/icons/arrow.svg"
                        alt="arrow"
                        className="w-full h-full"
                      />
                    </div>
                  </summary>
                  <p className="mt-3 text-lg sm:text-xl text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Content Block */}
        {/* <section className="w-full px-5 py-5">
          <div className="max-w-[860px] mx-auto">
            <div className="bg-white text-black py-24 sm:py-48 px-5 sm:px-10 text-center text-base sm:text-xl">
              이미지
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
