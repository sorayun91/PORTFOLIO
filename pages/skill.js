import Layout from '../components/Layout'

export default function Skill() {
    return (
        <Layout>
            <table className="tg">
                <tr>
                    <th className="tg-0lax">목록</th>
                    <th className="tg-0lax">설명</th>
                    <th className="tg-0lax">비고</th>
                </tr>
                <tr>
                    <td className="tg-0lax">Javascript</td>
                    <td className="tg-0lax">
                        jQuery를 써서 개발가능하며 es5 또는 es6를 사용합니다.
                        es6를 쓸때는 gulp나 webpack을 통해 es5로 트랜스파일하여 사용합니다.
                    </td>
                    <td className="tg-0lax"></td>
                </tr>
                <tr>
                    <td className="tg-0lax">React</td>
                    <td className="tg-0lax">
                        nextjs를 사용해서 개발합니다.
                    </td>
                    <td className="tg-0lax"></td>
                </tr>
                <tr>
                    <td className="tg-0lax">Html</td>
                    <td className="tg-0lax">
                        html5 명세를 따르며 의미있는 태그르 사용합니다.
                        bem방법론으로 태그작성도 가능합니다.
                    </td>
                    <td className="tg-0lax"></td>
                </tr>
                <tr>
                    <td className="tg-0lax">Css/Sass</td>
                    <td className="tg-0lax">
                        css 컨벤션은 레이아웃>테두리>베경>글꼴>동작 순으로 작성 (일반적인 컨벤션에따르며 가독성 증대를 위해)
                        sass는 scss를 사용하며 gulp나 webpack으로 css로 컴파일합니다.
                    </td>
                    <td className="tg-0lax"></td>
                </tr>
                <tr>
                    <td className="tg-0lax">웹표준/웹접근성</td>
                    <td className="tg-0lax">
                        웹표준과 웹접근성을 준수하여 개발하며 SBS골프 사이트의 경우 웹접근성 기관의 감사를 우수한 점수로 통과하였습니다.
                    </td>
                    <td className="tg-0lax"></td>
                </tr>
                <tr>
                    <td className="tg-0lax">크로스브라우징</td>
                    <td className="tg-0lax">
                        윈도우7환경의 IE7버전까지 크로스브라우징을 진행했습니다.
                    </td>
                    <td className="tg-0lax"></td>
                </tr>
                <tr>
                    <td className="tg-0lax">Gulp</td>
                    <td className="tg-0lax">
                        Gulp4버전을 사용하며 css압축, sass컴파일, es6컴파일, 공통소스 인클루드, js파일 합치기 등 기능을 사용합니다.
                    </td>
                    <td className="tg-0lax"></td>
                </tr>
                <tr>
                    <td className="tg-0lax">Webpack</td>
                    <td className="tg-0lax">
                        React로 spa페이지를 만들때 사용합니다.
                    </td>
                    <td className="tg-0lax"></td>
                </tr>
            </table>
            <style jsx>
                {`
                .tg {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
                .tg td {font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
                .tg th {font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
                .tg .tg-0lax {text-align:left;vertical-align:top}
                `}
            </style>
        </Layout>
    )
}