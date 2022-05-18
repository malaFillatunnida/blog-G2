import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const CategoryDetail = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [post, setPost] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const category = await axios.get(`http://localhost:2020/api/category/`);
    setCategory(category.data);
  };

  useEffect(() => {
    const getOnePost = async () => {
      const { data } = await axios.get(
        `http://localhost:2020/api/category/${id}`
      );
      // console.log(data);

      setName(data.name);

      setTitle(data.title);
      setDescription(data.description);
      setImage(data.image);
      setPost(data.post);
    };
    getOnePost();
  }, [id]);

  return (
    <div className="categoryDetail mt-4">
      <div className="container">
        <h3 className="text-center">{name}</h3>
        <hr />
        <div className="row mt-4 mb-5">
          {post.map((comments, index) => {
            return (
              <div className="col-sm-4 p-3" key={index}>
                <div className="card">
                  <img
                    src={`http://localhost:2020/${comments.image}`}
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{comments.title}</h5>
                    <hr className="mt-0" />
                    <div
                      className="category-text post__description mt-3"
                      dangerouslySetInnerHTML={{
                        __html: comments.description,
                      }}
                    />
                  </div>
                  <div className="categoryLink p-3">
                    <b>
                      <a href={`/pageDetail/${comments.id}`}>
                        Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                      </a>
                    </b>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
