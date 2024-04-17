import Image   from "next/image"
import myimg from"../../../public/c8cc24bba37a25c009647b8875aae0e3.jpg"
import style from "./about.module.css"
export default function About(){
    return <>
    <h1>Page about me</h1>
    <article className={style.root}>
<Image src={myimg} alt="cat"/>
<div className={' '}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
 It has survived not only five centuries, but also the leap into electronic typesetting, remaining
  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
   Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</div>

    </article>
    </>
}