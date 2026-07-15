'use client';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Results from '../components/Results';
import FeaturedCaseStudy from '../components/FeaturedCaseStudy';
import AccountOwnership from '../components/AccountOwnership';
import SelectedClientResults from '../components/SelectedClientResults';
import { About, Services, Testimonials, Process, Tools, Offer, Contact } from '../components/Sections';

export default function Home(){
  useEffect(()=>{
    const io=new IntersectionObserver(
      entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add('is-visible')),
      {threshold:.12}
    );
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[]);

  return (
    <main>
      <div className="noise"/>
      <Navbar/>
      <Hero/>
      <Results/>
      <About/>
      <Services/>
      <FeaturedCaseStudy/>
      <AccountOwnership/>
      <SelectedClientResults/>
      <Testimonials/>
      <Process/>
      <Tools/>
      <Offer/>
      <Contact/>
    </main>
  );
}
