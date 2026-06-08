# Phase 2 — Network Security, Sentinel & SOAR Automation

**Author:** Muhammad Bazil Khan  
**Date:** June 2026  
**Constraint:** Subscription Reader + Resource Group Owner

## What Was Built

### 1. Network Security
- Custom inbound/outbound NSG rules — least privilege
- Traffic scoped to EU regions only
- Private endpoints configured for data sovereignty

### 2. Governance & Resource Management
- Full tagging strategy: environment, owner, 
  data classification, compliance markers
- CanNotDelete resource locks on all critical infrastructure
- Clean resource group structure maintained

### 3. Microsoft Sentinel + KQL Detection Rules
11 custom analytics rules deployed:
- Privilege Escalation Detection — Zero Trust
- Brute Force Attack Detection — Zero Trust
- Impossible Travel Detection — Zero Trust
- Nmap Port Scan Detection
- Wazuh Suspicious Root Activity
- Wazuh Brute Force Detection
- Wazuh Rootkit Detection
- Password Spray Detection
- Lateral Movement Detection
- Data Exfiltration Detection
- Reverse Shell Detection

**Coverage:** MITRE ATT&CK — 10 tactics  
**Active Alerts:** 129 (99 High, 30 Low)  
**Resources Monitored:** 134

### 4. SOAR — zt-master-orchestrator
Built on Azure Logic Apps — fully automated:

Incident Trigger
→ Fetch Entities
→ AbuseIPDB IP Enrichment
→ Azure OpenAI Incident Analysis
→ Parse AI Response
→ Switch on Incident Type:
BruteForce / PortScan / ReverseShell /
DataExfil / PrivEsc / PasswordSpray
→ AI-formatted Email Report → SOC

Zero manual triage. End-to-end automated.

### 5. Planned (Access Restricted)
Designed but required subscription-level permissions:
- PIM (Privileged Identity Management)
- NSG Flow Logs
- RBAC assignments
- IAM policies

All documented and ready for full-access environment.

## Detection Rules — KQL Examples

### Brute Force Detection
```kql
SigninLogs
| where TimeGenerated > ago(10m)
| where ResultType != "0"
| summarize FailedAttempts = count()
  by IPAddress, bin(TimeGenerated, 10m)
| where FailedAttempts > 5
```

### Privilege Escalation Detection
```kql
AuditLogs
| where TimeGenerated > ago(1h)
| where OperationName == "Add member to role"
| where Role has_any ("Global Admin", "Security Admin")
| project TimeGenerated, InitiatedBy, TargetUser, Role
```

## Tools Used
Microsoft Sentinel · Azure Logic Apps · Azure OpenAI ·
AbuseIPDB · Microsoft Defender for Cloud · Entra ID ·
Azure NSG · KQL · Azure Monitor · Microsoft Defender XDR

## Compliance Baseline
GDPR ✅ · DORA ✅
