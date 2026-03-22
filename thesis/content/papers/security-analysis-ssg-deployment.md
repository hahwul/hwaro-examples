+++
title = "Security Analysis of Static Site Generator Deployment Pipelines"
date = "2026-01-22"
description = "Static site generators are widely regarded as inherently secure due to the absence of server-side execution. This paper challenges that assumption by examining the security properties of the full SSG deployment pipeline, from build environment to CDN delivery. We identify four categories of vulnerabilities specific to SSG workflows and propose a threat model for static site deployments."
tags = ["security", "static-site-generators", "supply-chain"]
template = "post"

[extra]
authors = "R. Torres, H. Kim"
affiliation = "Information Security Research Group, KAIST"
+++

## Introduction

Static site generators produce pre-rendered HTML, CSS, and JavaScript files that are served directly by HTTP servers or content delivery networks. This architecture eliminates several categories of vulnerabilities common to dynamic web applications: SQL injection, server-side request forgery, and remote code execution through application logic.

However, the claim that static sites are "inherently secure" oversimplifies a more nuanced reality. The security of a static site depends not only on the absence of server-side execution at request time, but also on the integrity of the build pipeline, the configuration of the serving infrastructure, and the trustworthiness of third-party dependencies.

This paper presents a systematic security analysis of SSG deployment pipelines, identifies four categories of vulnerabilities, and proposes a threat model for practitioners.

## Threat Model

We define the scope of our analysis as the complete lifecycle of a static site, from source content to delivered response:

1. **Source phase** -- content authoring and version control
2. **Build phase** -- SSG execution, template rendering, asset processing
3. **Deploy phase** -- file transfer to hosting infrastructure
4. **Serve phase** -- HTTP delivery to end users

An attacker's goal is to modify the content delivered to users without authorization, exfiltrate information from the build environment, or compromise the availability of the site. We consider both external attackers and compromised dependencies.

## Vulnerability Categories

### Category 1: Build Environment Compromise

SSG builds execute in environments with access to environment variables, file systems, and network resources. In CI/CD systems such as GitHub Actions, the build environment may contain deployment credentials, API tokens, and signing keys.

A malicious or compromised SSG plugin can exfiltrate these secrets during the build phase. Unlike runtime vulnerabilities in dynamic applications, build-time attacks leave no traces in the deployed output, making detection difficult.

**Mitigation:** Run builds in isolated containers with minimal permissions. Avoid passing secrets to the build step unless strictly necessary. Audit SSG plugins for network access during builds.

### Category 2: Supply Chain Attacks

SSG projects typically depend on npm packages, Ruby gems, or other language-specific dependencies. A compromised dependency can inject malicious content into the generated output.

The 2021 ua-parser-js incident demonstrated that widely-used npm packages can be hijacked. In an SSG context, a compromised dependency could inject cryptocurrency miners, phishing forms, or malicious redirects into the generated HTML.

**Mitigation:** Pin dependency versions. Use lock files. Enable dependency scanning (e.g., Dependabot, Snyk). Review dependency updates before merging.

### Category 3: Template Injection

SSG template engines process untrusted content (markdown files, data files, API responses) through template rendering. If the template engine does not properly escape output, user-controlled content can inject arbitrary HTML and JavaScript.

While most SSG frameworks enable HTML escaping by default, the `safe` or `raw` filter (which disables escaping) is commonly used to render rich content. If an attacker can control content that passes through these filters, they can achieve stored XSS.

**Mitigation:** Apply the principle of least privilege to template filters. Only use `safe` on content from trusted sources. Implement Content Security Policy headers to limit the impact of XSS.

### Category 4: CDN and Hosting Misconfiguration

Static sites are frequently served through CDNs such as Cloudflare, AWS CloudFront, or Netlify. Misconfigurations in cache policies, access controls, or TLS settings can introduce vulnerabilities.

Common issues include:

- Missing `X-Content-Type-Options: nosniff` headers, enabling MIME-type confusion attacks
- Overly permissive CORS policies on asset files
- Cache poisoning through unkeyed request headers
- Exposed `.git` directories or build artifacts

**Mitigation:** Apply security headers via CDN configuration. Exclude sensitive directories from deployment. Regularly audit CDN configuration.

## Case Study: GitHub Pages Pipeline

To illustrate these vulnerabilities in practice, we analyzed the default GitHub Pages deployment pipeline used by thousands of open-source projects.

The standard workflow uses `actions/deploy-pages` with a GitHub-provided token. We identified several areas of concern:

1. The `GITHUB_TOKEN` has write access to the repository by default, exceeding the minimum permissions needed for deployment
2. Build artifacts are stored as GitHub Actions artifacts with a default retention of 90 days, potentially exposing build outputs longer than intended
3. Third-party actions in the build step run with the same permissions as the workflow, creating a lateral movement vector

We disclosed these findings to GitHub through their bug bounty program and received acknowledgment that the default permissions model for Pages deployments is being revised.

## Proposed Security Framework

Based on our analysis, we propose a four-layer security framework for SSG deployments:

**Layer 1: Source Integrity**
- Require signed commits for content changes
- Implement branch protection with required reviews
- Use CODEOWNERS for template and configuration files

**Layer 2: Build Isolation**
- Execute builds in ephemeral, network-restricted containers
- Minimize the set of secrets available during build
- Generate and verify build provenance (SLSA Level 2+)

**Layer 3: Output Verification**
- Scan generated output for known malicious patterns
- Validate that output contains only expected file types
- Compare output against a known-good baseline for unexpected changes

**Layer 4: Delivery Hardening**
- Implement comprehensive security headers (CSP, HSTS, X-Frame-Options)
- Enable Subresource Integrity (SRI) for third-party scripts
- Configure CDN to serve only explicitly published paths

## Conclusion

Static site generators reduce the attack surface at the point of content delivery, but they do not eliminate security concerns. The build pipeline, dependency chain, template rendering, and hosting configuration all present opportunities for compromise. Practitioners should adopt a defense-in-depth approach that addresses each phase of the SSG lifecycle.

Future work should develop automated tooling for SSG pipeline auditing and investigate the feasibility of reproducible builds for static site generators.

---

<div class="references">

## References

1. OWASP Foundation. (2024). "OWASP Top Ten Web Application Security Risks."
2. Ohm, M., Plate, H., Sykosch, A., & Meier, M. (2020). "Backstabber's Knife Collection: A Review of Open Source Software Supply Chain Attacks." *DIMVA 2020*.
3. Ladisa, P., Plate, H., Martinez, M., & Barais, O. (2023). "SoK: Taxonomy of Attacks on Open-Source Software Supply Chains." *IEEE S&P 2023*.
4. SLSA Contributors. (2023). "Supply-chain Levels for Software Artifacts." slsa.dev.
5. Kettle, J. (2018). "Practical Cache Poisoning." PortSwigger Research.
6. Mozilla. (2024). "Content Security Policy (CSP)." MDN Web Docs.

</div>
