+++
title = "API Reference"
+++

This section provides comprehensive documentation for the Security Gateway's APIs.

## Overview

The Gateway exposes both internal administrative APIs and external proxy endpoints. All requests must be authenticated using an API Key or Bearer Token.

## Authentication Methods

Select your preferred integration method to see example code.

<div class="code-tabs">
  <div class="tabs-header">
    <button class="tab-btn active">cURL</button>
    <button class="tab-btn">Node.js</button>
    <button class="tab-btn">Python</button>
  </div>
  
  <div class="tab-content" id="curl-example">
    <pre><code>curl -X GET "https://api.gateway.local/v1/health" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "X-API-Key: YOUR_API_KEY"</code></pre>
  </div>
</div>

## Base URL

All API requests should be made to:
`https://api.gateway.local/v1`

[Explore all API Endpoints ->](/api-reference/endpoints/)
