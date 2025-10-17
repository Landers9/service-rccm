"use client";

import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  ExternalLink,
  MapPin,
  Globe,
  Building2,
  ChevronRight,
  Mail,
  Phone,
  FileText,
  Shield,
  Users,
  Scale,
} from "lucide-react";

interface Country {
  id: string;
  name: string;
  flag: string;
  capital: string;
  url: string;
  status: "active" | "coming-soon";
}

export default function ERCCMPortal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countries: Country[] = [
    {
      id: "benin",
      name: "Bénin",
      flag: "🇧🇯",
      capital: "Porto-Novo",
      url: "https://rccm.bj",
      status: "active",
    },
    {
      id: "burkina",
      name: "Burkina Faso",
      flag: "🇧🇫",
      capital: "Ouagadougou",
      url: "https://rccm.bf",
      status: "active",
    },
    {
      id: "cameroun",
      name: "Cameroun",
      flag: "🇨🇲",
      capital: "Yaoundé",
      url: "https://rccm.cm",
      status: "active",
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
    },
    {
      id: "rdc",
      name: "RD Congo",
      flag: "🇨🇩",
      capital: "Kinshasa",
      url: "https://rccm.cd",
      status: "active",
    },
    {
      id: "gabon",
      name: "Gabon",
      flag: "🇬🇦",
      capital: "Libreville",
      url: "https://rccm.ga",
      status: "active",
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
    },
    {
      id: "mali",
      name: "Mali",
      flag: "🇲🇱",
      capital: "Bamako",
      url: "https://rccm.ml",
      status: "active",
    },
    {
      id: "niger",
      name: "Niger",
      flag: "🇳🇪",
      capital: "Niamey",
      url: "https://rccm.ne",
      status: "active",
    },
    {
      id: "senegal",
      name: "Sénégal",
      flag: "🇸🇳",
      capital: "Dakar",
      url: "https://rccm.sn",
      status: "active",
    },
    {
      id: "tchad",
      name: "Tchad",
      flag: "🇹🇩",
      capital: "N'Djamena",
      url: "https://rccm.td",
      status: "active",
    },
    {
      id: "togo",
      name: "Togo",
      flag: "🇹🇬",
      capital: "Lomé",
      url: "https://rccm.tg",
      status: "active",
    },
  ];

  const filteredCountries = searchQuery.trim()
    ? countries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          country.capital.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : countries;

  const activeCountries = filteredCountries.filter(
    (c) => c.status === "active"
  );
  const comingSoonCountries = filteredCountries.filter(
    (c) => c.status === "coming-soon"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        body {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #059669, #10b981);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #047857, #059669);
        }
      `}</style>

      {/* HEADER */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <FileText className="text-white" size={22} />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  eRCCM
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Espace OHADA
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#countries"
                className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 font-medium text-sm"
              >
                Pays membres
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 font-medium text-sm"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 font-medium text-sm"
              >
                Contact
              </a>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm font-medium">
                Documentation
              </button>
            </nav>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Sidebar */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              ></div>

              {/* Sidebar */}
              <div className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 md:hidden animate-slide-in-right">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                        <FileText className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          eRCCM
                        </div>
                        <div className="text-xs text-gray-500">
                          Espace OHADA
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <nav className="flex flex-col space-y-1">
                    <a
                      href="#countries"
                      className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all px-4 py-3 rounded-lg font-medium text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Globe size={18} />
                      <span>Pays membres</span>
                    </a>
                    <a
                      href="#about"
                      className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all px-4 py-3 rounded-lg font-medium text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FileText size={18} />
                      <span>À propos</span>
                    </a>
                    <a
                      href="#contact"
                      className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all px-4 py-3 rounded-lg font-medium text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Mail size={18} />
                      <span>Contact</span>
                    </a>
                    <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg text-sm font-medium mt-4 hover:shadow-lg transition-all">
                      <FileText size={18} />
                      <span>Documentation</span>
                    </button>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-16 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA1OTY2OSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-emerald-200 shadow-sm mb-6">
                <Scale className="text-emerald-600" size={18} />
                <span className="text-sm font-medium text-gray-700">
                  Registre de Commerce et du Crédit Mobilier
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Accédez aux portails
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  RCCM de l'OHADA
                </span>
              </h1>

              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Consultez les registres du commerce de 17 pays membres de
                l'Organisation pour l'Harmonisation en Afrique du Droit des
                Affaires. Accès direct aux portails nationaux en un clic.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-emerald-100 shadow-sm">
                  <Building2 className="text-emerald-600" size={18} />
                  <span className="text-sm font-medium text-gray-700">
                    17 Pays membres
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-emerald-100 shadow-sm">
                  <Shield className="text-emerald-600" size={18} />
                  <span className="text-sm font-medium text-gray-700">
                    Accès sécurisé
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-emerald-100 shadow-sm">
                  <Users className="text-emerald-600" size={18} />
                  <span className="text-sm font-medium text-gray-700">
                    Harmonisation juridique
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-float hidden lg:block">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop"
                  alt="OHADA Business"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-emerald-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                        <Scale className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          OHADA
                        </div>
                        <div className="text-xs text-gray-600">
                          17 États membres
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors"
                size={20}
              />
              <input
                type="text"
                placeholder="Rechercher un pays..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-all duration-300 text-gray-700 text-sm shadow-md"
              />
            </div>
            {searchQuery && (
              <div className="mt-3 text-sm text-gray-500 text-center">
                {filteredCountries.length} pays trouvé
                {filteredCountries.length > 1 ? "s" : ""}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COUNTRIES GRID */}
      <section id="countries" className="pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Active Countries */}
          {activeCountries.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
                <span className="inline-flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full mr-3"></div>
                  Portails actifs
                </span>
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {activeCountries.map((country, index) => (
                  <a
                    key={country.id}
                    href={country.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-lg border-2 border-gray-200 hover:border-emerald-500 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    onMouseEnter={() => setHoveredCountry(country.id)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{country.flag}</div>
                      <div
                        className={`w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          hoveredCountry === country.id ? "bg-emerald-600" : ""
                        }`}
                      >
                        <ExternalLink
                          className={`transition-colors ${
                            hoveredCountry === country.id
                              ? "text-white"
                              : "text-emerald-600"
                          }`}
                          size={16}
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {country.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <MapPin size={14} className="mr-1" />
                      {country.capital}
                    </div>

                    <div className="flex items-center text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
                      <span>Accéder au portail</span>
                      <ChevronRight
                        size={16}
                        className={`ml-1 transition-transform ${
                          hoveredCountry === country.id ? "translate-x-1" : ""
                        }`}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Coming Soon Countries */}
          {comingSoonCountries.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
                <span className="inline-flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full mr-3"></div>
                  Bientôt disponibles
                </span>
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {comingSoonCountries.map((country, index) => (
                  <div
                    key={country.id}
                    className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-6 opacity-60"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl grayscale">{country.flag}</div>
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <FileText className="text-amber-600" size={16} />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {country.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <MapPin size={14} className="mr-1" />
                      {country.capital}
                    </div>

                    <div className="inline-flex items-center text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      En cours de déploiement
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredCountries.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun pays trouvé
              </h3>
              <p className="text-gray-500 text-sm">
                Essayez avec un autre terme de recherche
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop"
                  alt="OHADA Legal Framework"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-white">
                    <div className="text-3xl font-bold mb-2">17</div>
                    <div className="text-sm opacity-90">
                      États membres de l'OHADA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-emerald-50 px-4 py-1.5 rounded-lg mb-4 border border-emerald-200">
                <span className="text-emerald-700 font-semibold text-xs uppercase tracking-wide">
                  À propos du RCCM
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Qu'est-ce que le <span className="text-emerald-600">RCCM</span>{" "}
                ?
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Le Registre de Commerce et du Crédit Mobilier (RCCM) est un
                registre public qui recense toutes les entreprises commerciales
                et les garanties mobilières dans l'espace OHADA. Il permet
                d'assurer la transparence et la sécurité juridique des
                transactions commerciales.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Immatriculation
                    </h3>
                    <p className="text-sm text-gray-600">
                      Enregistrement officiel des entreprises commerciales
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Sécurité juridique
                    </h3>
                    <p className="text-sm text-gray-600">
                      Protection des droits et garanties mobilières
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Harmonisation
                    </h3>
                    <p className="text-sm text-gray-600">
                      Uniformité du droit des affaires en Afrique
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-gray-900 text-white pt-14 pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <FileText className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-lg font-bold">eRCCM</div>
                  <div className="text-xs text-gray-400">Espace OHADA</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Portail d'accès aux registres de commerce des pays membres de
                l'OHADA.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-4">Navigation</h3>
              <ul className="space-y-2.5">
                {["Pays membres", "Documentation", "Guides", "FAQ"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-4">Ressources</h3>
              <ul className="space-y-2.5">
                {["Textes OHADA", "Procédures", "Formulaires", "Support"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start space-x-3">
                  <Mail
                    size={18}
                    className="text-emerald-500 mt-0.5 flex-shrink-0"
                  />
                  <a
                    href="mailto:contact@erccm.africa"
                    className="hover:text-white transition-colors"
                  >
                    contact@erccm.africa
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone
                    size={18}
                    className="text-emerald-500 mt-0.5 flex-shrink-0"
                  />
                  <span>+229 XX XX XX XX</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe
                    size={18}
                    className="text-emerald-500 mt-0.5 flex-shrink-0"
                  />
                  <span>www.erccm.africa</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-400 text-center lg:text-left">
                © 2025 eRCCM - Espace OHADA. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mentions légales
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
