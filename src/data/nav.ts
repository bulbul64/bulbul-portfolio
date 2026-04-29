import type { LinksType } from '@/types';
import {
  Briefcase,
  FileText,
  Home,
  Mail,
  MessageCircle,
  Settings,
  User,
} from 'lucide-react';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  { label: 'Projects', link: '#projects', icon: Briefcase },
  { label: 'About', link: '#about', icon: User },
  { label: 'Services', link: '#services', icon: Settings },
  { label: 'Resume', link: '#resume', icon: FileText },
  { label: 'Reviews', link: '#testimonials', icon: MessageCircle },
  { label: 'Contact', link: '#contact', icon: Mail },
];

export const socialLinks: LinksType[] = [
  { icon: FaFacebook, label: 'Facebook', link: '/#' },
  { icon: FaInstagram, label: 'Instagram', link: '/#' },
  { icon: FaTwitter, label: 'Twitter', link: '/#' },
  { icon: FaYoutube, label: 'Youtube', link: '/#' },
];