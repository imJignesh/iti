// Course page schema taken from the approved Google Doc "Schema" tabs (Month 1 landing page docs).
// Only add a page here when its visible content (FAQs, headings) already matches the doc, because the FAQ schema must match what the page shows.
export const mypCourseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai#webpage",
      "url": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai",
      "name": "MYP Tutors in Dubai | IB MYP Tutoring, Grades 6-10",
      "description": "Ignite Training Institute offers MYP tutors in Dubai for students in Grades 6 to 10 following the IB Middle Years Programme. Our IB MYP tutoring in Dubai covers Mathematics (Standard and Extended), Physics, Chemistry, Biology, Computer Science, Business Management, Economics, English Language and Literature and French, with help on assessment criteria, the Personal Project and eAssessment preparation. MYP tutoring in Dubai is available one-to-one or in small groups of 3 to 6 students, online or in person at our Sheikh Zayed Road and JLT centres. Our tutors also help students plan the move from MYP to IGCSE or the IB Diploma, and families can book a free demo class first.",
      "isPartOf": {
        "@id": "https://ignitetraininginstitute.com/#website"
      },
      "about": {
        "@id": "https://ignitetraininginstitute.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai#breadcrumb"
      },
      "inLanguage": "en",
      "mainEntity": {
        "@id": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai#course"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ignitetraininginstitute.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Courses",
          "item": "https://ignitetraininginstitute.com/courses"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "MYP Tutors in Dubai",
          "item": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai"
        }
      ]
    },
    {
      "@type": "Course",
      "@id": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai#course",
      "name": "IB MYP tutoring in Dubai",
      "description": "Our MYP tutors in Dubai support students in Grades 6 to 10 with IB MYP tutoring in Dubai across Maths, Sciences, English and other subjects. An IB MYP tutor helps students understand the criteria, build strong study habits and prepare for MYP assessments, so the move to IGCSE or the IB Diploma feels smooth. MYP tutoring in Dubai is available one-to-one or in small groups, online or in person at our Sheikh Zayed Road and JLT centres. Students start with a short diagnostic test and follow a clear study plan with regular feedback. Book a free demo class to meet an MYP tutor first.",
      "url": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai",
      "provider": {
        "@id": "https://ignitetraininginstitute.com/#organization"
      },
      "educationalLevel": "Grades 6-10 (IB MYP)",
      "teaches": "IB Middle Years Programme",
      "inLanguage": "en",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Onsite",
          "location": [
            {
              "@id": "https://ignitetraininginstitute.com/#localbusiness-szr"
            },
            {
              "@id": "https://ignitetraininginstitute.com/#localbusiness-jlt"
            }
          ]
        },
        {
          "@type": "CourseInstance",
          "courseMode": "Online"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Is the Difference Between Standard and Extended MYP Mathematics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard Maths covers the core topics of the course. Extended Maths adds harder content in algebra, geometry and trigonometry, and suits students who plan to take mathematics at a higher level later. Not sure which one fits your child? Our MYP mathematics tutoring in Dubai supports students studying both levels."
          }
        },
        {
          "@type": "Question",
          "name": "What Does the MYP eAssessment Include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The MYP eAssessment has two parts: on-screen exams and ePortfolios. The on-screen exams test how students apply what they know to unfamiliar questions. The ePortfolios are made up of coursework that students prepare during the year. Practising on a screen early helps students feel at ease."
          }
        },
        {
          "@type": "Question",
          "name": "How Early Should We Start MYP eAssessment Preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Starting at the beginning of Grade 10 gives students time to learn the format and fix weak topics. Students in Grade 9 can also begin with light practice. A regular plan works better than cramming in the last few weeks, and an IB MYP tutor can build that plan around your child’s school calendar."
          }
        },
        {
          "@type": "Question",
          "name": "How Long Does It Take to See Better MYP Results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most students improve gradually. Many families notice better confidence and clearer answers within a few weeks, and higher criteria scores often follow after a full unit or two. Progress depends on the subject, how often your child practises and how much feedback they act on."
          }
        },
        {
          "@type": "Question",
          "name": "What Is a Process Journal in the MYP Personal Project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A process journal is where students record their ideas, research, plans and thoughts during the personal project. It shows how the work developed, not only the final product. Teachers use it when marking the criteria, so keeping it up to date matters."
          }
        },
        {
          "@type": "Question",
          "name": "Do MYP Students Need Help With Language Acquisition?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some do. Language acquisition is one of the eight subject groups, and students learn a second or third language, such as Arabic, French, or English. Marks come from listening, reading, speaking, and writing tasks. A tutor can give extra speaking practice and help with writing structure."
          }
        },
        {
          "@type": "Question",
          "name": "Is MYP Design Different From Other Subjects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. In Design, students follow a cycle of researching a problem, creating a plan, building a solution and evaluating it. Marks are based on the process as well as the product. Students who keep clear notes and explain their choices usually score higher."
          }
        },
        {
          "@type": "Question",
          "name": "Can My Child Take Online MYP Classes From Home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Online MYP tutoring lets students join lessons from home with a tutor who shares notes, practice questions and feedback on screen. It suits busy families and students who prefer a quiet study space. In-person sessions are also available at our centres."
          }
        },
        {
          "@type": "Question",
          "name": "How Do MYP Skills Help in IGCSE, AP or the Diploma Programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Research, writing, time management and teamwork are useful in every route. Students moving through the MYP to DP or MYP to IGCSE transition often find that the habits they built in the IB Middle Years Programme help them settle into longer courses and tougher exams. Our IBDP tutors in Dubai and IGCSE tutors in Dubai can support the next step."
          }
        },
        {
          "@type": "Question",
          "name": "What Should I Ask Before Booking an MYP Science Tutor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask whether the tutor has taught MYP Sciences, how they explain the assessment criteria and how they give feedback on lab reports. Ask how lessons are planned around your child's school units. A good MYP science tutor will also share clear goals and progress updates."
          }
        }
      ]
    }
  ]
};
