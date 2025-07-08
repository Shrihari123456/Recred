import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const GoogleAuthPopup = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  useEffect(() => {
    if (code) {
      window.opener.postMessage(
        { type: 'GOOGLE_AUTH_SUCCESS', code },
        window.location.origin
      );
    } else if (error) {
      window.opener.postMessage(
        { type: 'GOOGLE_AUTH_ERROR', error },
        window.location.origin
      );
    }
  }, [code, error]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        {code ? (
          <>
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="mt-4 text-lg font-medium text-gray-900">
              Authentication successful
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              You can now close this window.
            </p>
          </>
        ) : error ? (
          <>
            <svg
              className="mx-auto h-12 w-12 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <h2 className="mt-4 text-lg font-medium text-gray-900">
              Authentication failed
            </h2>
            <p className="mt-2 text-sm text-gray-600">{error}</p>
          </>
        ) : (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mx-auto"></div>
            <h2 className="mt-4 text-lg font-medium text-gray-900">
              Authenticating with Google...
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default GoogleAuthPopup;