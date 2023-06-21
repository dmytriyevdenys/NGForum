import s from "./CreatePost.module.scss"
export const CreatePost = () => { 

    return (
        <div className={s.container}>
            <h1>Створити пост</h1>
            <div className={s.postBody}>
                <div className={s.imageBlock}></div>
                <div className={s.textBlock}>
                    <div className={s.textTitle}></div>
                    <div className={s.textDescription}></div>
                    <div className={s.buttonBlock}>
                        <button>Теги</button>
                        <button>Створити</button>
                    </div>
                </div>
            </div>
        </div>
    )
}