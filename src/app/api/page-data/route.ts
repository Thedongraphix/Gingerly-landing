import { NextResponse } from "next/server";

const avatarList = [
  {
    image: "/images/home/avatar_1.jpg",
    title: "Property Agent",
  },
  {
    image: "/images/home/avatar_2.jpg",
    title: "School Admin",
  },
  {
    image: "/images/home/avatar_3.jpg",
    title: "Finance Manager",
  },
  {
    image: "/images/home/avatar_4.jpg",
    title: "SaaS Founder",
  },
];

const brandList = [
  {
    image: "/images/home/brand/brand-icon-1.svg",
    darkImg: "/images/home/brand/brand-darkicon-1.svg",
    title: "Banking Partners",
  },
  {
    image: "/images/home/brand/brand-icon-2.svg",
    darkImg: "/images/home/brand/brand-darkicon-2.svg",
    title: "Mobile Money",
  },
  {
    image: "/images/home/brand/brand-icon-3.svg",
    darkImg: "/images/home/brand/brand-darkicon-3.svg",
    title: "Card Networks",
  },
  {
    image: "/images/home/brand/brand-icon-4.svg",
    darkImg: "/images/home/brand/brand-darkicon-4.svg",
    title: "Telecom Partners",
  },
  {
    image: "/images/home/brand/brand-icon-5.svg",
    darkImg: "/images/home/brand/brand-darkicon-5.svg",
    title: "Payment Rails",
  },
];

const innovationList = [
  {
    icon: "CalendarClock",
    title: "Automatic\nPayment Scheduling",
    description:
      "Set up your billing once, and payments happen on schedule — every week, month, or term. No manual work needed.",
    bg_color: "bg-teal-500/10",
    txt_color: "text-teal-500",
  },
  {
    icon: "CreditCard",
    title: "All Payment Methods\nin One Place",
    description:
      "Accept M-Pesa, bank transfers, and cards all from one dashboard. Your customers pay the way they prefer.",
    bg_color: "bg-sky-400/10",
    txt_color: "text-sky-400",
  },
  {
    icon: "FileCheck",
    title: "Automatic\nPayment Matching",
    description:
      "Every payment is instantly matched to the right customer and invoice. No more spreadsheets or guessing who paid.",
    bg_color: "bg-orange-400/10",
    txt_color: "text-orange-400",
  },
  {
    icon: "RefreshCcw",
    title: "Failed Payment\nRecovery",
    description:
      "When a payment fails, Gingerly automatically retries and sends friendly reminders — so you recover money without lifting a finger.",
    bg_color: "bg-purple-500/10",
    txt_color: "text-purple-500",
  },
  {
    icon: "BarChart3",
    title: "Real-Time\nDashboard & Reports",
    description:
      "See exactly how much you've collected, what's pending, and where your money is — all in a simple, clear dashboard.",
    bg_color: "bg-lime-500/10",
    txt_color: "text-lime-500",
  },
  {
    icon: "Smartphone",
    title: "Cash Collection\nMade Digital",
    description:
      "Your field agents can record cash payments on the spot. Every shilling is tracked and accounted for — no more lost records.",
    bg_color: "bg-rose-500/10",
    txt_color: "text-rose-500",
  },
];

const howItWorksList = [
  {
    step: "01",
    title: "Set Up Your Billing",
    subtitle: "Tell us how you charge",
    description:
      "Add your customers, choose how often to charge them, and set up automatic reminders. Everything runs on its own after that.",
    tags: ["Add Customers", "Set Schedules", "Auto Reminders"],
  },
  {
    step: "02",
    title: "Connect Payment Channels",
    subtitle: "Where payments come in",
    description:
      "Accept payments via M-Pesa, bank transfer, card, or cash through agents — all in one place. Your customers pay however suits them.",
    tags: ["M-Pesa", "Bank & Card", "Agent Collections"],
  },
  {
    step: "03",
    title: "Automatic Matching",
    subtitle: "Where the magic happens",
    description:
      "When money comes in, Gingerly instantly figures out who paid and for what. No spreadsheets, no guessing.",
    tags: ["Smart Matching", "Live Updates", "Error Alerts"],
  },
  {
    step: "04",
    title: "Track Everything",
    subtitle: "See the full picture",
    description:
      "Know exactly how much money is coming in, what's overdue, and when you'll be paid — all from one simple dashboard.",
    tags: ["Settlement", "Cashflow View", "Growth Ready"],
  },
];

const sectorsList = [
  {
    name: "Real Estate & Property",
    description:
      "Collect rent automatically from all your tenants. No more knocking on doors or chasing late payments — money arrives on time, every month.",
    image: "/images/home/onlinePresence/online_img_1.jpg",
  },

  {
    name: "SaaS, Utilities & Memberships",
    description:
      "Automate monthly subscriptions, gym fees, utility bills, and membership dues. Payments happen on schedule with automatic retries if anything fails.",
    image: "/images/home/onlinePresence/online_img_3.jpg",
  },
  {
    name: "Education & Childcare",
    description:
      "Make it easy for parents to pay school fees, transport, and activity costs on time — with flexible digital payment options.",
    image: "/images/home/onlinePresence/online_img_2.jpg",
  },
];

const WebResultTagList = [
  {
    icon: "Eye",
    title: "Visibility",
    color: "bg-teal-500/10 text-teal-500",
  },
  {
    icon: "Zap",
    title: "Automation",
    color: "bg-sky-400/10 text-sky-400",
  },
  {
    icon: "TrendingUp",
    title: "Scale",
    color: "bg-orange-400/10 text-orange-400",
  },
];

const statisticsCounter = [
  {
    title: "Collection Rate",
    count: 95,
    suffix: "%",
  },
  {
    title: "Faster Reconciliation",
    count: 10,
    suffix: "x",
  },
  {
    title: "Revenue Recovered",
    count: 30,
    suffix: "%",
  },
];

const benefitsList = [
  {
    title: "Save Hours Every Week",
    metric: "80%",
    metricLabel:
      "of payments handled automatically — your team only steps in when something unusual happens.",
    description:
      "Stop spending your days chasing invoices. Get back to actually growing your business.",
  },
  {
    title: "Close Your Books Faster",
    metric: "3x",
    metricLabel:
      "faster month-end closing because every payment is already matched and recorded.",
    description:
      "Know exactly how much money you have available, any day of the week.",
  },
  {
    title: "Grow Without Hiring More Staff",
    metric: "2-3x",
    metricLabel: "more customers handled without needing extra staff.",
    description:
      "Your team stays the same size while your business gets bigger.",
  },
  {
    title: "Built to Grow With You",
    metric: "∞",
    metricLabel:
      "Our system grows as you grow — whether you have 10 customers or 10,000.",
    description:
      "Works just as well for a solo agent as it does for a large company.",
  },
  {
    title: "Fewer Disputes, Better Relationships",
    metric: "↓",
    metricLabel:
      "payment disputes resolved quickly because every transaction has a clear record.",
    description:
      "Friendly automatic reminders and clear payment records keep everyone on the same page.",
  },
];

const faqList = [
  {
    faq_que: "What is Gingerly?",
    faq_ans:
      "Gingerly is a platform that automates recurring payments. Instead of chasing people for money or juggling spreadsheets, Gingerly collects payments via M-Pesa, bank transfers, and cards — and keeps everything organised in one place.",
  },
  {
    faq_que: "Who is Gingerly built for?",
    faq_ans:
      "Anyone who collects regular payments — property agents, landlords, schools, gyms, subscription businesses, utilities, and more. Whether you manage 10 tenants or 10,000 subscribers, Gingerly works for you.",
  },
  {
    faq_que: "How does Gingerly handle failed payments?",
    faq_ans:
      "If a payment fails (e.g. not enough funds or a network error), Gingerly automatically tries again and sends a friendly reminder to the customer. You don't have to make a single phone call.",
  },
  {
    faq_que: "What payment methods does Gingerly support?",
    faq_ans:
      "M-Pesa and other mobile money services, bank transfers, card payments, and even cash collected by your field agents. Your customers can pay however works best for them.",
  },
  {
    faq_que: "How does payment matching work?",
    faq_ans:
      "When a payment comes in, Gingerly automatically figures out who it's from and what it's for. Your records update instantly — no need to check bank statements or match payments by hand.",
  },
  {
    faq_que: "Is Gingerly secure?",
    faq_ans:
      "Yes. We use strong encryption to protect all your data, and we only work with licensed, regulated financial partners. Your money and information are safe with us.",
  },
  {
    faq_que: "How quickly can I get started?",
    faq_ans:
      "You can start collecting payments in minutes. Just create an account, add your customers, set up your billing, and you're live. No setup fees, no complicated process. Our team is here to help if you need it.",
  },
  {
    faq_que: "Does Gingerly work for cash collections?",
    faq_ans:
      "Yes! Your field agents can record cash payments on the spot using their phone. The payment shows up in your system right away, so your books are always up to date and every payment is accounted for.",
  },
];

const achievementsList = [
  {
    icon: "ShieldCheck",
    sub_title: "Your Money is Safe",
    title:
      "We use strong encryption and work only with certified, regulated payment partners to keep every transaction safe.",
    tag: "Trust",
    bg_color: "bg-teal-500/10",
    icon_bg: "bg-teal-500/20",
    txt_color: "text-teal-600",
    tag_color: "bg-teal-500/15 text-teal-600",
    hover_border: "hover:border-teal-500/40",
    hover_shadow: "hover:shadow-teal-500/10",
  },
  {
    icon: "Landmark",
    sub_title: "Trusted Payment Partners",
    title:
      "We work with licensed banks, mobile money providers, and payment processors you already know and trust.",
    tag: "Compliance",
    bg_color: "bg-sky-400/10",
    icon_bg: "bg-sky-400/20",
    txt_color: "text-sky-500",
    tag_color: "bg-sky-400/15 text-sky-500",
    hover_border: "hover:border-sky-400/40",
    hover_shadow: "hover:shadow-sky-400/10",
  },
  {
    icon: "Fingerprint",
    sub_title: "Your Data Stays Yours",
    title:
      "You own your data, always. We follow strict privacy practices and you can export or delete your data anytime.",
    tag: "Privacy",
    bg_color: "bg-amber-400/10",
    icon_bg: "bg-amber-400/20",
    txt_color: "text-amber-500",
    tag_color: "bg-amber-500/15 text-amber-600",
    hover_border: "hover:border-amber-400/40",
    hover_shadow: "hover:shadow-amber-400/10",
  },
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    howItWorksList,
    sectorsList,
    WebResultTagList,
    statisticsCounter,
    benefitsList,
    faqList,
    achievementsList,
  });
};
