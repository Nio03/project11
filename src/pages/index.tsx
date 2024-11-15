import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Psyqly</h1>
          <p className="text-gray-600">Encuentra el terapeuta ideal para ti</p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/register"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Registrarse
          </Link>
          
          <Link
            href="/therapist/register"
            className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Soy terapeuta
          </Link>
        </div>
      </div>
    </div>
  );
}