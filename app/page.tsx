"use client";

import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  ExternalLink,
  MapPin,
  Building2,
  ChevronRight,
  Mail,
  Phone,
  FileText,
  Shield,
  ArrowRight,
  Clock,
  TrendingUp,
  BarChart3,
  Users,
  CheckCircle,
} from "lucide-react";

interface Country {
  id: string;
  name: string;
  flag: string;
  capital: string;
  url: string;
  status: "active" | "coming-soon";
  stats?: {
    companies: string;
    growth: string;
  };
}

export default function ERCCMPortal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "active" | "coming-soon"
  >("all");

  const countries: Country[] = [
    {
      id: "benin",
      name: "Bénin",
      flag: "🇧🇯",
      capital: "Porto-Novo",
      url: "https://rccm.bj",
      status: "active",
      stats: { companies: "45,230", growth: "+12%" },
    },
    {
      id: "burkina",
      name: "Burkina Faso",
      flag: "🇧🇫",
      capital: "Ouagadougou",
      url: "https://rccm.bf",
      status: "active",
      stats: { companies: "38,120", growth: "+8%" },
    },
    {
      id: "cameroun",
      name: "Cameroun",
      flag: "🇨🇲",
      capital: "Yaoundé",
      url: "https://rccm.cm",
      status: "active",
      stats: { companies: "89,450", growth: "+15%" },
    },
    {
      id: "centrafrique",
      name: "Centrafrique",
      flag: "🇨🇫",
      capital: "Bangui",
      url: "https://rccm.cf",
      status: "coming-soon",
    },
    {
      id: "comores",
      name: "Comores",
      flag: "🇰🇲",
      capital: "Moroni",
      url: "https://rccm.km",
      status: "coming-soon",
    },
    {
      id: "congo",
      name: "Congo",
      flag: "🇨🇬",
      capital: "Brazzaville",
      url: "https://rccm.cg",
      status: "active",
      stats: { companies: "28,340", growth: "+6%" },
    },
    {
      id: "rdc",
      name: "RD Congo",
      flag: "🇨🇩",
      capital: "Kinshasa",
      url: "https://rccm.cd",
      status: "active",
      stats: { companies: "67,890", growth: "+18%" },
    },
    {
      id: "gabon",
      name: "Gabon",
      flag: "🇬🇦",
      capital: "Libreville",
      url: "https://rccm.ga",
      status: "active",
      stats: { companies: "34,120", growth: "+10%" },
    },
    {
      id: "guinee",
      name: "Guinée",
      flag: "🇬🇳",
      capital: "Conakry",
      url: "https://rccm.gn",
      status: "coming-soon",
    },
    {
      id: "guinee-bissau",
      name: "Guinée-Bissau",
      flag: "🇬🇼",
      capital: "Bissau",
      url: "https://rccm.gw",
      status: "coming-soon",
    },
    {
      id: "guinee-eq",
      name: "Guinée Équatoriale",
      flag: "🇬🇶",
      capital: "Malabo",
      url: "https://rccm.gq",
      status: "coming-soon",
    },
    {
      id: "cote-ivoire",
      name: "Côte d'Ivoire",
      flag: "🇨🇮",
      capital: "Yamoussoukro",
      url: "https://rccm.ci",
      status: "active",
      stats: { companies: "76,540", growth: "+14%" },
    },
    {
      id: "mali",
      name: "Mali",
      flag: "🇲🇱",
      capital: "Bamako",
      url: "https://rccm.ml",
      status: "active",
      stats: { companies: "42,890", growth: "+9%" },
    },
    {
      id: "niger",
      name: "Niger",
      flag: "🇳🇪",
      capital: "Niamey",
      url: "https://rccm.ne",
      status: "active",
      stats: { companies: "31,670", growth: "+7%" },
    },
    {
      id: "senegal",
      name: "Sénégal",
      flag: "🇸🇳",
      capital: "Dakar",
      url: "https://rccm.sn",
      status: "active",
      stats: { companies: "93,210", growth: "+16%" },
    },
    {
      id: "tchad",
      name: "Tchad",
      flag: "🇹🇩",
      capital: "N'Djamena",
      url: "https://rccm.td",
      status: "active",
      stats: { companies: "26,450", growth: "+5%" },
    },
    {
      id: "togo",
      name: "Togo",
      flag: "🇹🇬",
      capital: "Lomé",
      url: "https://rccm.tg",
      status: "active",
      stats: { companies: "38,920", growth: "+11%" },
    },
  ];

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = searchQuery.trim()
      ? country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesFilter =
      selectedFilter === "all" || country.status === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  const activeCount = countries.filter((c) => c.status === "active").length;
  const comingSoonCount = countries.filter(
    (c) => c.status === "coming-soon"
  ).length;

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        body {
          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
          line-height: 1.2;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>

      {/* TOP BAR */}
      <div className="bg-[#003D7A] text-white py-2 text-xs">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Clock size={12} />
              <span>Lun - Ven : 8h - 18h</span>
            </span>
            <span className="hidden md:inline">
              Support technique disponible
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">
              Aide
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              FR
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-12">
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-black text-[#003D7A]">
                  eRCCM<span className="text-[#E63946]">.</span>
                </div>
                <div className="hidden md:block h-8 w-px bg-gray-300"></div>
                <div className="hidden md:block text-xs text-gray-600 font-medium">
                  Espace OHADA
                </div>
              </div>

              <nav className="hidden lg:flex items-center space-x-8">
                <a
                  href="#search"
                  className="text-sm font-medium text-gray-700 hover:text-[#003D7A] transition-colors"
                >
                  Rechercher
                </a>
                <a
                  href="#countries"
                  className="text-sm font-medium text-gray-700 hover:text-[#003D7A] transition-colors"
                >
                  Pays membres
                </a>
                <a
                  href="#services"
                  className="text-sm font-medium text-gray-700 hover:text-[#003D7A] transition-colors"
                >
                  Nos services
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium text-gray-700 hover:text-[#003D7A] transition-colors"
                >
                  À propos
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-sm font-medium text-gray-700 hover:text-[#003D7A] transition-colors">
                Espace Pro
              </button>
              <button className="bg-[#E63946] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#d62839] transition-colors">
                Accès direct
              </button>

              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-2xl font-black text-[#003D7A]">
                  eRCCM<span className="text-[#E63946]">.</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-2">
                <a
                  href="#search"
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rechercher
                </a>
                <a
                  href="#countries"
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pays membres
                </a>
                <a
                  href="#services"
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nos services
                </a>
                <a
                  href="#about"
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À propos
                </a>
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href="#"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                  >
                    Espace Pro
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#003D7A] to-[#0055A5] text-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-1 w-12 bg-[#E63946]"></div>
              <span className="text-sm font-semibold tracking-wide uppercase">
                Registre de Commerce
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              Accédez aux données
              <br />
              officielles du RCCM
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              Consultez les informations des entreprises immatriculées dans les
              17 pays de l'espace OHADA. Recherche rapide, données certifiées,
              accès direct aux portails nationaux.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#E63946] text-white px-8 py-4 text-sm font-bold hover:bg-[#d62839] transition-all flex items-center space-x-2">
                <Search size={20} />
                <span>Rechercher une entreprise</span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-sm font-bold hover:bg-white/20 transition-all border border-white/20">
                Découvrir les services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-black text-[#003D7A] mb-1">17</div>
              <div className="text-sm text-gray-600 font-medium">
                Pays membres
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#003D7A] mb-1">
                {activeCount}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Portails actifs
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#003D7A] mb-1">
                712K+
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Entreprises enregistrées
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#E63946] mb-1">
                +12%
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Croissance annuelle
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTER SECTION */}
      <section id="search" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Sélectionnez un pays
            </h2>

            <div className="bg-white border border-gray-200 shadow-sm p-6 mb-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Rechercher un pays ou une capitale..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-[#003D7A] transition-colors text-sm"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedFilter("all")}
                    className={`px-5 py-3 text-sm font-semibold transition-all ${
                      selectedFilter === "all"
                        ? "bg-[#003D7A] text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:border-[#003D7A]"
                    }`}
                  >
                    Tous ({countries.length})
                  </button>
                  <button
                    onClick={() => setSelectedFilter("active")}
                    className={`px-5 py-3 text-sm font-semibold transition-all ${
                      selectedFilter === "active"
                        ? "bg-[#003D7A] text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:border-[#003D7A]"
                    }`}
                  >
                    Actifs ({activeCount})
                  </button>
                  <button
                    onClick={() => setSelectedFilter("coming-soon")}
                    className={`px-5 py-3 text-sm font-semibold transition-all ${
                      selectedFilter === "coming-soon"
                        ? "bg-[#003D7A] text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:border-[#003D7A]"
                    }`}
                  >
                    Prochains ({comingSoonCount})
                  </button>
                </div>
              </div>
            </div>

            {searchQuery && (
              <div className="text-sm text-gray-600 mb-4">
                <strong>{filteredCountries.length}</strong> résultat
                {filteredCountries.length > 1 ? "s" : ""} trouvé
                {filteredCountries.length > 1 ? "s" : ""}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COUNTRIES TABLE */}
      <section id="countries" className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {filteredCountries.length > 0 ? (
              <div className="bg-white border border-gray-200 overflow-hidden">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">
                          Pays
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">
                          Capitale
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">
                          Entreprises
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">
                          Croissance
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">
                          Statut
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wide">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredCountries.map((country) => (
                        <tr
                          key={country.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <span className="text-3xl">{country.flag}</span>
                              <span className="font-semibold text-gray-900">
                                {country.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin size={14} className="mr-1" />
                              {country.capital}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {country.stats ? (
                              <span className="text-sm font-semibold text-gray-900">
                                {country.stats.companies}
                              </span>
                            ) : (
                              <span className="text-sm text-gray-400">—</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {country.stats ? (
                              <span className="inline-flex items-center text-sm font-semibold text-green-600">
                                <TrendingUp size={14} className="mr-1" />
                                {country.stats.growth}
                              </span>
                            ) : (
                              <span className="text-sm text-gray-400">—</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {country.status === "active" ? (
                              <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-200">
                                <CheckCircle size={12} className="mr-1" />
                                Actif
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200">
                                <Clock size={12} className="mr-1" />
                                Prochainement
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-right">
                            {country.status === "active" ? (
                              <a
                                href={country.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-bold text-[#E63946] hover:text-[#d62839] transition-colors"
                              >
                                Accéder
                                <ExternalLink size={14} className="ml-1" />
                              </a>
                            ) : (
                              <span className="text-sm text-gray-400">
                                Non disponible
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden divide-y divide-gray-200">
                  {filteredCountries.map((country) => (
                    <div key={country.id} className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{country.flag}</span>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {country.name}
                            </div>
                            <div className="flex items-center text-xs text-gray-600 mt-0.5">
                              <MapPin size={12} className="mr-1" />
                              {country.capital}
                            </div>
                          </div>
                        </div>
                        {country.status === "active" ? (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-200">
                            Actif
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200">
                            Prochain
                          </span>
                        )}
                      </div>

                      {country.stats && (
                        <div className="flex items-center gap-4 text-xs mb-3">
                          <span className="text-gray-600">
                            <strong className="text-gray-900">
                              {country.stats.companies}
                            </strong>{" "}
                            entreprises
                          </span>
                          <span className="text-green-600 font-semibold">
                            {country.stats.growth}
                          </span>
                        </div>
                      )}

                      {country.status === "active" && (
                        <a
                          href={country.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-[#E63946] text-white px-4 py-2.5 text-sm font-bold hover:bg-[#d62839] transition-colors"
                        >
                          Accéder au portail
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-white border border-gray-200">
                <Search className="mx-auto mb-4 text-gray-300" size={48} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Aucun résultat
                </h3>
                <p className="text-sm text-gray-600">
                  Essayez avec un autre terme de recherche
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-12">
              Nos services
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-8 hover:border-[#003D7A] transition-all group">
                <div className="w-14 h-14 bg-[#003D7A] text-white flex items-center justify-center mb-6 group-hover:bg-[#E63946] transition-colors">
                  <Building2 size={28} />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3">
                  Recherche d'entreprises
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Consultez les informations officielles des entreprises
                  immatriculées au RCCM
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-bold text-[#003D7A] group-hover:text-[#E63946]"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>

              <div className="bg-white border border-gray-200 p-8 hover:border-[#003D7A] transition-all group">
                <div className="w-14 h-14 bg-[#003D7A] text-white flex items-center justify-center mb-6 group-hover:bg-[#E63946] transition-colors">
                  <FileText size={28} />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3">
                  Documents officiels
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Commandez des extraits K-bis, statuts et autres documents
                  certifiés
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-bold text-[#003D7A] group-hover:text-[#E63946]"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>

              <div className="bg-white border border-gray-200 p-8 hover:border-[#003D7A] transition-all group">
                <div className="w-14 h-14 bg-[#003D7A] text-white flex items-center justify-center mb-6 group-hover:bg-[#E63946] transition-colors">
                  <BarChart3 size={28} />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3">
                  Surveillance
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Surveillez les modifications juridiques et financières des
                  entreprises
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-bold text-[#003D7A] group-hover:text-[#E63946]"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-1 w-12 bg-[#E63946]"></div>
                  <span className="text-sm font-semibold text-[#003D7A] tracking-wide uppercase">
                    À propos
                  </span>
                </div>

                <h2 className="text-3xl font-black text-gray-900 mb-6">
                  Le RCCM dans l'espace OHADA
                </h2>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Le Registre de Commerce et du Crédit Mobilier (RCCM) est
                  l'instrument juridique central de publicité légale des
                  entreprises dans les 17 pays membres de l'OHADA. Il garantit
                  la transparence et la sécurité des transactions commerciales.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#E63946] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">
                        Immatriculation obligatoire
                      </div>
                      <div className="text-xs text-gray-600">
                        Pour toute personne physique ou morale exerçant une
                        activité commerciale
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#E63946] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">
                        Numéro unique d'identification
                      </div>
                      <div className="text-xs text-gray-600">
                        Attribution d'un numéro RCCM valable dans tout l'espace
                        OHADA
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#E63946] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">
                        Sécurité juridique
                      </div>
                      <div className="text-xs text-gray-600">
                        Protection des tiers et publicité des actes commerciaux
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-bold text-[#E63946] hover:text-[#d62839]"
                  >
                    En savoir plus sur l'OHADA
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-100 p-8 border-l-4 border-[#003D7A]">
                  <div className="mb-6">
                    <div className="text-4xl font-black text-[#003D7A] mb-2">
                      712,340
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Entreprises immatriculées
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-semibold text-gray-700">
                          Sociétés
                        </span>
                        <span className="font-bold text-gray-900">68%</span>
                      </div>
                      <div className="h-2 bg-gray-200 overflow-hidden">
                        <div
                          className="h-full bg-[#003D7A]"
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-semibold text-gray-700">
                          Entreprises individuelles
                        </span>
                        <span className="font-bold text-gray-900">24%</span>
                      </div>
                      <div className="h-2 bg-gray-200 overflow-hidden">
                        <div
                          className="h-full bg-[#E63946]"
                          style={{ width: "24%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-semibold text-gray-700">
                          Autres formes
                        </span>
                        <span className="font-bold text-gray-900">8%</span>
                      </div>
                      <div className="h-2 bg-gray-200 overflow-hidden">
                        <div
                          className="h-full bg-gray-400"
                          style={{ width: "8%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">
                        Croissance annuelle moyenne
                      </span>
                      <span className="text-lg font-black text-green-600">
                        +12.3%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#003D7A] text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-4">
              Besoin d'informations sur une entreprise ?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Accédez instantanément aux données officielles du registre de
              commerce
            </p>
            <button className="bg-[#E63946] text-white px-10 py-4 text-sm font-bold hover:bg-[#d62839] transition-all inline-flex items-center space-x-2">
              <Search size={20} />
              <span>Lancer une recherche</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-2xl font-black text-white mb-4">
                  eRCCM<span className="text-[#E63946]">.</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Portail d'accès aux registres de commerce des pays membres de
                  l'OHADA.
                </p>
                <div className="text-xs text-gray-500">
                  © 2025 eRCCM - Tous droits réservés
                </div>
              </div>

              <div>
                <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-wide">
                  Navigation
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Rechercher
                    </a>
                  </li>
                  <li>
                    <a
                      href="#countries"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Pays membres
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Nos services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      À propos
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-wide">
                  Services
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Recherche entreprise
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Documents officiels
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Surveillance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      API Développeurs
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-wide">
                  Contact
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2 text-gray-400">
                    <Mail
                      size={16}
                      className="text-[#E63946] mt-0.5 flex-shrink-0"
                    />
                    <a
                      href="mailto:contact@erccm.africa"
                      className="hover:text-white transition-colors"
                    >
                      contact@erccm.africa
                    </a>
                  </li>
                  <li className="flex items-start space-x-2 text-gray-400">
                    <Phone
                      size={16}
                      className="text-[#E63946] mt-0.5 flex-shrink-0"
                    />
                    <span>+229 XX XX XX XX</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-sm font-bold text-[#E63946] hover:text-[#d62839] inline-flex items-center"
                  >
                    Centre d'aide
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <div className="flex gap-6">
                  <a href="#" className="hover:text-white transition-colors">
                    Mentions légales
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Politique de confidentialité
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    CGU
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span>Données certifiées OHADA</span>
                  <Shield size={16} className="text-[#E63946]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
