# 🌐 Plugin Marketplace - Scénarios pour CT-PF App

Bienvenue dans le dépôt officiel des **plugins communautaires** pour [Nom de l’Application] !  
Ce dépôt sert de **marketplace décentralisée** : les utilisateurs peuvent **contribuer**, **partager** et **ajouter des scénarios** depuis ce dépôt directement dans l’application.

---

## 🚀 Ajouter un scénario dans l'app

1. Ouvrir l'application
2. Aller dans `Scénarios > Ajouter un nouveau scénario`
3. Coller **l'URL brute du fichier plugin** depuis ce repo, par exemple :
github.com/llextv/myFirstPlugin.json

4. Appuyez sur `Confirmer` : le scénario sera chargé et ajouté à votre application.

---

## 🔧 Format d’un plugin

Les plugins doivent être des fichiers `.json` (ou `.js` structurés) avec la structure suivante :

```json
{
  "name": "Nom du scénario",
  "description": "Brève description de ce que fait ce scénario",
  "version": "1.0.0",
  "actions": [
    {
      "type": "action_type",
      "target": "target_device",
      "value": "optional_value"
    }
  ]
}
