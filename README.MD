# Ciné Délices

Une plateforme de partage de recettes inspirée par les films et les séries. Construite avec Svelte (frontend) + Express REST API (backend) + PostgreSQL/Sequelize. Fonctionnalités : authentification JWT via cookies httpOnly (avec support du token Bearer), back-office administrateur, intégration TMDB pour les données sur les films.

## Démo en direct

**URL de production :** https://cinedelices-frontend.calmglacier-7bdfaf80.canadacentral.azurecontainerapps.io

## Fonctionnalités

- **Authentification des utilisateurs** - Inscription, connexion, gestion de profil avec tokens JWT
- **Gestion des recettes** - Créer, éditer, supprimer des recettes avec contrôle de propriété
- **Intégration de films** - Parcourir films/séries via l'API TMDB et lier des recettes à ceux-ci
- **Génération de recettes par IA** - Générer des idées de recettes avec l'IA Mistral selon les films sélectionnés
- **Back-office administrateur** - Gérer utilisateurs, recettes, catégories et médias
- **Design réactif** - Interface adaptée aux mobiles

## Stack Technologique

### Frontend
- **Svelte 5** + **Vite** - Framework UI réactif moderne
- **CSS Responsive** - Conception mobile-first

### Backend
- **Node.js 20** + **Express 5** - Serveur API REST
- **Sequelize** + **PostgreSQL** - ORM et base de données

### Infrastructure
- **Docker** - Déploiement conteneurisé
- **Azure Container Apps** - Hébergement en production
- **Azure Container Registry** - Stockage des images Docker
- **Azure Database for PostgreSQL** - Base de données gérée
- **GitHub Actions** - Pipeline CI/CD

## Démarrage Rapide (Développement Local)

### Prérequis
- Node.js 20+
- Docker & Docker Compose
- PostgreSQL (ou utiliser Docker)

### 1. Cloner et Configurer

```bash
git clone https://github.com/cool-machine/cinedelices_simplified.git
cd cinedelices_simplified

### 2. Variables d'environnement

Copiez le fichier d'exemple env et configurez-le :

```bash
cp .env.example .env
```

Variables requises :
```env
# Base de données
DATABASE_URL=postgres://user:password@localhost:5433/cinedelices
DB_HOST=localhost
DB_PORT=5433
DB_NAME=cinedelices
DB_USER=user
DB_PASSWORD=password

# Authentification
JWT_SECRET=votre-cle-secret

# URL du frontend (pour CORS)
FRONTEND_URL=http://localhost:5173

# API TMDB
TMDB_API_KEY=votre-cle-tmdb

# Mistral AI (optionnel, pour la génération de recettes)
MISTRAL_API_KEY=votre-cle-mistral
MISTRAL_MODEL=mistral-small-latest
MISTRAL_API_URL=https://api.mistral.ai/v1/chat/completions
```

### 3. Démarrer avec Docker Compose

```bash
# Démarrer tous les services (base de données, backend, frontend)
docker-compose -f docker-compose.dev.yml up
```

Ou exécuter les services individuellement :

```bash
# Lancer uniquement la base de données
docker-compose -f docker-compose.dev.yml up db

# Backend (dans un autre terminal)
cd backend
npm install
npm run dev

# Frontend (dans un autre terminal)
cd frontend
npm install
npm run dev
```

### 4. Initialiser la base de données

```bash
cd backend
npm run db:migrate
npm run db:seed
```

**Réinitialiser la base de données si nécessaire :**
```bash
npm run db:reset
```

## Structure du projet

```
cinedelices-backend/
│
├── server.js
├── config/
│   └── database.js
├── models/
│   ├── index.js
│   ├── User.js
│   ├── Film.js
│   └── Recipe.js
├── routes/
│   ├── auth.js
│   ├── films.js
│   └── recipes.js
└── middleware/
    └── authMiddleware.js
```

## Points de terminaison de l'API

### Authentification
- `POST /api/v1/auth/register` - Enregistrer un nouvel utilisateur
- `POST /api/v1/auth/login` - Connexion
- `POST /api/v1/auth/logout` - Déconnexion
- `GET /api/v1/auth/me` - Obtenir l'utilisateur actuel

### Recettes
- `GET /api/v1/recipes` - Lister toutes les recettes
- `GET /api/v1/recipes/:id` - Obtenir les détails d'une recette
- `POST /api/v1/recipes` - Créer une recette (authentification requise)
- `PUT /api/v1/recipes/:id` - Mettre à jour une recette (propriétaire seulement)
- `DELETE /api/v1/recipes/:id` - Supprimer une recette (propriétaire seulement)
- `POST /api/v1/recipes/generate` - Génération de recette par IA (authentification requise)

### Films (TMDB)
- `GET /api/v1/tmdb/search?query=...&type=...` - Rechercher des films/séries
- `GET /api/v1/tmdb/:id?type=...` - Obtenir les détails d'un film/d'une série

### Admin
- `GET /api/v1/admin/users` - Lister les utilisateurs (admin seulement)
- `DELETE /api/v1/admin/users/:id` - Supprimer un utilisateur (admin seulement)
- ... (catégories, gestion des médias)

## Tests

```bash
cd backend
npm test # Exécuter tous les tests
npm run test:watch # Mode surveillance
```

Les tests utilisent **Jest** + **Supertest** avec la prise en charge des modules ESM.

## Déploiement

### 


#### Configuration de mise à l'échelle

Pour éliminer les démarrages à froid, définissez un nombre minimum de répliques :

```bash
# Garder au moins 1 réplique en fonctionnement (pas de démarrages à froid)
az containerapp update --name cinedelices-backend --resource-group oclock-resources --min-replicas 1
az containerapp update --name cinedelices-frontend --resource-group oclock-resources --min-replicas 1

# Mettre à l'échelle à zéro lorsqu'elle n'est pas nécessaire (économie de coûts)
az containerapp update --name cinedelices-backend --resource-group oclock-resources --min-replicas 0
az containerapp update --name cinedelices-frontend --resource-group oclock-resources --min-replicas 0
```

### Déploiement manuel

Voir [docs/azure-deployment-guide.md](docs/azure-deployment-guide.md) pour le guide pas à pas de la configuration Azure.

## Documentation

- [Notes de développement](docs/dev-notes.md) - Progression du sprint et décisions techniques
- [Guide de déploiement Azure](docs/azure-deployment-guide.md) - Instructions de configuration du cloud
- [Documentation visuelle](docs/mockup.md) - Captures d'écran, maquettes, vidéo de démonstration

## Comptes par défaut (Développement)

Après l'initialisation de la base de données :

| Rôle | Email | Mot de passe |
|-------|------------------|-------------|
| Admin | admin@test.com | Password123 |
| Utilisateur | user@test.com | Password123 |

## Licence

MIT
