import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const StaffDashboardPage = () => {
    const { user } = useAuth();

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Staff Dashboard</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg text-gray-700">
                    Welcome back, <span className="font-semibold">{user?.fullName || user?.email}</span>!
                </p>
                <p className="mt-2 text-gray-600">
                    From here you can manage donation appointments and review emergency blood requests.
                </p>
            </div>
        </div>
    );
};

export default StaffDashboardPage;
