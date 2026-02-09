'use client';

import { useEffect, useState } from 'react';
import { FiPackage, FiGrid, FiShoppingCart, FiUsers, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import LoadingSpinner from '../../../components/LoadingSpinner';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    orders: 0,
    users: 0,
    revenue: 0,
    todayOrders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [productsRes, categoriesRes, ordersRes, usersRes] = await Promise.all([
        fetch('/api/products?limit=1'),
        fetch('/api/categories'),
        fetch('/api/admin/stats'),
        fetch('/api/admin/stats'),
      ]);

      const productsData = await productsRes.json();
      const categoriesData = await categoriesRes.json();

      setStats({
        products: productsData.pagination?.total || 0,
        categories: categoriesData.data?.length || 0,
        orders: 0, // Will be implemented with orders API
        users: 0, // Will be implemented with users API
        revenue: 0,
        todayOrders: 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Products',
      value: stats.products,
      icon: FiPackage,
      color: 'bg-blue-500',
      change: '+12%',
    },
    {
      title: 'Categories',
      value: stats.categories,
      icon: FiGrid,
      color: 'bg-green-500',
      change: '+5%',
    },
    {
      title: 'Total Orders',
      value: stats.orders,
      icon: FiShoppingCart,
      color: 'bg-purple-500',
      change: '+8%',
    },
    {
      title: 'Total Users',
      value: stats.users,
      icon: FiUsers,
      color: 'bg-orange-500',
      change: '+15%',
    },
    {
      title: 'Revenue',
      value: `₹${stats.revenue.toLocaleString()}`,
      icon: FiDollarSign,
      color: 'bg-gold',
      change: '+20%',
    },
    {
      title: "Today's Orders",
      value: stats.todayOrders,
      icon: FiTrendingUp,
      color: 'bg-pink-500',
      change: '+3%',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="sm" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <FiTrendingUp size={14} />
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`${stat.color} p-4 rounded-xl text-white`}>
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
          <div className="text-center py-8 text-gray-500">
            <p>No orders yet</p>
            <p className="text-sm mt-2">Orders will appear here</p>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Products</h2>
          <div className="text-center py-8 text-gray-500">
            <p>No data available</p>
            <p className="text-sm mt-2">Product analytics will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

