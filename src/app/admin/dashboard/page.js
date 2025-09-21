'use client'
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const [contacts, setContacts] = useState([]);
    const [stats, setStats] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
    const router = useRouter();

    const fetchContacts = useCallback(async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('/api/admin/contacts?stats=true&limit=100', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 401) {
                localStorage.removeItem('adminToken');
                router.push('/admin');
                return;
            }

            const result = await response.json();

            if (result.success) {
                setContacts(result.contacts);
                setStats(result.stats);
            } else {
                setError(result.message || 'Failed to fetch contacts');
            }
        } catch (error) {
            console.error('Error fetching contacts:', error);
            setError('Failed to load contacts');
        } finally {
            setIsLoading(false);
        }
    }, [router]);

    useEffect(() => {
        // Check authentication
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin');
            return;
        }

        fetchContacts();
    }, [router, fetchContacts]);

    const updateContactStatus = async (rowNumber, status) => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('/api/admin/contacts', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ rowNumber, status }),
            });

            const result = await response.json();

            if (result.success) {
                // Update local state
                setContacts(contacts.map(contact => 
                    contact.row_number === rowNumber 
                        ? { ...contact, status } 
                        : contact
                ));
                
                // Refresh stats
                fetchContacts();
            } else {
                setError(result.message || 'Failed to update status');
            }
        } catch (error) {
            console.error('Error updating status:', error);
            setError('Failed to update status');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        router.push('/admin');
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString();
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'New': return 'bg-blue-100 text-blue-800';
            case 'Read': return 'bg-yellow-100 text-yellow-800';
            case 'Replied': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading contacts...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Contact Form Dashboard</h1>
                            <p className="text-gray-600">Manage contact form submissions</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700">{error}</p>
                    </div>
                )}

                {/* Stats Cards */}
                {stats && (
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-sm font-medium text-gray-500">Total Contacts</h3>
                            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-sm font-medium text-gray-500">New</h3>
                            <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-sm font-medium text-gray-500">Read</h3>
                            <p className="text-2xl font-bold text-yellow-600">{stats.read}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-sm font-medium text-gray-500">Replied</h3>
                            <p className="text-2xl font-bold text-green-600">{stats.replied}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-sm font-medium text-gray-500">Last 30 Days</h3>
                            <p className="text-2xl font-bold text-emerald-600">{stats.recent}</p>
                        </div>
                    </div>
                )}

                {/* Contacts Table */}
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900">Contact Submissions</h2>
                    </div>
                    
                    {contacts.length === 0 ? (
                        <div className="p-8 text-center">
                            <p className="text-gray-500">No contact submissions found.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Subject
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {contacts.map((contact) => (
                                        <tr key={contact.row_number} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {formatDate(contact.timestamp)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {contact.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <a href={`mailto:${contact.email}`} className="text-emerald-600 hover:text-emerald-800">
                                                    {contact.email}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                                                {contact.subject}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                                                    {contact.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                <button
                                                    onClick={() => setSelectedContact(contact)}
                                                    className="text-emerald-600 hover:text-emerald-900"
                                                >
                                                    View
                                                </button>
                                                <select
                                                    value={contact.status}
                                                    onChange={(e) => updateContactStatus(contact.row_number, e.target.value)}
                                                    className="text-sm border border-gray-300 rounded px-2 py-1"
                                                >
                                                    <option value="New">New</option>
                                                    <option value="Read">Read</option>
                                                    <option value="Replied">Replied</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Contact Detail Modal */}
            {selectedContact && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
                        <div className="mt-3">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium text-gray-900">Contact Details</h3>
                                <button
                                    onClick={() => setSelectedContact(null)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <p className="mt-1 text-sm text-gray-900">{selectedContact.name}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <p className="mt-1 text-sm text-gray-900">{selectedContact.email}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                                    <p className="mt-1 text-sm text-gray-900">{selectedContact.subject}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{selectedContact.message}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Submitted</label>
                                    <p className="mt-1 text-sm text-gray-900">{formatDate(selectedContact.timestamp)}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Status</label>
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedContact.status)}`}>
                                        {selectedContact.status}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="mt-6 flex justify-end space-x-3">
                                <a
                                    href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}
                                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                                >
                                    Reply via Email
                                </a>
                                <button
                                    onClick={() => setSelectedContact(null)}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
