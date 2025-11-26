import React, { useState } from 'react';
import { Sparkles, Loader2, Copy, CheckCircle } from 'lucide-react';
import { generatePropertyDescription } from '../services/geminiService';

const AIListingCreator: React.FC = () => {
  const [formData, setFormData] = useState({
    type: 'Sale',
    propertyType: 'Apartment',
    location: '',
    bedrooms: '',
    bathrooms: '',
    features: '',
  });

  const [generatedDescription, setGeneratedDescription] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setCopied(false);
    
    // Construct a features string for the prompt
    const fullFeatures = `
      Property Type: ${formData.propertyType}
      Bedrooms: ${formData.bedrooms}
      Bathrooms: ${formData.bathrooms}
      Features: ${formData.features}
    `;

    const description = await generatePropertyDescription(
      fullFeatures,
      formData.type,
      formData.location
    );

    setGeneratedDescription(description);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDescription);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full bg-blue-100 text-brand-600 mb-4">
            <Sparkles size={24} />
          </div>
          <h1 className="font-serif text-4xl font-bold text-brand-900 mb-2">AI Listing Assistant</h1>
          <p className="text-gray-600">Enter your property details below and let our AI write a captivating description.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <form onSubmit={handleGenerate} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Listing Type</label>
                  <select 
                    name="type" 
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-brand-500 outline-none"
                  >
                    <option value="Sale">For Sale</option>
                    <option value="Rent">For Rent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                  <select 
                    name="propertyType" 
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-brand-500 outline-none"
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Villa">Villa</option>
                    <option value="Condo">Condo</option>
                    <option value="Land">Land</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location (City/Neighborhood)</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. Downtown Seattle, Beverly Hills"
                  required
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-brand-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                  <input 
                    type="number" 
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    placeholder="3"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                  <input 
                    type="number" 
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    placeholder="2.5"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Key Features (comma separated)</label>
                <textarea 
                  name="features"
                  value={formData.features}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="e.g. Hardwood floors, newly renovated kitchen, large backyard, pool, close to subway..."
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-brand-500 outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-3 rounded-lg text-white font-semibold transition-all flex items-center justify-center ${loading ? 'bg-brand-500 cursor-not-allowed' : 'bg-brand-900 hover:bg-brand-800'}`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} /> Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2" size={20} /> Generate Description
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Output Area */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-xl font-bold text-gray-800">Generated Listing</h3>
              {generatedDescription && (
                <button 
                  onClick={handleCopy}
                  className="text-sm text-brand-600 hover:text-brand-800 flex items-center font-medium"
                >
                  {copied ? <CheckCircle size={16} className="mr-1" /> : <Copy size={16} className="mr-1" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              )}
            </div>
            
            <div className="flex-grow bg-gray-50 rounded-xl p-4 border border-gray-100 overflow-y-auto">
              {generatedDescription ? (
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{generatedDescription}</p>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <Sparkles size={48} className="mb-4 text-gray-200" />
                  <p>Your AI-written description will appear here.</p>
                </div>
              )}
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 text-blue-800 text-xs rounded-lg">
              <strong>Tip:</strong> Be specific with your features for the best results. Mention architectural style, lighting, or nearby landmarks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIListingCreator;