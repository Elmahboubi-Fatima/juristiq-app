import React from 'react';


function DashboardContent() {
 
  const dossiers = [
    { id: 1, client: "Ahmed Benali", sujet: "Divorce", statut: "En cours", miseAJour: "2025-05-15" },
    { id: 2, client: "Sara El Fassi", sujet: "Litige immobilier", statut: "En attente", miseAJour: "2025-05-13" },
    { id: 3, client: "Mohamed Zahiri", sujet: "Contrat commercial", statut: "Clos", miseAJour: "2025-05-10" },
  ];

  const agenda = [
    { id: 1, date: "2025-05-18", heure: "10:00", client: "Youssef Idrissi", sujet: "Consultation initiale" },
    { id: 2, date: "2025-05-18", heure: "14:00", client: "Nadia Ouahabi", sujet: "Réunion de suivi" },
    { id: 3, date: "2025-05-19", heure: "09:30", client: "Khalid Mansouri", sujet: "Signature contrat" },
  ];

  return (
    <div className="dashboard-main-content">
      {/* Cartes résumé */}
      <section className="cards">
        <div className="card">
          <h2>Dossiers actifs</h2>
          <p className="number">12</p>
          <p>Nombre total des dossiers en cours</p>
        </div>
        <div className="card">
          <h2>Rendez-vous aujourd’hui</h2>
          <p className="number">{agenda.filter(a => a.date === "2025-05-18").length}</p>
          <p>Consultations planifiées pour aujourd'hui</p>
        </div>
        <div className="card">
          <h2>Nouveaux clients</h2>
          <p className="number">4</p>
          <p>Clients inscrits cette semaine</p>
        </div>
        <div className="card">
          <h2>Tâches en attente</h2>
          <p className="number">7</p>
          <p>Actions à compléter</p>
        </div>
      </section>

      {/* Agenda */}
      <section className="agenda">
        <h2>Agenda des rendez-vous</h2>
        <ul>
          {agenda.map((rdv) => (
            <li key={rdv.id}>
              <strong>{rdv.date} à {rdv.heure} :</strong> {rdv.client} - {rdv.sujet}
            </li>
          ))}
        </ul>
      </section>

      {/* Derniers dossiers */}
      <section className="last-updates">
        <h2>Derniers dossiers mis à jour</h2>
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Sujet</th>
              <th>Statut</th>
              <th>Dernière mise à jour</th>
            </tr>
          </thead>
          <tbody>
            {dossiers.map((dossier) => (
              <tr key={dossier.id}>
                <td>{dossier.client}</td>
                <td>{dossier.sujet}</td>
                <td>{dossier.statut}</td>
                <td>{dossier.miseAJour}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default DashboardContent;
