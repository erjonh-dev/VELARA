import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Documents() {
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
      <h2>Employee Payslip {id}</h2>
      <p>Viewing the payslip for the employee with ID: {id}</p>

      <div className="mb-3">
        <label htmlFor="uploadPayslip" className="form-label">
          Upload New Payslip:
        </label>
        <input
          type="file"
          className="form-control"
          id="uploadPayslip"
          onChange={handleFileUpload}
        />
      </div>

      <h4>Uploaded Documents:</h4>
      {documents.length === 0 ? (
        <p>No documents uploaded.</p>
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
                Download
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
