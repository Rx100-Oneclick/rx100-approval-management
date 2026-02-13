import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, X, ChevronLeft, ChevronRight, Eye, ChevronDown, Clock, User, FileText } from 'lucide-react';

interface Authority {
  id: string;
  name: string;
  code: string;
  type: 'Financial' | 'Access' | 'Policy' | 'Operational';
  scope: string;
  scopeType: 'Organization' | 'Application' | 'Resource';
  version: string;
  status: 'Active' | 'Draft' | 'Retired';
  lastUpdated: string;
  createdBy: string;
  createdAt: string;
  avatar: string;
}

const mockAuthorities: Authority[] = [
  {
    id: '1',
    name: 'Capital Expenditure > $50k',
    code: 'AUTH-FIN-2024-001',
    type: 'Financial',
    scope: 'Global Finance Org',
    scopeType: 'Organization',
    version: 'v2.4.1',
    status: 'Active',
    lastUpdated: 'Feb 08, 2024',
    createdBy: 'Marcus Thorne',
    createdAt: 'October 12, 2023 • 14:30 UTC',
    avatar: 'https://i.pravatar.cc/150?img=8'
  },
  {
    id: '2',
    name: 'Production Database Access',
    code: 'AUTH-ACC-2024-042',
    type: 'Access',
    scope: 'AWS Production Cluster',
    scopeType: 'Resource',
    version: 'v1.0.8',
    status: 'Active',
    lastUpdated: 'Jan 15, 2024',
    createdBy: 'Sarah Chen',
    createdAt: 'September 5, 2023 • 09:15 UTC',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '3',
    name: 'Information Security Policy Exception',
    code: 'AUTH-POL-2023-019',
    type: 'Policy',
    scope: 'Enterprise Security',
    scopeType: 'Organization',
    version: 'v3.0.0',
    status: 'Draft',
    lastUpdated: 'Feb 09, 2024',
    createdBy: 'Emily Rodriguez',
    createdAt: 'November 20, 2023 • 16:45 UTC',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: '4',
    name: 'Procurement Contract Review',
    code: 'AUTH-OPR-2023-882',
    type: 'Operational',
    scope: 'Legal & Compliance',
    scopeType: 'Organization',
    version: 'v1.2.0',
    status: 'Retired',
    lastUpdated: 'Dec 20, 2023',
    createdBy: 'David Kim',
    createdAt: 'August 10, 2023 • 11:20 UTC',
    avatar: 'https://i.pravatar.cc/150?img=8'
  },
  {
    id: '5',
    name: 'Cloud Infrastructure Scaling',
    code: 'AUTH-OPR-2024-005',
    type: 'Operational',
    scope: 'Engineering',
    scopeType: 'Application',
    version: 'v2.1.0',
    status: 'Active',
    lastUpdated: 'Feb 01, 2024',
    createdBy: 'Jessica Wang',
    createdAt: 'January 10, 2024 • 10:00 UTC',
    avatar: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: '6',
    name: 'Payment Processing Authority',
    code: 'AUTH-FIN-2024-012',
    type: 'Financial',
    scope: 'Finance Operations',
    scopeType: 'Application',
    version: 'v1.5.2',
    status: 'Active',
    lastUpdated: 'Feb 05, 2024',
    createdBy: 'Robert Chang',
    createdAt: 'December 1, 2023 • 13:30 UTC',
    avatar: 'https://i.pravatar.cc/150?img=13'
  },
  {
    id: '7',
    name: 'Customer Data Export',
    code: 'AUTH-ACC-2024-033',
    type: 'Access',
    scope: 'Customer Database',
    scopeType: 'Resource',
    version: 'v2.0.1',
    status: 'Active',
    lastUpdated: 'Jan 28, 2024',
    createdBy: 'Amanda Lee',
    createdAt: 'October 25, 2023 • 15:00 UTC',
    avatar: 'https://i.pravatar.cc/150?img=10'
  },
  {
    id: '8',
    name: 'Emergency System Override',
    code: 'AUTH-OPR-2024-099',
    type: 'Operational',
    scope: 'Critical Systems',
    scopeType: 'Application',
    version: 'v1.0.0',
    status: 'Draft',
    lastUpdated: 'Feb 07, 2024',
    createdBy: 'James Wilson',
    createdAt: 'January 20, 2024 • 08:45 UTC',
    avatar: 'https://i.pravatar.cc/150?img=14'
  },
  {
    id: '9',
    name: 'Vendor Payment Approval',
    code: 'AUTH-FIN-2024-018',
    type: 'Financial',
    scope: 'Accounts Payable',
    scopeType: 'Organization',
    version: 'v3.2.1',
    status: 'Active',
    lastUpdated: 'Jan 30, 2024',
    createdBy: 'Lisa Martinez',
    createdAt: 'November 30, 2023 • 12:15 UTC',
    avatar: 'https://i.pravatar.cc/150?img=20'
  },
  {
    id: '10',
    name: 'API Rate Limit Override',
    code: 'AUTH-POL-2024-055',
    type: 'Policy',
    scope: 'API Gateway',
    scopeType: 'Resource',
    version: 'v1.8.3',
    status: 'Active',
    lastUpdated: 'Feb 02, 2024',
    createdBy: 'Kevin Park',
    createdAt: 'December 5, 2023 • 14:20 UTC',
    avatar: 'https://i.pravatar.cc/150?img=15'
  },
  {
    id: '11',
    name: 'Employee Onboarding Access',
    code: 'AUTH-ACC-2024-067',
    type: 'Access',
    scope: 'HR Systems',
    scopeType: 'Application',
    version: 'v2.3.0',
    status: 'Active',
    lastUpdated: 'Jan 25, 2024',
    createdBy: 'Sophia Anderson',
    createdAt: 'January 5, 2024 • 09:30 UTC',
    avatar: 'https://i.pravatar.cc/150?img=25'
  },
  {
    id: '12',
    name: 'Data Retention Policy',
    code: 'AUTH-POL-2023-088',
    type: 'Policy',
    scope: 'Enterprise Data',
    scopeType: 'Organization',
    version: 'v1.1.5',
    status: 'Active',
    lastUpdated: 'Jan 18, 2024',
    createdBy: 'Thomas Brown',
    createdAt: 'September 15, 2023 • 16:00 UTC',
    avatar: 'https://i.pravatar.cc/150?img=33'
  },
  {
    id: '13',
    name: 'Marketing Campaign Budget',
    code: 'AUTH-FIN-2024-021',
    type: 'Financial',
    scope: 'Marketing Division',
    scopeType: 'Organization',
    version: 'v1.9.2',
    status: 'Draft',
    lastUpdated: 'Feb 06, 2024',
    createdBy: 'Rachel Green',
    createdAt: 'November 10, 2023 • 10:45 UTC',
    avatar: 'https://i.pravatar.cc/150?img=45'
  },
  {
    id: '14',
    name: 'Contract Signing Authority',
    code: 'AUTH-FIN-2024-014',
    type: 'Financial',
    scope: 'Legal Department',
    scopeType: 'Organization',
    version: 'v2.0.8',
    status: 'Active',
    lastUpdated: 'Jan 22, 2024',
    createdBy: 'Daniel White',
    createdAt: 'December 2, 2023 • 11:30 UTC',
    avatar: 'https://i.pravatar.cc/150?img=52'
  },
  {
    id: '15',
    name: 'System Configuration Change',
    code: 'AUTH-OPR-2024-041',
    type: 'Operational',
    scope: 'Production Systems',
    scopeType: 'Application',
    version: 'v1.4.7',
    status: 'Active',
    lastUpdated: 'Jan 20, 2024',
    createdBy: 'Olivia Harris',
    createdAt: 'November 20, 2023 • 13:15 UTC',
    avatar: 'https://i.pravatar.cc/150?img=21'
  },
  {
    id: '16',
    name: 'Customer PII Access',
    code: 'AUTH-ACC-2024-073',
    type: 'Access',
    scope: 'Customer Database',
    scopeType: 'Resource',
    version: 'v3.1.2',
    status: 'Active',
    lastUpdated: 'Feb 04, 2024',
    createdBy: 'Nathan Scott',
    createdAt: 'December 10, 2023 • 15:45 UTC',
    avatar: 'https://i.pravatar.cc/150?img=60'
  },
  {
    id: '17',
    name: 'Budget Reallocation',
    code: 'AUTH-FIN-2024-029',
    type: 'Financial',
    scope: 'Finance Controller',
    scopeType: 'Organization',
    version: 'v1.7.9',
    status: 'Draft',
    lastUpdated: 'Feb 03, 2024',
    createdBy: 'Emma Thompson',
    createdAt: 'November 15, 2023 • 14:00 UTC',
    avatar: 'https://i.pravatar.cc/150?img=30'
  },
  {
    id: '18',
    name: 'Disaster Recovery Execution',
    code: 'AUTH-POL-2024-012',
    type: 'Policy',
    scope: 'IT Operations',
    scopeType: 'Organization',
    version: 'v2.5.3',
    status: 'Active',
    lastUpdated: 'Jan 27, 2024',
    createdBy: 'Christopher Lee',
    createdAt: 'December 1, 2023 • 09:00 UTC',
    avatar: 'https://i.pravatar.cc/150?img=70'
  },
  {
    id: '19',
    name: 'Third-Party Integration',
    code: 'AUTH-OPR-2024-055',
    type: 'Operational',
    scope: 'API Platform',
    scopeType: 'Application',
    version: 'v1.3.6',
    status: 'Active',
    lastUpdated: 'Jan 31, 2024',
    createdBy: 'Isabella Garcia',
    createdAt: 'November 25, 2023 • 11:00 UTC',
    avatar: 'https://i.pravatar.cc/150?img=26'
  },
  {
    id: '20',
    name: 'Quarterly Financial Review',
    code: 'AUTH-FIN-2024-037',
    type: 'Financial',
    scope: 'Finance Operations',
    scopeType: 'Organization',
    version: 'v2.2.4',
    status: 'Active',
    lastUpdated: 'Feb 01, 2024',
    createdBy: 'Matthew Johnson',
    createdAt: 'December 15, 2023 • 16:30 UTC',
    avatar: 'https://i.pravatar.cc/150?img=65'
  },
  {
    id: '21',
    name: 'Network Security Protocol',
    code: 'AUTH-POL-2024-028',
    type: 'Policy',
    scope: 'Network Infrastructure',
    scopeType: 'Resource',
    version: 'v1.6.1',
    status: 'Active',
    lastUpdated: 'Jan 29, 2024',
    createdBy: 'Ava Martinez',
    createdAt: 'November 30, 2023 • 10:15 UTC',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    id: '22',
    name: 'Procurement Approval Workflow',
    code: 'AUTH-FIN-2023-091',
    type: 'Financial',
    scope: 'Procurement',
    scopeType: 'Organization',
    version: 'v3.0.2',
    status: 'Retired',
    lastUpdated: 'Dec 15, 2023',
    createdBy: 'Ethan Davis',
    createdAt: 'August 5, 2023 • 12:00 UTC',
    avatar: 'https://i.pravatar.cc/150?img=55'
  },
  {
    id: '23',
    name: 'Email Communication Policy',
    code: 'AUTH-POL-2024-041',
    type: 'Policy',
    scope: 'Corporate Communications',
    scopeType: 'Organization',
    version: 'v1.0.9',
    status: 'Active',
    lastUpdated: 'Jan 24, 2024',
    createdBy: 'Mia Wilson',
    createdAt: 'November 20, 2023 • 14:45 UTC',
    avatar: 'https://i.pravatar.cc/150?img=42'
  },
  {
    id: '24',
    name: 'Remote Work VPN Access',
    code: 'AUTH-ACC-2024-089',
    type: 'Access',
    scope: 'Corporate Network',
    scopeType: 'Resource',
    version: 'v2.4.5',
    status: 'Active',
    lastUpdated: 'Feb 02, 2024',
    createdBy: 'Alexander Moore',
    createdAt: 'December 10, 2023 • 08:30 UTC',
    avatar: 'https://i.pravatar.cc/150?img=68'
  },
  {
    id: '25',
    name: 'Customer Refund Processing',
    code: 'AUTH-FIN-2024-044',
    type: 'Financial',
    scope: 'Customer Service',
    scopeType: 'Application',
    version: 'v1.8.7',
    status: 'Active',
    lastUpdated: 'Jan 26, 2024',
    createdBy: 'Charlotte Taylor',
    createdAt: 'January 5, 2024 • 15:00 UTC',
    avatar: 'https://i.pravatar.cc/150?img=48'
  }
];

interface FilterState {
  type: string[];
  scopeType: string[];
  status: string[];
}

const typeOptions = ['Financial', 'Access', 'Policy', 'Operational'];
const scopeTypeOptions = ['Organization', 'Application'];
const statusOptions = ['Active', 'Draft', 'Retired'];

export function ApprovalAuthorities() {
  const [selectedAuthority, setSelectedAuthority] = useState<Authority | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [filters, setFilters] = useState<FilterState>({ type: [], scopeType: [], status: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  // Calculate dynamic rows based on viewport height
  useEffect(() => {
    const calculateRows = () => {
      const viewportHeight = window.innerHeight;
      const headerHeight = 140; // Reduced from 200
      const footerHeight = 48;  // Reduced from 60
      const tableHeaderHeight = 40; // Reduced from 48
      const rowHeight = 56; // Reduced from 73 (py-2 instead of py-4)
      const availableHeight = viewportHeight - headerHeight - footerHeight - tableHeaderHeight - 60; // Reduced margin
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
    const newFilters = {
      ...filters,
      [category]: filters[category].filter(v => v !== value)
    };
    setFilters(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({ type: [], scopeType: [], status: [] });
  };

  const activeFilterCount = filters.type.length + filters.scopeType.length + filters.status.length;

  // Filter data
  const filteredData = mockAuthorities.filter(auth => {
    const matchesSearch = auth.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auth.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filters.type.length === 0 || filters.type.includes(auth.type);
    const matchesScopeType = filters.scopeType.length === 0 || filters.scopeType.includes(auth.scopeType);
    const matchesStatus = filters.status.length === 0 || filters.status.includes(auth.status);
    return matchesSearch && matchesType && matchesScopeType && matchesStatus;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Calculate summary metrics
  const totalAuthorities = mockAuthorities.length;
  const activeCount = mockAuthorities.filter(a => a.status === 'Active').length;
  const draftCount = mockAuthorities.filter(a => a.status === 'Draft').length;
  const retiredCount = mockAuthorities.filter(a => a.status === 'Retired').length;

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
                {/* Search Bar - Smaller width */}
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

                  {/* Filter Dropdown */}
                  {showFilterDropdown && (
                    <div className="absolute left-0 sm:right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-30 overflow-hidden">
                      
                      
                      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                        {/* Authority Type */}
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Authority Type
                          </label>
                          <div className="space-y-2">
                            {typeOptions.map(type => (
                              <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                                <input
                                  type="checkbox"
                                  checked={filters.type.includes(type)}
                                  onChange={() => toggleFilter('type', type)}
                                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <span className="text-sm text-gray-700">{type}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Scope Type */}
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Scope Type
                          </label>
                          <div className="space-y-2">
                            {scopeTypeOptions.map(scopeType => (
                              <label key={scopeType} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                                <input
                                  type="checkbox"
                                  checked={filters.scopeType.includes(scopeType)}
                                  onChange={() => toggleFilter('scopeType', scopeType)}
                                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <span className="text-sm text-gray-700">{scopeType}</span>
                              </label>
                            ))}
                          </div>
                        </div>

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
                <button className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all">
                  Create Approval Workflow
                </button>
              </div>
            </div>

            {/* Active Filter Chips */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                {filters.type.map(type => (
                  <span
                    key={`type-${type}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-full"
                  >
                    Type: {type}
                    <button
                      onClick={() => removeFilter('type', type)}
                      className="hover:bg-blue-100 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {filters.scopeType.map(scopeType => (
                  <span
                    key={`scopeType-${scopeType}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200 rounded-full"
                  >
                    Scope: {scopeType}
                    <button
                      onClick={() => removeFilter('scopeType', scopeType)}
                      className="hover:bg-purple-100 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
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

          {/* Desktop Table View */}
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
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Scope
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
                {paginatedData.map((authority) => (
                  <tr
                    key={authority.id}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => setSelectedAuthority(authority)}
                  >
                    <td className="px-4 py-2">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[rgb(16,40,40)]">
                          {authority.name}
                        </span>
                        <span className="text-[11px] text-gray-400 font-mono mt-0.5">
                          {authority.code}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border uppercase ${getTypeColor(authority.type)}`}>
                        {authority.type}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm text-gray-600">{authority.scope}</span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <span className="text-sm text-gray-500">{authority.version}</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                        <span className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(authority.status)}`}></span>
                        {authority.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500">
                      {authority.lastUpdated}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex justify-end">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedAuthority(authority);
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

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-gray-100">
            {paginatedData.map((authority) => (
              <div
                key={authority.id}
                onClick={() => setSelectedAuthority(authority)}
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                      {authority.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono">{authority.code}</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                    <span className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(authority.status)}`}></span>
                    {authority.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className={`px-2 py-0.5 rounded border uppercase ${getTypeColor(authority.type)}`}>
                    {authority.type}
                  </span>
                  <span>{authority.lastUpdated}</span>
                </div>
              </div>
            ))}
          </div>

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
                      <span className="text-gray-600">Authority ID</span>
                      <span className="font-mono text-gray-900">{selectedAuthority.code}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Name</span>
                      <span className="font-medium text-gray-900 text-right max-w-[60%]">
                        {selectedAuthority.name}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium text-gray-900">{selectedAuthority.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Scope</span>
                      <span className="font-medium text-gray-900 text-right max-w-[60%]">{selectedAuthority.scope}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Scope Type</span>
                      <span className="font-medium text-gray-900">{selectedAuthority.scopeType}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Version</span>
                      <span className="font-medium text-gray-900">{selectedAuthority.version}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Status</span>
                      <span className={`font-semibold ${
                        selectedAuthority.status === 'Active' ? 'text-emerald-600' :
                        selectedAuthority.status === 'Draft' ? 'text-amber-600' :
                        'text-gray-500'
                      }`}>
                        {selectedAuthority.status}
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
                      <p className="text-xs text-gray-600 mt-0.5">{selectedAuthority.lastUpdated}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white ring-4 ring-blue-50"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Version Released</p>
                      <p className="text-xs text-gray-600 mt-0.5">{selectedAuthority.version} • Jan 15, 2024</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-gray-400 border-2 border-white ring-4 ring-gray-50"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Created</p>
                      <p className="text-xs text-gray-600 mt-0.5">{selectedAuthority.createdAt}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creator Information Section */}
              <div className="space-y-4">
                <h5 className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Owner Information
                </h5>
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedAuthority.avatar}
                      alt={selectedAuthority.createdBy}
                      className="w-12 h-12 rounded-full border border-gray-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {selectedAuthority.createdBy}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        Created: {selectedAuthority.createdAt}
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

            {/* DRAWER FOOTER */}
            
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
    </>
  );
}