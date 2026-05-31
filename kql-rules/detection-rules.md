\# 🔍 KQL Detection Rules — Zero Trust Architecture



\*\*Author:\*\* Bazil Khan  

\*\*Platform:\*\* Microsoft Sentinel  



\---



\## Rule 1 — Impossible Travel Detection



```kusto

let timeDelta = 1h;

let impossible\_travel\_distance = 500;

SigninLogs

| where TimeGenerated > ago(7d)

| where ResultType == 0

| extend City = tostring(LocationDetails.city)

| extend Country = tostring(LocationDetails.countryOrRegion)

| extend Latitude = tostring(LocationDetails.geoCoordinates.latitude)

| extend Longitude = tostring(LocationDetails.geoCoordinates.longitude)

| project TimeGenerated, UserPrincipalName, City, Country, IPAddress

| sort by UserPrincipalName, TimeGenerated asc

```



\*\*Trigger:\*\* User logs in from 2 different countries within 1 hour  

\*\*Severity:\*\* High  

\*\*MITRE ATT\&CK:\*\* T1078 — Valid Accounts



\---



\## Rule 2 — Brute Force Detection



```kusto

SecurityEvent

| where TimeGenerated > ago(1h)

| where EventID == 4625

| summarize FailedAttempts = count() by Account, IpAddress, bin(TimeGenerated, 5m)

| where FailedAttempts >= 10

```



\*\*Trigger:\*\* 10+ failed logins in 5 minutes  

\*\*Severity:\*\* High  

\*\*MITRE ATT\&CK:\*\* T1110 — Brute Force



\---



\## Rule 3 — Privilege Escalation Detection



```kusto

SecurityEvent

| where TimeGenerated > ago(1d)

| where EventID in (4728, 4732, 4756)

| where TargetUserName contains "Admin"

| project TimeGenerated, Account, TargetUserName, EventID, Computer

```



\*\*Trigger:\*\* Admin group membership change detected  

\*\*Severity:\*\* Critical  

\*\*MITRE ATT\&CK:\*\* T1078.002 — Valid Accounts: Domain Accounts

