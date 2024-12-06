import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useGetOrderByEmailQuery } from '../../../redux/features/orders/ordersApi';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
    const { currentUser } = useAuth();
    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser?.email);
    const cartItems = useSelector((state) => state.cart.cartItems);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error getting orders data</div>;

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg">
                <div className="p-6 border-b">
                    <h1 className="text-3xl font-bold">User Dashboard</h1>
                    <p className="text-gray-600">Welcome back, {currentUser?.name || 'User'}!</p>
                </div>

                {/* Dashboard Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {/* Section 1: Orders */}
                    <div className="bg-gray-50 rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
                        {orders.length > 0 ? (
                            <ul className="space-y-4">
                                {orders.map((order) => (
                                    <li key={order._id} className="p-4 bg-white rounded-lg shadow-sm">
                                        <p className="font-medium">Order ID: {order._id}</p>
                                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                                        <p>Total: ${order.totalPrice}</p>
                                        <Link
                                            to="/orders"
                                            className="hover:underline text-sm mt-2 inline-block"
                                        >
                                            Oredrs Detail
                                        </Link>
                                    </li>
                                ))}
                                
                            </ul>
                        ) : (
                            <p className="text-gray-600">You have no recent orders.</p>
                        )}
                    </div>

                    {/* Section 2: Cart */}
                    <div className="bg-gray-50 rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                        {cartItems.length > 0 ? (
                            <ul className="space-y-4">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="p-4 bg-white rounded-lg shadow-sm">
                                        <p className="font-medium">{item.title}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${item.price}</p>
                                        <Link
                                            to="/cart"
                                            className="hover:underline text-sm mt-2 inline-block"
                                        >
                                            Manage Cart
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">Your cart is empty.</p>
                        )}
                    </div>

                    {/* Section 3: Account Links */}
                    <div className="bg-gray-50 rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:underline">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:underline">
                                   About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service" className="hover:underline">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
