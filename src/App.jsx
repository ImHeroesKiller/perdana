import React, { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">PT. Perdana Adi Yuda</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#services" className="hover:underline">Layanan</a>
            <a href="#process" className="hover:underline">Proses</a>
            <a href="#clients" className="hover:underline">Klien</a>
            <a href="#contact" className="hover:underline">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Solusi Tenaga Kerja Profesional untuk Bisnis Anda
            </h2>
            <p className="text-lg mb-6">
              Kami memberikan layanan penyedia tenaga kerja terpadu, profesional, dan berkualitas yang sesuai dengan kebutuhan perusahaan Anda.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300">
              Hubungi Kami
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/id/1015/600/400 "
              alt="Perdana Team"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section id="services" className="py-16 bg-white px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Layanan Kami</h2>
          <div className="flex justify-center mb-6 space-x-4">
            <button
              onClick={() => setActiveTab("business")}
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "business"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Business Support
            </button>
            <button
              onClick={() => setActiveTab("recruitment")}
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "recruitment"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Recruitment
            </button>
            <button
              onClick={() => setActiveTab("training")}
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "training"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Training
            </button>
            <button
              onClick={() => setActiveTab("event")}
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "event"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Event Management
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            {activeTab === "business" && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Business Support</h3>
                <p className="mb-4">
                  Kami menyediakan SDM terbaik dan berpengalaman di bidangnya melalui proses rekrutmen dan seleksi yang cepat untuk mendukung operasional bisnis Anda.
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Komunikasi Pemasaran</li>
                  <li>Sales Force</li>
                  <li>Staff Perkantoran</li>
                  <li>Staff Forwarding</li>
                  <li>Staff Administrasi</li>
                  <li>Receptionist</li>
                  <li>Driver</li>
                  <li>DLL</li>
                </ul>
              </div>
            )}

            {activeTab === "recruitment" && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Recruitment</h3>
                <p className="mb-4">
                  Fokus pada pencarian karyawan untuk posisi non-management guna membantu perusahaan menjalankan aturan dan prosedur internal.
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Identifikasi kebutuhan posisi</li>
                  <li>Membuat strategi perekrutan</li>
                  <li>Publikasi lowongan pekerjaan</li>
                  <li>Screening, Test & Interview</li>
                  <li>Shortlist & Offering</li>
                </ul>
              </div>
            )}

            {activeTab === "training" && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Training</h3>
                <p className="mb-4">
                  Menyediakan program pelatihan untuk membangun dan mengembangkan bakat tim Anda dengan instruktur kompeten.
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Inhouse / Exhouse Training</li>
                  <li>Training Skill & Motivation</li>
                  <li>Supervisory Management</li>
                  <li>Outdoor Training (Outbond)</li>
                  <li>Employee Gathering</li>
                </ul>
              </div>
            )}

            {activeTab === "event" && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Event Management</h3>
                <p className="mb-4">
                  Merancang dan melaksanakan setiap event Anda dengan dedikasi tinggi untuk menciptakan pengalaman luar biasa bagi peserta.
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>MICE (Meeting, Incentive, Convention, Exhibition)</li>
                  <li>Brand Activation</li>
                  <li>Product Launching</li>
                  <li>Gathering</li>
                  <li>Sales Promotion Girl/Boy</li>
                  <li>Field of Officer Boy</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Proses Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 text-center">
            {[
              "Recruitment & Assessment",
              "Training",
              "Placement & Service Delivery",
              "Mentoring",
              "Development",
              "Performance Evaluation",
              "Termination or Renewal",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
              >
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  {index + 1}
                </div>
                <p className="text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Events */}
      <section id="clients" className="py-16 bg-white px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Klien & Event Kami</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-40 h-24 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">HKTI</span>
            </div>
            <div className="w-40 h-24 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">IFW</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Kontak Kami</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-4">
              <strong>Alamat:</strong> Plaza Summarecon Bekasi Lt. 7 Jl. Ahmad Yani Bulevar, Sentra Summarecon - Bekasi
            </p>
            <p className="mb-4">
              <strong>Telepon:</strong> +62 852 7222 2277
            </p>
            <p className="mb-6">
              <strong>Email:</strong> admin@perdana.co.id
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                <input type="text" className="w-full border rounded-md p-2" placeholder="Masukkan nama Anda" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full border rounded-md p-2" placeholder="Masukkan email Anda" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Pesan</label>
                <textarea rows="4" className="w-full border rounded-md p-2" placeholder="Tulis pesan Anda..."></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-6 text-center">
        <p>&copy; 2025 PT. Perdana Adi Yuda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
