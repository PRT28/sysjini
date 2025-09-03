import { NextResponse } from 'next/server';
import { getContactsFromSheet, getContactStats, updateContactStatus } from '../../../../../lib/googleSheets';

// Simple authentication check
const isAuthenticated = (request) => {
    const authHeader = request.headers.get('authorization');
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (!authHeader) {
        return false;
    }
    
    // Extract token from "Bearer token" format
    const token = authHeader.replace('Bearer ', '');
    return token === adminPassword;
};

// GET - Fetch all contacts
export async function GET(request) {
    try {
        // Check authentication
        if (!isAuthenticated(request)) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }
        
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit')) || 50;
        const includeStats = searchParams.get('stats') === 'true';
        
        // Get contacts from Google Sheets
        const contacts = await getContactsFromSheet(limit);
        
        let stats = null;
        if (includeStats) {
            stats = await getContactStats();
        }
        
        return NextResponse.json({
            success: true,
            contacts,
            stats,
            total: contacts.length
        });
        
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json(
            { 
                success: false, 
                message: 'Failed to fetch contacts',
                error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
            },
            { status: 500 }
        );
    }
}

// PUT - Update contact status
export async function PUT(request) {
    try {
        // Check authentication
        if (!isAuthenticated(request)) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }
        
        const { rowNumber, status } = await request.json();
        
        if (!rowNumber || !status) {
            return NextResponse.json(
                { success: false, message: 'Row number and status are required' },
                { status: 400 }
            );
        }
        
        // Validate status
        const validStatuses = ['New', 'Read', 'Replied'];
        if (!validStatuses.includes(status)) {
            return NextResponse.json(
                { success: false, message: 'Invalid status. Must be: New, Read, or Replied' },
                { status: 400 }
            );
        }
        
        // Update status in Google Sheets
        await updateContactStatus(rowNumber, status);
        
        return NextResponse.json({
            success: true,
            message: 'Contact status updated successfully'
        });
        
    } catch (error) {
        console.error('Error updating contact status:', error);
        return NextResponse.json(
            { 
                success: false, 
                message: 'Failed to update contact status',
                error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
            },
            { status: 500 }
        );
    }
}

// POST - Test authentication
export async function POST(request) {
    try {
        const { password } = await request.json();
        const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
        
        if (password === adminPassword) {
            return NextResponse.json({
                success: true,
                message: 'Authentication successful',
                token: adminPassword
            });
        } else {
            return NextResponse.json(
                { success: false, message: 'Invalid password' },
                { status: 401 }
            );
        }
        
    } catch (error) {
        console.error('Error during authentication:', error);
        return NextResponse.json(
            { success: false, message: 'Authentication failed' },
            { status: 500 }
        );
    }
}
