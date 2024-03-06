import Parallax from "../components/Parallax";

const Home = () => {
  return ( 
    <main>
      <Parallax image={`/img/para-1.webp`} title={'Lorem Ipsum'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam natus ea nesciunt. Impedit dolorem odit consequatur facere necessitatibus delectus soluta.'} />
      <Parallax image={`/img/para-2.webp`} title={'Lorem Ipsum'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam natus ea nesciunt. Impedit dolorem odit consequatur facere necessitatibus delectus soluta.'} />
      <Parallax image={`/img/para-3.webp`} title={'Lorem Ipsum'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam natus ea nesciunt. Impedit dolorem odit consequatur facere necessitatibus delectus soluta.'} />
      <Parallax image={`/img/para-4.webp`} title={'Lorem Ipsum'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam natus ea nesciunt. Impedit dolorem odit consequatur facere necessitatibus delectus soluta.'} />
      <Parallax image={`/img/para-5.webp`} title={'Lorem Ipsum'} content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam natus ea nesciunt. Impedit dolorem odit consequatur facere necessitatibus delectus soluta.'} />
    </main> 
  );
}
 
export default Home;