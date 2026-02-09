# Gal Fashion World - Production Deployment Guide

## Overview
This document outlines the production deployment process for the Gal Fashion World marketing website, a single-page application built with React, TypeScript, and Tailwind CSS on the Internet Computer platform.

## Production Domain Configuration

**Production Domain Slug:** `galfashionworld-2014`

The canonical production/public deployment domain slug is defined in `frontend/domain-slug.json`. All deployment workflows and CI/CD pipelines MUST reference this configuration file as the single source of truth to ensure consistency and prevent slug validation errors.

### Slug Validation
Before any production/public publish operation:
1. Verify that `frontend/domain-slug.json` exists and contains `"productionSlug": "galfashionworld-2014"`
2. Run the validation script: `node frontend/scripts/validate-production-slug.mjs`
3. Ensure CI checks pass (see `.github/workflows/production-publish-checks.yml`)

## Pre-Deployment Checklist

### 1. Build Verification
Ensure all dependencies are installed and the project builds successfully:

