'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import FloatingScrollToTop from '@/components/FloatingScrollToTop';

// Sample blog data - same as blog page
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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    tags: ['Emergency', 'DIY', 'Prevention'],
    content: `
## Quick Actions That Can Save Your Home

When a plumbing emergency strikes, every second counts. The difference between minor inconvenience and major property damage often comes down to how quickly you react and what immediate steps you take.

### 1. Know Your Main Water Shutoff

The most critical skill any homeowner can have is knowing exactly where your main water shutoff valve is located and how to turn it off quickly. This valve is typically located:

- Near where the main water line enters your house
- In the basement or crawl space
- Sometimes in a utility room or garage
- Occasionally outside near the water meter

**Pro Tip:** Practice turning this valve off and on during non-emergency times. Some valves become stiff with age and may require significant force or a water meter key to operate.

### 2. Burst Pipe Protocol

If you discover a burst pipe:

1. **Immediately shut off the main water supply**
2. Turn on all faucets to drain remaining water from the system
3. Remove water from the area using towels, mops, or a wet vacuum
4. Take photos for insurance purposes
5. Call a professional plumber

### 3. Severe Leak Management

For major leaks that you can't immediately stop:

- Use buckets to catch dripping water
- Move furniture and valuables away from the leak
- Use towels or tarps to redirect water flow
- If water is near electrical outlets, turn off electricity to that area

### 4. Clogged Drain Emergency

When dealing with completely blocked drains:

- **Never use chemical drain cleaners** during an emergency - they can cause dangerous reactions
- Try a plunger first (make sure you're using the right type)
- Use a drain snake if available
- For toilets, stop using the fixture immediately to prevent overflow

### 5. Water Heater Issues

If your water heater is leaking or malfunctioning:

- Turn off the power supply (electrical breaker or gas valve)
- Shut off the water supply to the unit
- Drain the tank if safe to do so
- Call a professional immediately - water heaters can be dangerous to repair

### Emergency Kit Essentials

Every homeowner should have a plumbing emergency kit containing:

- Adjustable wrench
- Pipe tape (Teflon tape)
- Pipe clamps
- Rubber gloves
- Flashlight
- Wet vacuum or shop vac
- Tarps or plastic sheeting
- Professional plumber's contact information

### When to Call Professionals

While these tips can help minimize damage, always call professional plumbers for:

- Gas line issues
- Sewer line backups
- Major pipe repairs
- Water heater problems
- Any situation you're unsure about

Remember, attempting complex repairs yourself can often make the problem worse and more expensive to fix. When in doubt, call the professionals at HiTech Plumbing for 24/7 emergency service.

**Emergency Contact: (604)-HI-TECH**

Your quick action combined with professional expertise can save thousands in water damage and get your plumbing system back to normal as quickly as possible.
    `
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
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=600&fit=crop',
    tags: ['Water Heaters', 'Energy Efficiency', 'Installation'],
    content: `
## The Future of Home Water Heating

Tankless water heaters, also known as on-demand or instantaneous water heaters, are revolutionizing how Vancouver homeowners think about hot water. Unlike traditional tank water heaters that continuously heat and reheat water, tankless units only heat water when you need it.

### How Tankless Water Heaters Work

When you turn on a hot water tap, cold water travels through a pipe into the tankless unit. Either a gas burner or an electric heating element heats the water instantly. This means you get a constant supply of hot water without the limitations of a storage tank.

### Energy Efficiency Benefits

The energy savings with tankless water heaters are substantial:

- **30% more efficient** than traditional tank water heaters
- No standby heat loss (energy wasted keeping stored water hot)
- Only consume energy when hot water is actually being used
- Can reduce water heating costs by $100+ annually

### Endless Hot Water Supply

One of the most appealing benefits is never running out of hot water. With a properly sized tankless system:

- Multiple showers can run simultaneously
- No waiting between showers for the tank to reheat
- Perfect for large families or homes with high hot water demand
- Great for filling large bathtubs or jacuzzis

### Space-Saving Design

Tankless water heaters are significantly smaller than traditional units:

- Wall-mounted design frees up floor space
- Can be installed in closets, basements, or even outdoors
- Perfect for condos and smaller homes
- No risk of tank leaks flooding your basement

### Longer Lifespan

Quality tankless water heaters typically last:

- **20+ years** compared to 8-12 years for tank units
- Fewer moving parts mean less chance of failure
- Replaceable components extend overall lifespan
- Better return on investment over time

### Types of Tankless Water Heaters

**Gas Tankless Units:**
- Higher flow rates
- Lower operating costs
- Require proper venting
- Best for high-demand households

**Electric Tankless Units:**
- Easier installation
- No venting required
- Lower upfront costs
- Ideal for smaller homes or point-of-use applications

### Sizing Considerations

Proper sizing is crucial for tankless water heater satisfaction:

- Consider peak demand (number of simultaneous uses)
- Factor in incoming water temperature
- Account for desired output temperature
- Professional sizing ensures optimal performance

### Installation Requirements

Professional installation is essential because tankless units often require:

- Upgraded gas lines or electrical service
- New venting systems (for gas units)
- Water line modifications
- Proper permits and inspections

### Maintenance Benefits

Tankless water heaters require minimal maintenance:

- Annual descaling in hard water areas
- Periodic filter cleaning
- No tank to flush or replace
- Professional service every 2-3 years

### Cost Considerations

While the upfront cost is higher:

- Energy savings reduce operating costs
- Longer lifespan provides better value
- Potential rebates and tax incentives available
- Increased home value

### Is Tankless Right for Your Home?

Tankless water heaters are ideal if you:

- Want to reduce energy costs
- Need endless hot water supply
- Have limited space
- Are building or renovating
- Want the latest in water heating technology

Contact HiTech Plumbing to discuss whether a tankless water heater is right for your Vancouver home. Our experts can assess your needs and provide a free consultation.

**Call (604)-HI-TECH for your free consultation today!**
    `
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
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
    tags: ['Winter', 'Prevention', 'Maintenance'],
    content: `
## Protecting Your Investment from Vancouver's Cold Snaps

While Vancouver's winters are generally mild, sudden cold snaps can catch homeowners off guard and cause thousands of dollars in frozen pipe damage. Preparation is key to avoiding costly repairs and water damage.

### Understanding Pipe Freezing

Water expands by about 9% when it freezes, creating enormous pressure inside pipes. This pressure can cause:

- Pipe cracks or complete breaks
- Joint failures
- Fitting damage
- Extensive water damage when pipes thaw

### Most Vulnerable Areas

Focus protection efforts on these high-risk locations:

**Exterior Walls:**
- Pipes running along outside walls
- Areas with poor insulation
- North-facing walls with little sun exposure

**Unheated Spaces:**
- Crawl spaces and basements
- Garages and workshops
- Attics with water lines

**Outdoor Fixtures:**
- Hose bibs and outdoor faucets
- Pool and spa plumbing
- Irrigation systems

### Pre-Winter Preparation Checklist

**Disconnect and Drain Hoses:**
- Remove all garden hoses from outdoor faucets
- Drain hoses completely and store indoors
- Shut off and drain outdoor water lines where possible

**Insulate Vulnerable Pipes:**
- Use foam pipe insulation on exposed pipes
- Wrap pipes in heating cables if necessary
- Seal gaps and cracks near pipe locations

**Service Your Heating System:**
- Ensure furnace is working efficiently
- Check that heating reaches all areas of the home
- Consider space heaters for problem areas

### During Cold Weather

**Maintain Consistent Temperature:**
- Keep thermostat at 65°F or higher, even when away
- Open cabinet doors under sinks to allow warm air circulation
- Use fans to circulate warm air to cold areas

**Keep Water Moving:**
- Let faucets drip slightly during extreme cold
- Run water periodically in rarely used fixtures
- Consider leaving taps open overnight during severe cold snaps

**Monitor Problem Areas:**
- Check crawl spaces and basements regularly
- Use temporary heating in very cold areas
- Watch for signs of freezing (reduced water flow)

### Emergency Thawing Techniques

If pipes are frozen but not yet burst:

**Safe Thawing Methods:**
- Use a hair dryer on low heat
- Apply warm towels to the frozen section
- Use space heaters to warm the area
- Open faucets to relieve pressure as ice melts

**Dangerous Methods to Avoid:**
- Never use open flames or torches
- Don't use high heat that could damage pipes
- Avoid leaving heating devices unattended

### Signs of Frozen Pipes

Watch for these warning signs:

- No water or very low water pressure
- Strange sounds when turning on faucets
- Visible frost on exposed pipes
- Unusual odors from drains

### Professional Prevention Services

Consider professional services for:

- Pipe insulation installation
- Heating cable installation
- Plumbing inspections before winter
- Emergency repair services

### Insurance Considerations

Most homeowner's insurance policies cover frozen pipe damage, but prevention is still much better than dealing with:

- Insurance deductibles
- Temporary living arrangements
- Replacement of damaged belongings
- Lost time and stress

### Special Considerations for Vancouver

**Marine Climate Factors:**
- High humidity can make cold feel worse
- Rapid temperature changes are common
- Coastal winds can increase heat loss

**Building Types:**
- Older homes may have less insulation
- Condos may have pipes in exterior walls
- Heritage homes often have unique challenges

### Creating a Winter Emergency Plan

Prepare your family with:

- Location of main water shutoff valve
- Emergency plumber contact information
- Basic tools for minor repairs
- Insurance company contact details

### Professional Inspection Benefits

Annual professional inspections can identify:

- Vulnerable pipe locations
- Insulation gaps
- Potential freeze points
- Preventive solutions

Don't wait for a cold snap to discover vulnerable areas in your plumbing system. Contact HiTech Plumbing for a comprehensive winter preparation inspection.

**Protect your home before the next cold snap - call (604)-HI-TECH today!**
    `
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const slug = params.slug as string;
    const foundPost = blogPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Get related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
    
    setIsLoading(false);
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center justify-center space-x-2 text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="text-yellow-300 font-medium">Article</li>
              </ol>
            </nav>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-yellow-300 text-black text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.article 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content.replace(/\n/g, '<br />').replace(/## (.*?)<br \/>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>').replace(/### (.*?)<br \/>/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }}
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {post.author.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Expert plumbing professional with years of experience serving Vancouver and surrounding areas. 
                      Committed to providing reliable solutions and sharing knowledge to help homeowners maintain their plumbing systems.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-2xl mb-8">
                <h3 className="text-xl font-bold mb-4">Need Professional Help?</h3>
                <p className="mb-6 opacity-90">
                  Don't tackle complex plumbing issues alone. Our experts are here to help 24/7.
                </p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-primary text-center py-3 px-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  Get Free Quote
                </Link>
                <div className="mt-4 text-center">
                  <Link 
                    href="tel:604-443-8324"
                    className="text-yellow-300 font-bold text-lg hover:text-yellow-200 transition-colors"
                  >
                    (604)-HI-TECH
                  </Link>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  <Link href="#" className="block text-primary hover:text-accent transition-colors text-sm">Overview</Link>
                  <Link href="#" className="block text-gray-600 hover:text-primary transition-colors text-sm">Emergency Steps</Link>
                  <Link href="#" className="block text-gray-600 hover:text-primary transition-colors text-sm">Prevention Tips</Link>
                  <Link href="#" className="block text-gray-600 hover:text-primary transition-colors text-sm">When to Call Pros</Link>
                </nav>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Related Articles
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <motion.div 
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer group h-full"
                        whileHover={{ y: -8, shadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative overflow-hidden">
                          <motion.img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-white/90 text-primary text-xs font-semibold rounded-full">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-gray-500 text-sm">{relatedPost.readTime}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-gray-500 text-sm">{new Date(relatedPost.date).toLocaleDateString()}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                          
                          <motion.div 
                            className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300"
                          >
                            Read Article
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
              Get More Expert Tips
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for weekly plumbing tips, maintenance reminders, and exclusive offers.
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