
import { FaHeart, FaGem, FaCrown } from 'react-icons/fa';

export const plansData = [
  {
    icon: <FaHeart size={20} color="#ff5722" />,
    name: "BASIC PLAN",
    price: "25",
    features: [
      "2 hours of exercises",
      "Free consultation to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: <FaGem size={24} color="#3f51b5" />,
    name: "PREMIUM PLAN",
    price: "30",
    features: [
      "5 hours of exercises",
      "Free consultation of Coaches",
      "Access to minibar",
    ],
  },
  {
    icon: <FaCrown size={20} color="#ffc107" />,
    name: "PRO PLAN",
    price: "45",
    features: [
      "8 hours of exercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandise",
    ],
  },
];
