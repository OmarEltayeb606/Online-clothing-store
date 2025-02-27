import React, { useContext, useState } from 'react';
import { sectionsData } from './../data/data'; // استدعاء البيانات من Context

const PaginatedProducts = () => {
  const { newClothes } = useContext(sectionsData); // استدعاء بيانات المنتجات
  const itemsPerPage = 8; // عدد العناصر لكل صفحة
  const [currentPage, setCurrentPage] = useState(1); // الصفحة الحالية

  // حساب عدد الصفحات
  const totalPages = Math.ceil(newClothes.length / itemsPerPage);

  // تقسيم البيانات للصفحة الحالية
  const paginatedData = newClothes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // التنقل بين الصفحات
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {/* عرض المنتجات */}
      <div className="products-grid">
        {paginatedData.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.Manufacturer}</p>
            <p>{product.price}</p>
            <p>{'⭐'.repeat(product.stars)}</p>
          </div>
        ))}
      </div>

      {/* أزرار التنقل */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedProducts;
