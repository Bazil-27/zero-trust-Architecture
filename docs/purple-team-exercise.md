# Purple Team Exercise — Zero Trust Phase 4

**Date:**  June 2026  
**Project:** Zero Trust Architecture  
**Author:** Muhammad Bazil Khan

## Objective
Red team attacks, Blue team defends aur detects.
Purple team facilitates learning between both teams.

## Red Team — Attack Scenarios
1. Credential Phishing simulation (internal users)
2. Lateral Movement attempt (ZT-Lateral-Movement-Detection)
3. Data exfiltration simulation (GDPR-Breach-Detection-Alert)
4. Privilege escalation attempt

## Blue Team — Defense Actions
1. Sentinel alerts monitor karo real-time
2. KQL queries run karo suspicious activity ke liye
3. Incident response playbook execute karo
4. Block + remediate within 30 minutes

## Detection Rules Active
- ZT-Lateral-Movement-Detection (122 alerts last 7 days)
- DORA-ICT-Incident-Alert (186 alerts)
- GDPR-Breach-Detection-Alert (173 alerts)

## Success Criteria
- Detection rate: > 80% attacks caught
- Response time: < 30 minutes
- Zero undetected lateral movement

## After Action Review
- Lessons learned document karo
- Detection gaps update karo
- KQL rules improve karo
