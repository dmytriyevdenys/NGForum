import { useForm } from "react-hook-form";
import s from "./CreatePost.module.scss";
import dragInDropIcon from "../../assets/icons/dragInDropImage.png";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setNewPost } from "../../redux/postsSlice";

export const CreatePost = () => {
  const inputImagesRef = useRef(null);
  const [drag, setDrag] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const imagePicker = () => {
    inputImagesRef.current.click();
  };

  const handleSelectedFile = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHanler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHanlder(e) {
    e.preventDefault();
    const images = [...e.dataTransfer.files];
    setDrag(false);
    const firstImageURL = URL.createObjectURL(images[0]);
    setUploadedImage(firstImageURL);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
  formData.append("title", data.title);
  formData.append("body", data.body);
  formData.append("tag", 1)
  selectedFile && formData.append("uploaded_images[]", selectedFile);
  
  dispatch(setNewPost(formData))
   
  };

  return (
    <div className={s.container}>
      <h1>Створити пост</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.textBlockForm}>
        <div className={s.postBody}>
          <div
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHanler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHanlder(e)}
            className={drag ? s.imageBlockActive : s.imageBlock}
          >
            {uploadedImage ? ( 
              <img
                src={uploadedImage}
                alt="Uploaded img"
                className={s.uploadImg}
              />
            ) : (
              <img src={dragInDropIcon} alt="#" />
            )}
            {drag ? (
              <div>Відпустіть файл</div>
            ) : (
              <div>
                Перетягніть зображення, або
                <input
                  type="button"
                  value="Завантажте файл"
                  className={s.uploadImgButton}
                  onClick={imagePicker}
                />
              </div>
            )}
            <input
              type="file"
              {...register("images")}
              ref={inputImagesRef}
              accept="image/*,.png,.jpg,.gif,.web,.tif"
              className={s.hidden}
              onChange={handleSelectedFile}
            />
          </div>
          <div className={s.textBlock}>
            <label htmlFor="title" className={s.label}>
              Заголовок
            </label>
            <input
              type="text"
              className={s.textTitle}
              {...register("title")}
            ></input>
            <label htmlFor="body" className={s.label}>
              Опис{" "}
            </label>
            <textarea
              className={s.textDescription}
              {...register("body")}
            ></textarea>
            <div className={s.buttonsBlock}>
              <button className={s.button}>Теги</button>
              <input type="submit" value="Створити" className={s.button} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
