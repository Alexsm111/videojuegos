function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
    if (totalPages <= 5) return i + 1;
    if (currentPage <= 3) return i + 1;
    if (currentPage >= totalPages - 2) return totalPages - 4 + i;
    return currentPage - 2 + i;
  });

  return (
    <div className="flex justify-center gap-3 mt-8">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 disabled:opacity-50 transition-all"
      >
        Primera
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 disabled:opacity-50 transition-all"
      >
        Anterior
      </button>

      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-full transition-all ${
            currentPage === page
              ? 'bg-purple-700 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 disabled:opacity-50 transition-all"
      >
        Siguiente
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 disabled:opacity-50 transition-all"
      >
        Última
      </button>
    </div>
  );
}

export default Pagination;
