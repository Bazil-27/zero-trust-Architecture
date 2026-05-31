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

