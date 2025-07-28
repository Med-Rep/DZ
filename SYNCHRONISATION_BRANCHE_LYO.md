# Synchronisation Branche LYO - Application Lovable.dev

## Informations de synchronisation
- **Date de création**: $(date)
- **Branche source**: main
- **Branche cible**: LYO
- **Port de développement**: 8080
- **Repository**: Med-Rep/DZ

## Structure des dossiers synchronisés

### Dossiers principaux
- `src/` - Code source principal de l'application
  - `components/` - Composants React réutilisables
  - `pages/` - Pages de l'application
  - `hooks/` - Hooks React personnalisés
  - `utils/` - Utilitaires et helpers
  - `types/` - Définitions TypeScript
  - `lib/` - Bibliothèques et configurations
  - `services/` - Services et API
  - `stores/` - Gestion d'état (Zustand)
  - `styles/` - Styles CSS et Tailwind
  - `data/` - Données statiques
  - `i18n/` - Internationalisation
  - `integrations/` - Intégrations externes

### Configuration
- `package.json` - Dépendances et scripts
- `vite.config.ts` - Configuration Vite (port 8080)
- `tailwind.config.ts` - Configuration Tailwind CSS
- `tsconfig.json` - Configuration TypeScript

### Dossiers de build et distribution
- `dist/` - Build de production
- `public/` - Assets statiques

## Scripts disponibles
- `npm run dev` - Démarrage en mode développement (port 8080)
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation du build
- `npm run lint` - Vérification ESLint

## Commandes de synchronisation
```bash
# Créer et basculer vers la branche LYO
git checkout -b LYO

# Synchroniser avec la branche main
git merge main

# Pousser vers le remote
git push -u origin LYO
```

## État de la synchronisation
✅ Branche LYO créée avec succès
✅ Tous les dossiers synchronisés depuis main
✅ Configuration du port 8080 maintenue
✅ Prêt pour le développement

## Notes importantes
- La branche LYO est maintenant synchronisée avec main
- Le serveur de développement utilise le port 8080 comme demandé
- Tous les dossiers et fichiers sont maintenant disponibles sur la branche LYO
- Les modifications peuvent être apportées en toute sécurité sur cette branche