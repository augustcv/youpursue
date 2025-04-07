export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YouPursue",
  url: "https://www.youpursue.org",
  logo: "https://www.youpursue.org/icon.svg",
  sameAs: [
    "https://www.facebook.com/youpursue",
    "https://www.instagram.com/youpursue",
    "https://twitter.com/youpursue",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49-170-7451220",
    email: "youpursuecare@gmail.com",
    contactType: "Customer Service",
  },
}

export const educationalProgramSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "YouPursue International Exchange Programs",
  description: "International student exchange programs for high school and university students.",
  url: "https://www.youpursue.org",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Germany",
  },
}

export const highSchoolExchangeSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "High School Exchange Program",
  description:
    "International exchange program for high school students aged 15-18, offering cultural immersion and personal growth through peer-to-peer exchanges.",
  provider: {
    "@type": "Organization",
    name: "YouPursue",
    sameAs: "https://www.youpursue.com",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Student",
    audienceType: "High School Students",
  },
  educationalCredentialAwarded: "International Exchange Experience",
  timeRequired: "P1M to P6M",
}

export const universityExchangeSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "University Exchange Program",
  description:
    "International exchange program for university students, focusing on cultural immersion and university life experience abroad.",
  provider: {
    "@type": "Organization",
    name: "YouPursue",
    sameAs: "https://www.youpursue.com",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Student",
    audienceType: "University Students",
  },
  educationalCredentialAwarded: "International Exchange Experience",
  timeRequired: "P1M to P6M",
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the peer-to-peer model differ from traditional exchange programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional exchange programs typically involve agencies that place students with host families who aren't sending a student in return. Our peer-to-peer model directly connects families who both want to host and send a student, creating a more balanced, reciprocal relationship and eliminating expensive agency fees.",
      },
    },
    {
      "@type": "Question",
      name: "What if we can't host at the same time our student is abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible timing options. Your exchange partner can come before or after your child's exchange period, depending on what works best for both families. This flexibility allows for non-simultaneous exchanges that accommodate school calendars and family schedules.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure the safety of participants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safety is our top priority. We implement comprehensive verification processes for all participants, including background checks, reference verification, and video interviews. We provide continuous support throughout the exchange, with local coordinators available in each destination and a 24/7 emergency assistance line.",
      },
    },
  ],
}

