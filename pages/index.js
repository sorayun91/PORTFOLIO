import Link from 'next/link';
import Layout from '../components/Layout'
/*import fetch from 'isomorphic-unfetch'*/

export default function Index() {
    return (
        <Layout>
            <h1>Home</h1>
        </Layout>
    )
}

/*const Index = props => (
    <Layout>
        <h1>Home</h1>
        <ul>
            {props.shows.map(show => (
                <li key = {show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data.map(entry => entry.show)
    }
}
/!*새로 고침을 할 경우 서버의 콘솔에서만 메세지가 출력되는 것을 볼 수 있습니다. *!/
export default Index*/

/*
const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)
{/!* Link 컴포넌트의 href는 페이지의 경로입니다. as는 브라우저 URL에 보여질 URL입니다.*!/}
export default function Blog() {
    return (
        <Layout>
            <h1>my blog</h1>
            <ul>
                <PostLink id="1111"/>
                <PostLink id="2222"/>
                <PostLink id="3333"/>
            </ul>
        </Layout>
    )
}*/
