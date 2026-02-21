'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Lead } from '@/types/lead';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  });
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  const fetchLeads = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
      });
      if (search) params.append('search', search);
      if (filter) params.append('filter', filter);

      const response = await fetch(`/api/admin/leads?${params}`);
      const data = await response.json();

      if (response.ok) {
        setLeads(data.leads);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  }, [pagination.page, search, filter]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated, fetchLeads]);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/leads?page=1&limit=1');
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setUsername('');
        setPassword('');
      } else {
        setLoginError(data.error || 'Invalid credentials');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setLeads([]);
      router.push('/admin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPagination({ ...pagination, page: 1 });
    fetchLeads();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-primary">
        <div className="text-primary dark:text-gold text-xl">Loading...</div>
      </div>
    );
  }

  const inputClass = 'w-full px-4 py-2 border border-gray-300 dark:border-gold/30 rounded-lg focus:ring-2 focus:ring-primary focus:ring-gold/50 focus:border-transparent bg-white dark:bg-primary-dark dark:text-neutral-white placeholder:text-neutral-gray dark:placeholder:text-neutral-white/50';

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-primary">
        <div className="bg-white dark:bg-primary-light rounded-lg shadow-lg p-8 max-w-md w-full border border-transparent dark:border-gold/20">
          <h1 className="text-3xl font-bold text-primary dark:text-gold mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-3 rounded border border-red-200 dark:border-red-700">
                {loginError}
              </div>
            )}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-neutral-dark-gray dark:text-neutral-white mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-dark-gray dark:text-neutral-white mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-primary py-8">
      <div className="container-custom">
        <div className="bg-white dark:bg-primary-light rounded-lg shadow-lg p-6 md:p-8 border border-transparent dark:border-gold/20">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-primary dark:text-gold">Interested Users Dashboard</h1>
            <div className="flex gap-4">
              <a
                href="/admin/pricing"
                className="bg-primary hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Manage Pricing
              </a>
              <button
                onClick={handleLogout}
                className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-6 space-y-4 md:flex md:space-y-0 md:space-x-4">
            <form onSubmit={handleSearch} className="flex-1 flex gap-2">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gold/30 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-transparent bg-white dark:bg-primary-dark dark:text-neutral-white placeholder:text-neutral-gray dark:placeholder:text-neutral-white/50"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Search
              </button>
            </form>
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPagination({ ...pagination, page: 1 });
              }}
              className="px-4 py-2 border border-gray-300 dark:border-gold/30 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-transparent bg-white dark:bg-primary-dark dark:text-neutral-white"
            >
              <option value="">All Types</option>
              <option value="service">Services</option>
              <option value="product">Products</option>
            </select>
          </div>

          {/* Leads Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gold/20">
              <thead className="bg-gray-50 dark:bg-primary-dark">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-dark-gray dark:text-neutral-white uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-dark-gray dark:text-neutral-white uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-dark-gray dark:text-neutral-white uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-dark-gray dark:text-neutral-white uppercase tracking-wider">
                    Interest
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-dark-gray dark:text-neutral-white uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-dark-gray dark:text-neutral-white uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-primary-light divide-y divide-gray-200 dark:divide-gold/20">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-neutral-gray dark:text-neutral-white/70">
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-gray-50 dark:hover:bg-primary-dark/50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-dark-gray dark:text-neutral-white">
                        {lead.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray dark:text-neutral-white/80">
                        {lead.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray dark:text-neutral-white/80">
                        {lead.phone || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray dark:text-neutral-white/80">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          lead.interestType === 'service'
                            ? 'bg-primary/10 dark:bg-gold/20 text-primary dark:text-gold'
                            : 'bg-secondary/10 dark:bg-gold/10 text-secondary dark:text-gold'
                        }`}>
                          {lead.interestName}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-gray dark:text-neutral-white/80 max-w-xs truncate">
                        {lead.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray dark:text-neutral-white/80">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-neutral-gray dark:text-neutral-white/70">
                Showing {((pagination.page - 1) * pagination.limit) + 1} to{' '}
                {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
                {pagination.total} results
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                  disabled={pagination.page === 1}
                  className="px-4 py-2 border border-gray-300 dark:border-gold/30 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-primary-dark bg-white dark:bg-primary-dark dark:text-neutral-white"
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-sm text-neutral-gray dark:text-neutral-white/70">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <button
                  onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                  disabled={pagination.page >= pagination.totalPages}
                  className="px-4 py-2 border border-gray-300 dark:border-gold/30 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-primary-dark bg-white dark:bg-primary-dark dark:text-neutral-white"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
