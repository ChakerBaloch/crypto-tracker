"use client";

import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FaHome, FaRedo, FaBars, FaTimes } from "react-icons/fa";
import "@/styles/Sidebar.css"; 

export default function Sidebar() {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.querySelector(".sidebar")?.contains(event.target as Node) &&
        !document.querySelector(".hamburger")?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button in Sidebar */}
      <button className="hamburger" onClick={() => setIsOpen(true)}>
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Dashboard</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <FaTimes size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="nav-list">
          <ul>
            <li className="nav-item active">
              <FaHome /> Home
            </li>
          </ul>
        </nav>

        {/* Refresh Button */}
        <button
          className="refresh-btn"
          onClick={() => {
            queryClient.invalidateQueries({ queryKey: ["cryptoPrices"] });
          }}
        >
          <FaRedo /> Refresh
        </button>
      </div>
    </>
  );
}
