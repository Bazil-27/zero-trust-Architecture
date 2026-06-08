# Phase 3 — EU Regulatory Compliance & Data Protection

**Author:** Muhammad Bazil Khan  
**Date:** June 2026  
**Constraint:** Subscription Reader + Resource Group Owner

## What Was Built

### 1. Threat Intelligence
- 9 IOCs imported via TAXII/STIX feeds
- Mapped to MITRE ATT&CK framework
- Custom KQL hunting queries written

### 2. EU Regulatory Compliance (Fully Automated)
- **GDPR:** 72-hour breach notification — Logic App playbook
- **DORA:** 4-hour ICT incident report — Logic App playbook  
- **NIS2:** Cross-border incident reporting — Logic App playbook
- Zero manual intervention required

### 3. Data Protection
- Azure Key Vault — RSA 2048-bit customer-managed encryption
- StorageV2 account — HTTPS only
- Public access disabled, VNet-restricted
- Blob audit logs streaming to Sentinel

### 4. EU Compliance Dashboard
- Custom Sentinel Workbook
- Tracks GDPR, DORA, NIS2 incidents in real time
- Built from scratch using KQL

### 5. Detection Rules + Attack Simulation
- 41 analytics rules deployed
- Attacks simulated: BruteForce, Lateral Movement, 
  Privilege Escalation, ReverseShell
- Every attack detected ✅
- Every alert fired ✅
- DORA playbook auto-triggered — AI report delivered to SOC

### 6. Infrastructure as Code
- Full infrastructure in Bicep
- Deployed via Azure CLI
- Repeatable, auditable, version-controlled

## Tools Used
Microsoft Sentinel · Azure Logic Apps · Azure Key Vault · 
Azure Monitor · KQL · Bicep · Azure CLI · 
Microsoft Defender XDR · AbuseIPDB · Azure OpenAI · 
Nmap · Metasploit

## Key Achievement
Built enterprise-grade GRC automation with:
- No tenant-wide permissions
- Subscription Reader only
- Resource Group Owner
