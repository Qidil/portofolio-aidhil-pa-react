import { lazy } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import LazySection from './components/LazySection';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <LazySection sectionId="about"><About /></LazySection>
      <LazySection sectionId="skills"><Skills /></LazySection>
      <LazySection sectionId="experience"><Experience /></LazySection>
      <LazySection sectionId="projects"><Projects /></LazySection>
      <LazySection sectionId="services"><Certificates /></LazySection>
      <LazySection sectionId="testimonials"><Testimonials /></LazySection>
      <LazySection sectionId="contact"><Contact /></LazySection>
    </MainLayout>
  );
}
