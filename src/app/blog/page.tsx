'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

// Sample blog data - replace with your CMS/API data
const blogPosts = [
  {
    id: 1,
    slug: 'emergency-plumbing-tips',
    title: 'Emergency Plumbing Tips Every Homeowner Should Know',
    excerpt: 'Learn essential emergency plumbing techniques that can save you thousands in water damage while waiting for professional help.',
    author: 'HiTech Plumbing Team',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Emergency',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    featured: true,
    tags: ['Emergency', 'DIY', 'Prevention']
  },
  {
    id: 2,
    slug: 'tankless-water-heater-benefits',
    title: 'Why Tankless Water Heaters Are Worth the Investment',
    excerpt: 'Discover how tankless water heaters can reduce your energy bills by up to 30% and provide endless hot water for your family.',
    author: 'Mike Johnson',
    date: '2025-01-12',
    readTime: '7 min read',
    category: 'Hot Water',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop',
    featured: false,
    tags: ['Water Heaters', 'Energy Efficiency', 'Installation']
  },
  {
    id: 3,
    slug: 'winter-pipe-protection-guide',
    title: 'Complete Guide to Protecting Your Pipes This Winter',
    excerpt: 'Prevent costly frozen pipe damage with these proven strategies from Vancouver plumbing professionals.',
    author: 'Sarah Chen',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop',
    featured: false,
    tags: ['Winter', 'Prevention', 'Maintenance']
  },
  {
    id: 4,
    slug: 'gas-appliance-safety-checklist',
    title: 'Annual Gas Appliance Safety Checklist for Your Home',
    excerpt: 'Essential safety checks every homeowner should perform to ensure gas appliances operate safely and efficiently.',
    author: 'David Kim',
    date: '2025-01-08',
    readTime: '4 min read',
    category: 'Gas Services',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop',
    featured: false,
    tags: ['Safety', 'Gas', 'Maintenance']
  },
  {
    id: 5,
    slug: 'smart-home-plumbing-technology',
    title: 'Smart Home Plumbing: Technology That Prevents Water Damage',
    excerpt: 'Explore cutting-edge smart plumbing technologies that can detect leaks and shut off water automatically.',
    author: 'Tech Team',
    date: '2025-01-05',
    readTime: '8 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop',
    featured: false,
    tags: ['Smart Home', 'Technology', 'Prevention']
  },
  {
    id: 6,
    slug: 'drain-cleaning-methods-comparison',
    title: 'Professional vs DIY Drain Cleaning: What Actually Works',
    excerpt: 'Compare the effectiveness and costs of different drain cleaning methods to make the best choice for your home.',
    author: 'HiTech Plumbing Team',
    date: '2025-01-03',
    readTime: '6 min read',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    featured: false,
    tags: ['Drains', 'Maintenance', 'Comparison']
  }
];

const categories = ['All', 'Emergency', 'Hot Water', 'Maintenance', 'Gas Services', 'Technology'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Plumbing <span className="text-yellow-300">Insights</span> & Tips
            </h1>
            <p className="text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto">
              Expert advice, maintenance tips, and industry insights from Vancouver&apos;s trusted plumbing professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-6 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <motion.div 
              className="relative flex-1 max-w-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
              
              <Link href={`/blog/${featuredPost.slug}`}>
                <motion.article 
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 cursor-pointer group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yellow-300 text-black text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {featuredPost.category}
                        </span>
                        <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {featuredPost.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{featuredPost.author}</p>
                            <p className="text-gray-500 text-sm">{new Date(featuredPost.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        
                        <motion.div 
                          className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                        >
                          Read More
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            
            {regularPosts.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.137 0-4.146.832-5.636 2.364M6 18h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <motion.div 
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer group h-full"
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative overflow-hidden">
                          <motion.img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-white/90 text-primary text-xs font-semibold rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-gray-500 text-sm">{post.readTime}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-xs">
                                  {post.author.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <span className="text-gray-700 text-sm font-medium">{post.author.split(' ')[0]}</span>
                            </div>
                            
                            <motion.div 
                              className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300"
                            >
                              Read
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Updated with Plumbing Tips
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert plumbing advice, maintenance reminders, and exclusive offers delivered to your inbox.
            </p>
            <div className="w-full max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-xl text-gray-900 bg-white border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                />
                <motion.button
                  className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <div className="w-16 h-px bg-white/30 mx-auto mt-6"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      <FloatingScrollToTop />
    </div>
  );
}