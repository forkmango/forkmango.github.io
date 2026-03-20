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
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>📊</div>
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
              <div style={{ fontSize: '36px', marginBottom: '5px' }}>🔒</div>
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
                <div style={{ fontSize: '28px', marginBottom: '5px' }}>🌐</div>
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
                <div style={{ fontSize: '28px', marginBottom: '5px' }}>💻</div>
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
              fontWeight: '500'
            }}>
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
              fontWeight: '500'
            }}>
              Spécialisations
            </div>
            <div style={{ 
              fontSize: '14px',
              color: '#202124',
              lineHeight: '1.6'
            }}>
              • Data Science & IA
              <br />
              • Cybersécurité
              <br />
              • Systèmes et Réseaux
              <br />
              • Bases de données
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
              fontWeight: '500'
            }}>
              Contact
            </div>
            <div style={{ 
              fontSize: '13px',
              color: '#202124',
              lineHeight: '1.6'
            }}>
              📧 nina.schoellhammer@universite-paris-saclay.fr
              <br />
              📱 +33 (0)6 31 61 33 47
              <br />
              📍 Orsay, 91400
            </div>
          </div>

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
              fontWeight: '500'
            }}>
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
          marginBottom: '12px'
        }}>
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
          marginBottom: '16px'
        }}>
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
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#202124', marginBottom: '8px' }}>
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
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#202124', marginBottom: '8px' }}>
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
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#202124', marginBottom: '8px' }}>
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
          marginBottom: '16px'
        }}>
          Langues
        </h2>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#e8f0fe',
            border: '1px solid #d2e3fc',
            borderRadius: '20px',
            fontSize: '14px',
            color: '#1967d2'
          }}>
            🇫🇷 Français - C2 (Natif)
          </div>
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#e8f0fe',
            border: '1px solid #d2e3fc',
            borderRadius: '20px',
            fontSize: '14px',
            color: '#1967d2'
          }}>
            🇬🇧 Anglais - C1
          </div>
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#e8f0fe',
            border: '1px solid #d2e3fc',
            borderRadius: '20px',
            fontSize: '14px',
            color: '#1967d2'
          }}>
            🇯🇵 Japonais - B2
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
          marginBottom: '12px'
        }}>
          Centres d'intérêt
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{
            padding: '8px 16px',
            backgroundColor: '#fff',
            border: '1px solid #dadce0',
            borderRadius: '16px',
            fontSize: '13px',
            color: '#5f6368'
          }}>
            🎮 Participation à des événements tech (Game Jams)
          </div>
          <div style={{
            padding: '8px 16px',
            backgroundColor: '#fff',
            border: '1px solid #dadce0',
            borderRadius: '16px',
            fontSize: '13px',
            color: '#5f6368'
          }}>
            🎨 Création & design (Nail art)
          </div>
        </div>
      </div>
    </div>
  );
}