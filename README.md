# Zero Trust Architecture — Autonomous SOC Pipeline

**Author:** Muhammad Bazil Khan
**Platform:** Microsoft Azure
**Status:** ✅ Phase 4 Complete

---

## 📋 Project Overview

Enterprise-grade Zero Trust Security Architecture with
Autonomous SOC capabilities, SOAR automation, EU regulatory
compliance, and DevSecOps pipeline.
Constraint: Subscription Reader + Resource Group Owner.
Every design decision worked within those boundaries.

---

## ✅ Completed Phases

### Phase 1 — Foundation
- Microsoft Sentinel SIEM deployed
- KQL Detection Rules (3 rules)
- Logic Apps SOAR Automation (3 playbooks)
- Automation Rules configured

### Phase 2 — Network Security & SOAR
- Custom NSG rules — least privilege, EU regions only
- Private endpoints configured for data sovereignty
- CanNotDelete resource locks on critical infrastructure
- Full tagging strategy: environment, owner, compliance
- 11 custom KQL analytics rules deployed
- MITRE ATT&CK coverage across 10 tactics
- 129 active alerts (99 High, 30 Low)
- 134 resources monitored
- zt-master-orchestrator built on Azure Logic Apps:
  Incident → AbuseIPDB enrichment → Azure OpenAI analysis
  → AI-formatted SOC email report (zero manual triage)
- Compliance baseline: GDPR + DORA

### Phase 3 — EU Compliance & Data Protection
- GDPR: 72hr breach notification — fully automated
- DORA: 4hr ICT incident report — fully automated
- NIS2: Cross-border reporting — fully automated
- Azure Key Vault RSA 2048-bit customer-managed encryption
- StorageV2: HTTPS only, public access disabled, VNet-restricted
- Blob audit logs streaming to Sentinel
- 41 detection rules deployed
- Attacks simulated: BruteForce, Lateral Movement,
  PrivEsc, ReverseShell — every attack detected ✅
- Custom EU Compliance Dashboard (Sentinel Workbook)
- Full IaC in Bicep, deployed via Azure CLI

### Phase 4 — Maturity & Optimization
- GitHub Actions: Secret scanning (TruffleHog) ✅
- GitHub Actions: Container security (Trivy) ✅
- GitHub Actions: DAST scanning (OWASP ZAP) ✅
- MITRE ATT&CK workbook installed in Sentinel ✅
- Detection gap KQL analysis: 3 critical gaps found ✅
- Pentest Rules of Engagement documented ✅
- Purple Team exercise plan documented ✅
- 3 security workflows auto-run on every commit

---

## 🔍 KQL Detection Rules

| Rule | Tactic | Severity |
|------|--------|----------|
| Impossible Travel | Initial Access | High |
| Brute Force Attack | Credential Access | High |
| Privilege Escalation | Privilege Escalation | High |
| Lateral Movement | Discovery | High |
| Password Spray | Credential Access | High |
| Data Exfiltration | Exfiltration | High |
| Reverse Shell | Execution | High |
| GDPR Breach Detection | Collection | High |
| DORA ICT Incident | Impact | High |
| NIS2 Incident | Impact | High |
| Nmap Port Scan | Discovery | High |

---

## ⚡ SOAR Playbooks

| Playbook | Trigger |
|----------|---------|
| zt-master-orchestrator | All incidents |
| zt-privilege-escalation-response | PrivEsc Alert |
| zt-brute-force-response | Brute Force Alert |
| zt-impossible-travel-response | Impossible Travel |
| GDPR-72hr-Breach-Notification | GDPR Alert |
| DORA-4hr-ICT-Notification | DORA Alert |
| NIS2-Incident-Response | NIS2 Alert |

---

## 🔄 GitHub Actions Workflows

| Workflow | Purpose | Runs on |
|----------|---------|---------|
| security-scan.yml | TruffleHog secret scan | Every push |
| container-scan.yml | Trivy container scan | Every push |
| dast-scan.yml | OWASP ZAP DAST scan | Every push + Weekly |

---

## 📊 Live Metrics

| Metric | Value |
|--------|-------|
| Active Alerts | 129 (99 High, 30 Low) |
| Detection Rules | 41 |
| Resources Monitored | 134 |
| Wazuh High Severity | 55 |
| Wazuh Rootkit Detection | 46 |
| GitHub Workflow Runs | 13+ |
| Attack Simulations | 4 (all detected) |

---

## 🛠️ Tech Stack

| Category | Tools |
|----------|-------|
| SIEM | Microsoft Sentinel |
| SOAR | Azure Logic Apps |
| Endpoint | Wazuh, Microsoft Defender XDR |
| Identity | Microsoft Entra ID |
| Threat Intel | AbuseIPDB, TAXII/STIX |
| AI | Azure OpenAI |
| IaC | Bicep, Azure CLI |
| DevSecOps | GitHub Actions, TruffleHog, Trivy, OWASP ZAP |
| KQL | Azure Monitor, Sentinel Analytics |
| Compliance | GDPR, DORA, NIS2 |

---

## 📁 Repo Structure
