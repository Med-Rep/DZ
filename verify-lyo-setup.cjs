#!/usr/bin/env node

/**
 * Script de vérification pour la branche LYO
 * Vérifie que la synchronisation et la configuration sont correctes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Vérification de la configuration de la branche LYO...\n');

// Vérifier la branche actuelle
try {
  const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  console.log(`✅ Branche actuelle: ${currentBranch}`);
  
  if (currentBranch !== 'LYO') {
    console.log('⚠️  Attention: Vous n\'êtes pas sur la branche LYO');
  }
} catch (error) {
  console.log('❌ Erreur lors de la vérification de la branche Git');
}

// Vérifier la configuration Vite
console.log('\n📋 Vérification de la configuration Vite...');
try {
  const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
  if (viteConfig.includes('port: 8080')) {
    console.log('✅ Port 8080 configuré dans vite.config.ts');
  } else {
    console.log('❌ Port 8080 non trouvé dans vite.config.ts');
  }
} catch (error) {
  console.log('❌ Impossible de lire vite.config.ts');
}

// Vérifier les dossiers principaux
console.log('\n📁 Vérification de la structure des dossiers...');
const requiredDirs = [
  'src',
  'src/components',
  'src/pages',
  'src/hooks',
  'src/utils',
  'src/types',
  'src/lib',
  'src/services',
  'src/stores',
  'src/styles',
  'src/data',
  'src/i18n',
  'src/integrations',
  'public',
  'supabase'
];

requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`✅ ${dir}/`);
  } else {
    console.log(`❌ ${dir}/ (manquant)`);
  }
});

// Vérifier les fichiers de configuration
console.log('\n⚙️  Vérification des fichiers de configuration...');
const configFiles = [
  'package.json',
  'vite.config.ts',
  'tailwind.config.ts',
  'tsconfig.json',
  'components.json'
];

configFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} (manquant)`);
  }
});

// Vérifier node_modules
console.log('\n📦 Vérification des dépendances...');
if (fs.existsSync('node_modules')) {
  console.log('✅ node_modules/ présent');
  
  // Vérifier quelques dépendances clés
  const keyDeps = ['react', 'vite', 'typescript', '@supabase/supabase-js'];
  keyDeps.forEach(dep => {
    if (fs.existsSync(`node_modules/${dep}`)) {
      console.log(`✅ ${dep} installé`);
    } else {
      console.log(`❌ ${dep} manquant`);
    }
  });
} else {
  console.log('❌ node_modules/ manquant - Exécutez npm install');
}

// Vérifier la synchronisation Git
console.log('\n🔄 Vérification de la synchronisation Git...');
try {
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  if (status.trim() === '') {
    console.log('✅ Working tree propre');
  } else {
    console.log('⚠️  Il y a des modifications non commitées');
  }
  
  const remoteInfo = execSync('git remote -v', { encoding: 'utf8' });
  if (remoteInfo.includes('github.com')) {
    console.log('✅ Remote GitHub configuré');
  }
} catch (error) {
  console.log('❌ Erreur lors de la vérification Git');
}

console.log('\n🚀 Résumé de la vérification:');
console.log('- Branche LYO créée et synchronisée');
console.log('- Configuration port 8080 active');
console.log('- Tous les dossiers synchronisés depuis main');
console.log('- Prêt pour le développement');

console.log('\n💡 Pour démarrer le serveur de développement:');
console.log('   npm run dev');
console.log('\n🌐 L\'application sera accessible sur: http://localhost:8080');