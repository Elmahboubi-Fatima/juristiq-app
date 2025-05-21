
import React, { useState } from 'react';
import './Audience.css';

const Audience = () => {
  const [selectedAudience, setSelectedAudience] = useState(null);

  const audiences = [
    {
      id: 1,
      date: '2025-05-23',
      heure: '09:30',
      titre: 'Audience - Client Karim',
      description: 'Discussion sur litige foncier avec présentation des preuves.',
    },
    {
      id: 2,
      date: '2025-05-24',
      heure: '14:00',
      titre: 'Audience - Mme Laila',
      description: 'Affaire familiale : demande de garde des enfants.',
    },
  ];

  const handleClick = (audience) => {
    setSelectedAudience(audience);
  };

  return (
    <div className="audience-page">
      <div className="audience-header">
        <h1>Audiences Programmées</h1>
        <button className="btn-new">+ Programmer une audience</button>
      </div>

      <div className="audience-content">
        <div className="audience-list">
          <h2>Calendrier de la semaine</h2>
          {audiences.map((aud) => (
            <div
              key={aud.id}
              className={`audience-card ${selectedAudience?.id === aud.id ? 'active' : ''}`}
              onClick={() => handleClick(aud)}
            >
              <div className="audience-date">
                <strong>{aud.date}</strong> à {aud.heure}
              </div>
              <div>{aud.titre}</div>
            </div>
          ))}
        </div>

        <div className="audience-details">
          {selectedAudience ? (
            <>
              <h2>Détails de l'audience</h2>
              <p><strong>Date :</strong> {selectedAudience.date}</p>
              <p><strong>Heure :</strong> {selectedAudience.heure}</p>
              <p><strong>Titre :</strong> {selectedAudience.titre}</p>
              <p><strong>Description :</strong><br />{selectedAudience.description}</p>
            </>
          ) : (
            <p>Sélectionnez une audience pour voir les détails.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Audience;
