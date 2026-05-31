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

