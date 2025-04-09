'use client';
import { useState } from 'react';
import { Heart, ShoppingCart, ArrowLeft, Search } from 'lucide-react';
import styles from './ProductPage.module.css';

export default function ProductPage() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Sample product images - replace with your actual images
  const productImages = [
    "https://dummyimage.com/400x400/f5f5f5/333333&text=Product+Image+1",
    "https://dummyimage.com/400x400/f5f5f5/333333&text=Product+Image+2",
    "https://dummyimage.com/400x400/f5f5f5/333333&text=Product+Image+3"
  ];

  const handleDotClick = (index) => {
    setActiveImageIndex(index);
  };
  
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <ArrowLeft className={styles.icon} />
          <img src="https://dummyimage.com/120x30/ec4899/fff&text=Hopscotch" alt="Hopscotch Logo" className={styles.logo} />
        </div>
        <div className={styles.headerRight}>
          <Search className={styles.icon} />
          <Heart className={styles.icon} />
          <ShoppingCart className={styles.icon} />
        </div>
      </header>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <ArrowLeft className={styles.smallIcon} />
        <span>All Short Dresses</span>
      </div>

      {/* Sale Banner */}
      <div className={styles.saleBanner}>
        <div className={styles.saleInfo}>
          <span className={styles.saleText}>SALE</span>
          <span className={styles.saleDate}>9<sup>th</sup> - 12<sup>th</sup> Jan</span>
        </div>
        <div className={styles.discountText}>MIN. 50% OFF</div>
        <button className={styles.shopNowButton}>
          SHOP NOW &gt;
        </button>
      </div>

      {/* Product Image */}
      <div className={styles.productImageContainer}>
        <img 
          src={productImages[activeImageIndex]} 
          alt={`Product view ${activeImageIndex + 1}`} 
          className={styles.productImage}
        />
        <div className={styles.zoomButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <div className={styles.imageDots}>
          {productImages.map((_, index) => (
            <button 
              key={index}
              className={`${styles.dot} ${index === activeImageIndex ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View product image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Product Title */}
      <div className={styles.productInfo}>
        <div className={styles.productTitleContainer}>
          <h1 className={styles.productTitle}>
            Women_Boys Blue and White Graphic Print T-shirt, Sweatshirt and Jeans Set
          </h1>
          <button 
            className={styles.wishlistButton} 
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            {isWishlisted ? (
              <Heart className={styles.heartIcon} fill="#ec4899" color="#ec4899" />
            ) : (
              <Heart className={styles.heartIcon} />
            )}
          </button>
        </div>

        {/* Price */}
        <div className={styles.priceContainer}>
          MRP:₹200
        </div>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <button className={styles.addToCartButton}>
            <ShoppingCart className={styles.buttonIcon} />
            ADD TO CART
          </button>
          <button className={styles.buyNowButton}>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}