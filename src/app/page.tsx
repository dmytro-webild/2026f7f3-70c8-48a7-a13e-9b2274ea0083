"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="circleGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Solutions",
          id: "#solutions",
        },
        {
          name: "Success",
          id: "#success",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1xr8ge"
      logoAlt="Lead Extrax Logo"
      brandName="Lead Extrax"
      button={{
        text: "Start Free Trial",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "canvas-reveal",
      }}
      title="Extract qualified leads. Close more deals."
      description="Lead Extrax delivers verified prospect data and actionable intelligence in minutes, not days. Power your sales team with the accuracy and speed that drives real revenue growth."
      buttons={[
        {
          text: "Start Free Trial",
          href: "#contact",
        },
        {
          text: "Learn More",
          href: "#features",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-computer-having-marketing-project-graphs-screen-while-multiethnic-businesspeople-discussing-company-turnover-startup-office-diverse-team-planning-business-collaboration_482257-38712.jpg",
          imageAlt: "Lead generation software dashboard",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-blockchain-technology_23-2151480171.jpg",
          imageAlt: "Digital data streams forming a lead network",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/guy-enjoying-with-virtual-reality-glasses_1154-168.jpg",
          imageAlt: "Sales professional interacting with holographic lead data",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/connection-online-networking-perforated-paper-share_53876-41392.jpg",
          imageAlt: "Magnifying glass over verified lead data",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/financial-report-desk-laptop-showing-marketing-statistics-office_482257-84805.jpg",
          imageAlt: "Efficiency timeline converting data to leads",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/messy-office-desk-still-life_23-2150155599.jpg",
          imageAlt: "Close-up of keyboard and mouse with lead analytics on screen",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Empowering Sales with Precision Data"
      description="Lead Extrax transforms how B2B professionals find and engage prospects. Our platform automates the tedious process of data collection, ensuring you have the freshest, most accurate intelligence at your fingertips to drive meaningful conversations and accelerate your sales cycle."
      subdescription="We focus on quality and efficiency, freeing your team from manual research so they can concentrate on what they do best: selling."
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/luxurious-boardroom-space-within-multinational-company-used-meetings_482257-124520.jpg"
      imageAlt="Sales pipeline growth dashboard"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "feature-1",
          title: "AI-Powered Data Verification",
          descriptions: [
            "Leverage advanced AI algorithms to ensure every lead is accurate, up-to-date, and relevant to your target criteria.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-ai-technology-background_23-2151719585.jpg",
          imageAlt: "AI data verification",
        },
        {
          id: "feature-2",
          title: "Automated Prospect Discovery",
          descriptions: [
            "Set your criteria once and let Lead Extrax continuously scan millions of sources to identify and deliver new leads directly to your CRM.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-robot-searching_1048-5627.jpg",
          imageAlt: "Automated prospect discovery",
        },
        {
          id: "feature-3",
          title: "Rich Company & Contact Insights",
          descriptions: [
            "Gain deep insights into company profiles, decision-makers, and technology stacks, empowering personalized outreach and higher conversion rates.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/call-center-manager-supervises-agents-logging-clients-interactions-csm-system_482257-117880.jpg",
          imageAlt: "Company and contact insights",
        },
        {
          id: "feature-4",
          title: "Seamless CRM Integration",
          descriptions: [
            "Effortlessly sync extracted leads with your existing CRM and sales tools, ensuring a smooth workflow and eliminating data silos.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/saas-concept-collage_23-2149399286.jpg",
          imageAlt: "Seamless CRM integration",
        },
        {
          id: "feature-5",
          title: "Customizable Search Parameters",
          descriptions: [
            "Tailor your lead searches with granular controls, allowing you to pinpoint niche markets and specific ideal customer profiles.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/online-marketing-commercial-connection-technology_53876-123918.jpg",
          imageAlt: "Customizable search parameters",
        },
      ]}
      title="Unleash Your Sales Potential with Smart Automation"
      description="Discover how Lead Extrax streamlines your lead generation, providing a constant flow of high-quality prospects ready for engagement. Move beyond manual methods and embrace intelligent data extraction."
      tag="Core Capabilities"
    />
  </div>

  <div id="solutions" data-section="solutions">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "solution-1",
          name: "Industry-Specific Lead Lists",
          price: "Starting at $499",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-laptop-with-economic-report_1098-2544.jpg",
          imageAlt: "Industry-specific lead lists",
        },
        {
          id: "solution-2",
          name: "Enterprise Data Streams",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/business-statistics-data-analyze-meeting_53876-94807.jpg",
          imageAlt: "Enterprise data streams",
        },
        {
          id: "solution-3",
          name: "Competitor Analysis Reports",
          price: "Starting at $799",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-supply-chain-representation_23-2149827277.jpg",
          imageAlt: "Competitor analysis reports",
        },
        {
          id: "solution-4",
          name: "Geo-Targeted Prospecting",
          price: "Starting at $599",
          imageSrc: "http://img.b2bpic.net/free-photo/network-with-pins_93675-134591.jpg",
          imageAlt: "Geo-targeted prospecting",
        },
        {
          id: "solution-5",
          name: "Tech Stack Intelligence",
          price: "Starting at $699",
          imageSrc: "http://img.b2bpic.net/free-photo/diverse-staff-pitching-proposals-stakeholders-mockup-business-meeting-dark_482257-136152.jpg",
          imageAlt: "Tech stack intelligence",
        },
        {
          id: "solution-6",
          name: "Market Research Bundles",
          price: "Starting at $899",
          imageSrc: "http://img.b2bpic.net/free-photo/young-team-coworkers-working-project_273609-16267.jpg",
          imageAlt: "Market research bundles",
        },
      ]}
      title="Tailored Lead Intelligence Packages"
      description="Choose the Lead Extrax solution that best fits your business needs, from targeted industry lists to comprehensive market data bundles, all designed to maximize your outreach effectiveness."
      tag="Our Solutions"
    />
  </div>

  <div id="success" data-section="success">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "metric-1",
          value: "98%",
          title: "Data Accuracy",
          description: "Maintaining the highest standards for verified prospect data, ensuring your outreach is always on target.",
          imageSrc: "http://img.b2bpic.net/free-vector/data-base-design_24877-49308.jpg",
          imageAlt: "Data accuracy graphic",
        },
        {
          id: "metric-2",
          value: "70%+",
          title: "Reduced Research Time",
          description: "Freeing sales teams from manual prospecting to focus on high-value engagement and closing deals.",
          imageSrc: "http://img.b2bpic.net/free-photo/shopping-trolley-near-alarm-clock_23-2147948112.jpg",
          imageAlt: "Time savings graphic",
        },
        {
          id: "metric-3",
          value: "3X",
          title: "Pipeline Acceleration",
          description: "Our clients report significantly faster lead-to-opportunity conversion thanks to immediate access to qualified data.",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-entrepreneur-pitching-new-project-idea-stakeholders_482257-118564.jpg",
          imageAlt: "Pipeline acceleration graphic",
        },
        {
          id: "metric-4",
          value: "25K+",
          title: "Leads Processed Daily",
          description: "Scalable infrastructure handles vast volumes of data, ensuring consistent performance for enterprise-level demands.",
          imageSrc: "http://img.b2bpic.net/free-photo/corporate-connected-teamwork-perforated-paper-gear_53876-30307.jpg",
          imageAlt: "High volume lead processing",
        },
      ]}
      title="Impactful Metrics That Drive Growth"
      description="See the quantifiable difference Lead Extrax makes. Our platform delivers tangible results that translate directly into increased efficiency and revenue for your sales and marketing teams."
      tag="Proven Results"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "testimonial-1",
          name: "Sarah Jenkins",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-successful-entrepreneur_1098-3855.jpg",
          imageAlt: "Sarah Jenkins",
        },
        {
          id: "testimonial-2",
          name: "Mark Thompson",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1628.jpg",
          imageAlt: "Mark Thompson",
        },
        {
          id: "testimonial-3",
          name: "Emily White",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-with-eyeglasses-smiling-office_329181-14553.jpg",
          imageAlt: "Emily White",
        },
        {
          id: "testimonial-4",
          name: "David Lee",
          imageSrc: "http://img.b2bpic.net/free-photo/pensive-business-leader-thinking-new-strategy_1262-17084.jpg",
          imageAlt: "David Lee",
        },
        {
          id: "testimonial-5",
          name: "Jessica Brown",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-long-brown-hair-black-t-shirt-white-jacket_613910-8245.jpg",
          imageAlt: "Jessica Brown",
        },
      ]}
      cardTitle="What Our Clients Say"
      cardTag="Client Success Stories"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "SalesForce",
        "HubSpot",
        "Pipedrive",
        "Microsoft",
        "Oracle",
        "SAP",
        "ZoomInfo",
        "LinkedIn",
        "Marketo",
        "Pardot",
        "Outreach.io",
      ]}
      title="Powering Top B2B Teams Globally"
      description="Our solutions are trusted by sales and marketing leaders in diverse industries to deliver accurate, actionable intelligence."
      tag="Trusted By Leaders"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "How does Lead Extrax ensure data accuracy?",
          content: "We employ a multi-layered verification process, combining AI algorithms with manual human review and real-time data refreshes to guarantee the highest accuracy and relevance for all extracted leads.",
        },
        {
          id: "faq-2",
          title: "Can I integrate Lead Extrax with my existing CRM?",
          content: "Yes, Lead Extrax offers seamless integration with popular CRM platforms like Salesforce, HubSpot, and Pipedrive, ensuring your lead data flows directly into your existing sales workflows without friction.",
        },
        {
          id: "faq-3",
          title: "What kind of data can Lead Extrax extract?",
          content: "Lead Extrax can extract a wide range of prospect intelligence, including verified contact information, company size, industry, revenue, technology stack, social profiles, and key decision-maker roles.",
        },
        {
          id: "faq-4",
          title: "Is there a free trial available?",
          content: "Absolutely! We offer a no-obligation free trial so you can experience the power of Lead Extrax firsthand. Simply sign up on our website to get started.",
        },
        {
          id: "faq-5",
          title: "How does pricing work for Lead Extrax?",
          content: "Our pricing is tiered based on the volume of leads and advanced features required. We offer flexible plans tailored for SMBs to enterprise clients. Please contact our sales team for a custom quote.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to the most common questions about Lead Extrax, our features, and how we help your business thrive."
      tag="Questions & Answers"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get Started"
      title="Ready to Supercharge Your Sales Pipeline?"
      description="Connect with our team today to schedule a demo and discover how Lead Extrax can transform your lead generation strategy. Fill out the form below or reach out directly."
      imageSrc="http://img.b2bpic.net/free-photo/laptop-computer-with-halfopen-screen-dark-background_169016-63628.jpg"
      imageAlt="Contact form digital illustration"
      mediaAnimation="slide-up"
      mediaPosition="left"
      inputPlaceholder="Your Email Address"
      buttonText="Request a Demo"
      termsText="By clicking 'Request a Demo', you agree to our Terms and Conditions and Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-photo/cool-background-blank-wallpaper-place-your-concept_1194-641481.jpg"
      logoAlt="Lead Extrax Logo"
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Features",
              href: "#features",
            },
          ],
        },
        {
          items: [
            {
              label: "Solutions",
              href: "#solutions",
            },
            {
              label: "Pricing",
              href: "#",
            },
            {
              label: "Support",
              href: "#faq",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Lead Extrax"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
