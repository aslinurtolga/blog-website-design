import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/4602652/pexels-photo-4602652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non obcaecati excepturi eveniet officia vitae dolorum ipsum maxime, optio tempora dolorem culpa pariatur numquam dignissimos sequi vero, repellendus qui cum, quae sed aliquid ea ex ratione dicta. Commodi ea voluptas neque recusandae placeat perferendis quibusdam optio sint tempore ipsa. Sint dolorem tenetur perferendis natus rem distinctio maxime esse. Saepe eligendi voluptatum, nobis quod veniam laboriosam ab illum iste excepturi. Laudantium laboriosam, fugiat tenetur sint non ut amet quod eius ab! Minus atque nostrum minima quidem dicta non soluta tempore ipsa, ipsam error, inventore a. Corrupti soluta aliquid officiis quas est dolorem a accusantium nobis temporibus numquam laudantium veniam aliquam porro, quidem facere optio. Ut corrupti, iste laboriosam illum dolore ratione vel possimus totam aliquid quidem nihil voluptates sapiente debitis, fuga minima et soluta, nemo quaerat ducimus cumque aperiam eveniet perferendis? Rerum nobis vel debitis quaerat eos magnam, beatae tempore laborum voluptatum.
      </p>
    </div>
  );
}
