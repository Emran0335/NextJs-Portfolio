import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import img from "../../../../public/2.png"
import img3 from "../../../../public/3.png"

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium natus mollitia, aliquid harum animi unde labore delectus reiciendis soluta suscipit laudantium quae. Cumque ipsam doloribus, amet itaque et inventore repudiandae quas fugiat molestias facilis aspernatur, maiores voluptates quasi excepturi.</p>
          <div className={styles.author}>
            <Image
              src={img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={img3}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem saepe corporis laborum atque tempora cum soluta amet, reiciendis alias? Eos, sapiente illum dicta delectus accusamus facilis soluta minima amet praesentium laudantium dolorem expedita qui consequatur quaerat quibusdam tempora sinttempora cum soluta amet, reiciendis alias? Eos, sapiente illum dicta delectus accusamus facilis soluta minima amet praesentium laudantium dolorem expedita qui consequatur quaerat quibusdam tempora sint  
        <br />
        <br />
        ipsum? Perspiciatis placeat possimus fugit minus error quae tempora amet facere est asperiores totam fuga hic commodi harum aliquid  ipsum? Perspiciatis placeat possimus fugit minus error quae tempora amet facere est asperiores totam fuga hic commodi harum aliquid 
        <br />
        <br />
        laboriosam quam, repudiandae delectus autem eum debitis ex deserunt! Culpa necessitatibus explicabo, distinctio vel veritatis maxime in cumque similique ratione repellendus natus ipsam quia sed eum? Suscipit expedita, fuga odit rerum hic voluptatem aspernatur? Molestiae, tempora? Quaerat voluptas tempora animi modi?Culpa necessitatibus explicabo, distinctio vel veritatis maxime in cumque similique ratione repellendus natus ipsam quia sed eum? Suscipit expedita, fuga odit rerum hic voluptatem aspernatur? Molestiae, tempora? Quaerat voluptas tempora animi modi?fuga odit rerum hic voluptatem aspernatur? Molestiae, tempora? Quaerat voluptas tempora animi modi?Culpa necessitatibus explicabo, distinctio vel veritatis maxime in cumque similique ratione repellendus natus ipsam quia sed eum? Suscipit expedita, fuga odit rerum hic voluptatem aspernatur? Molestiae, tempora? Quaerat voluptas tempora animi modi?
        
        </p>
      </div>
    </div>
  )
};

export default BlogPost;

