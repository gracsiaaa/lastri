'use client';

import React, { useState } from 'react';
import { Language, ModalState, GalleryItem, BookingFormData } from '../types';
import { Treatment } from '../data/treatments';
import { GALLERY_ITEMS } from '../data/spaData';

// UI Components (In Exact Specified Section Order)
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { TreatmentMenu } from '../components/TreatmentMenu';
import { SanctuaryGallery } from '../components/SanctuaryGallery';
import { Reviews } from '../components/Reviews';
import { FAQ } from '../components/FAQ';
import { BookingSection } from '../components/BookingSection';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

// Modals
import { AboutModal } from '../components/modals/AboutModal';
import { TreatmentModal } from '../components/modals/TreatmentModal';
import { GalleryModal } from '../components/modals/GalleryModal';
import { BookingModal } from '../components/modals/BookingModal';
import { ConfirmationModal } from '../components/modals/ConfirmationModal';

export default function Home() {
  const [lang, setLang] = useState<Language>('id'); // Default Bahasa Indonesia per user prompt

  // Modal State Management
  const [modalState, setModalState] = useState<ModalState>({ type: 'none' });
  const [activeTreatment, setActiveTreatment] = useState<Treatment | null>(null);
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);

  const [initialBookingSelection, setInitialBookingSelection] = useState<{
    id: string;
    type: 'treatment' | 'package';
  } | null>(null);

  const [bookingRefId, setBookingRefId] = useState<string>('');
  const [submittedBookingData, setSubmittedBookingData] = useState<BookingFormData | null>(null);

  // Handlers
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  const closeModal = () => {
    setModalState({ type: 'none' });
  };

  const openAboutModal = () => {
    setModalState({ type: 'about' });
  };

  const openTreatmentModal = (treatment: Treatment) => {
    setActiveTreatment(treatment);
    setModalState({ type: 'treatment', data: treatment });
  };

  const openGalleryModal = (item: GalleryItem) => {
    setActiveGalleryItem(item);
    setModalState({ type: 'gallery', data: item });
  };

  const openBookingModal = (selection?: { id: string; type: 'treatment' | 'package' }) => {
    setInitialBookingSelection(selection || null);
    setModalState({ type: 'booking' });
  };

  const handleBookingSubmitted = (data: BookingFormData, refId: string) => {
    setSubmittedBookingData(data);
    setBookingRefId(refId);
    setModalState({ type: 'confirmation' });
  };

  // Gallery Navigation in Lightbox
  const handleNextGallery = () => {
    const currentItem = modalState.type === 'gallery' ? modalState.data : activeGalleryItem;
    if (currentItem?.id) {
      const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === currentItem.id);
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
        const nextItem = GALLERY_ITEMS[nextIndex];
        setActiveGalleryItem(nextItem);
        setModalState({ type: 'gallery', data: nextItem });
      }
    }
  };

  const handlePrevGallery = () => {
    const currentItem = modalState.type === 'gallery' ? modalState.data : activeGalleryItem;
    if (currentItem?.id) {
      const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === currentItem.id);
      if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
        const prevItem = GALLERY_ITEMS[prevIndex];
        setActiveGalleryItem(prevItem);
        setModalState({ type: 'gallery', data: prevItem });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8F5EE] text-[#534D2B] overflow-x-hidden font-sans">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenBooking={() => openBookingModal()}
      />

      {/* Main Single Page Sections (Exact Specified Sequence) */}
      <main>
        {/* 2. Jumbotron (Hero Section) */}
        <Hero
          lang={lang}
          onOpenBooking={() => openBookingModal()}
        />

        {/* 3. Tentang Kami (About Us) */}
        <AboutSection
          lang={lang}
          onOpenAboutModal={openAboutModal}
        />

        {/* 4. Treatments (Interactive Menu) */}
        <TreatmentMenu
          lang={lang}
          onSelectTreatment={openTreatmentModal}
          onBookTreatmentDirect={(treatment) => openBookingModal({ id: treatment.id, type: 'treatment' })}
        />

        {/* 5. Gallery */}
        <SanctuaryGallery
          lang={lang}
          onOpenLightbox={openGalleryModal}
        />

        {/* 6. Review (Testimonials) */}
        <Reviews
          lang={lang}
        />

        {/* 7. FAQ (Frequently Asked Questions) */}
        <FAQ
          lang={lang}
        />

        {/* 8. Contact & Lokasi */}
        <BookingSection
          lang={lang}
          onOpenBooking={() => openBookingModal()}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        lang={lang}
        onOpenBooking={() => openBookingModal()}
        onOpenAboutModal={openAboutModal}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp lang={lang} />

      {/* POP-UP MODALS SYSTEM */}
      {/* 1. About Philosophy Modal */}
      <AboutModal
        isOpen={modalState.type === 'about'}
        onClose={closeModal}
        lang={lang}
        onOpenBooking={() => openBookingModal()}
      />

      {/* 2. Treatment Details & Steps Modal */}
      <TreatmentModal
        isOpen={modalState.type === 'treatment'}
        onClose={closeModal}
        treatment={modalState.type === 'treatment' ? modalState.data : activeTreatment}
        lang={lang}
        onBookTreatment={(treatment) => openBookingModal({ id: treatment.id, type: 'treatment' })}
      />

      {/* 3. Visual Lightbox Gallery Modal */}
      <GalleryModal
        isOpen={modalState.type === 'gallery'}
        onClose={closeModal}
        item={modalState.type === 'gallery' ? modalState.data : activeGalleryItem}
        lang={lang}
        onNext={handleNextGallery}
        onPrev={handlePrevGallery}
      />

      {/* 5. Global Multi-Step Booking Form Modal */}
      <BookingModal
        isOpen={modalState.type === 'booking'}
        onClose={closeModal}
        lang={lang}
        initialSelection={initialBookingSelection}
        onBookingSubmitted={handleBookingSubmitted}
      />

      {/* 6. Booking Receipt & Confirmation Modal */}
      <ConfirmationModal
        isOpen={modalState.type === 'confirmation'}
        onClose={closeModal}
        lang={lang}
        bookingData={submittedBookingData}
        refId={bookingRefId}
      />
    </div>
  );
}
