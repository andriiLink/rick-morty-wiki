import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="text-6xl font-bold text-blue-600 mb-4">404</h2>
      <p className="text-xl text-gray-600 mb-8">
        Wubba Lubba Dub Dub! This page was lost in another demention...
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back Home
      </Link>
    </div>
  );
}
