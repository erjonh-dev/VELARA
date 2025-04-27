import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Documenti() {
  const { id } = useParams();
  const [documents, setDocuments] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocuments((prevDocuments) => [...prevDocuments, file]);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Cedolino del Dipendente {id}</h2>
      <p>Visualizzazione del cedolino per il dipendente con ID: {id}</p>

      <div className="mb-3">
        <label htmlFor="uploadCedolino" className="form-label">
          Carica nuovo Cedolino:
        </label>
        <input
          type="file"
          className="form-control"
          id="uploadCedolino"
          onChange={handleFileUpload}
        />
      </div>

      <h4>Documenti caricati:</h4>
      {documents.length === 0 ? (
        <p>Nessun documento caricato.</p>
      ) : (
        <ul>
          {documents.map((doc, index) => (
            <li key={index}>
              {doc.name} 
              {' '}
              <a 
                href={URL.createObjectURL(doc)} 
                download={doc.name} 
                className="btn btn-sm btn-secondary ms-2"
              >
                Scarica
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
