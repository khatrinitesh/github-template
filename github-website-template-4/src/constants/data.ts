import type { MenuIem, Review, Service } from "../interface";

export const services: Service[] = [
  { id: 1, title: "Design", description: "UI/UX Design", icon: "🎨" },
  { id: 2, title: "Development", description: "Web Development", icon: "💻" },
  { id: 3, title: "SEO", description: "SEO Optimization", icon: "📈" },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    content: "Awesome work! Highly recommend.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    content: "Professional and creative team.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Lee",
    content: "Delivered the project on time.",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

export const menuItems: MenuIem[] = [
  {
    id: 1,
    name: "Burger",
    price: "$5",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Pizza",
    price: "$8",
    img: "https://images.unsplash.com/photo-1548365328-4d4efc8372db?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Pasta",
    price: "$7",
    img: "https://images.unsplash.com/photo-1601924571053-6c7f12ec7f69?auto=format&fit=crop&w=400&q=80",
  },
];

export const appMockup =
  "https://images.unsplash.com/photo-1611850093531-6628f5f32a6f?auto=format&fit=crop&w=600&q=80";
