'use client';

export default function AboutPage() {
    return (
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-white mb-6">Tentang Kami</h1>
                
                <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        tentang saya adalah ga ada apa apa, cuma manusaia biasa makan nasi kata pria solo
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h2 className="font-semibold text-gray-900 mb-2">Misi</h2>
                            <p className="text-gray-600">Memberikan artikel yang ga ada isinya.</p>
                        </div>
                        
                        <div className="bg-green-50 p-6 rounded-lg">
                            <h2 className="font-semibold text-gray-900 mb-2">Visi</h2>
                            <p className="text-gray-600">Menjadi platform artikel yang ga ada isi pertama.</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}
