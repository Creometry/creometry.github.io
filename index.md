## Welcome 

Creometry is a project aiming to enable access-to-computing where "cloud services" are a far reach due to economic constraints and financial policies, notably in developing countries. 
The project consists of an infrastructure-network formed by a community of volunteer hosts, who are driven by economic incentives issued by applications owners (devs and/or orgs) to pay for compute and storage. Hence the term "Cloud miner" to refers to volunteer hosts.

### Why incentive-driven?
Despite being accessible online and on-demand, purchasing computing utility requires access minimal banking infrastructure open to anchor currency reserves, which is a limited and hard to get resource in most developing countries.
Alternatively on-premise hosting is what most companies opt for. Yet, this model is not an option for web-business startup since it requires a relatively high capital expenditure, a cheap source of energy nearby and a centralized large network bandwith.

### Solution
An incentive system may enable a "Bring Your Own Machine" model to run lightweight workloads (function) in exchange of the intrinsic economic value produced through the web-based business.   

### Compute model

Autoscaling functions in containers (Aka serverless containers) is a lightweight compute model that fits a community infrastructure, in-which, host resources might be limited and need to be used efficiently.

### Architecture

A 3-tiers architectures Proxy - Master - Worker is a starting point as we research newer technique to create a further decentralized model by: 
 - Virtualizing core network functtions and running them on worker nodes, eliminating the need for a master and potentially client facing gateways.
 - Making use of Enclaves and/or Fully homomorphic encryption to eliminate the need for centralized attestation to ensure trust.

## Create (for devs)
- Build apps
   Create a web-based business delivered throu a web-application that is built from small components (functions in containers).
   
- Create Value incentives: (make it rain)
   Identify an attractive economic value in the business provided through the web-app, then use that value to pay a community of volunteers for hosting the application components.

## Compute (for cloud miners)
  1. Bring Your Own Machine: dedicated bare-Metal or shared resources (virtual machine)
  2. Download the OS/Stack: planning to support ARM64 and AMD64 
  3. Select which incentives you would like to earn: incentives can be associated with one particular app component or with all apps belonging to one particular organization.
  4. Earn digital value redeemable in-app/in-store within the issuing organization.
  

## Trade (for liquidity)
- Trade a digital value for another according to a market price determined by offer and demand. 
- 'Gutta' is the unit of market prices. It is considered creometry's native virtual currency, eliminating the need for a fiat currency.
- Trade volume limits are determined by the application owners and apply to each and every incentive issued on the network. 

Note 1: Volume limits can be any positive balance of Gutta (>0), and are meant to minimize price fluctuation and preserve interest in the intrinsic value (i.e. value redemption). Thus establishing a relationship between hosts and organizations based on economic interest rather than allowing most network nodes to dedicate their capacity for a particular asset/org because of its attractive price or its shiny brand name. 

Note 2: Nodes hosting containers for creometry's exachange app will earn Gutta.





