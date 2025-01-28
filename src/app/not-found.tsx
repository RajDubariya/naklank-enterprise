import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-brand">404</h1>
        <h2 className="text-4xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>
        <p className="text-xl mt-4 text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-brand text-white font-semibold rounded-lg shadow-md capitalize"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
