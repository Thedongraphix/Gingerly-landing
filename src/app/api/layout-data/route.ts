import { NextResponse } from "next/server";

const headerData = [
    { label: 'About', href: '/#aboutus' },
    { label: 'Features', href: '/#services' },
    { label: 'How It Works', href: '/#work' },
    { label: 'Sectors', href: '/#sectors' },
    { label: 'Benefits', href: '/#benefits' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/contact' },
];

const footerData = {
    brand: {
        name: "Gingerly",
        tagline: "We make recurring payments simple and automatic — so you can focus on growing your business, not chasing payments.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://twitter.com/gingerly_africa"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://linkedin.com/company/gingerly"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://instagram.com/gingerly.africa"
            }
        ]
    },
    sitemap: {
        name: "Platform",
        links: [
            { name: "About", url: "/#aboutus" },
            { name: "Features", url: "/#services" },
            { name: "How It Works", url: "/#work" },
            { name: "Sectors", url: "/#sectors" },
            { name: "Benefits", url: "/#benefits" }
        ]
    },
    otherPages: {
        name: "Resources",
        links: [
            { name: "Contact Us", url: "/contact" },
            { name: "FAQ", url: "/#faq" },
            { name: "Terms of Service", url: "/terms-and-conditions" },
            { name: "Privacy Policy", url: "/privacy-policy" }
        ]
    },
    contactDetails: {
        name: "Contact Us",
        address: "Nairobi, Kenya",
        email: "support@gingerly.africa",
        phone: ""
    },
    copyright: "©2026 Gingerly. All Rights Reserved."
};

export const GET = async () => {
  return NextResponse.json({
    headerData,
    footerData
  });
};
