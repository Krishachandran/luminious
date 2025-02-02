import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

export default function BlogArticle() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));
  const [showCopied, setShowCopied] = useState(false);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Article not found</h1>
      </div>
    );
  }

  const currentUrl = window.location.href;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4 text-sm">
          <span className="text-[#6366f1] capitalize">{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <time className="text-gray-500">{post.date}</time>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">
          {post.title}
        </h1>
      </header>

      {/* Featured Image */}
      <div className="aspect-[16/9] bg-gray-100 rounded-2xl mb-12 overflow-hidden">
        {/* Add image here when available */}
        <div className="w-full h-full bg-gradient-to-tr from-gray-200 to-gray-100" />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          {post.excerpt}
        </p>
        
        {post.content.map((section, index) => (
          <section key={index} className="mb-12">
            {section.type === 'heading' && (
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
                {section.content}
              </h2>
            )}
            {section.type === 'paragraph' && (
              <p className="text-gray-600 mb-4">
                {section.content}
              </p>
            )}
            {section.type === 'list' && (
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Article Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div>
              <div className="font-medium text-[#1e293b]">Written by</div>
              <div className="text-gray-500">Author Name</div>
            </div>
          </div>
          
          {/* Share Options */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 mr-2">Share:</span>
            <div className="flex gap-2">
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                title="Share on Facebook"
              >
                <Facebook size={18} className="text-[#1877f2]" />
              </a>
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                title="Share on Twitter"
              >
                <Twitter size={18} className="text-[#1da1f2]" />
              </a>
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin size={18} className="text-[#0a66c2]" />
              </a>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors relative"
                title="Copy link"
              >
                <LinkIcon size={18} className="text-gray-600" />
                {showCopied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black/75 px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
} 