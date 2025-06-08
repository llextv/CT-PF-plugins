# 📦 Plugin Marketplace — Scénarios pour CT-PF

Bienvenue dans la marketplace communautaire de scénarios pour **CT-PF**, une application mobile de simulation de crises économiques. Vous pouvez :

- 🧠 **Télécharger un scénario** via l'URL d’un fichier `.json` brut
- 🛠️ **Créer votre propre plugin** de scénario
- 📬 **Soumettre une pull request** pour le partager dans la marketplace publique

---

## ✅ Format d’un Plugin JSON

Chaque fichier doit respecter **exactement** la structure suivante :

```json
{
  "name": "Nom du scénario",
  "description": "Résumé court",
  "details": "Description complète du scénario",
  "color": "#ef4444",
  "duration": "20",
  "impact": {
    "Action": -40,
    "Etf": -35,
    "Crypto": -10,
    "MatierePremieres": 15,
    "Obligations": 5
  }
}
```
### 📝 Exemple explicatif

Dans cet exemple, les données importées seront interprétées comme suit :

* **Nom du scénario** : `Nom du scénario`
* **Description** : `Résumé court`
* **Détails** : `Description complète du scénario`
* **Couleur** : `#ef4444` (affiche un badge coloré dans l’application)
* **Durée** : `20` mois
* **Impact sur les classes d'actifs** :

  * `Action` : -40%
  * `Etf` : -35%
  * `Crypto` : -10%
  * `MatierePremieres` : +15%
  * `Obligations` : +5%

---

## 📥 Comment importer dans CT-PF

1. Ouvrez l’app CT-PF
2. Allez dans `Simulateur > Ajouter un scénario`
3. Collez l’URL **brute** du fichier JSON (ex. GitHub raw)
4. Cliquez sur **Importer**

---

## 🧪 Exemple de scénario de test

Fichier : `scenarios/crise-bancaire-express.json`

```json
{
  "name": "Crise Bancaire Express",
  "description": "Défaillance rapide d'une grande banque systémique",
  "details": "Une grande banque internationale fait faillite du jour au lendemain, déclenchant une panique sur les marchés financiers et des mesures d'urgence des banques centrales.",
  "color": "#991b1b",
  "duration": "12",
  "impact": {
    "Action": -45,
    "Etf": -40,
    "Crypto": -20,
    "MatierePremieres": 10,
    "Obligations": 8
  }
}
```

---

## 🙋 Soumettre votre plugin

1. Forkez ce dépôt
2. Ajoutez votre fichier `.json`
3. Assurez-vous que sa structure est conforme
4. Ouvrez une **Pull Request** claire avec un titre et une description

---

## 🔒 Sécurité

Chaque plugin est **validé automatiquement** par l'application avant import :

* Structure correcte
* Types valides
* Aucun script ou exécution dynamique

---

## 📮 Contact

Pour toute question, suggestion ou contribution :

* Ouvrez une issue sur GitHub
* Ou contactez le mainteneur du projet

