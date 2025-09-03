'use client'

const ColorTest = () => {
    return (
        <div className="p-8 space-y-8 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Custom Color Test</h2>
            
            {/* Forest Colors */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Forest Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-forest-200 p-4 rounded-lg text-center">
                        <div className="text-sm font-medium">bg-forest-200</div>
                    </div>
                    <div className="bg-forest-400 p-4 rounded-lg text-center text-white">
                        <div className="text-sm font-medium">bg-forest-400</div>
                    </div>
                    <div className="bg-forest-600 p-4 rounded-lg text-center text-white">
                        <div className="text-sm font-medium">bg-forest-600</div>
                    </div>
                    <div className="bg-gradient-to-r from-forest-200 to-forest-400 p-4 rounded-lg text-center">
                        <div className="text-sm font-medium">from-forest-200 to-forest-400</div>
                    </div>
                </div>
            </div>

            {/* Sage Colors */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Sage Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-sage-200 p-4 rounded-lg text-center">
                        <div className="text-sm font-medium">bg-sage-200</div>
                    </div>
                    <div className="bg-sage-400 p-4 rounded-lg text-center text-white">
                        <div className="text-sm font-medium">bg-sage-400</div>
                    </div>
                    <div className="bg-sage-600 p-4 rounded-lg text-center text-white">
                        <div className="text-sm font-medium">bg-sage-600</div>
                    </div>
                    <div className="bg-gradient-to-r from-sage-200 to-sage-400 p-4 rounded-lg text-center">
                        <div className="text-sm font-medium">from-sage-200 to-sage-400</div>
                    </div>
                </div>
            </div>

            {/* Mint Colors */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Mint Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-mint-200 p-4 rounded-lg text-center">
                        <div className="text-sm font-medium">bg-mint-200</div>
                    </div>
                    <div className="bg-mint-400 p-4 rounded-lg text-center text-white">
                        <div className="text-sm font-medium">bg-mint-400</div>
                    </div>
                    <div className="bg-mint-600 p-4 rounded-lg text-center text-white">
                        <div className="text-sm font-medium">bg-mint-600</div>
                    </div>
                    <div className="bg-gradient-to-r from-mint-200 to-mint-400 p-4 rounded-lg text-center">
                        <div className="text-sm font-medium">from-mint-200 to-mint-400</div>
                    </div>
                </div>
            </div>

            {/* Gradient Variations */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Gradient Variations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-forest-200 to-forest-400 p-6 rounded-lg text-center">
                        <div className="text-sm font-medium">bg-gradient-to-br from-forest-200 to-forest-400</div>
                    </div>
                    <div className="bg-gradient-to-br from-sage-200 to-sage-400 p-6 rounded-lg text-center">
                        <div className="text-sm font-medium">bg-gradient-to-br from-sage-200 to-sage-400</div>
                    </div>
                    <div className="bg-gradient-to-br from-mint-200 to-mint-400 p-6 rounded-lg text-center">
                        <div className="text-sm font-medium">bg-gradient-to-br from-mint-200 to-mint-400</div>
                    </div>
                </div>
            </div>

            {/* Complex Gradients */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Complex Gradients</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-forest-400 to-forest-600 p-6 rounded-lg text-center text-white">
                        <div className="text-sm font-medium">from-forest-400 to-forest-600</div>
                    </div>
                    <div className="bg-gradient-to-r from-sage-400 to-sage-600 p-6 rounded-lg text-center text-white">
                        <div className="text-sm font-medium">from-sage-400 to-sage-600</div>
                    </div>
                </div>
            </div>

            {/* Text Colors */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Text Colors</h3>
                <div className="space-y-2">
                    <p className="text-forest-600 text-lg font-medium">This text uses text-forest-600</p>
                    <p className="text-sage-600 text-lg font-medium">This text uses text-sage-600</p>
                    <p className="text-mint-600 text-lg font-medium">This text uses text-mint-600</p>
                </div>
            </div>

            {/* Border Colors */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Border Colors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-2 border-forest-400 p-4 rounded-lg text-center">
                        <div className="text-sm font-medium">border-forest-400</div>
                    </div>
                    <div className="border-2 border-sage-400 p-4 rounded-lg text-center">
                        <div className="text-sm font-medium">border-sage-400</div>
                    </div>
                    <div className="border-2 border-mint-400 p-4 rounded-lg text-center">
                        <div className="text-sm font-medium">border-mint-400</div>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Testing Instructions</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>• All colors should display properly with their respective shades</li>
                    <li>• Gradients should show smooth transitions between colors</li>
                    <li>• Text colors should be clearly visible</li>
                    <li>• Border colors should be distinct and visible</li>
                    <li>• If any colors appear as default/fallback, the classes need fixing</li>
                </ul>
            </div>
        </div>
    );
};

export default ColorTest;
