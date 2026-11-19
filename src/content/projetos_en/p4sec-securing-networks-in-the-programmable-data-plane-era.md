---
title: "P4Sec: Securing Networks in the Programmable Data Plane Era"
period: "2017 - 2020"
coordinator: "Eduardo Adilio Pelinson Alchieri"
funding: "Rede Nacional de Ensino e Pesquisa - Financial Grant / National"
status: "Completed"
featured: false
tags:
  - "Research"
  - "Networks"
  - "COMNET"
---

## Project Overview

Descrição: Recent advances in Software Defined Networking (SDN) have expanded our ability to program the network to its data plane. Through domain specific languages like P4, network operators can quickly deploy new protocols on forwarding devices, customize their functionality, and develop innovative services. This flexibility comes however with a cost: network-wide security and correctness properties (e.g., isolation, reachability, etc.) become much harder to ensure, because network behavior is now determined by a combination of the control plane-driven configuration and the data plane program that resides on devices (also called switches). Existing network verification tools, which rely on a fixed, invariant model of the data plane, are inadequate for programmable data planes. We propose to develop new techniques to verify and enforce security properties in data plane networks. Our proposed verification techniques extend existing verification tools by automatically generating a data plane model from a P4 program. We then adapt existing verifications p g p g tools to work with our dynamically-generated models to verify network configuration updates issued by an SDN controller. We also propose a new approach to ensuring that network security properties are satisfied by a network configuration that is based on data plane enforcement. We propose to develop an inline monitor, implemented in the data plane itself, that enforces critical security properties, such as isolation and bandwidth limits, even in the presence of a faulty user data plane program or controller. Today?s networks are increasingly called on to perform security services, e.g. intrusion detection, in the network. A programmable data plane network can be used to accelerate and enhance such services by performing some of the required processing in the network data plane. The second thrust of this proposal concerns new data plane security services made possible by programmable data plane networks. We propose to develop new data plane-based security functions and techniques for composing them in a manner that balances performance characteristics of the data plane (very fast but low complexity) and dedicated virtualized network function units attached to the network (slower but more sophisticated) to implement the required security function...

## General Information

- **Principal Investigator:** Eduardo Adilio Pelinson Alchieri
- **Duration:** 2017 - 2020
- **Sponsors:** Rede Nacional de Ensino e Pesquisa - Financial Grant / National
- **Status:** Completed
- **Participating COMNET Faculty:** Eduardo Adilio Pelinson Alchieri, Jacir Luiz Bordim
- **Host Institution:** Department of Computer Science (CIC) — University of Brasília (UnB)
