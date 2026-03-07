"use client";

import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function CoffeeFooter() {
  return (
    <footer className="bg-[#2B140A] text-[#F5E6D3] pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-[#4B2A1B]">
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Coffee Chapter
            </h3>
            <p className="text-sm leading-relaxed text-[#D8C2A3]">
              A delicate cup & stories. Brewing warmth, flavor, and
              conversations—one cup at a time.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                className="hover:text-[#C89A5B]"
                href="https://www.instagram.com/coffee__chapter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <Instagram />
              </a>
              <a
                className="hover:text-[#C89A5B]"
                href="https://www.instagram.com/coffee__chapter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <Facebook />
              </a>
              <a
                className="hover:text-[#C89A5B]"
                href="https://www.instagram.com/coffee__chapter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <Twitter />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[#D8C2A3]">
              <li>
                <a href="#home" className="hover:text-[#C89A5B]">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C89A5B]">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C89A5B]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#franchise" className="hover:text-[#C89A5B]">
                  Franchise
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C89A5B]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold text-white mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-[#D8C2A3]">
              <li className="flex gap-3">
                <MapPin size={18} className="text-[#C89A5B]" />
                <span>lamba Narol. Ahmedabad, Gujarat. INDIA</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-[#C89A5B]" />
                <span>+91 9961240481</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-[#C89A5B]" />
                <span> coffeechapter2025@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* HOURS */}
          <div>
            <h4 className="font-bold text-white mb-5">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-[#D8C2A3]">
              Every day 11 pm to 1 am
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="py-6 text-center text-sm text-[#BFA98A]">
          © {new Date().getFullYear()} Coffee Chapter. All rights reserved
        </div>
      </div>
    </footer>
  );
}
