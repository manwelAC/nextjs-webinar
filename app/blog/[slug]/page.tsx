export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
        <div style = {{ padding: "40px"}}>
            <h1>Blog Post: {params.slug}</h1>
            <h2>{params.slug}</h2>
            <p> This is the content of the blog post.</p>
        </div>
    );
}