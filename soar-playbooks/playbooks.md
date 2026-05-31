\# ⚡ SOAR Playbooks — Zero Trust Architecture



\*\*Author:\*\* Bazil Khan  

\*\*Platform:\*\* Azure Logic Apps + Microsoft Sentinel  



\---



\## Playbook 1 — zt-brute-force-response



\*\*Trigger:\*\* Brute Force Detection Alert  

\*\*Type:\*\* Automated Response  



\### Actions:

1\. Add comment to incident

2\. Create SOC analyst task



\### Incident Comment:

🔐 BRUTE FORCE ATTACK DETECTED

Multiple failed login attempts detected.

This indicates a potential brute force attack.

SOC Action: Block IP, Check lockout, Review logs, Enable MFA

Risk Level: HIGH | Auto-response triggered by SOAR Pipeline



\---



\## Playbook 2 — zt-impossible-travel-response



\*\*Trigger:\*\* Impossible Travel Detection Alert  

\*\*Type:\*\* Automated Response  



\### Incident Comment:

🌍 IMPOSSIBLE TRAVEL DETECTED

User logged in from 2 different geographic locations.

SOC Action: Verify locations, Contact user, Check VPN, Disable if suspicious

Risk Level: HIGH | Auto-response triggered by SOAR Pipeline



\---



\## Playbook 3 — zt-privilege-escalation-response



\*\*Trigger:\*\* Privilege Escalation Detection Alert  

\*\*Type:\*\* Automated Response  



\### Incident Comment:

🔐 PRIVILEGE ESCALATION DETECTED

Unauthorized privilege escalation detected.

SOC Action: Review logs, Verify authorization, Revoke if unauthorized

Risk Level: CRITICAL | Auto-response triggered by SOAR Pipeline



\---



\## SOAR Pipeline Flow:



```

Alert Detected → Sentinel Incident → Automation Rule → Logic App

→ ✅ Comment Added → ✅ SOC Task Created

```



\---



\## File 3: docs/architecture.md



\# 🏗️ Zero Trust Architecture — Design Document



\*\*Author:\*\* Bazil Khan  

\*\*Platform:\*\* Microsoft Azure  



\---



\## Zero Trust Principles



```

1\. Verify Explicitly    — Always authenticate and authorize

2\. Least Privilege      — Limit user access with JIT

3\. Assume Breach        — Minimize blast radius

```



\---



\## Architecture Diagram



```

┌─────────────────────────────────────────┐

│           ZERO TRUST SOC PIPELINE        │

├─────────────────────────────────────────┤

│                                          │

│  \[User] → \[Identity Check] → \[MFA]      │

│               ↓                          │

│  \[Conditional Access Policy]             │

│               ↓                          │

│  \[Microsoft Sentinel SIEM]               │

│               ↓                          │

│  \[KQL Detection Rules]                   │

│    ├── Impossible Travel                 │

│    ├── Brute Force                       │

│    └── Privilege Escalation              │

│               ↓                          │

│  \[SOAR Automation — Logic Apps]          │

│    ├── Auto Comment                      │

│    └── SOC Task Created                  │

│               ↓                          │

│  \[Defender for Cloud]                    │

│    ├── Security Posture                  │

│    ├── Attack Path Analysis              │

│    └── Recommendations                  │

│               ↓                          │

│  \[Live Security Dashboard]               │

│    ├── Alerts by Type                    │

│    ├── Incidents by Severity             │

│    └── Alerts Over Time                  │

└─────────────────────────────────────────┘

```



\---



\## Tech Stack



| Component | Technology |

|-----------|-----------|

| SIEM | Microsoft Sentinel |

| SOAR | Azure Logic Apps |

| Detection | KQL Rules |

| Endpoint | Defender for Cloud |

| Dashboard | Azure Monitor Workbooks |

| IaC | Azure CLI |

| Version Control | GitHub |



\---



\## Phase Completion Status



| Phase | Description | Status |

|-------|-------------|--------|

| 1 | Foundation — Sentinel + SOAR | ✅ Complete |

| 2 | Identity — MFA + Conditional Access | ⏳ In Progress |

| 3 | Defender for Cloud | ✅ Complete |

| 4 | Network Security | ⏳ In Progress |

| 5 | GDPR + Purview | ⏳ In Progress |

| 6 | Autonomous SOC | ⏳ In Progress |

| 7 | Dashboard | ✅ Complete |



\---



\## File 4: azure-cli/commands.md



\# ⚙️ Azure CLI Commands — Zero Trust Architecture



\*\*Author:\*\* Bazil Khan  



\---



\## Resource Group



```bash

az group create \\

&#x20; --name zero-trust-rg \\

&#x20; --location eastus

```



\---



\## Microsoft Sentinel



```bash

az sentinel workspace create \\

&#x20; --resource-group zero-trust-rg \\

&#x20; --workspace-name sentinelops-workspace \\

&#x20; --location eastus

```



\---



\## Logic Apps



```bash

az logic workflow create \\

&#x20; --resource-group zero-trust-rg \\

&#x20; --name zt-brute-force-response \\

&#x20; --location eastus



az logic workflow create \\

&#x20; --resource-group zero-trust-rg \\

&#x20; --name zt-impossible-travel-response \\

&#x20; --location eastus



az logic workflow create \\

&#x20; --resource-group zero-trust-rg \\

&#x20; --name zt-privilege-escalation-response \\

&#x20; --location eastus

```



\---



\## Defender for Cloud



```bash

az security pricing create \\

&#x20; --name VirtualMachines \\

&#x20; --tier standard



az security pricing create \\

&#x20; --name SqlServers \\

&#x20; --tier standard

```

