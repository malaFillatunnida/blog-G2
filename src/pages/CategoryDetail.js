import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserService from "../components/UserService";

const CategoryDetail = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [, setCategory] = useState([]);
  const [post, setPost] = useState([]);

  const [, setTitle] = useState("");
  const [, setDescription] = useState("");
  const [, setImage] = useState("");

  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) {
        loadUserList(page);
      }
    }
  };

  useEffect(() => {
    loadUserList(page);
  }, []);

  const loadUserList = (page) => {
    setLoading(true);
    setTimeout(() => {
      UserService.getList(page)
        .then((res) => {
          const newPage = page + 1;
          const newList = userList.concat(res.tutorials);
          setUserList(newList);
          setPage(newPage);
          if (res.tutorials.length === 0) setNoData(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1500);
  };

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
        <div className="blog">
          <h3 className="text-center">{name}</h3>
          <hr />
          <div className="row mt-4 mb-5">
            {post.map((comments, index) => {
              return (
                <div className="col-lg-6" key={index}>
                  <div className="blog-card content">
                    <img
                      src={`http://localhost:2020/${comments.image}`}
                      className="card-img-top blog-image"
                      alt=""
                    />
                    <div className="blog-content-wrapper">
                      <h5>
                        <b>{comments.title}</b>
                      </h5>
                      <div
                        className="category-text post__description mt-2"
                        dangerouslySetInnerHTML={{
                          __html: comments.description,
                        }}
                      />
                      <div className="categoryLink">
                        <b>
                          <a href={`/pageDetail/${comments.id}`}>
                            Baca Selengkapnya{" "}
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {loading ? <h5 className="text-center">loading data ...</h5> : ""}
            {noData ? <h5 className="text-center">no data anymore ...</h5> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
