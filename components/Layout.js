import Header from '../components/Header'

const layoutStyle = {
    display: "flex",
    width: 1200,
    margin: "50px  auto"
}
const contentStyle = {
    width: 1000,
}

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        <div style={contentStyle}>
            {props.children}
        </div>
        <style jsx global>{
            `            body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0;padding:0}
            fieldset,img {border:0 none}
            dl,ul,ol,menu,li {list-style:none}
            blockquote, q {quotes:none}
            blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
            input,select,textarea,button {font-size:100%;vertical-align:middle}
            button {border:0 none;background-color:transparent;cursor:pointer}
            table {border-collapse:collapse;border-spacing:0}
            body {-webkit-text-size-adjust:none; overflow-x:hidden;} /* 뷰표트 변환시 폰트크기 자동확대 방지 */
            input[type='text'],input[type='password'],input[type='submit'],input[type='search'] {-webkit-appearance:none; border-radius:0; border:0;}
            input:checked[type='checkbox'] {background-color:#666; -webkit-appearance:checkbox}
            button,input[type='button'],input[type='submit'],input[type='reset'],input[type='fcile'] {-webkit-appearance:button; border-radius:0}
            input[type='search']::-webkit-search-cancel-button {-webkit-appearance:none}
            body {background:#fff; overflow-x:hidden;}
            body,th,td,input,select,textarea,button {font-size:14px;line-height:1.5;font-family: 'Noto Sans KR', Dotum,'돋움',"Apple SD Gothic Neo",sans-serif;color:#222; font-weight:400; letter-spacing:-0.5px;}
            a {color:#222;text-decoration:none}
            a:active, a:hover {text-decoration:none}
            address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}
            .ir {z-index: -1; position: relative; display: block; width: 100%; font-size: 9px; text-align: center; white-space: nowrap; overflow: hidden; text-indent: -99999px; color: transparent;}
            .set_icn {position: relative; display: inline-block;.display: inline;.zoom: 1; vertical-align: middle; font: 0/0 arial; overflow: hidden; background-repeat: no-repeat; background-color: transparent; background-image: url('../img/set_icon.png'); background-size:auto;}
            .blind {position: absolute; overflow: hidden; clip: rect(0 0 0 0); margin: -1px; width: 1px; height: 1px;}
            .roboto {font-family: 'Roboto', sans-serif;}
            `}
        </style>
    </div>
)

export default Layout;