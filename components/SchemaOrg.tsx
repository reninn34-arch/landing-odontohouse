"use client";

import { useLanguage } from "@/context/LanguageContext";

const BASE_URL = "https://odontohouse.com";

export const SchemaOrg = () => {
  const { t } = useLanguage();
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Dentist"],
    "name": "Odonto House",
    "description": t.hero.subtitle,
    "url": BASE_URL,
    "image": `${BASE_URL}/hero.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. las Aguas 1106 entre Jiguas y Laureles",
      "addressLocality": "Guayaquil",
      "addressRegion": "Guayas",
      "addressCountry": "EC",
    },
    "telephone": "+593990904443",
    "email": "elenazbm@hotmail.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "14:00",
      },
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-2.1894",
      "longitude": "-79.8898",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3",
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States",
      },
      {
        "@type": "Country",
        "name": "Canada",
      },
      {
        "@type": "Country",
        "name": "Ecuador",
      },
    ],
    "serviceType": [
      "Smile Design",
      "Orthodontics",
      "Dental Implants",
      "Teeth Whitening",
      "Wisdom Teeth Removal",
    ],
  };

  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Elena Barroso",
    "jobTitle": "Specialist in Aesthetic Dentistry",
    "description": t.doctor.bio,
    "url": BASE_URL,
    "image": `${BASE_URL}/doctora.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. las Aguas 1106 entre Jiguas y Laureles",
      "addressLocality": "Guayaquil",
      "addressCountry": "EC",
    },
    "telephone": "+593990904443",
    "sameAs": "https://instagram.com/odontohouse",
    "memberOf": [
      {
        "@type": "MedicalOrganization",
        "name": "Ecuadorian Dental Association",
      },
    ],
    "medicalSpecialty": ["Aesthetic Dentistry", "Orthodontics"],
    "qualifications": [
      "DDS - Doctor of Dental Surgery",
      "Specialist in Aesthetic Dentistry",
      "10+ Years of Experience",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};