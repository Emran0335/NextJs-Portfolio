import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vel officia natus nulla modi animi, veniam a eum eveniet optio placeat rem consequatur est assumenda nam architecto? Autem pariatur, ab explicabo dolorem, natus officiis vel neque porro, fuga quo nam!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, obcaecati error voluptatibus natus officia nesciunt magnam ipsam eveniet quidem harum, cum illo dolorem laudantium alias porro doloremque? Impedit nobis quisquam eaque optio, expedita, mollitia, exercitationem doloribus cum fugit rerum nisi.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Hi, there I am Emran Hossain. I am a frontend engineer. I love to build websites using reactjs
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handy Mobile Websites
            <br />
            <br />
            - More and More
            <br />
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
}
