import ImageCard from "../imageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = () => {
  return (
    <ul className={styles.gallery}>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <ImageCard />
      </li>
    </ul>
  );
};

export default ImageGallery;
