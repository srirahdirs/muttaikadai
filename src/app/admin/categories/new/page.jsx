'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import LoadingOverlay from '../../../../components/LoadingOverlay';

export default function NewCategory() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image_url: '',
    parent_id: '',
    sort_order: '0',
    is_active: true,
  });

  useEffect(() => {
    fetchCategories();
    // Initialize image preview if image_url exists
    if (formData.image_url) {
      setImagePreview(formData.image_url);
    }
  }, []);

  useEffect(() => {
    // Update preview when image_url changes externally
    if (formData.image_url && !imagePreview) {
      setImagePreview(formData.image_url);
    }
  }, [formData.image_url]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          parent_id: formData.parent_id ? parseInt(formData.parent_id) : null,
          sort_order: parseInt(formData.sort_order) || 0,
        }),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin/categories');
      } else {
        alert(data.error || 'Failed to create category');
      }
    } catch (error) {
      console.error('Error creating category:', error);
      alert('Error creating category');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      alert('Invalid file type. Please upload an image (JPEG, PNG, WEBP, or GIF).');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size too large. Maximum size is 5MB.');
      return;
    }

    setUploadingImage(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const response = await fetch('/api/upload/product-image', {
        method: 'POST',
        body: uploadFormData,
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ ...formData, image_url: data.url });
        setImagePreview(data.url);
        alert('Image uploaded successfully!');
      } else {
        alert(data.error || 'Failed to upload image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, image_url: url });
    setImagePreview(url);
  };

  return (
    <div className="relative">
      <LoadingOverlay show={loading} message="Creating category..." />
      <Link
        href="/admin/categories"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gold mb-6"
      >
        <FiArrowLeft />
        Back to Categories
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Add New Category</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.target.value,
                    slug: generateSlug(e.target.value),
                  });
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug *
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
              />
            </div>

            {/* Parent Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Parent Category
              </label>
              <select
                value={formData.parent_id}
                onChange={(e) => setFormData({ ...formData, parent_id: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
              >
                <option value="">None (Top Level)</option>
                {categories
                  .filter((cat) => !cat.parent_id)
                  .map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort Order
              </label>
              <input
                type="number"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                placeholder="0"
              />
            </div>

            {/* Image Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category Image
              </label>

              {/* Upload Option */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Image
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                      onChange={handleImageUpload}
                      disabled={uploadingImage}
                      className="hidden"
                    />
                    <div className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-gold transition text-center bg-gray-50">
                      {uploadingImage ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-gray-600">Uploading...</span>
                        </div>
                      ) : (
                        <span className="text-gray-600">
                          <span className="text-gold font-medium">Click to upload</span> or drag and drop
                          <br />
                          <span className="text-xs">PNG, JPG, WEBP or GIF (MAX. 5MB)</span>
                        </span>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              {/* OR Divider */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-sm text-gray-500">OR</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Manual URL Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or Enter Image URL
                </label>
                <input
                  type="text"
                  value={formData.image_url}
                  onChange={handleImageUrlChange}
                  placeholder="/assets/images/category/1.png"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                />
              </div>

              {/* Image Preview */}
              {(imagePreview || formData.image_url) && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                  <div className="w-48 h-48 border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={imagePreview || formData.image_url}
                      alt="Category Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/assets/images/category/1.png';
                        e.target.onerror = null;
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Current image: {formData.image_url || 'No image'}
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                placeholder="Enter category description..."
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                className="w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
              />
              <span className="text-sm text-gray-700">Active</span>
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gold hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating...
                </>
              ) : (
                'Create Category'
              )}
            </button>
            <Link
              href="/admin/categories"
              className="flex-1 text-center border border-gray-300 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
