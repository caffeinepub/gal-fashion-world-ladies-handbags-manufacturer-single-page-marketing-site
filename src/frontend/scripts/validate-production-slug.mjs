#!/usr/bin/env node

/**
 * Production Slug Validation Script
 * 
 * This script validates that the production slug in frontend/domain-slug.json
 * matches the expected value "galfashionworld-2014" to prevent deployment errors.
 * 
 * Usage: node frontend/scripts/validate-production-slug.mjs
 * Exit codes:
 *   0 - Validation passed
 *   1 - Validation failed (missing file, invalid JSON, or slug mismatch)
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const EXPECTED_SLUG = 'galfashionworld-2014';
const CONFIG_PATH = join(__dirname, '..', 'domain-slug.json');

function validateProductionSlug() {
  try {
    // Read the configuration file
    const configContent = readFileSync(CONFIG_PATH, 'utf-8');
    
    // Parse JSON
    let config;
    try {
      config = JSON.parse(configContent);
    } catch (parseError) {
      console.error('❌ Error: frontend/domain-slug.json contains invalid JSON');
      console.error(`   ${parseError.message}`);
      return false;
    }

    // Check if productionSlug exists
    if (!config.productionSlug) {
      console.error('❌ Error: frontend/domain-slug.json is missing the "productionSlug" field');
      console.error('   Expected: { "productionSlug": "galfashionworld-2014", ... }');
      return false;
    }

    // Validate the slug value
    if (config.productionSlug !== EXPECTED_SLUG) {
      console.error('❌ Error: Production slug mismatch');
      console.error(`   Expected: "${EXPECTED_SLUG}"`);
      console.error(`   Found:    "${config.productionSlug}"`);
      console.error('');
      console.error('   The production slug must be exactly "galfashionworld-2014"');
      console.error('   Please update frontend/domain-slug.json to use the correct slug.');
      return false;
    }

    // Validation passed
    console.log('✓ Production slug validation passed: galfashionworld-2014');
    console.log(`  Configuration file: ${CONFIG_PATH}`);
    return true;

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('❌ Error: frontend/domain-slug.json not found');
      console.error('   Please create the file with the following content:');
      console.error('   {');
      console.error('     "productionSlug": "galfashionworld-2014",');
      console.error('     "description": "Production/public deployment domain slug for Gal Fashion World",');
      console.error(`     "lastUpdated": "${new Date().toISOString().split('T')[0]}"`);
      console.error('   }');
    } else {
      console.error('❌ Error reading frontend/domain-slug.json:');
      console.error(`   ${error.message}`);
    }
    return false;
  }
}

// Run validation
const isValid = validateProductionSlug();
process.exit(isValid ? 0 : 1);
