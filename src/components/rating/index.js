import styles from "./rating.module.css";

export default function Rating({ rating, size = 16 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 > 0;
  const plusStars = 5 - (fullStars + hasHalfStar);
  return (
    <div className={styles.RatingContainer}>
      {[...Array(fullStars)].map((_, i) => (
        <ion-icon name="star" key={`full_star_${i}`} style={{fontSize: size}}></ion-icon>
      ))}
      {hasHalfStar && <ion-icon name="star-half" style={{fontSize: size}}></ion-icon>}
      {[...Array(plusStars)].map((_, i) => (
        <ion-icon name="star-outline" key={`empty_star_${i}`} style={{fontSize: size}}></ion-icon>
      ))}
    </div>
  );
}
