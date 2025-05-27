import React from "react";
import blog1 from "../../assets/images/blog1.webp"
import blog2 from "../../assets/images/blog2.webp"
import blog3 from "../../assets/images/blog3.webp"
import blog4 from "../../assets/images/blog4.webp"
import blog5 from "../../assets/images/blog5.webp"
import blog6 from "../../assets/images/blog6.webp"

const blogData = [
  {
    title: "Proper way to apply perfumes 2025",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. Store your odds and ends in a breezy, beach house style with these stylish agora bins! Handcrafted of 100% jute for a natural, casual feel, these baskets are perfect for plants, laundry, toys…",
    image: blog1,
  },
  {
    title: "Top 5 Timeless & Classic Fragrances",
    description:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. Store your odds and ends in a breezy, beach house style with these stylish agora bins! Handcrafted of 100% jute for a natural, casual feel, these baskets are perfect for plants, laundry, toys…",
    image: blog2,
  },
  {
    title: "Our Perfumers’ Picks Of The Top 8",
    description:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. Store your odds and ends in a breezy, beach house style with these stylish agora bins! Handcrafted of 100% jute for a natural, casual feel, these baskets are perfect for plants, laundry, toys…",
    image: blog3,
  },
  {
    title: "Traveling Through Scent with Botanicae",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. Store your odds and ends in a breezy, beach house style with these stylish agora bins! Handcrafted of 100% jute for a natural, casual feel, these baskets are perfect for plants, laundry, toys…",
    image: blog4,
  },
  {
    title: "Guide to Always Smelling Exquisite",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. Store your odds and ends in a breezy, beach house style with these stylish agora bins! Handcrafted of 100% jute for a natural, casual feel, these baskets are perfect for plants, laundry, toys…",
    image: blog5,
  },
  {
    title: "Arome Rose Incense ~ new fragrance",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. Store your odds and ends in a breezy, beach house style with these stylish agora bins! Handcrafted of 100% jute for a natural, casual feel, these baskets are perfect for plants, laundry, toys…",
    image: blog6,
  },
];

export default function Blog() {
  return (
    <div className="px-6 py-10 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Our Latest News Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
