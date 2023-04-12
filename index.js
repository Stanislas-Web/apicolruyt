require('dotenv/config')
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(
  // "mongodb+srv://stanislas:0826016607makengo@cluster0.y2jlsju.mongodb.net/?retryWrites=true&w=majority",
  "mongodb+srv://stanislasmakengo1:KID6d3nlG6tmD37c@cluster0.036nc0r.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Express server démarré sur le port ' + port);
});
  