import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/4608725/pexels-photo-4608725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>Aslinur</b>
          </span>
          <span className="singlePostDate">1 Hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum recusandae necessitatibus tempore alias fuga magnam aperiam ipsam quam ea sit, earum sequi cupiditate? Assumenda pariatur doloremque ex maiores nostrum, placeat, omnis repellat non enim aperiam earum in amet? Sapiente consequatur blanditiis recusandae, accusantium magnam ab numquam facilis. Deleniti rerum alias fugiat natus quo, aut consectetur temporibus quasi dolores voluptatum architecto voluptatem iusto adipisci quis mollitia neque distinctio dolorem assumenda, praesentium commodi illo, incidunt molestias. Dolore rerum, optio ullam tenetur aliquid numquam ipsa facilis quisquam dolorem quibusdam dicta reiciendis consequatur voluptates similique animi delectus distinctio quas enim cupiditate, eum corrupti quod? Animi quae ullam, tempora expedita mollitia dolorem voluptatem vitae accusamus non officiis quam dolorum eveniet debitis eligendi facilis beatae aperiam a, voluptas sed illo error aliquid sint? Asperiores cum, vero officia quia ea voluptas assumenda provident repudiandae corporis omnis, expedita esse ab magni perferendis blanditiis quod facilis, pariatur inventore consectetur mollitia sequi? Officia nobis minus quia non saepe, mollitia tempore praesentium possimus architecto reprehenderit suscipit dolores earum unde ad rerum repudiandae reiciendis cum eligendi tempora temporibus fugit soluta beatae! Nihil nostrum, quis officia est, temporibus rerum eligendi, minima voluptatum perspiciatis distinctio ipsum inventore reprehenderit itaque quae facere quos tenetur?</p>
      </div>
    </div>
  );
}
