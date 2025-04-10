// import React from 'react';
import StudySpaceLogo from "../../../assets/images/StudySpace_logo.png";
import {
    ChartBarIcon,
    UsersIcon,
    BuildingOfficeIcon,
    CalendarIcon,
    CalculatorIcon,
    ExclamationTriangleIcon,
    ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'; // Chọn kiểu outline hoặc solid tùy thích

function Sidebar() {
    const navigation = [
        { name: 'Dashboard', href: '#', icon: ChartBarIcon },
        { name: 'Users', href: '#', icon: UsersIcon },
        { name: 'Rooms', href: '#', icon: BuildingOfficeIcon },
        { name: 'Booking Schedule', href: '#', icon: CalendarIcon },
        { name: 'Device control', href: '#', icon: CalculatorIcon },
        { name: 'Notification', href: '#', icon: ExclamationTriangleIcon },
    ];
    const logoutItem = { name: 'Log Out', href: '#', icon: ArrowLeftOnRectangleIcon };

    return (
        <>
            <div className="min-h-screen w-64 bg-black_admin text-white_admin font-Roboto flex flex-col justify-between">
                <div className="p-5">
                    <div className="flex items-center">
                        <img
                            src={StudySpaceLogo}
                            alt="StudySpace Logo"
                            className="h-[60px] w-[60px]"
                        />
                        <p className="font-bold text-lg">STUDYSPACE</p>
                    </div>
                    <div className="border-b border-gray-700 my-4"></div>
                    <nav className="space-y-2">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center p-3 rounded-md hover:bg-gray-700 text-gray-300"
                            >
                                <item.icon className="h-5 w-5 mr-3" aria-hidden="true" />
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="p-5">
                    <div className="border-t border-gray-700 my-4"></div>
                    <a
                        href={logoutItem.href}
                        className="flex items-center p-3 rounded-md hover:bg-gray-700 text-gray-300"
                    >
                        <logoutItem.icon className="h-5 w-5 mr-3" aria-hidden="true" />
                        <span>{logoutItem.name}</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Sidebar;