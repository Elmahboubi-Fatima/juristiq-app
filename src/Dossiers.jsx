
import React from 'react';
import './Dossiers.css';

const Dossiers = () => {
  return (
    <div className="dossiers-container">
      <div className="header">
        <h1>Gestion des Dossiers</h1>
        <button className="add-btn">+ Ajouter un dossier</button>
      </div>

      <div className="filters">
        <input type="text" placeholder="🔍 Rechercher un dossier..." />
        <select>
          <option>Tous les statuts</option>
          <option>En cours</option>
          <option>Fermé</option>
        </select>
        <input type="date" />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom du dossier</th>
              <th>Date</th>
              <th>Client</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dossier Zineb</td>
              <td>2025-05-20</td>
              <td>Zineb El Amrani</td>
              <td><span className="badge badge-inprogress">En cours</span></td>
              <td><button className="btn-view">Voir</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dossier Youssef</td>
              <td>2025-05-18</td>
              <td>Youssef Bennani</td>
              <td><span className="badge badge-closed">Fermé</span></td>
              <td><button className="btn-view">Voir</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dossiers;
