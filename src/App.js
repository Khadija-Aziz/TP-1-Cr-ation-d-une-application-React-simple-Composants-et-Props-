// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = { nom: 'Khadija', photo: '/user.png' };

  const liste1 = ['Beurre', 'Lait', 'Fromage'];
  const liste2 = ['Mangue', 'Bananes', 'Pastèque'];

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Khadija" />
      <Profil utilisateur={utilisateur} taille={300} />

      <h2>Voitures</h2>
      <Voiture marque="Toyota" modele="Corolla" couleur="Pink" />
      <Voiture marque="BMW" modele="X5" couleur="Vert" />
      <Voiture marque="Renault" modele="Clio" couleur="Blanc" />

      <h2>Liste de courses 1</h2>
      <ListeCourses elements={liste1} />

      <h2>Liste de courses 2</h2>
      <ListeCourses elements={liste2} />
    </div>
  );
}

export default App;
