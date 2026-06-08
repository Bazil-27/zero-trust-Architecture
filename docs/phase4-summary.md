# Phase 4 — Enterprise DevSecOps Security Pipeline

## Overview

Phase 4 transforms the Zero Trust Architecture project into a full **Shift-Left Security** implementation. Every code commit is automatically scanned, signed, and monitored — with zero Azure admin permissions required.

**Theme:** Security moves left — catch vulnerabilities at commit time, not in production.

---

## Architecture

```
Developer Commit
       │
       ▼
┌─────────────────────────────────────────────────┐
│           GitHub Actions Pipeline               │
│                                                 │
│  Stage 1: Code Security                         │
│  ├── CodeQL SAST (C#, JS, Python)               │
│  ├── Semgrep (OWASP Top 10 + Azure rules)       │
│  └── Secret Detection (Gitleaks + TruffleHog)   │
│                                                 │
│  Stage 2: Supply Chain                          │
│  ├── Dependency Review (block CVE packages)     │
│  ├── Dependabot (auto PRs every Monday)         │
│  ├── SBOM Generation (CycloneDX + SPDX)         │
│  └── OpenSSF Scorecard (repo security rating)   │
│                                                 │
│  Stage 3: Container Security                    │
│  ├── Hadolint (Dockerfile best practices)       │
│  ├── Trivy (filesystem + IaC CVE scan)          │
│  ├── Cosign (keyless image signing)             │
│  └── OWASP ZAP (baseline + full + API scan)     │
│                                                 │
│  Stage 4: Policy + Monitoring                   │
│  ├── Checkov (ARM + Dockerfile + Actions scan)  │
│  └── Sentinel Integration (pipeline to SIEM)   │
└─────────────────────────────────────────────────┘
       │
       ▼
Microsoft Sentinel (DevSecOpsPipeline_CL)
```

---

## Tasks Completed

### Stage 1 — Code Security

| # | Task | File | Tools |
|---|------|------|-------|
| 1 | SAST Scanning | `codeql-sast.yml` | CodeQL, Semgrep |
| 2 | Secret Detection | `secret-detection.yml` | Gitleaks, TruffleHog |
| 2a | Pre-commit hooks | `.pre-commit-config.yaml` | Gitleaks, TruffleHog |

**CodeQL** scans C#, JavaScript, and Python using the `security-extended` query suite. Results appear in GitHub Security as SARIF.

**Semgrep** runs OWASP Top 10, Azure-specific, and secret detection rule sets on every push.

**Gitleaks + TruffleHog** run in two layers — pre-commit locally and in CI/CD — blocking secrets before and after they reach the repository.

---

### Stage 2 — Supply Chain Security

| # | Task | File | Tools |
|---|------|------|-------|
| 3 | Dependency Review | `dependency-review.yml` | GitHub Dependency Review |
| 3a | Auto updates | `.github/dependabot.yml` | Dependabot |
| 4 | SBOM Generation | `sbom-generation.yml` | Syft, Grype |
| 5 | Repo Security Rating | `openssf-scorecard.yml` | OpenSSF Scorecard |

**Dependency Review** blocks PRs that introduce packages with moderate or higher CVEs, and enforces GPL license restrictions.

**Dependabot** opens automatic PRs every Monday for npm, pip, and GitHub Actions updates.

**SBOM** is generated in 3 formats (CycloneDX JSON, SPDX JSON, Syft native) on every push to main, and attached to GitHub Releases automatically.

**OpenSSF Scorecard** rates the repository weekly across 18 security checks including branch protection, signed commits, and dependency pinning.

---

### Stage 3 — Container Hardening + Signing

| # | Task | File | Tools |
|---|------|------|-------|
| 6 | Container Hardening | `container-hardening.yml` | Hadolint, Trivy |
| 6a | Hardened Dockerfile | `Dockerfile` | Multi-stage, non-root |
| 7 | Image Signing | `image-signing.yml` | Cosign, Sigstore |
| 8 | DAST Scanning | `dast-scan.yml` | OWASP ZAP |
| 8a | ZAP Rules | `.zap/rules.tsv` | Custom rule config |

**Dockerfile** uses multi-stage build, non-root user (UID 1001), slim base image, and no cached layers.

**Trivy** scans both filesystem and IaC configuration files for CRITICAL and HIGH CVEs.

**Cosign keyless signing** uses Sigstore Fulcio CA with GitHub OIDC — no private key stored anywhere. Every image push to GHCR is signed and recorded in the Rekor transparency log.

**OWASP ZAP** runs 3 scan types: passive baseline, active full scan, and API scan.

---

### Stage 4 — Policy + Monitoring

| # | Task | File | Tools |
|---|------|------|-------|
| 9 | Policy as Code | `policy-as-code.yml` | Checkov |
| 10 | Sentinel Integration | `sentinel-integration.yml` | Log Analytics API |
| 10a | KQL Detection Rules | `devsecops-pipeline-failures.kql` | KQL |

**Checkov** scans ARM templates, Dockerfile, and GitHub Actions workflows for policy violations.

**Sentinel Integration** sends a signed event to the `DevSecOpsPipeline_CL` custom log table after every security workflow completes.

**KQL rules** provide 3 detections: pipeline failure alerts, weekly failure rate chart, and suspicious actor detection (3+ failures in 1 hour = High severity).

---

## Secrets Required

| Secret | Used By |
|--------|---------|
| `SENTINEL_WORKSPACE_ID` | `sentinel-integration.yml` |
| `SENTINEL_PRIMARY_KEY` | `sentinel-integration.yml` |

Add via: GitHub repo → Settings → Secrets and variables → Actions

---

## Permissions Used

No Azure admin permissions required. All tasks run within GitHub's native permission model using `contents: read`, `security-events: write`, `packages: write`, and `id-token: write` only.

---

## Tools Summary

| Tool | Category |
|------|----------|
| CodeQL + Semgrep | SAST |
| Gitleaks + TruffleHog | Secret detection |
| Dependabot + Dependency Review | SCA |
| Syft + Grype | SBOM + CVE scan |
| OpenSSF Scorecard | Repo security rating |
| Hadolint + Trivy | Container security |
| Cosign + Sigstore | Image signing |
| OWASP ZAP | DAST |
| Checkov | Policy as Code |
| Microsoft Sentinel + KQL | SIEM monitoring |

---

*Phase 4 completed as part of Zero Trust Architecture — github.com/Bazil-27/zero-trust-Architecture*
