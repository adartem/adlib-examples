# adlib-examples

📚 Exemples et démonstrations de la bibliothèque **AdLib** (attributs `ad-*`).

Ce repo contient un environnement **Storybook** basé sur React + Vite permettant de visualiser, tester et documenter les attributs `ad-*`.

---

## 🚀 Lancer en local

Assurez-vous d’avoir **Node.js ≥ 18** et **npm** installés.

# Installer les dépendances

npm install

# Lancer Storybook en mode développement

npm run storybook
👉 Storybook sera accessible sur http://localhost:6006.

🏗️ Scripts disponibles
npm run storybook → démarre Storybook en mode développement.

npm run build-storybook → génère la version statique (storybook-static/).

npm run lint → exécute ESLint (vérification du code).

npm run format:check → vérifie le formatage avec Prettier.

npm run test → exécute les tests Jest.

🌐 Démo en ligne
La dernière version stable est automatiquement déployée sur GitHub Pages :

🔗 Voir la démo Storybook

📦 Structure

adlib-examples/
├── .storybook/ # Config Storybook
├── src/stories/ # Exemples et composants de démonstration
├── tests/ # Tests unitaires
└── storybook-static/ # Build statique (généré par CI/CD)

🤝 Contribution
Les contributions sont bienvenues 🎉
Merci de respecter les conventions de code et de passer les CI/CD checks avant toute PR.
