import Layout from '../components/MyLayout';
import Link from 'next/link';

function getPosts() {
  return [
    { id:"hello-nextjs", title:"Hello Next.js" },
    { id:"learn-nextjs", title:"Hello Next.js is awesome" },
    { id:"deploy-nextjs", title:"Deploy apps with Zeit" }
  ]
}

const PostLink  = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map((post) => (
            <PostLink key={post.id} post={post} />       
        ))}
      </ul>
      <style jsx>{`
        h1, a{
          font-family: "Arial";
        }
        ul {
          padding: 0;
        }
        li {
          lits-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
      `}
      </style>
    </Layout>
)