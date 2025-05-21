import React, { useState } from 'react';
import './RendezVous.css';

const RendezVous = () => {
  const [rendezVousList, setRendezVousList] = useState([
    {
      id: 1,
      client: 'M. Ahmed',
      date: '2025-05-25',
      heure: '10:00',
      type: 'Consultation',
      sujet: 'Conseil juridique général',
    },
    {
      id: 2,
      client: 'Mme Fatima',
      date: '2025-05-26',
      heure: '15:30',
      type: 'Audience',
      sujet: 'Audience au tribunal',
    },
  ]);

  const [formData, setFormData] = useState({
    client: '',
    date: '',
    heure: '',
    type: 'Consultation',
    sujet: '',
  });

  const [errors, setErrors] = useState({});

  // Validation simple
  const validate = () => {
    let tempErrors = {};
    if (!formData.client) tempErrors.client = "Le nom du client est requis";
    if (!formData.date) tempErrors.date = "La date est requise";
    if (!formData.heure) tempErrors.heure = "L'heure est requise";
    if (!formData.sujet) tempErrors.sujet = "Le sujet est requis";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRDV = {
      id: rendezVousList.length + 1,
      ...formData,
    };

    setRendezVousList([...rendezVousList, newRDV]);
    setFormData({client: '', date: '', heure: '', type: 'Consultation', sujet: ''});
    setErrors({});
  };

  // Calcul stats simples
  const totalRDV = rendezVousList.length;
  const countByType = rendezVousList.reduce((acc, rdv) => {
    acc[rdv.type] = (acc[rdv.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="rdv-page">
      <h1>Gestion des Rendez-vous</h1>

      <div className="rdv-container">
        <form className="rdv-form" onSubmit={handleSubmit}>
          <h2>Ajouter un rendez-vous</h2>

          <label>
            Client
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              placeholder="Nom du client"
            />
            {errors.client && <span className="error">{errors.client}</span>}
          </label>

          <label>
            Date
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </label>

          <label>
            Heure
            <input
              type="time"
              name="heure"
              value={formData.heure}
              onChange={handleChange}
            />
            {errors.heure && <span className="error">{errors.heure}</span>}
          </label>

          <label>
            Type de rendez-vous
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="Consultation">Consultation</option>
              <option value="Audience">Audience</option>
              <option value="Suivi">Suivi</option>
            </select>
          </label>

          <label>
            Sujet
            <textarea
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              placeholder="Description du sujet"
            />
            {errors.sujet && <span className="error">{errors.sujet}</span>}
          </label>

          <button type="submit" className="btn-submit">Enregistrer</button>
        </form>

        <div className="rdv-list">
          <h2>Liste des Rendez-vous</h2>
          {rendezVousList.length === 0 ? (
            <p>Aucun rendez-vous programmé.</p>
          ) : (
            rendezVousList.map((rdv) => (
              <div key={rdv.id} className="rdv-item">
                <div><strong>{rdv.client}</strong> ({rdv.type})</div>
                <div>{rdv.date} à {rdv.heure}</div>
                <div>{rdv.sujet}</div>
              </div>
            ))
          )}

          <div className="rdv-stats">
            <h3>Statistiques</h3>
            <p>Total des rendez-vous: <strong>{totalRDV}</strong></p>
            <ul>
              {Object.entries(countByType).map(([type, count]) => (
                <li key={type}>{type}: {count}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RendezVous;
