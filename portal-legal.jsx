import React, { useState, useEffect } from 'react';

// --- Componentes de Iconos SVG ---
// Iconos con un estilo plano y moderno.

const IconWrapper = ({ children }) => (
    <div className="flex-shrink-0 w-8 h-8 mr-4 text-blue-600">
        {children}
    </div>
);

const ToolboxIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg></IconWrapper>;
const WorkspaceIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM3 10h18"/></svg></IconWrapper>;
const FileEditIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></IconWrapper>;
const BellIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg></IconWrapper>;
const ReportIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></IconWrapper>;
const GavelIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.88 7.88l.001.002m7.24 7.24l.002.002M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg></IconWrapper>;
const UserIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"/></svg></IconWrapper>;
const CalendarIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></IconWrapper>;
const ReceiptIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg></IconWrapper>;
const DocumentIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg></IconWrapper>;
const ScannerIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 18v-2a2 2 0 012-2h10a2 2 0 012 2v2M5 14v-2a2 2 0 012-2h10a2 2 0 012 2v2M3 8h18M5 8v-2a2 2 0 012-2h10a2 2 0 012 2v2"/></svg></IconWrapper>;
const FolderUsersIcon = () => <IconWrapper><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7a2 2 0 01-2-2V6a2 2 0 012-2h3.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H17a2 2 0 012 2v4M12 12a3 3 0 100-6 3 3 0 000 6z"/></svg></IconWrapper>;

// --- Data for Quick Access Cards ---
const accessLinks = [
  // Gestión de Casos Civiles
  {
    category: "Gestión de Casos Civiles",
    title: "Portal de Herramientas",
    description: "Directorio central con todos los recursos: formularios, clientes, agenda.",
    href: "https://ruizdelacruzatencionalcliente.notion.site/portaldeherramientas",
    icon: <ToolboxIcon />
  },
  {
    category: "Gestión de Casos Civiles",
    title: "Espacio de Trabajo Notion",
    description: "Página principal en Notion con accesos directos e información general.",
    href: "https://www.notion.so/ruizdelacruzatencionalcliente/20333299925680bf8afbdf3bcda31891?v=27a33299925680039513000ca20b6d6e",
    icon: <WorkspaceIcon />
  },
  {
    category: "Gestión de Casos Civiles",
    title: "Actualización de Expedientes Civiles",
    description: "Formulario para registrar toda la información relevante de un caso (excepto notificaciones).",
    href: "https://www.notion.so/ruizdelacruzatencionalcliente/27a33299925680428239c3c2a59a69d1",
    icon: <FileEditIcon />
  },
  {
    category: "Gestión de Casos Civiles",
    title: "Registrar Notificaciones",
    description: "Formulario único para el registro de notificaciones oficiales de casos civiles.",
    href: "https://www.notion.so/ruizdelacruzatencionalcliente/27a3329992568065819eebd9d472ffd6",
    icon: <BellIcon />
  },
  {
    category: "Gestión de Casos Civiles",
    title: "Reporte de Incidencia Civil",
    description: "Para situaciones no relacionadas con actualizaciones o notificaciones; incluye solicitud de honorarios.",
    href: "https://www.notion.so/ruizdelacruzatencionalcliente/25833299925680c2860dc3cdee08c4e4",
    icon: <ReportIcon />
  },
  // Gestión de Casos Penales
  {
    category: "Gestión de Casos Penales (Notion)",
    title: "Página Penal",
    description: "Concentra casos, tareas y pago de honorarios exclusivamente en materia penal.",
    href: "https://www.notion.so/P-gina-Penal-27d33299925680e5ab6fedd9f8a04536?source=copy_link",
    icon: <GavelIcon />
  },
  {
    category: "Gestión de Casos Penales (Notion)",
    title: "Reporte Penal",
    description: "Formulario para reportar resultados de casos, tareas y documentos relacionados.",
    href: "https://www.notion.so/ruizdelacruzatencionalcliente/27d3329992568010ac0aee873b5dd0eb",
    icon: <ReportIcon />
  },
  // Recursos Personales
  {
    category: "Recursos Personales",
    title: "Herramientas Lic. Sandra Luz MC.",
    description: "Acceso a la página de herramientas y recursos personales de la Lic. Sandra Luz.",
    href: "https://www.notion.so/LIC-SANDRA-LUZ-MIGUEL-CARRASCO-27a332999256806db633ef519444d53e?source=copy_link",
    icon: <UserIcon />
  },
  {
    category: "Recursos Personales",
    title: "Herramientas Lic. Isabel GC.",
    description: "Acceso a la página de herramientas y recursos personales de la Lic. Isabel.",
    href: "https://www.notion.so/LIC-ISABEL-G-MEZ-CRUZ-27a332999256805ebffadda957e99f58?source=copy_link",
    icon: <UserIcon />
  },
  // Agendamiento
  {
    category: "Agendamiento",
    title: "Agenda de Asistencia Legal",
    description: "Agendar una cita con el Titular del despacho para la firma de un escrito.",
    href: "https://calendar.app.google/92rA151DywWRbWvb9",
    icon: <CalendarIcon />
  },
  {
    category: "Agendamiento",
    title: "Eventos Civiles",
    description: "Audiencias y citas con clientes en la agenda del portal de herramientas.",
    href: "https://ruizdelacruzatencionalcliente.notion.site/portaldeherramientas",
    icon: <CalendarIcon />
  },
  // Formatos y Carpetas
  {
    category: "Formatos y Carpetas (Google Drive)",
    title: "Recibos de Honorarios",
    description: "Formatos oficiales para la expedición de recibos de honorarios.",
    href: "https://drive.google.com/drive/folders/1F4dpC3_tlOb_gYn3gngeQbRxSWjvumH5?usp=drive_link",
    icon: <ReceiptIcon />
  },
  {
    category: "Formatos y Carpetas (Google Drive)",
    title: "Escrito de Petición Rápido",
    description: "Formato para solicitar autorización en un expediente en sede judicial.",
    href: "https://drive.google.com/file/d/1EErUPhsgDxvzD83JmOuoZEmT0_bwEYrj/view?usp=sharing",
    icon: <DocumentIcon />
  },
  {
    category: "Formatos y Carpetas (Google Drive)",
    title: "Scanner Civil",
    description: "Carpeta donde se concentra los documentos escaneados del área civil.",
    href: "https://drive.google.com/drive/folders/1PbJJh6KGJBDqyE92j7hfFaYbrR8eSIvj?usp=drive_link",
    icon: <ScannerIcon />
  },
  {
    category: "Formatos y Carpetas (Google Drive)",
    title: "Drive de Clientes",
    description: "Carpeta oficial con la información individual de cada cliente.",
    href: "https://drive.google.com/drive/folders/1uSFZSjSwTzbySBchaf8GG8ZqYuAL4P6J?usp=drive_link",
    icon: <FolderUsersIcon />
  }
];

// --- React Components ---

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="mb-10 px-4">
            <div className="relative max-w-xl mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>
                <input
                    type="search"
                    className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Buscar herramientas y recursos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Buscar herramientas y recursos"
                />
            </div>
        </div>
    );
};

const QuickAccessCard = ({ icon, title, description, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center p-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:border-blue-400"
      aria-label={`${title}: ${description}`}
    >
      {icon}
      <div className="text-left">
          <h3 className="text-md font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
      </div>
    </a>
  );
};

const Header = () => {
  return (
    <header className="py-6 mb-8 bg-blue-700">
      <div className="container px-4 mx-auto text-center text-white max-w-7xl">
        <h1 className="text-3xl font-bold">
          Portal de Accesos Rápidos
        </h1>
        <p className="text-blue-200">
          Asistencia Legal Ruiz de la Cruz - Equipo Legal
        </p>
      </div>
    </header>
  );
};

// --- Main App Component ---
export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLinks = accessLinks.filter(link => 
    link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedLinks = filteredLinks.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = [];
    }
    acc[link.category].push(link);
    return acc;
  }, {});
  
  const categories = Object.keys(groupedLinks);

  return (
    <div className="min-h-screen font-sans antialiased text-gray-900 bg-gray-50">
      <Header />
      
      <main className="container px-4 mx-auto max-w-7xl">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {categories.length > 0 ? (
            Object.entries(groupedLinks).map(([category, links]) => (
              <section key={category} className="mb-10" aria-labelledby={category.replace(/\s+/g, '-')}>
                <h2 id={category.replace(/\s+/g, '-')} className="mb-4 text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {links.map((link) => (
                    <QuickAccessCard key={link.href} {...link} />
                  ))}
                </div>
              </section>
            ))
        ) : (
            <div className="text-center py-16">
                <p className="text-gray-500">No se encontraron resultados para "<strong>{searchTerm}</strong>".</p>
            </div>
        )}
      </main>

      <footer className="py-6 mt-10 text-center text-gray-500 border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} Asistencia Legal Ruiz de la Cruz. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

// --- Comments for Integration ---
/*
  PWA & Next.js Integration Notes:

  1. PWA (Progressive Web App):
     - To make this a full PWA, you need a `manifest.json` file in your `public` directory and link it in your main HTML file (`<link rel="manifest" href="/manifest.json">`).
     - A service worker file (e.g., `service-worker.js`) is also required in the `public` directory.
  2. Next.js Integration:
     - This `App` component can be directly used as a page in the Next.js `app` router. For example, save this file as `app/page.js`.
     - Tailwind CSS is natively supported by Next.js. Follow the official Next.js + Tailwind CSS setup guide.
     - You might want to wrap this component in a client component (`'use client';`) at the top of the file if using the Next.js `app` router, due to the use of `useState` and `useEffect`.
*/

