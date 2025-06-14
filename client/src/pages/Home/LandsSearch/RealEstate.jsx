import { useState, useEffect } from 'react';

const RealEstate = () => {
  const [activeView, setActiveView] = useState('list');
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [sortBy, setSortBy] = useState('Highest Price');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: 'Any price',
    propertyTypes: 8,
    beds: 'Any',
    baths: 'Any',
    minPrice: '',
    maxPrice: ''
  });

  // Expanded dummy data
  const allProperties = [
    {
      id: 1,
      price: 4250000,
      beds: 7,
      baths: 8.5,
      address: '131 Rensselaer Rd, Essex Fells Twp NJ, 07021',
      mls: 'MLS®: 3941116',
      status: 'Active',
      agent: 'Courtesy of Keller Williamsp',
      sqft: 8500,
      yearBuilt: 2015,
      propertyType: 'Single Family'
    },
    {
      id: 2,
      price: 4250000,
      beds: 7,
      baths: 8.5,
      address: '131 Rensselaer Road, Essex Fells NJ, 07021',
      mls: 'MLS®: 25001380',
      status: 'Active',
      agent: 'Courtesy of Keller Williams',
      sqft: 8200,
      yearBuilt: 2016,
      propertyType: 'Single Family'
    },
    {
      id: 3,
      price: 3950000,
      beds: 6,
      baths: 7,
      address: '125 Mountain View Rd, Essex Fells NJ, 07021',
      mls: 'MLS®: 3941117',
      status: 'Active',
      agent: 'Courtesy of Coldwell',
      sqft: 7800,
      yearBuilt: 2018,
      propertyType: 'Single Family'
    },
    {
      id: 4,
      price: 3750000,
      beds: 5,
      baths: 6.5,
      address: '98 Forest Drive, Essex Fells NJ, 07021',
      mls: 'MLS®: 3941118',
      status: 'Active',
      agent: 'Courtesy of Sotheby',
      sqft: 6900,
      yearBuilt: 2017,
      propertyType: 'Single Family'
    },
    {
      id: 5,
      price: 2950000,
      beds: 4,
      baths: 5,
      address: '456 Oak Street, West Caldwell NJ, 07006',
      mls: 'MLS®: 3941119',
      status: 'Active',
      agent: 'Courtesy of RE/MAX ',
      sqft: 5200,
      yearBuilt: 2019,
      propertyType: 'Single Family'
    },
    {
      id: 6,
      price: 2750000,
      beds: 5,
      baths: 4.5,
      address: '789 Pine Avenue, Troy Hills NJ, 07054',
      mls: 'MLS®: 3941120',
      status: 'Active',
      agent: 'Courtesy of Century 21 Gold',
      sqft: 4800,
      yearBuilt: 2020,
      propertyType: 'Single Family'
    },
    {
      id: 7,
      price: 1950000,
      beds: 4,
      baths: 3.5,
      address: '321 Maple Drive, Livingston NJ, 07039',
      mls: 'MLS®: 3941121',
      status: 'Active',
      agent: 'Courtesy of Berkshire ',
      sqft: 4200,
      yearBuilt: 2021,
      propertyType: 'Single Family'
    },
    {
      id: 8,
      price: 1850000,
      beds: 3,
      baths: 3,
      address: '654 Cedar Lane, Roseland NJ, 07068',
      mls: 'MLS®: 3941122',
      status: 'Active',
      agent: 'Courtesy of Weichert',
      sqft: 3600,
      yearBuilt: 2022,
      propertyType: 'Townhouse'
    },
    {
      id: 9,
      price: 1650000,
      beds: 4,
      baths: 3,
      address: '987 Elm Street, Short Hills NJ, 07078',
      mls: 'MLS®: 3941123',
      status: 'Active',
      agent: 'Courtesy of Keller ',
      sqft: 3800,
      yearBuilt: 2020,
      propertyType: 'Single Family'
    },
    {
      id: 10,
      price: 1450000,
      beds: 3,
      baths: 2.5,
      address: '147 Birch Road, Millburn NJ, 07041',
      mls: 'MLS®: 3941124',
      status: 'Active',
      agent: 'Courtesy of Coldwell Banker',
      sqft: 3200,
      yearBuilt: 2019,
      propertyType: 'Condo'
    },
    {
      id: 11,
      price: 1250000,
      beds: 2,
      baths: 2,
      address: '258 Willow Way, Summit NJ, 07901',
      mls: 'MLS®: 3941125',
      status: 'Active',
      agent: 'Courtesy of RE/MAX ',
      sqft: 2400,
      yearBuilt: 2023,
      propertyType: 'Condo'
    },
    {
      id: 12,
      price: 1150000,
      beds: 3,
      baths: 2,
      address: '369 Spruce Street, Chatham NJ, 07928',
      mls: 'MLS®: 3941126',
      status: 'Active',
      agent: 'Courtesy of Prominent',
      sqft: 2800,
      yearBuilt: 2021,
      propertyType: 'Single Family'
    }
  ];

  // Filter and sort properties
  useEffect(() => {
    let filtered = [...allProperties];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(prop =>
        prop.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.mls.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply price filters
    if (filters.minPrice) {
      filtered = filtered.filter(prop => prop.price >= parseInt(filters.minPrice.replace(/,/g, '')));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(prop => prop.price <= parseInt(filters.maxPrice.replace(/,/g, '')));
    }

    // Apply bedroom filter
    if (filters.beds !== 'Any') {
      if (filters.beds === '5+') {
        filtered = filtered.filter(prop => prop.beds >= 5);
      } else if (filters.beds !== 'Studio') {
        filtered = filtered.filter(prop => prop.beds === parseInt(filters.beds));
      }
    }

    // Apply bathroom filter
    if (filters.baths !== 'Any') {
      if (filters.baths === '5+') {
        filtered = filtered.filter(prop => prop.baths >= 5);
      } else {
        filtered = filtered.filter(prop => prop.baths >= parseInt(filters.baths));
      }
    }

    // Apply sorting
    switch (sortBy) {
      case 'Highest Price':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'Lowest Price':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Newest':
        filtered.sort((a, b) => b.yearBuilt - a.yearBuilt);
        break;
      case 'Price per sqft':
        filtered.sort((a, b) => (b.price / b.sqft) - (a.price / a.sqft));
        break;
      default:
        break;
    }

    setFilteredProperties(filtered);
  }, [searchQuery, filters, sortBy]);

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      priceRange: 'Any price',
      propertyTypes: 8,
      beds: 'Any',
      baths: 'Any',
      minPrice: '',
      maxPrice: ''
    });
    setSearchQuery('');
  };

  return (
    <div className='flex flex-col w-full'>
      <div
        className="relative h-[20vh] primColor flex flex-col space-y-4 items-start justify-center"
        style={{
          background: 'linear-gradient(to bottom, #09814A 0%, rgba(255, 255, 255, 0.8) 100%)',
        }}
      >
      </div>
      <div className="min-h-screen max-w-7xl w-full mx-auto -mt-8 z-10" >
        {/* Header */}
        <div className="border-b border-gray-200 px-4 py-4">
          <p className="relative text-emerald-700 text-center mb-8 font-bold sm:text-start">
            Start searching and finding your desired land from Kmap.si advanced Ai integrated Land Inventory
          </p>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            {/* Search Bar */}
            <div className="flex-1 w-full sm:max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="City, neighborhood, ZIP code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
              <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                {filters.priceRange}
              </button>
              <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                Property types • {filters.propertyTypes}
              </button>
              <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                {filters.beds === 'Any' ? 'All beds' : `${filters.beds} bed${filters.beds !== '1' ? 's' : ''}`}
              </button>
              <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                {filters.baths === 'Any' ? 'All baths' : `${filters.baths}+ bath${filters.baths !== '1' ? 's' : ''}`}
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setShowFiltersModal(true)}
                  className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  All filters
                </button>
                <button className="px-3 py-2 sm:px-4 sm:py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                  Save search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:flex">
          {/* Left Panel - Listings */}
          <div className={`w-full lg:w-1/2 h-[calc(100vh-144px)] lg:h-screen overflow-y-auto ${activeView === 'list' ? 'block' : 'hidden lg:block'}`}>
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
                <div className="text-center sm:text-left">
                  <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Real Estate & Homes for Sale</h1>
                  <p className="text-gray-600 mt-1">{filteredProperties.length} results</p>
                </div>
                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                  >
                    <option>Highest Price</option>
                    <option>Lowest Price</option>
                    <option>Newest</option>
                    <option>Price per sqft</option>
                  </select>
                </div>
              </div>

              {/* Property Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredProperties.map((property) => (
                  <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="relative">
                      <div className="h-48 sm:h-52 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-green-500 to-green-700">
                          <div className="absolute top-3 left-3">
                            <span className="bg-white text-gray-800 px-2 py-1 sm:px-2.5 sm:py-1 rounded-md text-xs font-semibold shadow-sm">
                              {property.status}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3 flex gap-1 sm:gap-2">
                            <button className="p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                            <button className="p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                              </svg>
                            </button>
                          </div>
                          <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 sm:px-2.5 sm:py-1 rounded-md text-xs backdrop-blur-sm">
                            {property.agent}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{formatPrice(property.price)}</h3>
                        </div>

                        <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-2 font-medium">
                          <span>{property.beds} bd</span>
                          <span className="mx-1 sm:mx-2 text-gray-400">•</span>
                          <span>{property.baths} ba</span>
                          <span className="mx-1 sm:mx-2 text-gray-400">•</span>
                          <span>{property.sqft.toLocaleString()} sqft</span>
                        </div>

                        <div className="flex items-center text-gray-500 text-xs mb-2 sm:mb-3">
                          <span>{property.propertyType}</span>
                          <span className="mx-1 sm:mx-2">•</span>
                          <span>Built {property.yearBuilt}</span>
                        </div>

                        <p className="text-gray-700 text-xs sm:text-sm mb-2 leading-relaxed">{property.address}</p>
                        <p className="text-gray-500 text-xs font-medium">{property.mls}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="text-center py-8 sm:py-12">
                  <div className="text-gray-500 text-base sm:text-lg mb-2">No properties found</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Try adjusting your search criteria</div>
                  <button
                    onClick={resetFilters}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - OpenStreetMap */}
          <div className={`w-full lg:w-1/2 h-[calc(100vh-144px)] lg:h-screen relative ${activeView === 'map' ? 'block' : 'hidden lg:block'}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.332!2d-74.25!3d40.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ4JzAwLjAiTiA3NMKwMTUnMDAuMCJX!5e1!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Property Locations Map"
            ></iframe>

            {/* Map Controls Overlay */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                </svg>
              </button>
            </div>

            {/* Draw Button Overlay */}
            <div className="absolute top-4 left-4 z-10">
              <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span className="text-sm font-medium">Draw</span>
              </button>
            </div>
          </div>

          {/* Toggle Button for Mobile/Tablet */}
          <div className="lg:hidden fixed bottom-4 left-0 right-0 flex justify-center z-10">
            <button
              onClick={() => setActiveView(activeView === 'list' ? 'map' : 'list')}
              className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {activeView === 'list' ? 'Show Map' : 'Show List'}
            </button>
          </div>
        </div>

        {/* Filters Modal */}
        {showFiltersModal && (
          <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 pt-4 sm:pt-16">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFiltersModal(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Price Section */}
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Price</h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <input
                    type="text"
                    placeholder="No min"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                  />
                  <span className="text-gray-500 text-sm hidden sm:block">to</span>
                  <input
                    type="text"
                    placeholder="No max"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  />
                </div>

                {/* Price Range Slider */}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-white border-4 border-gray-800 rounded-full shadow-sm"></div>
                    <div className="flex-1 h-0.5 bg-gray-800 mx-2"></div>
                    <div className="w-8 h-8 bg-white border-4 border-gray-800 rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Bedrooms Section */}
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Bedrooms</h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Any', 'Studio', '1', '2', '3', '4', '5+'].map((bed) => (
                    <button
                      key={bed}
                      onClick={() => setFilters({ ...filters, beds: bed })}
                      className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-colors ${filters.beds === bed
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {bed}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms Section */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Bathrooms</h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Any', '1', '2', '3', '4', '5+'].map((bath) => (
                    <button
                      key={bath}
                      onClick={() => setFilters({ ...filters, baths: bath })}
                      className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-colors ${filters.baths === bath
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {bath}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-4 sm:p-6 bg-gray-50 rounded-b-xl">
                <button
                  onClick={resetFilters}
                  className="text-gray-600 font-medium hover:text-gray-800 transition-colors"
                >
                  Reset filters
                </button>

                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => setShowFiltersModal(false)}
                    className="px-4 py-2 sm:px-4 sm:py-2.5 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Save search
                  </button>
                  <button
                    onClick={() => setShowFiltersModal(false)}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    See {filteredProperties.length} properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RealEstate;