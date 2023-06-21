import style from './PostSmall.module.scss'
import { ReactComponent as LikeIcon } from '../../../assets/icons/Like.svg'
import React from 'react'

export const PostSmall = React.memo(({ title, images, body, answers }) => {
  const postImage = images.map(image => image.image);

  const hasImage = !!postImage; 

  return (
    <div className={style.container}>
      <div className={style.image_block}>
        {hasImage && <img src={postImage} alt="post" />}
      </div>
      <div className={style.body}>
        <div className={`${style.body_title} ${hasImage ? '' : style.full_width}`}>
          <div className={style.body_text}>
            <div className={style.body_title_text}><span>{title}</span></div>
            <div className={style.body_like_icon}>
              <LikeIcon />
            </div>
          </div>
          <div className={style.tags_body}>
            <div className={style.tag}>finanse</div>
            <div className={style.tag}>crypto</div>
            <div className={style.tag}>awdawdw</div>
          </div>
        </div>
        <div className={style.info}>
          <div className={style.info_item}>ava</div>
          <div className={style.info_item}>651,324 Views</div>
          <div className={style.info_item}>36,6545 Likes</div>
          <div className={style.info_item}>0 Comments</div>
        </div>
      </div>
    </div>
  )
})
