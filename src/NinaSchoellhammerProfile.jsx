import React from 'react';

export default function NinaSchoellhammerProfile() {
  return (
    <div style={{ 
      fontFamily: 'arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff'
    }}>
      {/* Main heading */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ 
              fontSize: '28px', 
              fontWeight: '400', 
              margin: '0 0 4px 0',
              color: '#202124'
            }}>
              Nina SCHOELLHAMMER
            </h1>
            <div style={{ 
              fontSize: '14px', 
              color: '#70757a',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>Étudiante en Informatique • Université Paris-Saclay</span>
            </div>
          </div>
          
          {/* Social links */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a 
              href="https://www.linkedin.com/in/nina-schoellhammer-4a4492330/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#0077b5',
                transition: 'opacity 0.2s',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="https://github.com/forkmango/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#24292e',
                transition: 'opacity 0.2s',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {/* Left side - Images */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px',
            maxWidth: '656px'
          }}>
            {/* Large image - Data Science theme */}
            <div style={{
              gridRow: 'span 2',
              borderRadius: '8px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              aspectRatio: '3/4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '20px',
              color: '#fff'
            }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" style={{ marginBottom: '16px' }}>
                <path d="M3 3v18h18"/>
                <path d="M18 17V9"/>
                <path d="M13 17V5"/>
                <path d="M8 17v-3"/>
              </svg>
              <div style={{ fontSize: '16px', fontWeight: '500', textAlign: 'center' }}>Data Science & IA</div>
            </div>
            
            {/* Top right - Cybersecurity */}
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '15px',
              color: '#fff'
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" style={{ marginBottom: '8px' }}>
                <rect x="5" y="11" width="14" height="10" rx="2"/>
                <path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
              </svg>
              <div style={{ fontSize: '14px', fontWeight: '500', textAlign: 'center' }}>Cybersécurité</div>
            </div>
            
            {/* Bottom right - split */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {/* Networks */}
              <div style={{
                flex: 1,
                borderRadius: '8px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '10px',
                color: '#fff'
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" style={{ marginBottom: '4px' }}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <div style={{ fontSize: '11px', fontWeight: '500', textAlign: 'center' }}>Réseaux</div>
              </div>
              
              {/* Development */}
              <div style={{
                flex: 1,
                borderRadius: '8px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '10px',
                color: '#fff'
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" style={{ marginBottom: '4px' }}>
                  <path d="M16 18l6-6-6-6"/>
                  <path d="M8 6l-6 6 6 6"/>
                </svg>
                <div style={{ fontSize: '11px', fontWeight: '500', textAlign: 'center' }}>Dev</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Info cards */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '320px',
          minWidth: '280px'
        }}>
          {/* Formation card */}
          <div style={{
            backgroundColor: '#e8f0fe',
            borderRadius: '8px',
            padding: '16px',
            border: '1px solid #d2e3fc'
          }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#1967d2',
              marginBottom: '8px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Formation
            </div>
            <div style={{ 
              fontSize: '18px',
              fontWeight: '400',
              color: '#202124',
              marginBottom: '4px'
            }}>
              BUT Informatique 2ème année
            </div>
            <div style={{ 
              fontSize: '14px',
              color: '#5f6368',
              lineHeight: '1.4'
            }}>
              Parcours B : Systèmes et Réseaux
              <br />
              Université Paris-Saclay (IUT d'Orsay)
            </div>
          </div>

          {/* Specializations card */}
          <div style={{
            backgroundColor: '#e8f0fe',
            borderRadius: '8px',
            padding: '16px',
            border: '1px solid #d2e3fc'
          }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#1967d2',
              marginBottom: '8px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              Spécialisations
            </div>
            <div style={{ 
              fontSize: '14px',
              color: '#202124',
              lineHeight: '1.8'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#1967d2', borderRadius: '50%' }}></div>
                Data Science & IA
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#1967d2', borderRadius: '50%' }}></div>
                Cybersécurité
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#1967d2', borderRadius: '50%' }}></div>
                Systèmes et Réseaux
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#1967d2', borderRadius: '50%' }}></div>
                Bases de données
              </div>
            </div>
          </div>

          {/* Contact card */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '16px',
            border: '1px solid #dadce0'
          }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#5f6368',
              marginBottom: '8px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Contact
            </div>
            <div style={{ 
              fontSize: '13px',
              color: '#202124',
              lineHeight: '1.8'
            }}>
              <div style={{ marginBottom: '6px' }}>
                nina.schoellhammer@universite-paris-saclay.fr
              </div>
              <div style={{ marginBottom: '6px' }}>
                +33 (0)6 31 61 33 47
              </div>
              <div style={{ color: '#5f6368' }}>
                Orsay, 91400
              </div>
            </div>
          </div>

          {/* Download CV button */}
          <a 
            href="/3b-nina-schoellhammer.pdf" 
            download="CV_Nina_Schoellhammer.pdf"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#1a73e8',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'background-color 0.2s',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1765cc'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1a73e8'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Télécharger mon CV
          </a>

          {/* Project card */}
          <div style={{
            backgroundColor: '#fef7e0',
            borderRadius: '8px',
            padding: '16px',
            border: '1px solid #fce8b2'
          }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#b8860b',
              marginBottom: '8px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              Projet récent
            </div>
            <div style={{ 
              fontSize: '14px',
              color: '#202124',
              fontWeight: '500',
              marginBottom: '6px'
            }}>
              Plateforme de création de groupes
            </div>
            <div style={{ 
              fontSize: '13px',
              color: '#5f6368',
              lineHeight: '1.4'
            }}>
              Application web (PHP MVC) et bureautique (Java) pour la gestion automatisée de groupes d'étudiants avec base de données et API REST
            </div>
          </div>
        </div>
      </div>

      {/* About section */}
      <div style={{
        marginTop: '24px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '400',
          color: '#202124',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          À propos
        </h2>
        <p style={{
          fontSize: '14px',
          color: '#5f6368',
          lineHeight: '1.6',
          margin: 0
        }}>
          Étudiante en 2ème année de BUT Informatique à l'Université Paris-Saclay, passionnée par la data science, l'intelligence artificielle et la cybersécurité. 
          Actuellement en parcours Systèmes et Réseaux, je développe mes compétences en analyse de données, sécurité des systèmes et développement d'applications. 
          Mon objectif est d'évoluer dans les métiers de la data et de l'IA tout en conservant une expertise technique solide en systèmes et réseaux.
        </p>
      </div>

      {/* Skills section */}
      <div style={{ marginTop: '24px' }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '400',
          color: '#202124',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M2 12h20"/>
            <path d="M17 7l-5 5 5 5"/>
          </svg>
          Compétences techniques
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {/* Programming */}
          <div style={{
            padding: '16px',
            backgroundColor: '#fff',
            border: '1px solid #dadce0',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#202124', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              Programmation
            </div>
            <div style={{ fontSize: '13px', color: '#5f6368', lineHeight: '1.6' }}>
              Python • Java • C++ • C# • C • PHP • JavaScript • SQL
            </div>
          </div>

          {/* Databases & Data */}
          <div style={{
            padding: '16px',
            backgroundColor: '#fff',
            border: '1px solid #dadce0',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#202124', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
              </svg>
              Bases de données & Web sémantique
            </div>
            <div style={{ fontSize: '13px', color: '#5f6368', lineHeight: '1.6' }}>
              Oracle SQL • SQLite • Power BI • RDF • RDFS • Turtle • SPARQL • GeoSPARQL
            </div>
          </div>

          {/* Tools */}
          <div style={{
            padding: '16px',
            backgroundColor: '#fff',
            border: '1px solid #dadce0',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#202124', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              Outils & Environnements
            </div>
            <div style={{ fontSize: '13px', color: '#5f6368', lineHeight: '1.6' }}>
              Git (GitHub, GitLab) • VSCode • IntelliJ • MS Office • MS Excel • PowerPoint
            </div>
          </div>
        </div>
      </div>

      {/* Languages section */}
      <div style={{ marginTop: '24px', marginBottom: '24px' }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '400',
          color: '#202124',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          Langues
        </h2>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#e8f0fe',
            border: '1px solid #d2e3fc',
            borderRadius: '20px',
            fontSize: '14px',
            color: '#1967d2',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect width="24" height="8" fill="#0055A4"/>
              <rect y="8" width="24" height="8" fill="#FFFFFF"/>
              <rect y="16" width="24" height="8" fill="#EF4135"/>
            </svg>
            Français - C2 (Natif)
          </div>
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#e8f0fe',
            border: '1px solid #d2e3fc',
            borderRadius: '20px',
            fontSize: '14px',
            color: '#1967d2',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect width="24" height="24" fill="#012169"/>
              <path d="M0 0l24 24M24 0L0 24" stroke="#FFFFFF" strokeWidth="3"/>
              <path d="M0 0l24 24M24 0L0 24" stroke="#C8102E" strokeWidth="2"/>
              <path d="M12 0v24M0 12h24" stroke="#FFFFFF" strokeWidth="4"/>
              <path d="M12 0v24M0 12h24" stroke="#C8102E" strokeWidth="2.5"/>
            </svg>
            Anglais - C1
          </div>
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#e8f0fe',
            border: '1px solid #d2e3fc',
            borderRadius: '20px',
            fontSize: '14px',
            color: '#1967d2',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect width="24" height="24" fill="#FFFFFF"/>
              <circle cx="12" cy="12" r="5" fill="#BC002D"/>
            </svg>
            Japonais - B2
          </div>
        </div>
      </div>

      {/* Interests section */}
      <div style={{
        marginTop: '24px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '400',
          color: '#202124',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          Centres d'intérêt
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{
            padding: '8px 16px',
            backgroundColor: '#fff',
            border: '1px solid #dadce0',
            borderRadius: '16px',
            fontSize: '13px',
            color: '#5f6368',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
              <polyline points="17 2 12 7 7 2"/>
            </svg>
            Participation à des événements tech (Game Jams)
          </div>
          <div style={{
            padding: '8px 16px',
            backgroundColor: '#fff',
            border: '1px solid #dadce0',
            borderRadius: '16px',
            fontSize: '13px',
            color: '#5f6368',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 6v6"/>
              <path d="m4.2 4.2 4.2 4.2m5.2 5.2 4.2 4.2"/>
              <path d="M1 12h6m6 0h6"/>
              <path d="m4.2 19.8 4.2-4.2m5.2-5.2 4.2-4.2"/>
            </svg>
            Création & design (Nail art)
          </div>
        </div>
      </div>
    </div>
  );
}