# Zero Trust Architecture — 

**Author:** Muhammad Bazil Khan
**Platform:** Microsoft Azure

---
<img width="1080" height="737" alt="image" src="https://github.com/user-attachments/assets/41d01a48-04b0-45de-ad2e-556b51b8332b" />

## 📋 Project Overview

Enterprise-grade Zero Trust Security Architecture with Autonomous SOC capabilities, SOAR automation, EU regulatory compliance, and DevSecOps pipeline. Constraint: Subscription Reader + Resource Group Owner. Every design decision worked within those boundaries.

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
- `zt-master-orchestrator` built on Azure Logic Apps: Incident → AbuseIPDB enrichment → Azure OpenAI analysis → AI-formatted SOC email report (zero manual triage)
- Compliance baseline: GDPR + DORA

### Phase 3 — EU Compliance & Data Protection
- GDPR: 72hr breach notification — fully automated
- DORA: 4hr ICT incident report — fully automated
- NIS2: Cross-border reporting — fully automated
- Azure Key Vault RSA 2048-bit customer-managed encryption
- StorageV2: HTTPS only, public access disabled, VNet-restricted
- Blob audit logs streaming to Sentinel
- 41 detection rules deployed
- Attacks simulated: BruteForce, Lateral Movement, PrivEsc, ReverseShell — every attack detected ✅
- Custom EU Compliance Dashboard (Sentinel Workbook)
- Full IaC in Bicep, deployed via Azure CLI

### Phase 4 — Enterprise DevSecOps Security Pipeline
- **Stage 1 — Code Security**
  - CodeQL SAST scanning (C#, JavaScript, Python) — `security-extended` query suite
  - Semgrep custom rules (OWASP Top 10 + Azure patterns)
  - Secret detection: Gitleaks + TruffleHog (pre-commit + CI/CD dual layer)
- **Stage 2 — Supply Chain Security**
  - Dependency Review — blocks CVE packages on every PR
  - Dependabot — auto PRs every Monday (npm, pip, GitHub Actions)
  - SBOM generation: Syft → CycloneDX + SPDX + Grype CVE scan
  - OpenSSF Scorecard — weekly repo security rating
- **Stage 3 — Container Hardening**
  - Hardened Dockerfile: multi-stage, non-root user (UID 1001), slim base
  - Hadolint Dockerfile linting + Trivy filesystem & IaC scan
  - Cosign keyless image signing via Sigstore Fulcio (no private key stored)
  - OWASP ZAP: baseline + full + API scan (3 scan types)
- **Stage 4 — Policy + Monitoring**
  - Checkov IaC policy scan (ARM templates + Dockerfile + GitHub Actions)
  - Sentinel integration: pipeline events → `DevSecOpsPipeline_CL` custom log
  - KQL detection rules: failure alerts, weekly rate chart, suspicious actor detection
  - SECURITY.md governance policy

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
| DevSecOps Pipeline Failure | Impact | High |
| Suspicious Actor Detection | Execution | High |

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
| `codeql-sast.yml` | CodeQL + Semgrep SAST | Every push + Weekly |
| `secret-detection.yml` | Gitleaks + TruffleHog | Every push + PR |
| `dependency-review.yml` | Block vulnerable packages | Every PR |
| `sbom-generation.yml` | Syft SBOM + Grype CVE scan | Every push to main |
| `openssf-scorecard.yml` | Repo security rating | Every push + Weekly |
| `container-hardening.yml` | Hadolint + Trivy scan | Every push + Weekly |
| `image-signing.yml` | Cosign keyless signing | Every push to main |
| `dast-scan.yml` | OWASP ZAP 3-mode scan | Every push + Weekly |
| `policy-as-code.yml` | Checkov IaC enforcement | Every push + PR |
| `sentinel-integration.yml` | Pipeline events → Sentinel | After every scan |

---

## 📊 Live Metrics

| Metric | Value |
|--------|-------|
| Active Alerts | 129 (99 High, 30 Low) |
| Detection Rules | 41 + 3 DevSecOps KQL |
| Resources Monitored | 134 |
| Wazuh High Severity | 55 |
| Wazuh Rootkit Detection | 46 |
| GitHub Workflows | 10 (Phase 4) |
| Attack Simulations | 4 (all detected) |
| SBOM Formats | 3 (CycloneDX, SPDX, Syft) |
| Security Scan Tools | 13 |

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
| SAST | CodeQL, Semgrep |
| Secret Detection | Gitleaks, TruffleHog |
| Supply Chain | Syft, Grype, Dependabot |
| Container Security | Hadolint, Trivy, Cosign |
| DAST | OWASP ZAP |
| Policy as Code | Checkov |
| Repo Security | OpenSSF Scorecard |
| KQL | Azure Monitor, Sentinel Analytics |
| Compliance | GDPR, DORA, NIS2 |

---

## 📁 Repo Structure

```
zero-trust-Architecture/
├── .github/
│   ├── workflows/
│   │   ├── codeql-sast.yml
│   │   ├── secret-detection.yml
│   │   ├── dependency-review.yml
│   │   ├── sbom-generation.yml
│   │   ├── openssf-scorecard.yml
│   │   ├── container-hardening.yml
│   │   ├── image-signing.yml
│   │   ├── dast-scan.yml
│   │   ├── policy-as-code.yml
│   │   └── sentinel-integration.yml
│   └── dependabot.yml
├── .zap/
│   └── rules.tsv
├── azure-cli/
│   └── commands.md
├── dashboard/
├── docs/
│   ├── architecture.md
│   ├── phase2-summary.md
│   ├── phase3-summary.md
│   ├── phase4-summary.md
│   └── purple-team-exercise.md
├── kql-rules/
│   └── devsecops-pipeline-failures.kql
├── screenshots/
├── soar-playbooks/
├── Dockerfile
├── SECURITY.md
├── .pre-commit-config.yaml
├── pentest-roe.md
└── README.md
```

---

*Built with Subscription Reader + Resource Group Owner only. No tenant-wide permissions. Full enterprise security — within constraints.*
