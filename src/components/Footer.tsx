import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FDB813] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              {/* <ArrowUp className="h-8 w-8 text-white" />
              <span className="ml-2 text-2xl font-bold">UPWISE</span> */}
              <img src='upwise-logo.jpg' alt="Upwise Logo" className="h-12 w-auto" />
            </div>
            <p className="text-[#4a4a4a] opacity-90 mb-6">
              Empowering organizations worldwide with transformative corporate training solutions.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-6 w-6 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-6 w-6 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Facebook className="h-6 w-6 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-[#4a4a4a] opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Excel Training</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">PowerPoint Mastery</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Communication Skills</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Productivity Training</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-[#4a4a4a] opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Our Team</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">News</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-[#4a4a4a] opacity-90">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@upwise.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-8 text-center text-[#4a4a4a] opacity-90">
          <p>&copy; 2024 Upwise. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}