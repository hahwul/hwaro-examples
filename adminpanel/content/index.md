+++
title = "Dashboard"
template = "page"
[extra]
action_primary = "New Report"
action_secondary = "Export"
+++

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
    <div class="card !mb-0 border-l-4 border-blue-500">
        <div class="card-body">
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Total Users</h3>
            <div class="text-3xl font-bold text-gray-900">12,489</div>
            <p class="text-sm text-green-600 mt-2 font-medium">+14.5% from last month</p>
        </div>
    </div>
    <div class="card !mb-0 border-l-4 border-emerald-500">
        <div class="card-body">
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Active Sessions</h3>
            <div class="text-3xl font-bold text-gray-900">1,245</div>
            <p class="text-sm text-green-600 mt-2 font-medium">+5.2% from last month</p>
        </div>
    </div>
    <div class="card !mb-0 border-l-4 border-purple-500">
        <div class="card-body">
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Total Revenue</h3>
            <div class="text-3xl font-bold text-gray-900">$48,290</div>
            <p class="text-sm text-red-600 mt-2 font-medium">-2.1% from last month</p>
        </div>
    </div>
</div>

<h2 class="text-lg font-bold text-gray-900 mb-4 mt-8">Recent Activity</h2>
<div class="card">
    <div class="overflow-x-auto">
        <table class="data-table">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Action</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="font-medium text-gray-900">john.doe@example.com</td>
                    <td>Updated profile settings</td>
                    <td>Today, 10:42 AM</td>
                    <td><span class="status-badge status-active">Success</span></td>
                </tr>
                <tr>
                    <td class="font-medium text-gray-900">admin@system.local</td>
                    <td>Created new content block</td>
                    <td>Today, 09:15 AM</td>
                    <td><span class="status-badge status-active">Success</span></td>
                </tr>
                <tr>
                    <td class="font-medium text-gray-900">guest_8829@temp.net</td>
                    <td>Failed login attempt</td>
                    <td>Yesterday, 11:30 PM</td>
                    <td><span class="status-badge status-inactive">Failed</span></td>
                </tr>
                <tr>
                    <td class="font-medium text-gray-900">sarah.smith@example.com</td>
                    <td>Exported user data</td>
                    <td>Yesterday, 04:20 PM</td>
                    <td><span class="status-badge status-active">Success</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
