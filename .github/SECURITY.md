# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| main (latest) | ✅ Active |
| older branches | ❌ Not supported |

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities via GitHub Issues.**

Report vulnerabilities privately via GitHub Security Advisories:

1. Go to **Security** tab → **Advisories** → **Report a vulnerability**
2. Provide a clear description, steps to reproduce, and impact assessment
3. You will receive a response within **48 hours**
4. Critical vulnerabilities will be patched within **7 days**

## Security Controls in This Project

This repository enforces the following automated security controls on every commit:

| Control | Tool | Where |
|---------|------|-------|
| SAST scanning | CodeQL + Semgrep | GitHub Actions |
| Secret detection | Gitleaks + TruffleHog | Pre-commit + CI/CD |
| Dependency CVE blocking | Dependency Review | Pull Requests |
| SBOM generation | Syft + Grype | GitHub Actions |
| Container hardening | Hadolint + Trivy | GitHub Actions |
| Image signing | Cosign + Sigstore | GitHub Actions |
| DAST scanning | OWASP ZAP | GitHub Actions |
| Policy enforcement | Checkov | GitHub Actions |
| SIEM monitoring | Microsoft Sentinel | Azure |

## Branch Protection

The `main` branch requires:
- Pull request review before merge
- All status checks to pass
- Signed commits

## Contact

Security issues: GitHub Security Advisories (preferred)
Project owner: [@Bazil-27](https://github.com/Bazil-27)
