import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import background from "../Components/images/background.png"; // Assurez-vous que le chemin est correct

const Home = () => {
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${background})`, // Correction pour afficher l'image de fond correctement
        backgroundSize: 'cover',  // L'image couvre toute la section
        backgroundPosition: 'center center',  // Centrer l'image à la fois verticalement et horizontalement
        backgroundAttachment: 'fixed', // Fixe l'image en arrière-plan lors du défilement
        transition: 'background 0.8s ease',
      }}
    >
      <div
        className="text-center text-white"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay foncé pour améliorer la lisibilité du texte
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          maxWidth: '500px',
          animation: 'fadeIn 1.5s ease-out',
        }}
      >
        <h1
          className="display-3 font-weight-bold mb-4"
          style={{
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
            fontSize: '3.5rem',
            letterSpacing: '2px',
            transform: 'translateY(-20px)',
            animation: 'slideUp 1s ease-out',
          }}
        >
          Bienvenue sur notre site !
        </h1>
        <p
          className="lead"
          style={{
            fontSize: '1.25rem',
            marginBottom: '30px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            transform: 'translateY(-10px)',
            animation: 'slideUp 1.2s ease-out',
            animationDelay: '0.3s',
          }}
        >
          Découvrez une expérience unique. Profitez de votre visite !
        </p>
        <Button
          variant="light"
          size="lg"
          style={{
            fontSize: '1.1rem',
            padding: '15px 30px',
            borderRadius: '30px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            border: '2px solid #fff',
            transition: 'all 0.3s ease-in-out',
          }}
          onClick={() => window.location.href = "/explore"} // Exemple de lien pour explorer
        >
          Explorez maintenant
        </Button>
      </div>
    </div>
  );
};

export default Home;


