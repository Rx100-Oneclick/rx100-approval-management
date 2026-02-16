import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, Filter, X, ChevronLeft, ChevronRight, Eye, ChevronDown, Clock, User, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { useAuthFromParent } from '@/hooks/useAuthFromParent';
import { useApprovalTemplates, type ApprovalTemplateRow } from '@/hooks/useApprovalTemplates';
import { LoadingSpinner } from './LoadingSpinner';
import { CreateApprovalModal } from './CreateApprovalModal';

interface FilterState {
  status: string[];
}

const statusOptions = ['Active', 'Draft', 'Retired'];

export function ApprovalAuthorities() {
  const { tenantId, userId, email, isAuthenticated, isLoading: authLoading } = useAuthFromParent();
  const { data: templates, isLoading: dataLoading, error } = useApprovalTemplates(tenantId);

  const [selectedAuthority, setSelectedAuthority] = useState<ApprovalTemplateRow | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [filters, setFilters] = useState<FilterState>({ status: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  // Calculate dynamic rows based on viewport height
  useEffect(() => {
    const calculateRows = () => {
      const viewportHeight = window.innerHeight;
      const headerHeight = 140;
      const footerHeight = 48;
      const tableHeaderHeight = 40;
      const rowHeight = 56;
      const availableHeight = viewportHeight - headerHeight - footerHeight - tableHeaderHeight - 60;
      const calculatedRows = Math.floor(availableHeight / rowHeight);
      setRowsPerPage(Math.max(5, calculatedRows));
    };

    calculateRows();
    window.addEventListener('resize', calculateRows);
    return () => window.removeEventListener('resize', calculateRows);
  }, []);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target as Node)) {
        setShowFilterDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeDrawer = () => setSelectedAuthority(null);

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
    setCurrentPage(1);
  };

  const removeFilter = (category: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].filter(v => v !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({ status: [] });
  };

  const activeFilterCount = filters.status.length;

  // Show loading spinner
  if (authLoading || dataLoading) {
    return <LoadingSpinner />;
  }

  // Filter data
  const filteredData = templates.filter(t => {
    const matchesSearch = t.approval_template_name.toLowerCase().includes(searchTerm.toLowerCase());
    const status = t.version_status || '';
    const matchesStatus = filters.status.length === 0 || filters.status.some(f => f.toLowerCase() === status.toLowerCase());
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Calculate summary metrics (case-insensitive matching)
  const activeCount = templates.filter(a => a.version_status?.toLowerCase() === 'active').length;
  const draftCount = templates.filter(a => a.version_status?.toLowerCase() === 'draft').length;
  const retiredCount = templates.filter(a => a.version_status?.toLowerCase() === 'retired').length;

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Financial': 'bg-blue-50 text-blue-700 border-blue-200',
      'Access': 'bg-purple-50 text-purple-700 border-purple-200',
      'Policy': 'bg-amber-50 text-amber-700 border-amber-200',
      'Operational': 'bg-slate-100 text-slate-700 border-slate-200'
    };
    return colors[type] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const getStatusDotColor = (status: string) => {
    const colors: Record<string, string> = {
      'Active': 'bg-emerald-500',
      'Draft': 'bg-amber-500',
      'Retired': 'bg-gray-400'
    };
    return colors[status] || 'bg-gray-400';
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '-';
    try {
      return format(new Date(dateStr), 'MMM dd, yyyy');
    } catch {
      return '-';
    }
  };

  const formatCreatedAt = (dateStr: string | null) => {
    if (!dateStr) return '-';
    try {
      return format(new Date(dateStr), "MMMM d, yyyy • HH:mm 'UTC'");
    } catch {
      return '-';
    }
  };

  const getVersionDisplay = (versionNumber: string | null) => {
    if (versionNumber === null || versionNumber === undefined) return '-';
    return `v${versionNumber}`;
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-8 lg:px-12">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 font-bold">
            Approval Authorities
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Central inventory of defined approval authorities for governance and audit review.
          </p>
        </header>

        {/* Main Card Container */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          {/* Search, Filter & Status Row */}
          <div className="p-4 md:p-5 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search Bar and Filter */}
              <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full lg:w-auto">
                {/* Search Bar */}
                <div className="w-full sm:w-80">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search authorities..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                {/* Filter Button */}
                <div className="relative" ref={filterDropdownRef}>
                  <button
                    onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors relative w-full sm:w-auto justify-center"
                  >
                    <Filter className="w-4 h-4" />
                    Filter
                    <ChevronDown className={`w-4 h-4 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
                    {activeFilterCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>

                  {/* Filter Dropdown - Status only */}
                  {showFilterDropdown && (
                    <div className="absolute left-0 sm:right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-30 overflow-hidden">
                      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                        {/* Status */}
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Status
                          </label>
                          <div className="space-y-2">
                            {statusOptions.map(status => (
                              <label key={status} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                                <input
                                  type="checkbox"
                                  checked={filters.status.includes(status)}
                                  onChange={() => toggleFilter('status', status)}
                                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <span className="text-sm text-gray-700">{status}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Badges Row */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                    {activeCount}
                  </span>
                  <span className="text-xs font-medium text-gray-600">Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                    {draftCount}
                  </span>
                  <span className="text-xs font-medium text-gray-600">Draft</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-700 text-xs font-bold">
                    {retiredCount}
                  </span>
                  <span className="text-xs font-medium text-gray-600">Retired</span>
                </div>
                
                {/* Create Approval Button */}
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all"
                >
                  Create Approval Workflow
                </button>
              </div>
            </div>

            {/* Active Filter Chips */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                {filters.status.map(status => (
                  <span
                    key={`status-${status}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-full"
                  >
                    Status: {status}
                    <button
                      onClick={() => removeFilter('status', status)}
                      className="hover:bg-amber-100 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-800 underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Empty state */}
          {templates.length === 0 && !error && (
            <div className="p-12 text-center">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-sm font-medium text-gray-900 mb-1">No approval authorities found</h3>
              <p className="text-xs text-gray-500">No approval templates exist for this tenant yet.</p>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="p-12 text-center">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Desktop Table View */}
          {templates.length > 0 && (
            <div className="hidden md:block overflow-x-auto" ref={tableContainerRef}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      Authority Name
                    </th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">
                      Version
                    </th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      Last Updated
                    </th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedData.map((t) => (
                    <tr
                      key={t.template_id}
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => setSelectedAuthority(t)}
                    >
                      <td className="px-4 py-2">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-[rgb(16,40,40)]">
                            {t.approval_template_name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border uppercase ${getTypeColor(t.approval_type)}`}>
                          {t.approval_type}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-sm text-gray-500">{getVersionDisplay(t.version_number)}</span>
                      </td>
                      <td className="px-4 py-2">
                        <span className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                          <span className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(t.version_status || '')}`}></span>
                          {t.version_status || '-'}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">
                        {formatDate(t.updated_at)}
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-end">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedAuthority(t);
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            View details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Mobile Card View */}
          {templates.length > 0 && (
            <div className="md:hidden divide-y divide-gray-100">
              {paginatedData.map((t) => (
                <div
                  key={t.template_id}
                  onClick={() => setSelectedAuthority(t)}
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        {t.approval_template_name}
                      </h3>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                      <span className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(t.version_status || '')}`}></span>
                      {t.version_status || '-'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className={`px-2 py-0.5 rounded border uppercase ${getTypeColor(t.approval_type)}`}>
                      {t.approval_type}
                    </span>
                    <span>{formatDate(t.updated_at)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer with Pagination */}
          {totalPages > 1 && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="text-xs text-gray-500">
                Showing {(currentPage - 1) * rowsPerPage + 1} to{' '}
                {Math.min(currentPage * rowsPerPage, filteredData.length)} of{' '}
                {filteredData.length} authorities
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 flex items-center justify-center rounded text-xs font-medium transition-all ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm border border-transparent'
                          : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay Drawer */}
      {selectedAuthority && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-200"
            onClick={closeDrawer}
            style={{ animation: 'fadeIn 200ms ease-out' }}
          />

          {/* Drawer Panel */}
          <aside
            className="fixed inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-[500px] bg-white z-50 flex flex-col md:border-l border-gray-200 shadow-2xl"
            style={{ animation: 'slideInRight 250ms ease-out' }}
          >
            {/* DRAWER HEADER */}
            <div className="px-4 md:px-6 py-4 md:py-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Authority Details</h3>
              <button
                onClick={closeDrawer}
                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* DRAWER CONTENT (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6 space-y-6 md:space-y-8">
              
              {/* Basic Information Section */}
              <div className="space-y-4">
                <h5 className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Basic Information
                </h5>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Name</span>
                      <span className="font-medium text-gray-900 text-right max-w-[60%]">
                        {selectedAuthority.approval_template_name}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium text-gray-900">{selectedAuthority.approval_type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Version</span>
                      <span className="font-medium text-gray-900">{getVersionDisplay(selectedAuthority.version_number)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Status</span>
                      <span className={`font-semibold ${
                        selectedAuthority.version_status === 'Active' ? 'text-emerald-600' :
                        selectedAuthority.version_status === 'Draft' ? 'text-amber-600' :
                        'text-gray-500'
                      }`}>
                        {selectedAuthority.version_status || '-'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="space-y-4">
                <h5 className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Timeline
                </h5>
                <div className="relative pl-6 space-y-6">
                  <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200"></div>
                  
                  <div className="relative">
                    <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white ring-4 ring-emerald-50"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Last Updated</p>
                      <p className="text-xs text-gray-600 mt-0.5">{formatDate(selectedAuthority.updated_at)}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-gray-400 border-2 border-white ring-4 ring-gray-50"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Created</p>
                      <p className="text-xs text-gray-600 mt-0.5">{formatCreatedAt(selectedAuthority.created_at)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Created By Section */}
              <div className="space-y-4">
                <h5 className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Created By
                </h5>
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm">
                      {(selectedAuthority.creator_name || '?').charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {selectedAuthority.creator_name || 'Unknown'}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {selectedAuthority.creator_email || '-'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notice */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-blue-800 italic">
                  This record is read-only. For modifications, please contact the Governance Committee.
                </p>
              </div>
            </div>

          </aside>
        </>
      )}

      {/* Required CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { 
            transform: translateX(100%);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      {/* Create Approval Workflow Modal */}
      <CreateApprovalModal
        open={showCreateModal}
        onClose={(result) => {
          setShowCreateModal(false);
          // If created, could refresh data here
        }}
        tenantId={tenantId}
        userId={userId}
        email={email}
      />
    </>
  );
}
