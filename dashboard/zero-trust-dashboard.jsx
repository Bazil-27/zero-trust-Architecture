// Zero Trust Security Dashboard
// Author: Bazil Khan
// Platform: Microsoft Azure Sentinel

import React, { useState } from 'react';

const ZeroTrustDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const alertData = [
    { name: 'Wazuh High Severity Alert', count: 55, color: '#4F46E5' },
    { name: 'Wazuh Rootkit Detection', count: 46, color: '#EC4899' },
  ];

  const incidentData = [
    { severity: 'High', count: 99, color: '#4F46E5' },
    { severity: 'Low', count: 30, color: '#EC4899' },
  ];

  const kqlRules = [
    { name: 'Impossible Travel', severity: 'High', status: 'Active' },
    { name: 'Brute Force Detection', severity: 'High', status: 'Active' },
    { name: 'Privilege Escalation', severity: 'Critical', status: 'Active' },
  ];

  const soarPlaybooks = [
    { name: 'zt-brute-force-response', trigger: 'Brute Force Alert', status: 'Live' },
    { name: 'zt-impossible-travel-response', trigger: 'Impossible Travel', status: 'Live' },
    { name: 'zt-privilege-escalation-response', trigger: 'Privilege Escalation', status: 'Live' },
  ];

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#60a5fa', fontSize: '28px' }}>
          🛡️ Zero Trust Security Dashboard
        </h1>
        <p style={{ color: '#94a3b8' }}>Bazil Khan | Security Operations Center</p>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '30px' }}>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #4F46E5' }}>
          <p style={{ color: '#94a3b8', margin: 0 }}>Total Alerts</p>
          <h2 style={{ color: 'white', margin: '5px 0' }}>101</h2>
        </div>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #EC4899' }}>
          <p style={{ color: '#94a3b8', margin: 0 }}>Total Incidents</p>
          <h2 style={{ color: 'white', margin: '5px 0' }}>129</h2>
        </div>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
          <p style={{ color: '#94a3b8', margin: 0 }}>Secure Score</p>
          <h2 style={{ color: 'white', margin: '5px 0' }}>56%</h2>
        </div>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
          <p style={{ color: '#94a3b8', margin: 0 }}>SOAR Playbooks</p>
          <h2 style={{ color: 'white', margin: '5px 0' }}>3 Live</h2>
        </div>
      </div>

      {/* KQL Rules */}
      <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3 style={{ color: '#60a5fa' }}>🔍 KQL Detection Rules</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <th style={{ textAlign: 'left', padding: '10px', color: '#94a3b8' }}>Rule Name</th>
              <th style={{ textAlign: 'left', padding: '10px', color: '#94a3b8' }}>Severity</th>
              <th style={{ textAlign: 'left', padding: '10px', color: '#94a3b8' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {kqlRules.map((rule, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px' }}>{rule.name}</td>
                <td style={{ padding: '10px', color: rule.severity === 'Critical' ? '#ef4444' : '#f59e0b' }}>{rule.severity}</td>
                <td style={{ padding: '10px', color: '#10b981' }}>✅ {rule.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SOAR Playbooks */}
      <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ color: '#60a5fa' }}>⚡ SOAR Playbooks</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <th style={{ textAlign: 'left', padding: '10px', color: '#94a3b8' }}>Playbook</th>
              <th style={{ textAlign: 'left', padding: '10px', color: '#94a3b8' }}>Trigger</th>
              <th style={{ textAlign: 'left', padding: '10px', color: '#94a3b8' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {soarPlaybooks.map((pb, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px', color: '#60a5fa' }}>{pb.name}</td>
                <td style={{ padding: '10px' }}>{pb.trigger}</td>
                <td style={{ padding: '10px', color: '#10b981' }}>🟢 {pb.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ZeroTrustDashboard;