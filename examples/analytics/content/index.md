+++
title = "Dashboard Overview"
date = "2025-01-20"
description = "Key metrics and website performance."
+++

<div class="mb-8">
  <div class="flex items-center justify-end">
    <div class="flex space-x-3">
      <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-brand-100 text-brand-800">
        Today
      </span>
      <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
        7D
      </span>
      <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
        30D
      </span>
    </div>
  </div>
</div>

<!-- Key Metrics Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div class="card">
    <div class="flex items-center justify-between mb-2">
      <h3 class="stat-label">Unique Visitors</h3>
      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </div>
    <div class="flex items-baseline space-x-2">
      <p class="stat-value">24,592</p>
      <span class="positive-trend flex items-center">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        12.5%
      </span>
    </div>
  </div>

  <div class="card">
    <div class="flex items-center justify-between mb-2">
      <h3 class="stat-label">Pageviews</h3>
      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    </div>
    <div class="flex items-baseline space-x-2">
      <p class="stat-value">142,384</p>
      <span class="positive-trend flex items-center">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        18.2%
      </span>
    </div>
  </div>

  <div class="card">
    <div class="flex items-center justify-between mb-2">
      <h3 class="stat-label">Bounce Rate</h3>
      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    </div>
    <div class="flex items-baseline space-x-2">
      <p class="stat-value">42.3%</p>
      <span class="negative-trend flex items-center">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        2.4%
      </span>
    </div>
  </div>
</div>

<!-- Charts Section -->
<div class="card mb-8">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-medium text-gray-900">Traffic Overview</h3>
    <button class="text-sm text-gray-500 hover:text-gray-700">Export</button>
  </div>
  <div class="chart-placeholder">
    [ Traffic Line Chart Visualization ]
  </div>
</div>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
  <!-- Top Pages -->
  <div class="card">
    <h3 class="text-lg font-medium text-gray-900 mb-4">Top Pages</h3>
    <div class="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Page Path</th>
            <th>Views</th>
            <th>Bounce Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-medium">/</td>
            <td>45,211</td>
            <td>38.5%</td>
          </tr>
          <tr>
            <td class="font-medium">/pricing</td>
            <td>18,492</td>
            <td>41.2%</td>
          </tr>
          <tr>
            <td class="font-medium">/blog/new-features</td>
            <td>12,845</td>
            <td>52.8%</td>
          </tr>
          <tr>
            <td class="font-medium">/about-us</td>
            <td>8,124</td>
            <td>32.1%</td>
          </tr>
          <tr>
            <td class="font-medium">/contact</td>
            <td>5,433</td>
            <td>28.4%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Traffic Sources -->
  <div class="card">
    <h3 class="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h3>
    <div class="space-y-4">

      <div>
        <div class="flex justify-between text-sm mb-1">
          <span class="font-medium text-gray-700">Direct</span>
          <span class="text-gray-500">45% (64,072)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: 45%;"></div>
        </div>
      </div>

      <div>
        <div class="flex justify-between text-sm mb-1">
          <span class="font-medium text-gray-700">Organic Search</span>
          <span class="text-gray-500">32% (45,562)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: 32%;"></div>
        </div>
      </div>

      <div>
        <div class="flex justify-between text-sm mb-1">
          <span class="font-medium text-gray-700">Referral</span>
          <span class="text-gray-500">15% (21,357)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: 15%;"></div>
        </div>
      </div>

      <div>
        <div class="flex justify-between text-sm mb-1">
          <span class="font-medium text-gray-700">Social</span>
          <span class="text-gray-500">8% (11,393)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: 8%;"></div>
        </div>
      </div>

    </div>
  </div>
</div>
