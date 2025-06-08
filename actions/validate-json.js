const fs = require('fs');
const Ajv = require('ajv');
const ajv = new Ajv();
const schema = require('./schema.json');

const filePath = process.argv[2];
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
  console.error("❌ Fichier invalide :", validate.errors);
  process.exit(1);
} else {
  console.log("✅ Fichier JSON valide !");
}
