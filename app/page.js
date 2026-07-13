'use client';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Results from '../components/Results';
import { About, Services, Tools, Offer, Cases, Testimonials, Contact } from '../components/Sections';
export default function Home(){
  useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('is-visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));return()=>io.disconnect();},[]);
  return <main><div className="noise"/><Navbar/><Hero/><Results/><About/><Services/><Tools/><Offer/><Cases/><Testimonials/><Contact/></main>;
}
