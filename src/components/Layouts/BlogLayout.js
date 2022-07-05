function BlogLayout({navBar, content, footer}){
    return(
        <div style={{marginTop:10}}>
            <div className="blog-layout__navbar">
                {navBar}
            </div>
            <div className="blog-layout__content">
                {content}
            </div>
            <div className="blog-layout__footer">
                {footer}
            </div>
        </div>
    )
}
export default BlogLayout;