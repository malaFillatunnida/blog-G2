import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
import UserService from "./UserService";

const Blog = () => {
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

  const [post, setPost] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
    getPosts();
  }, []);

  const getPost = async () => {
    const post = await axios.get("http://localhost:2020/api/post/");
    setPost(post.data);
  };
  const getPosts = async () => {
    const posts = await axios.get("http://localhost:2020/api/post/");
    setPosts(posts.data);
  };

  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const category = await axios.get("http://localhost:2020/api/category/");
    setCategory(category.data);
  };

  return (
    <main>
      <div className="main mb-5">
        <div className="container">
          <div className="blog">
            <div className="blog-card-group">
              {userList.map((user, i) => (
                <div key={i} className="item">
                  <div className="blog-card content">
                    <img
                      src={`http://localhost:2020/${user.image}`}
                      alt=""
                      width="100%"
                    />

                    <div className="blog-content-wrapper">
                      <h3>
                        <a href={`/pageDetail/${user.id}`} className="h3">
                          {user.title}
                        </a>
                      </h3>
                      <div
                        className="blog-text"
                        dangerouslySetInnerHTML={{
                          __html: user.description,
                        }}
                      />
                      <div className="wrapper-flex">
                        <div className="wrapper">
                          <p className="h4">{user.username}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {loading ? <h5 className="text-center">loading data ...</h5> : ""}
              {noData ? (
                <h5 className="text-center">no data anymore ...</h5>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="col aside">
            <div className="topics">
              <h2 className="h2 text-center">Kategori</h2>
              {category.map((blog, index) => (
                <a
                  href={`/categoryDetail/${blog.id}`}
                  key={index}
                  className="topic-btn"
                >
                  {blog.name}
                </a>
              ))}
            </div>
            <div className="contact">
              <h2 className="h2 text-center">Tentang kami</h2>

              <div className="wrapper">
                <p className="text-center">
                  Kami memimpikan para penggemar teknologi berkelas dunia dengan
                  memajukan pendidikan teknologi, mengidentifikasi talenta
                  unggul, dan mendukung diskusi yang termutakhir.
                </p>

                <div className="social-link">
                  <p>
                    <a
                      href="https://api.whatsapp.com/send?text=Raih%20Beasiswa%20Bootcamp%20G2Academy%20Dan%20Wujudkan%20Impianmu%20https%3A%2F%2Finsights.g2academy.co%2Fg2academy-updates%2Fraih-beasiswa-bootcamp-g2academy%2F"
                      className="icon-box discord"
                    >
                      <Image
                        src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "100%",
                        }}
                        alt=""
                      />
                    </a>
                  </p>

                  <p>
                    <a
                      href="https://twitter.com/intent/tweet?text=A%20Simple%20Introduction%20to%20Cloud%20Computing&url=https%3A%2F%2Finsights.g2academy.co%2Fg2academy-updates%2Fa-simple-introduction-to-cloud-computing%2F"
                      className="icon-box twitter"
                    >
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgiEFoK2MpvDZf6xCSwZ0v5hMoC4aQ8qzeaCZK8tKCB6EDKR08LfV-fVcq-P3W1HdVXw&usqp=CAU"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "100%",
                        }}
                        alt=""
                      />
                    </a>
                  </p>

                  <p>
                    <a
                      href="https://www.facebook.com/g2academygeeks?_rdc=2&_rdr"
                      className="icon-box facebook"
                    >
                      <Image
                        src="https://www.facebook.com/images/fb_icon_325x325.png"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "100%",
                        }}
                        alt=""
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="newsletter">
              <h2 className="h2">Postingan Terbaru</h2>
              {posts.map((pot, index) => {
                posts.length = 4;
                return (
                  <div key={index} className="wrapper">
                    <div className="wrapper-box">
                      <img src={`http://localhost:2020/${pot.image}`} alt="" />
                    </div>
                    <div className="wrapper-text">
                      <p>
                        <a href={`/pageDetail/${pot.id}`}>{pot.title}</a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
