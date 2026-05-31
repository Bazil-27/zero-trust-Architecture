# zero-trust-Architecture



Enterprise Zero Trust Architecture on Microsoft Azure



\# Zero Trust Architecture — Autonomous SOC Pipeline



\*\*Author:\*\* Bazil Khan  

\*\*Platform:\*\* Microsoft Azure  

\*\*Status:\*\* Active Development



\---



\## 📋 Project Overview



Enterprise-grade Zero Trust Security Architecture with Autonomous SOC capabilities, SOAR automation, and real-time security dashboard.



\---



\## ✅ Completed Phases



\### Phase 1 — Foundation

\- Microsoft Sentinel SIEM deployed

\- KQL Detection Rules (3 rules)

\- Logic Apps SOAR Automation (3 playbooks)

\- Automation Rules configured



\### Phase 3 — Defender for Cloud

\- Security posture monitoring

\- Attack path analysis

\- Continuous export configured

\- Live security dashboard



\### Phase 7 — Dashboard

\- Real-time security workbook

\- Security alerts visualization

\- Incidents by severity

\- Alerts over time trend



\---



\## 🔍 KQL Detection Rules



| Rule | Description |

|------|-------------|

| Impossible Travel | Detects login from 2 locations |

| Brute Force | Multiple failed login attempts |

| Privilege Escalation | Unauthorized privilege changes |



\---



\## ⚡ SOAR Playbooks



| Playbook | Trigger |

|----------|---------|

| zt-brute-force-response | Brute Force Alert |

| zt-impossible-travel-response | Impossible Travel Alert |

| zt-privilege-escalation-response | Privilege Escalation Alert |



\---



\## 📊 Live Dashboard



\- Wazuh High Severity Alerts: 55

\- Wazuh Rootkit Detection: 46

\- Total Incidents: 129

\- Secure Score: 56%



\---



\## 🚀 Tech Stack



\- Microsoft Sentinel

\- Azure Logic Apps

\- Microsoft Defender for Cloud

\- KQL (Kusto Query Language)

\- Azure Monitor Workbooks

\- GitHub Actions

